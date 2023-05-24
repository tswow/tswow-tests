import { TestPacket, TEST_PACKET_ID } from "../shared/Packet";

// See also shared/Packet.ts and livescripts/

export function InitializeCustomPacketSharedClient() {
    OnCustomPacket(TEST_PACKET_ID,(packet)=>{
        let customPacket = new TestPacket(0,0)
        customPacket.read(packet);
        console.log("[Client]: Received custom packet");
        console.log(`[Client]: i32: ${customPacket.i32}`)
        console.log(`[Client]: i8: ${customPacket.i8}`)
        console.log("[Client]: Sending custom packet");
        customPacket.write().Send();
    });
}