let my_array: TSArray<(player: TSPlayer)=>void> = [
    (player)=>player.SendBroadcastMessage(`Hi from function 1`),
    (player)=>player.SendBroadcastMessage(`Hi from function 2`),
    (player)=>player.SendBroadcastMessage(`Hi from function 3`),
    (player)=>player.SendBroadcastMessage(`Hi from function 4`),
]

export function SelectRandomFunction(player: TSPlayer) {
    let index = Math.floor(Math.random()*my_array.length);
    my_array[index](player);
}