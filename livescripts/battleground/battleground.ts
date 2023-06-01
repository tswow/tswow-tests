//
// Datascript IDs (grabbed from coredata/ids.ts)
//
const MAP : uint32 = UTAG('tswow-tests','battleground-map')

const SLIME_HORDE : uint32 = UTAG("tswow-tests","horde-slime-counter");
const SLIME_ALLY : uint32 = UTAG("tswow-tests","alliance-slime-counter");
const SLIME_TIMER : uint32 = UTAG("tswow-tests","slime-timer");
const SLIME_CREATURE : uint32 = UTAG("tswow-tests","battleground-slime");

//
// Settings
//
const MINUTES_TOTAL = 1;

//
// Score/Timer data
// - Stored on map object
//
class SlimePitData {
    hordeScore: uint32 = 0;
    allianceScore: uint32 = 0;
    timer: uint32 = MINUTES_TOTAL;
    started: bool = false;

    static get(map: TSMap): SlimePitData {
        return map.GetObject('SLIME_PIT_DATA',new SlimePitData());
    }
}

export function RegisterBattlegroundEvents(events: TSEvents) {
    // Send worldstate to any player that joins
    events.Battleground.OnAddPlayer(MAP,(bg,player)=>{
        let data = SlimePitData.get(bg);
        player.SendUpdateWorldState(SLIME_HORDE,data.hordeScore)
        player.SendUpdateWorldState(SLIME_ALLY,data.allianceScore)
        player.SendUpdateWorldState(SLIME_TIMER,data.timer)
    })

    events.Battleground.OnOpenDoors(MAP,bg=>{
        SlimePitData.get(bg).started = true;

        // update timer every 60 seconds
        bg.AddTimer(60000,TimerLoops.INDEFINITE,(owner,timer)=>{
            let data = SlimePitData.get(owner);
            data.timer--;
            owner.ToBG().UpdateWorldState(SLIME_TIMER,data.timer);
            if(data.timer > 0) return;

            // time's up, end battleground
            if(data.hordeScore > data.allianceScore) {
                owner.GetPlayers().forEach(x=>x.SendBroadcastMessage(`Horde wins!`))
                owner.ToBG().EndBG(TeamId.HORDE);
            } else if(data.hordeScore < data.allianceScore) {
                owner.GetPlayers().forEach(x=>x.SendBroadcastMessage(`Alliance wins!`))
                owner.ToBG().EndBG(TeamId.ALLIANCE);
            } else {
                owner.GetPlayers().forEach(x=>x.SendBroadcastMessage(`It's a draw!`))
                owner.ToBG().EndBG(TeamId.NEUTRAL);
            }
        })
    })

    events.Battleground.OnSendScore(MAP,(bg,score,packet,cancel)=>{
        cancel.set(true);
        score.ApplyBaseToPacket(bg,packet);
        packet.WriteUInt32(1);
        packet.WriteUInt32(score.GetCustomAttr('slimes'))
    })

    events.Creature.OnDeath(SLIME_CREATURE,(creature,killer)=>{
        // Check for wrong maps or non-battlegrounds
        if(creature.GetMapID() !== MAP || !creature.GetMap().IsBG()) return;

        // Check for non-player killer
        let owner = killer.GetEffectiveOwner().ToPlayer()
        if(owner.IsNull()) return;

        let map = creature.GetMap().ToBG()
        let data = SlimePitData.get(map);
        let team = owner.GetTeam()

        // Check for cheating player
        if(!data.started) {
            creature.Respawn();
            creature.RemoveCorpse();
            return;
        }

        let score = map.GetScore(killer.GetGUIDLow())
        if(score)
        {
            score.ModCustomAttr('slimes',1)
        }

        if(team == TeamId.HORDE) {
            data.hordeScore++;
        } else if(team == TeamId.ALLIANCE) {
            data.allianceScore++
        }
        map.RewardHonor(100,team);

        // Send updates
        map.UpdateWorldState(SLIME_HORDE,data.hordeScore)
        map.UpdateWorldState(SLIME_ALLY,data.allianceScore)
    });
}