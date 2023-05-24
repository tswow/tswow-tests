import { std } from "wow/wotlk";

export const BLESSING_SPELL = std.Spells
    .create('tswow-tests','blessing-spell')
    // =================================================
    // 
    // - Basic Properties -
    // 
    // =================================================
    .Name.set({"enGB":"Blessing Spell"})
    .Description.set({"enGB":"An buff spell similar to paladin blessings, increases all stats by 10%.\n\nSee datascripts/spells/basic/blessing.ts"})
    .AuraDescription.set({"enGB":"Increases stats by $s1%."})
    .Subtext.set({})
    .Icon.setFullPath("Interface\\Icons\\Spell_Magic_MageArmor")
    .PreventionType.SILENCE.set()
    .DispelType.DISPEL_MAGIC.set()
    .Attributes.set(['NOT_SHAPESHIFTED','SHEATHE_UNCHANGED','UNK83','CONSOLIDATED_RAID_BUFF'])
    .SchoolMask.set(['PHYSICAL','HOLY'])
    .Duration.modRefCopy(x=>x
        .Duration.set(600000)
        .MaxDuration.set(600000)
    )
    .Cooldown.mod(x=>x
        .GlobalTime.set(1500)
        .GlobalCategory.set(133)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(6)
    )
    .Range.setSimple(0,30)
    // =================================================
    // 
    // - Effects -
    // 
    // =================================================
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.MOD_TOTAL_STAT_PERCENTAGE.set()
        .Stat.ALL.set()
        .PercentBase.set(10)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_TARGET_ALLY.set()
    )
    // =================================================
    // 
    // - Visuals -
    // 
    // =================================================
    .Visual.modRefCopy(x=>x
        .CastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Holy Precast High Hand")
                .Filename.set("Spells\\Holy_Precast_High_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .BaseEffect.modRefCopy(x=>x
                .Name.set("Holy Precast Uber Base")
                .Filename.set("Spells\\Holy_Precast_Uber_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(2562)
            .Animation.SPELL_CAST_OMNI.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x=>x
            .BaseEffect.modRefCopy(x=>x
                .Name.set("Blessing of Kings Base")
                .Filename.set("spells\\BlessingofKings_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(1455)
            .Animation.set(-1)
            .StartAnimation.set(-1)
        )
        .PrecastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Holy Precast Med Hand")
                .Filename.set("Spells\\Holy_Precast_Med_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(741)
            .Animation.READY_SPELL_OMNI.set()
            .StartAnimation.set(-1)
        )
    )