import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";
import { TEST_PROFESSION } from "./profession";

// ============================================================================
//
// - Profession: Gathering -
//
//   This file creates a gathering spell attached to our profession,
//   and a simple gathering node.
//
// ============================================================================

const COPPER_ORE_DISPLAY = 310

export const PROFESSION_LOCK_TYPE = std.LockTypes
    .create()
    .Cursor.setMine()
    .Name.enGB.set('Test Profession')
    .ResourceName.enGB.set('Test Resource')
    .Verb.enGB.set('Gather Test Resource')

export const PROFESSION_GATHERING_SPELL = TEST_PROFESSION.GatheringSpells
    .addGet('tswow-tests','gathering-spell',PROFESSION_LOCK_TYPE.ID)

export const GATHERING_LOOT = std.Items
    .create('tswow-tests',`gathering-loot`)
    .Name.enGB.set(`Gathering Loot`)
    .Quality.WHITE.set()
    .Price.set(0,0)

export const PROFESSION_GATHERING_NODE = TEST_PROFESSION.GatheringNodes
    .addGet('tswow-tests','gathering-node',PROFESSION_LOCK_TYPE.ID,5)
    .Name.enGB.set('Test Gathering Node')
    .Size.set(0.4)
    .Display.set(COPPER_ORE_DISPLAY)
    .Loot.modRef(x=>x.addItem(GATHERING_LOOT.ID,[100,'[0-100]'],1,1))
    .Spawns.add('tswow-tests','gathering-node-spawn',[
        {map:TEST_MAP.ID,x:14742.011719,y:14433.994141,z:76.873283,o:0.532468},
    ])