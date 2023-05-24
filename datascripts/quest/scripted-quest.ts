import { std } from "wow/wotlk"
import { QUESTGIVER } from "./questgiver"

const SCRIPTED_CREATURE_POS = {map:725,x:14725.763672,y:14413.816406,z:56.764481,o:0.161238}

export const SCRIPTED_QUEST = std.Quests
    .create('tswow-tests','scripted-quest')
    .Tags.addUnique('tswow-tests','scripted-quest')
    .Name.enGB.set('Scripted Quest')
    .Level.set(1,-1,80)
    .SpecialFlags.CUSTOM_COMPLETE.set(true) // <-- this is what makes the quest need a script to complete
    .Objectives.Scripted.enGB.set('Talk to the Scripted Creature')
    .Questgiver.addCreatureBoth(QUESTGIVER.ID,false)
    //.AreaSort.set(TEST_ISLAND.ID)

export const SCRIPTED_CREATURE = std.CreatureTemplates
    .create('tswow-tests',`scripted-creature`)
    .Name.enGB.set('Scripted Creature')
    .Subname.enGB.set('datascripts/quest/scripted-quest.ts')
    .Models.addDefaultBear()
    .Level.set(1)
    .NPCFlags.GOSSIP.set(true)
    .Gossip.modNew(gossip=>gossip
        .Text.add({enGB:
              'Hello, thanks for talking to me. You may now complete your quest.\n'
            + '\n'
            + 'An alternative way to complete this quest is to /wave at me.'
        })
    )

    // Completing scripted quests via smart_script
    .Scripts.onGossipHello(1,script=>script
        .Action.setFinishQuestScript(SCRIPTED_QUEST.ID)
        .Target.setActionInvoker()
    )

    // Completing scripted quest via livescript
    .InlineScripts.OnReceiveEmote((creature,player,emote)=>{
        if(emote == 101)
        {
            player.AreaExploredOrEventHappens(UTAG('tswow-tests','scripted-quest'))
        }
    })
    .Spawns.add('tswow-tests','scripted-creature-spawns',[SCRIPTED_CREATURE_POS])