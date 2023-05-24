import { std } from "wow/wotlk";

export const BOLT_SPELL = std.Spells
    .create('tswow-tests','bolt-spell')
    // =================================================
    // 
    // - Basic Properties -
    // 
    //
    // =================================================
    .Name.set({"enGB":"Bolt Spell"})
    .Description.set({"enGB":"A bolt spell similar to mages 'Fireball' ability.\n\nSee datascripts/spells/basic/bolt.ts"})
    .AuraDescription.set({"enGB":"$s2 Fire damage every $t2 seconds."})
    .Icon.setFullPath("Interface\\Icons\\Spell_Fire_FlameBolt")
    .PreventionType.SILENCE.set()
    .FacingCasterFlags.set(['SPELL_FACING_FLAG_INFRONT'])
    .Attributes.set(['NOT_SHAPESHIFTED'])
    .InterruptFlags.set(['ON_MOVEMENT','ON_PUSHBACK','ON_INTERRUPT_CAST',0x8])
    .SchoolMask.set(['PHYSICAL','FIRE'])
    .Duration.modRefCopy(x=>x
        .Duration.set(4000)
        .MaxDuration.set(4000)
    )
    .CastTime.modRefCopy(x=>x
        .Base.set(1500)
        .Minimum.set(1500)
    )
    .Cooldown.mod(x=>x
        .GlobalTime.set(1500)
        .GlobalCategory.set(133)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(8)
    )
    .Range.setSimple(0,35)
    // =================================================
    // 
    // - Effects -
    // 
    // =================================================
    .Effects.addMod(x=>x
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(14)
        .DamageDieSides.set(9)
        .DamagePerLevel.set(0.6000000238418579)
        .DamagePerCombo.set(0)
        .BonusMultiplier.set(0.12300000339746475)
        .MultipleValue.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
        .ImplicitTargetB.set(0)
    )
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_DAMAGE.set()
        .DamagePeriod.set(2000)
        .DamageBase.set(1)
        .DamageDieSides.set(1)
        .DamagePerLevel.set(0)
        .DamagePerCombo.set(0)
        .BonusMultiplier.set(0)
        .MultipleValue.set(0)
        .ChainTargets.set(0)
        .ChainAmplitude.set(1)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
        .ImplicitTargetB.set(0)
    )
    // =================================================
    // 
    // - Visuals -
    // 
    // =================================================
    .Visual.modRefCopy(x=>x
        .Missile.mod(x=>x
            .HasMissile.set(1)
            .Attachment.set(-1)
            .CastOffset.set({"x":0,"y":0,"z":0})
            .DestinationAttachment.set(1)
            .Model.set(365)
            .Sound.set(3011)
            .FollowGround.mod(x=>x
                .Approach.set(750)
                .DropSpeed.set(300)
                .Flags.set(6)
                .Height.set(100)
            )
        )
        .CastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Fire Cast Hand")
                .Filename.set("Spells\\Fire_Cast_Hand.mdx")
                .AreaSize.set(0)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(1484)
            .Animation.SPELL_CAST_DIRECTED.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x=>x
            .ChestEffect.modRefCopy(x=>x
                .Name.set("MoltenBlast Impact Chest")
                .Filename.set("Spells\\MoltenBlast_Impact_Chest.mdx")
                .AreaSize.set(0)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(1507)
            .Animation.COMBAT_WOUND.set()
            .StartAnimation.set(-1)
        )
        .PrecastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Fire Precast Hand")
                .Filename.set("Spells\\Fire_Precast_Hand.mdx")
                .AreaSize.set(0)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(702)
            .Animation.READY_SPELL_DIRECTED.set()
            .StartAnimation.set(-1)
        )
    )
    .Speed.set(24)