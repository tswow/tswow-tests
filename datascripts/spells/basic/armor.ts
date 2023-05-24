import { std } from "wow/wotlk";

export const ARMOR_SPELL = std.Spells
    .create('tswow-tests','armor-spell')
    // =================================================
    // 
    // - Basic Properties -
    // 
    // =================================================
    .Name.set({"enGB":"Armor"})
    .Description.set({"enGB":"An armor spell similar to warlocks 'Demon Skin' ability that increase armor by $s1.\n\nSee datascripts/spells/basic/armor.ts"})
    .AuraDescription.set({"enGB":"Increases armor by $s1."})
    .Icon.setFullPath("Interface\\Icons\\Spell_Fire_LavaSpawn")
    .PreventionType.SILENCE.set()
    .Attributes.set(['NOT_SHAPESHIFTED','UN_AUTOCASTABLE_BY_PET','CONSOLIDATED_RAID_BUFF'])
    .InterruptFlags.set([0x8])
    .SchoolMask.set(['PHYSICAL','SHADOW'])
    .Duration.modRefCopy(x=>x
        .Duration.set(1800000)
        .MaxDuration.set(1800000)
    )
    .Cooldown.mod(x=>x
        .GlobalTime.set(1500)
        .GlobalCategory.set(133)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(31)
    )
    // =================================================
    // 
    // - Effects -
    // 
    // =================================================
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_RESISTANCE.set()
        .Resistance.set('PHYSICAL')
        .PointsBase.set(265)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    // =================================================
    // 
    // - Visuals -
    // 
    // =================================================
    .Visual.modRefCopy(x=>x
        .CastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Shadow Precast Low Hand")
                .Filename.set("Spells\\Shadow_Precast_Low_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(2560)
            .Animation.SPELL_CAST_OMNI.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x=>x
            .HeadEffect.modRefCopy(x=>x
                .Name.set("DemonArmor Impact Head")
                .Filename.set("Spells\\DemonArmor_Impact_Head.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(1365)
            .Animation.set(-1)
            .StartAnimation.set(-1)
        )
        .PrecastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Shadow Precast Low Hand")
                .Filename.set("Spells\\Shadow_Precast_Low_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(745)
            .Animation.READY_SPELL_OMNI.set()
            .StartAnimation.set(-1)
        )
    )