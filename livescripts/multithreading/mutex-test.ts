// todo: well, this doesn't demonstrate very much yet, just that mutex locks work

let mutex = CreateMutexLock();
let counter: uint32 = 0;

export function RegisterMutexEvents(events: TSEvents) {
    events.Player.OnCommand((player,command,found)=>{
        if(command.get() == 'mutex') {
            found.set(true);
            mutex.lock();
            player.SendBroadcastMessage(`The counter is ${counter++}`);
            mutex.unlock();
        }
    })
}