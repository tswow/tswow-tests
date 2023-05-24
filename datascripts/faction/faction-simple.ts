import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Faction -
//
//   This file creates:
//     - A faction called "Test Neutral Passive"
//     - A faction template based on this faction
//     - A sample creature that belongs to the faction template (and by extension, the faction)
//
//   Factions are the entities that players can earn reputation with.
//   A faction can contain multiple faction templates.
//
//   Faction templates are separate entities that define friendliness/hostility
//   towards other faction templates and groups (Horde/Alliance/Players).
//
//   When you set the faction of a creature, you set it to a faction template,
//   not a faction directly. If the faction has reputation enabled,
//   players unfriendly to the faction itself will still be attacked by the creature.
//
// ============================================================================

export const PASSIVE_FACTION = std.Factions
    .create('tswow-tests','passive-faction', false)
    .Name.enGB.set('Test Neutral Passive')

export const PASSIVE_FACTION_TEMPLATE = PASSIVE_FACTION.Templates
    .addNeutralPassiveGet()

export const PASSIVE_FACTION_CREATURE = std.CreatureTemplates
    .create('tswow-tests',`passive-faction-creature-spawn`)
    .Name.enGB.set('Faction Passive Creature')
    .Subname.enGB.set('datascripts/faction/faction-simple.ts')
    .Models.addDefaultBear()
    .Level.set(1)
    .FactionTemplate.set(PASSIVE_FACTION_TEMPLATE.ID)
    .Spawns.addMod('tswow-tests',`passive-faction-creature-spawn`
        , [{map:TEST_MAP.ID,x:14835.387695,y:14584.885742,z:72.082489,o:3.598378}]
        , spawn=>{spawn.SpawnTime.set(1)}
    )