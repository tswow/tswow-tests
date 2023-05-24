import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - ORM NPC -
//
//   This file spawns the creature used to demo livescript SQL.
//
// - External scripts -
//   Livescripts: livescripts/sql/*
//
// ============================================================================

export const SQL_NPC = std.CreatureTemplates
    .create('tswow-tests','sql-npc')
    .Tags.addUnique('tswow-tests','sql-npc')
    .Models.addDefaultBear()
    .Name.enGB.set('SQL Tests')
    .NPCFlags.GOSSIP.set(true)
    .Subname.enGB.set('datascripts/orm/sql-npc')
    .Spawns.add('tswow-tests','sql-npc-spawn',[
        {map:TEST_MAP.ID,x:14756.983398,y:14457.471680,z:75.870552,o:4.412245},
    ])
    .Gossip.modNew(()=>{})