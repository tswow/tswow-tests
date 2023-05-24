import { std } from "wow/wotlk";
import { DUNGEON_MAP } from "./dungeon-map";

// ============================================================================
//
// - Dungeon Trash -
//
//   This file demonstrates a simple dungeon trash mob that
//   gets a higher level in heroic mode.
//
// ============================================================================

std.CreatureTemplates
    .create('tswow-tests','dungeon-trash')
    .Name.enGB.set('Bad Bear')
    .Subname.enGB.set('datascripts/dungeon/dungeon-trash.ts')
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .Models.addDefaultBear()
    .Level.set(1)
    .Rank.ELITE.set()
    .Difficulty.Heroic5Man
        .modRefCopyRoot('tswow-tests','dungeon-trash-heroic',(x)=>x
            .Level.set(10)
        )
    .Spawns.addMod('tswow-tests','dungeon-trash-spawn',[
        {map:DUNGEON_MAP.ID,x:14607.659180,y:14624.351563,z:61.661625,o:5.731908},
        {map:DUNGEON_MAP.ID,x:14600.115234,y:14640.479492,z:60.509968,o:4.825559},
        {map:DUNGEON_MAP.ID,x:14579.349609,y:14646.670898,z:61.376842,o:6.238490},
    ], x=>x
        .SpawnMask.NORMAL5_MAN.set(true)
        .SpawnMask.HEROIC25_MAN.set(true)
        .SpawnTime.set(7200)
    )