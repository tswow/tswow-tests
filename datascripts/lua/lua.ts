import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Lua NPC -
//
//   This module demonstrates a very simple lua hook by printing a message
//   to the player when they talk to the demo npc.
//
// - External scripts -
//   Lua: lua/lua-npc.ts
//
// ============================================================================

export const LUA_NPC = std.CreatureTemplates
    .create('tswow-tests','lua-npc')
    .Models.addDefaultBear()
    .Name.enGB.set('Lua Tests')
    .NPCFlags.GOSSIP.set(true)
    .Subname.enGB.set('lua/lua-npc.ts')
    .Spawns.add('tswow-tests','lua-npc-spawn',[
        {map:TEST_MAP.ID,x:14769.443359,y:14438.752930,z:75.872093,o:2.899065},
    ])
    .Gossip.modNew(()=>{})
    .Tags.add('tswow-tests','lua-npc')