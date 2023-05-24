// See also datascripts/custom-packet/custom-packet-server.ts
// for the server component of this script
export function InitializeCustomPacketClient() {
    OnCustomPacket(10,(packet)=>{
        console.log("[Client]: Received custom packet");
        console.log(`[Client]: UInt32: ${packet.ReadUInt32()}`);
        console.log(`[Client]: String: ${packet.ReadString()}`);
        console.log("[Client]: Sending custom packet");
        CreateCustomPacket(10,0)
            .WriteUInt32(8867001)
            .WriteString("Hello from AddOn")
        .Send()
    });
}