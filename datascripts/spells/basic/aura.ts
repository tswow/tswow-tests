import { std } from "wow/wotlk";

export const AURA_SPELL = std.Spells
    .create('tswow-tests','aura-spell')
    // =================================================
    // 
    // - Basic Properties -
    // 
    // =================================================
    .Name.set({"enGB":"Aura Spell"})
    .Description.set({"enGB":"An paladin-style aura that increases armor by $s1%.\n\nSee datascripts/spells/basic/aura.ts"})
    .AuraDescription.set({"enGB":"Increases armor by $s1."})
    .Icon.setFullPath("Interface\\Icons\\Spell_Holy_DevotionAura")
    .ActiveIcon.setFullPath("Interface\\Icons\\Spell_Nature_WispSplode")
    .PreventionType.SILENCE.set()
    .Attributes.set(['NOT_SHAPESHIFTED','SHEATHE_UNCHANGED','CASTABLE_WHILE_MOUNTED','CASTABLE_WHILE_SITTING','CAN_TARGET_DEAD','DISPLAY_IN_STANCE_BAR','CANT_TRIGGER_PROC','PERSISTS_DEATH','NO_CHECK_CAST_POWER','UNK43','REACTIVATE_AT_RESURRECT'])
    .SchoolMask.set(['PHYSICAL','HOLY'])
    .Cooldown.mod(x=>x
        .GlobalTime.set(1500)
        .GlobalCategory.set(133)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(5)
    )
    // =================================================
    // 
    // - Effects -
    // 
    // =================================================
    .Effects.addMod(x=>x
        .Type.APPLY_AREA_AURA_RAID.set()
        .Aura.MOD_TARGET_ARMOR_PCT.set()
        .PercentBase.set(10)
        .ImplicitTargetA.UNIT_CASTER.set()
        .Radius.set(23)
        .Radius.setSimple(100) // 100 yards
    )
    // =================================================
    // 
    // - Visuals -
    // 
    // =================================================
    .Visual.modRefCopy(x=>x
        .CastKit.modRefCopy(x=>x
            .BaseEffect.modRefCopy(x=>x
                .Name.set("Devotion Aura Base")
                .Filename.set("Spells\\DevotionAura_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(0)
            .Animation.SPELL_CAST_OMNI.set()
            .StartAnimation.set(-1)
        )
        .ImpactKit.modRefCopy(x=>x
            .BaseEffect.modRefCopy(x=>x
                .Name.set("Devotion Aura Base")
                .Filename.set("Spells\\DevotionAura_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(1505)
            .Animation.set(-1)
            .StartAnimation.set(-1)
        )
    )