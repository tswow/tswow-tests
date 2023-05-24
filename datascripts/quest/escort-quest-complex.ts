/*
import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";
import { QUESTGIVER } from "./questgiver";

// ============================================================================
//
// - Escort Quest Complex -
//
//   This file creates a (slightly) more complex escort quest involving an
//   attack encounter.
//
//   TODO: Currently not working
//
// ============================================================================

export const ESCORT_ATTACKER = std.CreatureTemplates
    .create('tswow-tests','escort-attacker')
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .Name.enGB.set('Escort Attacker')
    .Models.addDefaultBear()
    .AIName.SmartAI()
    .Level.set(2)
    .Scripts.onJustSummoned(script=>{
        script.Action.setTalk({enGB:'Now you\'ll get it'}, 10)
    })

export const COMPLEX_ESCORT_NPC = std.CreatureTemplates
    .create('tswow-tests','complex-escort-npc')
    .NPCFlags.QUEST_GIVER.set(true)
    .Name.enGB.set('Complex Escort NPC')
    .Models.addDefaultBear()
    .AIName.SmartAI()
    .Spawns.add('tswow-tests','complex-escort-npc-spawn',[
        {map:TEST_MAP.ID,x:14742.086914,y:14420.484375,z:54.294907,o:5.244758},
    ])

export const ESCORT_QUEST_COMPLEX = std.Quests
    .create('tswow-tests','escort-quest-complex')
    .Text.Title.enGB.set('Complex Escort Quest')
    .Text.Objective.enGB.set('Follow the Escort NPC')
    .Text.Description.enGB.set(
        `This quest shows a longer escort sequence`
    )
    .Objectives.Scripted.set({enGB:'Follow the Escort Bear'})
    .Questgiver.addCreatureStarter(COMPLEX_ESCORT_NPC.ID)
    .Questgiver.addCreatureEnder(QUESTGIVER.ID)
    .Flags.PARTY_ACCEPT.set(true)
    .SpecialFlags.CUSTOM_COMPLETE.set(true)

const waypoints = std.ScriptPaths.create([
    {map:TEST_MAP.ID,x:14753.043945,y:14415.276367,z:53.542915,o:6.190382},
    {map:TEST_MAP.ID,x:14763.854492,y:14414.269531,z:53.296387,o:6.190382},
])

COMPLEX_ESCORT_NPC
    .Scripts.onAcceptedQuest(ESCORT_QUEST_COMPLEX.ID,script=>{script
        .Action.setQuestWalk(ESCORT_QUEST_COMPLEX.ID,waypoints.ID, 'DEFENSIVE')
    })
    .Scripts.onRespawn(0,0,0,script=>{script
        .Action.setAddNpcFlag(2)
        .Target.setSelf()
    })
    .Scripts.onDeath(script=>{script
        .Action.setFailQuestWalk(ESCORT_QUEST_COMPLEX.ID)
    })
    .Scripts.onWaypointReached(waypoints.first().index,waypoints.ID,script=>{script
        .Action.setTalk({enGB:'Let\'s go look at the other tree'},10)
    })
    .Scripts.onWaypointReached(1,waypoints.ID,script=>{script
        .Action.setWpPause(2000)
        .then()
            .Action.setTalk({enGB:'Wait a minute...'}, 10)
    })
    .Scripts.onWaypointResumed(1,waypoints.ID,script=>{script
        .Action.setTalk({enGB:'Uh oh, here they come'}, 10)
        .then()
            .Action.setSummonCreature(ESCORT_ATTACKER.ID,'DEATH',1000,1)
            .Target.setPosition
            (
                {map:TEST_MAP.ID,x:14753.330078,y:14407.780273,z:53.544880,o:1.587949},
            )
    })
    .Scripts.onWaypointReached(waypoints.last().index,waypoints.ID,script=>{script
        .Action.setTalk({enGB:'What a nice tree'},10)
        .then()
            .Action.setForceDespawn(2000,2)
            .Target.setSelf()
        .then()
            .Action.setFinishQuestWalk(ESCORT_QUEST_COMPLEX.ID)
    })
*/