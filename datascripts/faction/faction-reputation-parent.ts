import { std } from "wow/wotlk";

// ============================================================================
//
// - Faction Reputation Parent -
//
//   This file creates two factions with reputation
//   enabled that are parented to each others.
//
// ============================================================================

export const REPUTATION_FACTION_PARENT = std.Factions
    .create('tswow-tests','reputation-faction-parent', true)
    .Name.enGB.set('Reputation Parent')
    .Description.enGB.set('Parent of the child faction')
    .Reputation.addSimple(0,[],[],['VISIBLE'])

export const REPUTATION_FACTION_CHILD = std.Factions
    .create('tswow-tests','reputation-faction-child', true)
    .Name.enGB.set('Reputation Child')
    .Description.enGB.set('Child of the parent faction')
    // This faction can only be used by humans
    .Reputation.addSimple(0,['HUMAN'],[],[])
    .Parent.set(REPUTATION_FACTION_PARENT.ID)