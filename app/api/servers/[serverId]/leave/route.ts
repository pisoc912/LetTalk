import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!params.serverId) {
      return new NextResponse("Server ID missing", { status: 400 });
    }

    const server = await db.server.findUnique({
      where: { id: params.serverId },
    });

    if (!server) {
      return new NextResponse("Server not found", { status: 404 });
    } else if (server.profileId === profile.id) {
      return new NextResponse("You cannot leave a server you created", {
        status: 403,
      });
    }

    const updatedServer = await db.server.update({
      where: {
        id: params.serverId,
      },
      data: {
        members: {
          deleteMany: {
            profileId: profile.id,
          },
        },
      },
    });

    return NextResponse.json(updatedServer);
  } catch (error) {
    console.log("[SERVER_ID_LEAVE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
