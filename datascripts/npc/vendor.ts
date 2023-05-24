import { std } from "wow/wotlk";
import { TEST_CLASS } from "../class/custom-class";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Trainer -
//
//   This file creates a vendor npc with selling various item:
//
//   - A simple normal vendor item
//   - An item with limited supply
//   - An item only sold to some races/classes
//
// ============================================================================

const SIMPLE_VENDOR_ITEM = std.Items
    .create('tswow-tests',`simple-vendor-item`)
    .Name.enGB.set(`Simple Vendor Item`)
    .Quality.WHITE.set()
    .Price.set(0,0)

const LIMITED_VENDOR_ITEM = std.Items
    .create('tswow-tests',`limited-vendor-item`)
    .Name.enGB.set(`Limited Vendor Item`)
    .Quality.WHITE.set()
    .Price.set(0,0)

const MASKED_VENDOR_ITEM = std.Items
    .create('tswow-tests',`masked-vendor-item`)
    .Name.enGB.set(`Masked Vendor Item`)
    .Quality.WHITE.set()
    .Price.set(0,0)

export const TEST_VENDOR_1 = std.CreatureTemplates
    .create('tswow-tests','test-vendor')
    .Name.enGB.set('Simple Vendor')
    .Subname.enGB.set('datascripts/npc/vendor.ts')
    .NPCFlags.VENDOR.set(true)
    .Models.addDefaultBear()

    .Vendor.add(SIMPLE_VENDOR_ITEM.ID,0)
    .Vendor.addMod(LIMITED_VENDOR_ITEM.ID,0,item=>{item
        .MaxCount.set(1)
        .IncreaseTime.set(100)
    })
    .Vendor.addMod(MASKED_VENDOR_ITEM.ID,0,item=>{item
        .ClassMask.add(TEST_CLASS.Mask)
    })

    // Spawns
    .Spawns.add('tswow-tests','test-vendor-spawn',[
        {map:TEST_MAP.ID,x:14750.096680,y:14436.093750,z:55.173462,o:0.855071},
    ])