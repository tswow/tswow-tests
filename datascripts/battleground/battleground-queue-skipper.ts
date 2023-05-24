import { std } from "wow/wotlk";
import { BATTLEGROUND_MAP } from "./battleground-map";

// ============================================================================/
//
// - Battleground Wait Skipper -
//
//   This file spawns a creature that lets us skip past the waiting time
//   in the Test Battleground.
//
// ============================================================================

export const BATTLEGROUND_WAIT_SKIPPER = std.CreatureTemplates
    .create('tswow-tests','battleground-wait-skipper')
    .Models.addDefaultBear()
    .Name.enGB.set('Battleground Wait Skipper')
    .NPCFlags.GOSSIP.set(true)
    .Subname.enGB.set('datascripts/battleground/battleground-wait-skipper.ts')
    .Spawns.add('tswow-tests','battleground-wait-skipper-spawn',[
        {map:BATTLEGROUND_MAP.ID,x:13816.382812,y:13930.512695,z:21.992544,o:3.301033},
        {map:BATTLEGROUND_MAP.ID,x:13820.017578,y:13887.855469,z:2.269518,o:1.955642},
    ])
    .Gossip.modNew(()=>{})
    .InlineScripts.OnGossipHello((creature,player)=>{
        if(player.GetMap().ToBG().GetStartDelayTime() == 0)
        {
            player.GossipSendTextMenu(
                creature,`The battleground has already started!`
            )
        } else {
            player.GossipMenuAddItem(GossipOptionIcon.BATTLE,'Skip the wait',0,1)
            player.GossipSendTextMenu(
                creature,'Would you like to skip the waiting period?'
            )
        }
    })
    .InlineScripts.OnGossipSelect((creature,player)=>{
        if(player.GetMap().ToBG().GetStartDelayTime() > 5000) {
            player.GetMap().ToBG().SetStartDelayTime(5000);
        }
    })