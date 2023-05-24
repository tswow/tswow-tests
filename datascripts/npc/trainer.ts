import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Trainer -
//
//   This file creates a basic trainer npc.
//
//   TODO: More complex trainer requirement settings.
//
// ============================================================================

const TRAINER_SPELL_1 = std.Spells
    .create('tswow-tests',`trainer-spell-1`)
    .Name.enGB.set("Trainer Spell 1")

const TRAINER_SPELL_2 = std.Spells
    .create('tswow-tests',`trainer-spell-2`)
    .Name.enGB.set("Trainer Spell 2")

export const TRAINER_CREATURE = std.CreatureTemplates
    .create('tswow-tests','npc-trainer')
    .Name.enGB.set('Simple Trainer')
    .Subname.enGB.set('datascripts/npc/trainer.ts')
    .Models.addDefaultBear()
    .NPCFlags.TRAINER.set(true)
    .Gossip.modRef(gossip=>{
        gossip.Text.add({enGB:'I only train Warriors and Test Classes'})
    })
    .Spawns.add('tswow-tests','npc-tainer-spawn',[
        {map:TEST_MAP.ID,x:14750.366211,y:14449.628906,z:55.173462,o:5.124495}
    ])

export const TRAINER = TRAINER_CREATURE.Trainer.getRef()

TRAINER.Spells.addGet(TRAINER_SPELL_1.ID)
TRAINER.Spells.addGet(TRAINER_SPELL_2.ID)
