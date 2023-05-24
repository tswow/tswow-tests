import { std } from "wow/wotlk";

export const DOT_SPELL = std.Spells
    .create('tswow-tests','dot-spell')
    // =================================================
    // 
    // - Basic Properties -
    // 
    // =================================================
    .Name.set({"enGB":"DoT Spell"})
    .Description.set({"enGB":"A DoT spell similar to warlocks 'Corruption' ability.\n\nSee datascripts/spells/basic/dot.ts"})
    .AuraDescription.set({"enGB":"$s1 Shadow damage every $t1 seconds."})
    .Icon.setFullPath("Interface\\Icons\\Spell_Shadow_AbominationExplosion")
    .PreventionType.SILENCE.set()
    .DispelType.DISPEL_MAGIC.set()
    .Attributes.set(['NOT_SHAPESHIFTED','UNK82'])
    .InterruptFlags.set(['ON_MOVEMENT','ON_PUSHBACK','ON_INTERRUPT_CAST',0x8])
    .SchoolMask.set(['PHYSICAL','SHADOW'])
    .DefenseType.set(1)
    .Priority.set(50)
    .Family.set(5)
    .ClassMask.set(2,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(4,4,9)
    .Duration.modRefCopy(x=>x
        .Duration.set(12000)
        .MaxDuration.set(12000)
    )
    .CastTime.modRefCopy(x=>x
    )
    .Cooldown.mod(x=>x
        .GlobalTime.set(1500)
        .GlobalCategory.set(133)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(9)
    )
    .Range.setSimple(0,30)
    // =================================================
    // 
    // - Effects -
    // 
    // =================================================
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_DAMAGE.set()
        .DamagePeriod.set(3000)
        .DamageBase.set(10)
        .DamageDieSides.set(1)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
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
            .Animation.SPELL_CAST_DIRECTED.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x=>x
            .ChestEffect.modRefCopy(x=>x
                .Name.set("Shadow ImpactDD Low Chest")
                .Filename.set("Spells\\Shadow_ImpactDD_Low_Chest.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(743)
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
            .Animation.READY_SPELL_DIRECTED.set()
            .StartAnimation.set(-1)
        )
    )