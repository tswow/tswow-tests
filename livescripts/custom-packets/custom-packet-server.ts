
// See also shared/Packet.ts and addon/custom-packet-shared-client

export const CUSTOM_PACKET_NPC: TSArray<uint32> = GetIDTag('tswow-tests','custom-packet-npc')
export const CUSTOM_PACKET_ID = 10;

export function RegisterCustomPacket(events: TSEvents) {
    events.Creature.OnGossipHello(CUSTOM_PACKET_NPC[0],(creature,player)=>{
        if(player.IsNull()) return;
        CreateCustomPacket(CUSTOM_PACKET_ID,100)
            .WriteUInt32(1007688)
            .WriteString('Hello from LiveScript!')
            .SendToPlayer(player)
    })

    events.CustomPacket.OnReceive(CUSTOM_PACKET_ID, (opcode, packet, player)=>{
        player.SendBroadcastMessage(`[Server]: UInt32: ${packet.ReadUInt32()}`)
        player.SendBroadcastMessage(`[Server]: String: ${packet.ReadString()}`)
    });
}