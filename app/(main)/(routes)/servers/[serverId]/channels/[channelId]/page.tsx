import ChatHeader from '@/components/chat/chat-header';
import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

interface ChannelIdProps{
    params:{
        serverId:string;
        channelId:string
    }
}
const ChannelIdPage = async({params:{serverId,channelId}}:ChannelIdProps) => {
  const profile = await currentProfile()
  if(!profile){
    return redirectToSignIn()
  }
  const channel = await db.channel.findUnique({
    where:{
        id:channelId
    }
  })
  const member = await db.channel.findFirst({
    where:{
        serverId:serverId,
        profileId:profile.id,
    }
  })
  if(!channel || !member){
    redirect("/")
  }
    return (
    <div className='bg-white dark:bg-[#313338] flex flex-col h-full'>
        <ChatHeader serverId={channel.serverId} type="channel" name={channel.name} />
    </div>
  )
}

export default ChannelIdPage