export function RegisterUniqueTagEvents(events: TSEvents) {
    events.Spell.OnCast(GetIDTagUnique('tswow-tests','unique-id-tag'),spell=>{
        if(spell.GetCaster().IsPlayer()) {
            spell.GetCaster().ToPlayer()
                .SendBroadcastMessage(`LiveScript fired for uniquely tagged spell!`)
        }
    })
}