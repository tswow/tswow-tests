import { std } from "wow/wotlk"
import { DungeonBosses } from "./dungeon-bosses"
import { DUNGEON_MAP } from "./dungeon-map"

// Achievement on encounter completed
std.Achievements
    .create('tswow-tests','dungeon-encounter-achievement')
    .Category.set('GENERAL')
    .Name.enGB.set('Dungeon Encounter')
    .Description.enGB.set('Complete the test dungeon encounter')
    .Criteria.addMod('tswow-tests','dungeon-encounter-achievement-crit',(crit)=>{
        crit.Type.COMPLETE_ENCOUNTER.set()
            .Description.enGB.set('Kill the Evill Boss Bear')
            .set(DUNGEON_MAP.ID,DungeonBosses.EVIL_BOSS_BEAR)
    })