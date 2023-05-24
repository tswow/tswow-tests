import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Guild Master -
//
//   This file creates a guild master/tabard designer creature from scratch,
//   similar to those found in most capital cities.
//
// ============================================================================

export const GUILD_MASTER = std.CreatureTemplates
    .create('tswow-tests','guild-master')
    .NPCFlags.GOSSIP.set(true)
    .NPCFlags.PETITIONER.set(true)

    // This makes the petition type into a guild
    // instead of arena team.
    .NPCFlags.TABARD_DESIGNER.set(true)

    .Name.enGB.set('Guild Master')
    .Subname.enGB.set('datascripts/npc/guild-master.ts')
    .Models.addDefaultBear()
    .Gossip.modRef(gossip=>{
        gossip.Text.add({enGB:'I can help you create a guild'})

        // "Create guild" option (can be removed)
        gossip.Options.addMod(option=>{
            option
                .Action.PETITION.set()
                .Icon.CHAT.set()
                .Text.setSimple({enGB:'How do I form a guild?'})
        })

        // "Design tabard" option (can be removed)
        gossip.Options.addMod(option=>{
            option
                .Action.TABARD_DESIGNER.set()
                .Icon.TABARD.set()
                .Text.setSimple({enGB:'I want to create a guild crest'})
        })
    })
    .Spawns.add('tswow-tests','guild-master-spawn',[
        {map:TEST_MAP.ID,x:14761.872070,y:14442.729492,z:55.174282,o:3.132052},
    ])