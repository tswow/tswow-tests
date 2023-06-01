class EventClass extends TSClass
{
    counter: number = 0
    mutex: TSMutex = CreateMutex()
    constructor(events: TSEvents)
    {
        super();
        events.Player.OnCommand((player,command,found)=>
        {
            if(command.get() != 'func_event')
            {
                return;
            }
            found.set(true)

            this.mutex.lock();
            player.SendBroadcastMessage(`Counter is ${this.counter++}`)
            this.mutex.unlock();
        })
    }
}

export function RegisterFunctionalEvent(events: TSEvents)
{
    new EventClass(events);
}