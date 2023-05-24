import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Multivendor -
//
//   This file creates a multivendor (npc with multiple vendor windows)
//   from scratch.
//
// ============================================================================

const MULTIVENDOR_ITEM_1 = std.Items
    .create('tswow-tests',`multivendor-item-1`)
    .Name.enGB.set(`Multivendor Item 1`)
    .Quality.WHITE.set()
    .Price.set(0,0)

const MULTIVENDOR_ITEM_2 = std.Items
    .create('tswow-tests',`multivendor-item-2`)
    .Name.enGB.set(`Multivendor Item 2`)
    .Quality.WHITE.set()
    .Price.set(0,0)

export const MULTIVENDOR = std.CreatureTemplates
    .create('tswow-tests','multivendor')
    .NPCFlags.VENDOR.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Models.addDefaultBear()
    .Name.enGB.set('Multivendor')
    .Subname.enGB.set('datascripts/npc/multivendor.ts')
    .Gossip.modRef(gossip=>{gossip
        .Text.add({enGB:'I am a multivendor'})
        .Options.addMod(option=>{option
            .Text.setSimple({enGB:'Vendor 1'})
            .Icon.VENDOR.set()
            .Action.VENDOR.setNew(vendor=>{vendor
                // Vendor 1
                .Items.add(MULTIVENDOR_ITEM_1.ID)
            })
        })
        /*
        .Options.addMod(option=>{option
            .Text.setSimple({enGB:'Vendor 2'})
            .Icon.VENDOR.set()
            .Action.VENDOR.setNew(vendor=>{vendor
                // Vendor 2
                .Items.add(MULTIVENDOR_ITEM_2.ID)
            })
        })
        */
    })
    .Spawns.add('tswow-tests','multivendor-spawn',[
        {map:TEST_MAP.ID,x:14747.272461,y:14440.416992,z:55.173462,o:0.251885},
    ])