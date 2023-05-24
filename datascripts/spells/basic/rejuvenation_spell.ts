import { std } from "wow/wotlk";

export const REJUVENATION = std.Spells
    .create('tswow-tests','rejuvenation')
    // =================================================
    // 
    // - Basic Properties -
    // 
    // =================================================
    .Name.set({"enGB":"Auto Rejuvenation"})
    .Description.set({"enGB":"A healing spell similar to druids 'Rejuvenation' ability.\n\nSee datascripts/spells/basic/rejuvenation.ts."})
    .AuraDescription.set({"enGB":"Heals $s1 damage every $t1 seconds."})
    .Subtext.set({"enGB":"Rank 1"})
    .Icon.setFullPath("Interface\\Icons\\Spell_Nature_Rejuvenation")
    .PreventionType.SILENCE.set()
    .DispelType.DISPEL_MAGIC.set()
    .Attributes.set(['NOT_SHAPESHIFTED','NOT_NEED_SHAPESHIFT','SEPARATE_STACK_PER_CASTER','NO_CHECK_CAST_POWER','UNK83'])
    .InterruptFlags.set([0x8])
    .SchoolMask.set(['PHYSICAL','NATURE'])
    .Duration.modRefCopy(x=>x
        .Duration.set(15000)
        .MaxDuration.set(15000)
    )
    .Cooldown.mod(x=>x
        .GlobalTime.set(1500)
        .GlobalCategory.set(133)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(18)
    )
    .Range.setSimple(0,40)
    // =================================================
    // 
    // - Effects -
    // 
    // =================================================
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_HEAL.set()
        .HealPeriod.set(3000)
        .HealBase.set(8)
        .HealDieSides.set(1)
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
                .Name.set("Nature Cast Hand")
                .Filename.set("Spells\\Nature_Cast_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(2561)
            .Animation.SPELL_CAST_OMNI.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x=>x
            .BaseEffect.modRefCopy(x=>x
                .Name.set("Rejuvenation Impact Base")
                .Filename.set("Spells\\Rejuvenation_Impact_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(3229)
            .Animation.set(-1)
            .StartAnimation.set(-1)
        )
        .PrecastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Nature Precast Hand")
                .Filename.set("Spells\\Nature_PreCast_Low_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(27)
            .Animation.READY_SPELL_OMNI.set()
            .StartAnimation.set(-1)
        )
    )