import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Innkeeper -
//
//   This file creates an innkeeper npc from scratch, similar to those found
//   in most inns around the world.
//
// ============================================================================

export const INNKEEPER = std.CreatureTemplates
    .create('tswow-tests','innkeeper')
    .NPCFlags.INNKEEPER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .NPCFlags.VENDOR.set(true)
    .Name.enGB.set('Innkeeper')
    .Subname.enGB.set('datascripts/npc/innkeeper.ts')
    .Models.addDefaultBear()
    .Gossip.modNew(gossip=>{
        gossip.Text.add({enGB:'Welcome to my inn'})
              .Options.addMod(option=>{
                  option.Icon.COGWHEEL.set()
                        .Text.setSimple({enGB:'Make this inn your home'})
                        .Action.INNKEEPER.set()
              })
              .Options.addMod(option=>{
                  option.Icon.VENDOR.set()
                        .Text.setSimple({enGB:'Let me browse your goods'})
                        .Action.VENDOR.set()
              })
    })
    .Spawns.add('tswow-tests','innkeeper-spawn',[
        {map:TEST_MAP.ID,x:14746.924805,y:14443.091797,z:55.173557,o:0.005937},
    ])

    // Vendor items
    .Vendor.add(25)