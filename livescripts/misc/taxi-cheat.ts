// Workaround to enable all the taxi flightpaths immediately.
export function RegisterTaxiCheat(events: TSEvents)
{
    events.Map.OnPlayerEnter(UTAG('tswow-tests','test-map'),(map,player)=>{
        player.SetTaxiCheat(true);
    })
}