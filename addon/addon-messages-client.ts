export function InitializeAddonMessagesClient() {
    const frame = CreateFrame('Frame','chat-msg-frame')
    Events.ChatInfo.OnChatMsgAddon(frame, (opcode,body,channel,sender)=>{
        if(opcode == 'tsas' && sender == GetUnitName('player',false))
        {
            console.log(`[Client]: Received addon message: "${body}"`)
            let out = 'Hello from client!'
            console.log(`[Client]: Sending addon message: "${out}"`)
            SendAddonMessage('tsac',out,'WHISPER',sender)
        }
    });
}