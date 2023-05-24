export const TEST_PACKET_ID = 25;

export class TestPacket {
    i32: int32;
    i8: int8;

    constructor(i32: int32, i8: int8) {
        this.i32 = i32;
        this.i8 = i8;
    }

    read(read: TSPacketRead): void {
        this.i32 = read.ReadInt32();
        this.i8 = read.ReadInt8();
    }

    write(): TSPacketWrite {
        let packet = CreateCustomPacket(TEST_PACKET_ID,5)
        packet.WriteInt32(this.i32);
        packet.WriteInt8(this.i8);
        return packet;
    }
}