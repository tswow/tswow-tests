import { std } from "wow/wotlk"
import { TEST_ISLAND, TEST_MAP } from "../maps/map"
import { QUESTGIVER } from "./questgiver"

// ============================================================================
//
// - Drop Quest -
//
//   This file creates a basic creature that drops an item and a quest
//   to collect this item.
//
//   TODO: Currently not working
//
// ============================================================================

export const DROP_CREATURE_POS = {map:TEST_MAP.ID,x:14730.523438,y:14422.133789,z:55.684013,o:5.545566}

export const QUEST_ITEM_DROP = std.Items
    .create('tswow-tests',`quest-item-drop`)
    .Name.enGB.set("Quest Item Drop")
    .Quality.WHITE.set()
    .Price.set(0,0)

export const DROPPING_CREATURE = std.CreatureTemplates
    .create('tswow-tests',`dropping-creature`)
    .Name.enGB.set(`Dropping Creature`)
    .Models.addDefaultBear()
    .FactionTemplate.set(189)
    .Level.set(1)

export const DROPPING_CREATURE_SPAWNS = DROPPING_CREATURE.Spawns
    .addGet('tswow-tests','dropping-creature-spawn',DROP_CREATURE_POS)
    .forEach((spawn)=>{
        spawn.SpawnTime.set(1)
    })

export const DROP_QUEST = std.Quests
    .create('tswow-tests','drop-quest')
    .Name.enGB.set('Drop Quest')
    .Level.set(1,-1,80)
    .Objectives.Item.add(QUEST_ITEM_DROP.ID,1)
    .AreaSort.set(TEST_ISLAND.ID)
    .Questgiver.addCreatureBoth(QUESTGIVER.ID,true)
    .POIs.add(0,[DROP_CREATURE_POS])