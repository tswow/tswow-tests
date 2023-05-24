import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================/
//
// - Delayed Events -
//
//   This module demonstrates how we can queue "delayed" events that
//   run in the main thread. This is useful for accessing players
//   and creatures in other maps.
//
// ============================================================================

export const DELAYED_EVENT_NPC = std.CreatureTemplates
    .create('tswow-tests','delayed-event-npc')
    .Models.addDefaultBear()
    .Name.enGB.set('ORM Tests')
    .NPCFlags.GOSSIP.set(true)
    .Subname.enGB.set('datascripts/delayed-events/delayed-event.ts')
    .Spawns.add('tswow-tests','delayed-event-npc-spawn',[
        {map:TEST_MAP.ID,x:14761.820312,y:14430.274414,z:75.873909,o:2.198338},
    ])
    .Gossip.modNew(()=>{})
    .InlineScripts.OnGossipHello((creature)=>{
        creature.GetMap().DoDelayed((map,mgr)=>{
            // Send messages to players in another map
            // TODO: Not working
            /*
            mgr.GetMap(0).GetPlayers()
                .forEach(x=>x.SendBroadcastMessage('Hello from a delayed update in the Test Map'))
            */

            // Send messages to players in this map
            map.GetPlayers()
                .forEach(x=>x.SendBroadcastMessage('Hello from a delayed update!'))
        })
    })