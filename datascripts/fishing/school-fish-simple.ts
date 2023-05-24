import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Locked Chest -
//
//   This file demonstrates a chest that is locked with a specific
//   key item.
//
// ============================================================================

export const SCHOOL_FISH = std.Items
    .create('tswow-tests','test-school-fish')
    .Name.enGB.set('Test School Fish')
    .Quality.WHITE.set()
    .Price.set(0,0)

std.GameObjectTemplates.FishingHoles.create('tswow-tests','fishinghole')
    .Name.enGB.set(`School of Test School Fish`)
    .Display.set(6291)
    .Radius.set(4)
    .MinSuccessOpens.set(2)
    .MaxSuccessOpens.set(6)
    .Loot.modRefCopy(table=>{
        table.addItem(SCHOOL_FISH.ID,[100,'[0-100]'],1,1)
    })
    .Spawns.add('tswow-tests','fishinghole-spawn',[
        {map:TEST_MAP.ID,x:14703.071289,y:14574.477539,z:45.616001+1.43,o:4.260241},
    ],10)