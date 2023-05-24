import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Multitrainer -
//
//   This file creates a multitrainer (npc with multiple trainer windows)
//   from scratch.
//
// ============================================================================

const SPELL_1 = std.Spells
    .create('tswow-tests',`multitrainer-spell-1`)
    .Name.enGB.set("Multitrainer Spell 1")

const SPELL_2 = std.Spells
    .create('tswow-tests',`multitrainer-spell-2`)
    .Name.enGB.set("Multitrainer Spell 2")

std.CreatureTemplates
    .create('tswow-tests','multitrainer')
    .Name.enGB.set('Multitrainer')
    .Subname.enGB.set('datascripts/npc/multitrainer.ts')
    .Models.addDefaultBear()
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Gossip.modNew(gossip=>{gossip
        .Text.add({enGB:'I am a multitrainer'})
        .Options.addMod(option=>{option
            .Text.setSimple({enGB:'Multitrainer 1'})
            .Icon.TRAINER.set()
            .Action.TRAINER.setNew(trainer=>{trainer
                .Greeting.enGB.set('Multitrainer 1 Greeting')
                .Spells.add(SPELL_1.ID)
            })
        })
        .Options.addMod(option=>{option
            .Text.setSimple({enGB:'Multitrainer 2'})
            .Icon.TRAINER.set()
            .Action.TRAINER.setNew(trainer=>{trainer
                .Greeting.enGB.set('Multitrainer 2 Greeting')
                .Spells.add(SPELL_2.ID)
            })
        })
    })
    .Spawns.add('tswow-tests','multitrainer-spawn',[
        {map:TEST_MAP.ID,x:14747.728516,y:14446.251953,z:55.173462,o:5.564318},
    ])