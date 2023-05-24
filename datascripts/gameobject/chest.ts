import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";
import { CHEST_DISPLAY } from "./chest-display";
import { CHEST_KEY } from "./chest-locked";

// ============================================================================
//
// - Chest -
//
//   This file demonstrates a very simle chest that
//   drops a single dummy item when opened.
//
//   TODO: Currently not working
//
// ============================================================================

std.GameObjectTemplates.Chests
    .create('tswow-tests','unlocked-chest')
    .Name.enGB.set('Unlocked Chest')
    .Display.set(CHEST_DISPLAY.ID)
    .Loot.modRefCopy(table=>{
        table.addItem(CHEST_KEY.ItemID,[100,'[0-100]'],1,1)
    })
    .IsConsumable.set(1)
    .Size.set(1)
    .Faction.set(0)
    .Lock.set(57)
    .Flags.LOCKED.set(false)
    .Spawns.addMod('tswow-tests','unlocked-chest-spawns',[
        {map:TEST_MAP.ID,x:14755.155273,y:14375.564453,z:56.398830,o:1.716364},
    ],go=>{go
        .SpawnTimeSecs.set(1)
    })