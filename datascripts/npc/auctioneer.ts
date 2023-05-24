import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Auctioneer -
//
//   This file creates a simple auctioneer npc.
//
// ============================================================================

export const AUCTIONEER = std.CreatureTemplates
    .create('tswow-tests','auctioneer')
    .NPCFlags.AUCTIONEER.set(true)
    .Name.enGB.set('Auctioneer')
    .Subname.enGB.set('datascripts/npc/auctioneer.ts')
    .Models.addDefaultBear()
    .Spawns.add('tswow-tests','auctioneer-spawn',[
        {map:TEST_MAP.ID,x:14760.732422,y:14439.245117,z:55.173595,o:2.604546},
    ])