import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Title -
//
//   This file creates a basic title and a quest that rewards it.
//
// ============================================================================

// The title itself.
// %s is replaced with the characters name.
export const TEST_TITLE = std.Titles
   .create('tswow-tests','test-title')
   .Text.set({enGB:'Tester %s'})

// A simple quest to reward this title
const TEST_TITLE_REWARDER = std.CreatureTemplates
   .create('tswow-tests','test-title-rewarder')
   .Name.enGB.set('Title Rewarder')
   .Models.addDefaultBear()
   .Spawns.add('tswow-tests','test-title-rewarder-spawn',[
      {map:TEST_MAP.ID,x:14747.767578,y:14455.237305,z:75.871269,o:5.311447},
   ])
   .NPCFlags.QUEST_GIVER.set(true)

std.Quests
   .create('tswow-tests','test-title-quest')
   .Name.enGB.set('Receive Test Title')
   .Questgiver.addCreatureBoth(TEST_TITLE_REWARDER.ID)
   .Rewards.Title.set(TEST_TITLE.ID)