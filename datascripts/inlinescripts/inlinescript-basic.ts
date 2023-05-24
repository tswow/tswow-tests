import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - InlineScript -
//
//   This file contains a very simple inlinescript
//   that adds a script hook to a creatures gossip action,
//   and simply prints a debug message to the screen.
//
// ============================================================================

export const ORM_NPC = std.CreatureTemplates
    .create('tswow-tests','basic-inline-npc')
    .Models.addDefaultBear()
    .Name.enGB.set('Basic InlineScript')
    .Subname.enGB.set('datascripts/inlinescripts/inlinescript-basic.ts')
    .NPCFlags.GOSSIP.set(true)
    .Tags.addUnique('tswow-tests','inline-npc')
    .Spawns.add('tswow-tests','basic-inline-npc-spawn',[
        {map:TEST_MAP.ID,x:14767.673828,y:14434.969727,z:75.872353,o:2.488373},
    ])
    .Gossip.modNew(()=>{})

    // This is the inline script hook
    .InlineScripts.OnGossipHello((creature,player,cancel)=>{
        player.SendBroadcastMessage(`Hello from InlineScript ${UTAG('tswow-tests','inline-npc')}`)
    })