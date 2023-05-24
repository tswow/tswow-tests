import { std } from "wow/wotlk"
import { TEST_ISLAND, TEST_MAP } from "../maps/map"
import { QUESTGIVER } from "./questgiver"

// ============================================================================
//
// - Kill Quest -
//
//   This file creates a very simple creature and a quest to kill it.
//
// ============================================================================

export const KILLED_CREATURE_POS = {map:TEST_MAP.ID,x:14732.502930,y:14408.040039,z:55.533081,o:0.785268}

export const KILLED_CREATURE = std.CreatureTemplates
    .create('tswow-tests',`killed-creature`)
    .Name.enGB.set('Killed Creature')
    .Models.addDefaultBear()
    .FactionTemplate.set(189)
    .Level.set(1)

export const SPAWNS = KILLED_CREATURE.Spawns
    .addGet('tswow-tests','killed-creature-spawns',KILLED_CREATURE_POS)
    .forEach(spawn=>{spawn
        .SpawnTime.set(1)
    })

export const KILL_QUEST = std.Quests
    .create('tswow-tests','kill-quest')
    .Name.enGB.set('Kill Quest')
    .Level.set(1,-1,80)
    .Objectives.Entity.add(KILLED_CREATURE.ID,1)
    .AreaSort.set(TEST_ISLAND.ID)
    .Questgiver.addCreatureBoth(QUESTGIVER.ID,true)
    .POIs.add(0,[KILLED_CREATURE_POS])