"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "../modals/create-server-modal";
import { InviteModal } from "../modals/invite-modal";
import { EditServerModal } from "../modals/edit-server-model";
import { MembersModal } from "../modals/members-modal";
import { CreateChannelModal } from "../modals/create-channel-modal";
import { LeaveModal } from "../modals/leave-server-modal";
import { DeleteServer } from "../modals/delete-server-modal";
import { DeleteChannel } from "../modals/delete-channel-modal";
import { EditChannelModal } from "../modals/edit-channel-modal";
import { MessageFileModal } from "../modals/message-file-modal";
import { DeleteMessage } from "../modals/delete-message-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveModal />
      <DeleteServer />
      <DeleteChannel />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessage />
    </>
  );
};
