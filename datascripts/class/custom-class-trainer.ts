import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Custom Class Trainer -
//
// This file creates a class trainer from scratch for the test class.
//
// For spells, see custom-class-spells.ts
//
// ============================================================================

export const CUSTOM_TRAINER_CREATURE = std.CreatureTemplates
    .create('tswow-tests','class-trainer')
    .Name.enGB.set('Test Class Trainer')
    .Models.addDefaultBear()
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Gossip.modRef(gossip=>{gossip
        .Text.add({enGB:'I train Test Classes'})
    })
    .Spawns.add('tswow-tests','class-trainer-spawn',[
        {map:TEST_MAP.ID,x:14880.362305,y:14550.074219,z:74.642174,o:2.150386},
    ])

export const CUSTOM_TRAINER = CUSTOM_TRAINER_CREATURE.Trainer.getRef();