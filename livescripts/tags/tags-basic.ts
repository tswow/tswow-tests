export function RegisterBasicTagEvents(events: TSEvents) {
    events.Spell.OnCast(GetIDTag('tswow-tests','test-spell-tag'), (spell)=>{
        if(spell.GetCaster().IsPlayer()) {
            spell.GetCaster().ToPlayer()
                .SendBroadcastMessage(`LiveScript fired for tagged spell!`)
        }
    })
}