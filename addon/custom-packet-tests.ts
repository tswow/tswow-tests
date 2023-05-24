export function InitializeCustomPacketTests() {
    OnCustomPacket(300,(packet)=>{
        console.log(`Hi I read the custom packet`)
    })
}