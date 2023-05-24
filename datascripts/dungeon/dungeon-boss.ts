import { std } from "wow/wotlk";
import { DungeonBosses } from "./dungeon-bosses";
import { DUNGEON_MAP } from "./dungeon-map";

// ============================================================================
//
// - Dungeon Boss -
//
//   This file creates a simple boss with minimal scripted mechanics.
//
//   It also creates:
//     - A dungeon gate that opens once the boss is defeatede
//     - A boss boundary (boss enters evade mode if outside this)
//
// ============================================================================

// Boss creature
export const DUNGEON_BOSS = std.CreatureTemplates
    .create('tswow-tests','dungeon-boss')
    .Name.enGB.set('Evil Boss Bear')
    .Subname.enGB.set('datascripts/dungeon/dungeon-boss.ts')
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .Models.addDefaultBear()
    .Level.set(1)
    .Rank.ELITE.set()
    .Spawns.addMod('tswow-tests','dungeon-boss-spawn',[
        {map:DUNGEON_MAP.ID,x:14567.633789,y:14675.546875,z:60.818161,o:6.074337},
    ],spawn=>{
        spawn.Boss.set(DungeonBosses.EVIL_BOSS_BEAR)
    })

// Boss Scripts
DUNGEON_BOSS
    .Scripts.onAggro(script=>script
        .Action.setTalk({enGB:'I am the embodiment of evil'},100)
        .Target.setSelf()
    )
    .Scripts.onDeath(script=>script
        .Action.setTalk({enGB:'You may have killed me, but you\'ll never beat ... the evil bear god...'},100)
    )
    .Scripts.onHealthPct(1,60,0,0,script=>script
        .Action.setTalk({enGB:'Fuck you'},1000)
        .then()
        .Action.setCast(133,0,0)
        .Target.setVictim()
    )

// Boss gate that opens after completion
export const DUNGEON_GATE = std.GameObjectTemplates.Doors
    .create('tswow-tests','dungeon-door')
    .Name.enGB.set('Dungeon Gate')
    .Display.set(7869)
    .Size.set(1)
    .Flags.add(['NO_DESPAWN','TRIGGERED','NOT_SELECTABLE'])
    .BossStates.add(
          DUNGEON_MAP.ID
        , DungeonBosses.EVIL_BOSS_BEAR
        , 'OPEN_AFTER_ENCOUNTER'
    )
    .Spawns.addMod('tswow-tests','dungeon-gate-spawn',[
        {map:DUNGEON_MAP.ID,x:14572.335938,y:14645.560547,z:61.670048,o:3.230409}
    ],spawn=>{
        spawn.SpawnMask.clearAll()
             .SpawnMask.NORMAL5_MAN.set(true)
             .SpawnMask.HEROIC5_MAN.set(true)
    })

// Boss boundaries (boss will enter evade mode if outside of this range)
DUNGEON_MAP.Boundaries
    .mod(DungeonBosses.EVIL_BOSS_BEAR,bound=>{
        bound.addRectangle(0,false,{x:14560,y:14668},{x:14578,y:14683})
    })