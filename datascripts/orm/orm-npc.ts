import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - ORM NPC -
//
//   This module demonstrates how we can store custom data tags
//   on game entities and save/load them from the database.
//
//   Livescripts: livescripts/orm/*
//
// ============================================================================

export const ORM_NPC = std.CreatureTemplates
    .create('tswow-tests','orm-npc')
    .Tags.addUnique('tswow-tests','orm-npc')
    .Models.addDefaultBear()
    .Name.enGB.set('ORM Tests')
    .NPCFlags.GOSSIP.set(true)
    .Subname.enGB.set('datascripts/orm/orm-npc')
    .Spawns.add('tswow-tests','orm-npc-spawn',[
        {map:TEST_MAP.ID,x:14761.189453,y:14456.577148,z:75.872337,o:4.145125},
    ])
    .Gossip.modNew(()=>{})