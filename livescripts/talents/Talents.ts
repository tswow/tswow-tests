export function RegisterTalentEvents(events: TSEvents) {
    events.Player.OnCalcTalentPoints((player,talents)=>{
        if(player.GetMapID() != UTAG('tswow-tests','test-map')) {
            return;
        }

        if(player.GetClass() != UTAG('tswow-tests','customclass')) {
            return;
        }

        talents.set(talents.get() + player.GetQuestRewardTempTalentPoints())
    });
}