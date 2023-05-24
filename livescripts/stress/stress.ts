//const MY_CATEGORY: uint32 = TS_ZONE_CATEGORY(0xff0000)

function fib(num: uint32): uint32  {
    //TS_ZONE_SCOPED(MY_CATEGORY)
    return num <= 1 ? num : fib(num-1) + fib(num-2);
}

export function RegisterStressTests(events: TSEvents) {
    events.Player.OnCommand((player,command,found)=>{
        if(command.get() == 'stress') {
            player.SendBroadcastMessage(`Running stress test`);
            console.log(fib(42));
            found.set(true)
        }
    });
}