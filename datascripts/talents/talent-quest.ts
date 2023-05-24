import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";


export const TALENT_QUESTGIVER = std.CreatureTemplates
    .create('tswow-tests','talent-questgiver')
    .Name.enGB.set('Talent Questgiver')
    .Models.addDefaultBear()
    .NPCFlags.QUEST_GIVER.set(1)
    .Spawns.add('tswow-tests','talent-questgiver-spawn',[
        {map:TEST_MAP.ID, x: 0, y: 0, z: 0, o: 0}
    ])

export const TALENT_QUEST = std.Quests
    .create('tswow-tests','talent-quest')
    .Name.enGB.set('Talent Quest')
    .Rewards.Talents.Temporary.set(1)
    .Rewards.Talents.Permanent.set(1)
    .Questgiver.addCreatureBoth(TALENT_QUESTGIVER.ID, false)