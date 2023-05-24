import { std } from "wow/wotlk";

// ============================================================================
//
// - Chest Display -
//
//   This file contains a chest display that is used by
//   both "chest-locked.ts" and "chest.ts"
//
// ============================================================================

export const CHEST_DISPLAY = std.GameObjectDisplays
    .create('tswow-tests','chest-display')
    .GeoBox.set(10)
    .ModelName.set('WORLD\\SKILLACTIVATED\\CONTAINERS\\TREASURECHEST01.MDX')