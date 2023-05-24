import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Outfit Copy -
//
//   This module demonstrates how to use livescript outfits by creating a creature
//   that copies the players outfit when talked to.
//
// ============================================================================

export const OUTFIT_COPY_NPC = std.CreatureTemplates
    .create('tswow-tests','outfit-copy-npc')
    .Models.addDefaultBear()
    .Name.enGB.set('Outfit Copier')
    .NPCFlags.GOSSIP.set(true)
    .Subname.enGB.set('datascripts/outfits/outfit-copy.ts')
    .Spawns.add('tswow-tests','outfit-copy-npc-spawn',[
        {map:TEST_MAP.ID,x:14748.131836,y:14428.194336,z:75.872269,o:1.243674},
    ])
    .Gossip.modNew(()=>{})

    // This is where we apply the outfit
    .InlineScripts.OnGossipHello((self,player)=>{
        self.SetOutfit(player.GetOutfitCopy());
    })