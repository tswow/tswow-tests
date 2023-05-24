import { std } from "wow/wotlk";

// ============================================================================
//
// - Dungeon Map -
//
//   This file creates a basic dungeon map with a normal and heroic difficulty.
//   It also creates an area for this dungeon.
//
// ============================================================================

export const DUNGEON_MAP = std.Maps
    .createDungeon('tswow-tests','dungeon-map')
    .Name.enGB.set('Test Dungeon')
    .Directory.set('testdungeon')
    .Tiles.add('tswow-tests',[[3,3,5,5,'testdungeon']])
    .Difficulties.add('tswow-tests','dungeon-map-normal',5,'NORMAL')
    .Difficulties.add('tswow-tests','dungeon-map-heroic',5,'HEROIC')
    .BossCount.set(1)

export const DUNGEON_AREA = std.Areas
    .create('tswow-tests','dungeon-area')
    .Name.enGB.set('Test Dungeon')
    .Map.set(DUNGEON_MAP.ID)