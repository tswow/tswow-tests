import { std } from "wow/wotlk";

// ============================================================================
//
// - Faction Reputation -
//
//   This file creates a very simple faction
//   with reputation enabled for all classes/races
// ============================================================================

export const REPUTATION_FACTION_PARENT = std.Factions
    .create('tswow-tests','reputation-faction', true)
    .Name.enGB.set('Reputation Parent')
    .Description.enGB.set('This faction can gain reputation')
    .Reputation.addSimple(0,['HUMAN'],[],['VISIBLE'])
