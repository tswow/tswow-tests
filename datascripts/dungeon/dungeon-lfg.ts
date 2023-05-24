import { DungeonBosses } from "./dungeon-bosses";
import { DUNGEON_MAP } from "./dungeon-map";

// ============================================================================
//
// - Dungeon LFG -
//
//   This file creates a basic lfg entry that allows queueing for the
//   demo dungeon with the dungeon finder.
//
//   It also sets up the scripted dungeon boss as the final of the dungeon,
//   meaning it will display the "Dungeon Completed" message once this boss has
//   been defeated.
//
//   TODO: LFG dungeon rewards
//
// ============================================================================

export const DUNGEON_MAP_LFG = DUNGEON_MAP.LFGDungeons
    .addGet('tswow-tests','dungeon-map-lfg')
    .Levels.Max.set(25)
    .Levels.Min.set(15)
    .Levels.Target.set(15)
    .Levels.TargetMin.set(15)
    .Levels.TargetMax.set(25)
    .Name.enGB.set('Test Dungeon')
    .ExpansionLevel.set(0)
    .Faction.NONE.set()
    .Texture.set('WAILINGCAVERNS')
    // TODO: What flags are these?
    .Flags.set(3)
    // TODO: What type is this?
    .Type.set(1)
    // TODO: What does this mean?
    .Group.set(1)
    .OrderIndex.set(0)

DUNGEON_MAP_LFG.Encounters.addMod(encounter=>{
    encounter
        .Map.set(DUNGEON_MAP.ID)
        .Difficulty.set(0)
        .Index.set(0)
        .LastEncounterFor.set(DUNGEON_MAP_LFG.ID)
        .Name.enGB.set('Test Encounter')
        .Type.COMPLETE_ENCOUNTER.set()
        .Boss.set(DungeonBosses.EVIL_BOSS_BEAR)
})