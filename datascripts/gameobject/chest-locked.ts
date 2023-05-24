import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";
import { CHEST_DISPLAY } from "./chest-display";

// ============================================================================
//
// - Locked Chest -
//
//   This file demonstrates a chest that is locked with a specific
//   key item.
//
// ============================================================================

export const CHEST_ITEM = std.Items
    .create('tswow-tests','chest-item')
    .Name.enGB.set('Chest Item')
    .Quality.WHITE.set()
    .Price.set(0,0)

export const CHEST_KEY = std.Keys
    .create('tswow-tests','chest-key','GAMEOBJECT')
    .Name.enGB.set('Locked Demo Chest Key')
    .Description.enGB.set('Open Locked Demo Chest')
    .Charges.set(1,'DELETE_ITEM')

std.GameObjectTemplates.Chests
    .create('tswow-tests','locked-chest')
    .Name.enGB.set('Locked Chest')
    .Display.set(CHEST_DISPLAY.ID)
    .Loot.modRefCopy(table=>{
        table.addItem(CHEST_ITEM.ID,[100,'[0-100]'],1,1)
    })
    .IsConsumable.set(1)
    .Size.set(1)
    .Lock.set(CHEST_KEY.Locks.addGet('tswow-tests','chest-lock').ID)
    .Faction.set(0)
    .Flags.LOCKED.set(true)
    .Spawns.addMod('tswow-tests','locked-chest-spawns',[
        {map:TEST_MAP.ID,x:14759.654297,y:14379.092773,z:56.395573,o:2.691010},
    ],go=>{go
        .SpawnTimeSecs.set(1)
    })