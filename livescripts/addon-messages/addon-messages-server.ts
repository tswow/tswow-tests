
export function RegisterAddonMessageEvents(events: TSEvents) {
    events.Player.OnWhisper((sender,receiver,message,type,lang)=>{
        if(sender == receiver && message.get().startsWith('tsac')) {
            sender.SendBroadcastMessage(`[Server]: Received addon message: ${message.get().substring(5,message.get().length)}`)
        }
    });

    events.Creature.OnGossipHello(
        TAG('tswow-tests','addon-messages-npc'),
        (_creature,player,_cancel)=>{
            let message = "Hello from Server!"
            player.SendBroadcastMessage(`[Server]: Sending addon message "${message}"`)
            player.SendAddonMessage('tsas',message,0,player);
        })
}