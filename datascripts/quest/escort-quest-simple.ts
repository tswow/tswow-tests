import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";
import { QUESTGIVER } from "./questgiver";

// ============================================================================
//
// - Escort Quest Simple -
//
//   This file creates a very basic scripted escort quest using SmartScripts.
//
// ============================================================================

export const ESCORT_NPC = std.CreatureTemplates
    .create('tswow-tests','escort-npc')
    .NPCFlags.QUEST_GIVER.set(true)
    .Name.enGB.set('Escort NPC')
    .Models.addDefaultBear()
    .AIName.SmartAI()
    .Level.set(1)
    .Spawns.add('tswow-tests','escort-npc-spawn',[
        {map:TEST_MAP.ID,x:14742.499023,y:14410.852539,z:53.888756,o:1.374317},
    ])

export const ESCORT_QUEST = std.Quests
    .create('tswow-tests','escort-quest')
    .Name.enGB.set('Escort Quest')
    .ObjectiveText.enGB.set('Follow the Escort NPC')
    .CompleteText.enGB.set('')
    .Level.set(1,-1,80)
    .PickupText.enGB.set(
        `This quest shows a very short escort sequence`
    )
    .CompleteText.enGB.set(
          `Usually, escort quests ends at a third questgiver and not the escorted npc itself,`
        + ` as this makes the quest easier to turn in.`
        + `\n\n`
        + `There are some exceptions, such as instance quests (like the one in Razorfen Kraul).`
    )
    .Objectives.Scripted.set({enGB:'Follow the Escort Bear'})

    // it's rarely a good idea to have the escort npc
    // itself as the ender, since it needs to despawn at some point
    .Questgiver.addCreatureStarter(ESCORT_NPC.ID)
    .Questgiver.addCreatureEnder(QUESTGIVER.ID)
    .Flags.PARTY_ACCEPT.set(true)
    .SpecialFlags.CUSTOM_COMPLETE.set(true)

const waypoints = std.ScriptPaths.create([
    {map:TEST_MAP.ID,x:14753.043945,y:14415.276367,z:53.542915,o:6.190382},
    {map:TEST_MAP.ID,x:14763.854492,y:14414.269531,z:53.296387,o:6.190382},
])

ESCORT_NPC
    .Scripts.onAcceptedQuest(ESCORT_QUEST.ID,script=>{script
        .Action.setQuestWalk(ESCORT_QUEST.ID,waypoints.ID, 'PASSIVE', true, false, 0)
        .then()
            .Action.setTalk({enGB:'Let\'s go look at the other tree'},10)
    })
    .Scripts.onRespawn(0,0,0,script=>{script
        .Action.setAddNpcFlag(2)
        .Target.setSelf()
    })
    .Scripts.onDeath(script=>{script
        .Action.setFailQuestWalk(ESCORT_QUEST.ID)
    })
    .Scripts.onWaypointReached(waypoints.last().index,waypoints.ID,script=>{script
        .Action.setTalk({enGB:'What a nice tree, go talk to the questgiver again'},10)
        .then()
            .Action.setForceDespawn(2000,2)
            .Target.setSelf()
        .then()
            .Action.setFinishQuestWalk(ESCORT_QUEST.ID)
    })