import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Fishing Utility NPC -
//
//   A scripted creature to teach you fishing
//   and give you a fishing rod when you talk to him.
//
// ============================================================================

std.CreatureTemplates
    .create('tswow-tests','fishing-trainer')
    .Name.enGB.set('Fishing Trainer')
    .NPCFlags.GOSSIP.set(1)
    .Models.addIds(...[1718])
    .InlineScripts.OnGossipHello((creature,player,cancel)=>{
        const FISHING_SPELL = 7620;
        cancel.set(true);
        if(!player.HasItem(6256,1,false)) {
            player.AddItem(6256,1)
        }
        player.LearnSpell(FISHING_SPELL)
        player.GossipMenuAddItem(GossipOptionIcon.DOT,'Set skill to 50',0,1)
        player.GossipMenuAddItem(GossipOptionIcon.DOT,'Set skill to 1',0,2)
        player.GossipSendTextMenu(
              creature
            , `Fishing in this lake requires around 50 fishing skill`
            + ` to be successful.`
            + `\n\nI can help set up your fishing skill to test it.`
            + `\n\nYou can also fish from the fishing school regardless of your fishing level.`
        )
    })
    .InlineScripts.OnGossipSelect((_,player,__,sel,cancel)=>{
        const FISHING_SKILL = 356
        switch(sel) {
            case 1:
                if(player.GetSkillValue(FISHING_SKILL) == 50) {
                    player.SendBroadcastMessage(`Your fishing skill is already 50.`);
                }
                player.SetSkill(FISHING_SKILL,1,50,75)
                player.PlayDirectSound(15,player)
                break;
            case 2:
                player.SetSkill(FISHING_SKILL,1,1,75)
                if(player.GetSkillValue(FISHING_SKILL) == 1) {
                    player.SendBroadcastMessage(`Your fishing skill is already 1.`);
                }
                player.PlayDirectSound(15,player)
                break;
        }
        player.GossipComplete()
        cancel.set(true);
    })
    .Spawns.add('tswow-tests','fishing-trainer-spawn',[
        {map:TEST_MAP.ID,x:14702.666016,y:14557.658203,z:47.841175,o:1.012618},
    ])