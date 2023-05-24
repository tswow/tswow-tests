import { std } from "wow/wotlk";

export const BEAR_SUMMON = std.CreatureTemplates
    .create('tswow-tests','bear-summon')
    .Name.enGB.set('Bear Summon')
    .Subname.enGB.set('datascripts/spells/basic/summon.ts')
    .Models.addDefaultBear()

export const SUMMON_SPELL = std.Spells
    .create('tswow-tests','summon-bear')
    // =================================================
    // 
    // - Basic Properties -
    // 
    // =================================================
    .Name.set({"enGB":"Summon Bear"})
    .Description.set({"enGB":"Summons a bear, similar to Warlock-style summoning spells.\n\nSee datascripts/spells/basic/summon.ts"})
    .Icon.setFullPath("Interface\\Icons\\Ability_Hunter_Pet_Bear")
    .PreventionType.SILENCE.set()
    .Attributes.set(['NOT_SHAPESHIFTED','DISMISS_PET','UN_AUTOCASTABLE_BY_PET'])
    .InterruptFlags.set(['ON_MOVEMENT','ON_PUSHBACK','ON_INTERRUPT_CAST',0x8])
    .SchoolMask.set(['PHYSICAL','SHADOW'])
    .DefenseType.set(1)
    .Family.set(5)
    .ClassMask.set(536870912,0,0)
    .ItemEquips.set(-1,0,0)
    .Levels.set(1,1,0)
    .Duration.modRefCopy(x=>x
        .Duration.set(-1)
        .MaxDuration.set(-1)
    )
    .CastTime.modRefCopy(x=>x
        .Base.set(10000)
        .Minimum.set(10000)
    )
    .Cooldown.mod(x=>x
        .GlobalTime.set(1500)
        .GlobalCategory.set(133)
    )
    .Power.mod(x=>x
        .Type.MANA.set()
        .CostPercent.set(64)
    )
    // =================================================
    // 
    // - Effects -
    // 
    // =================================================
    .Effects.addMod(x=>x
        .Type.SUMMON_PET.set()
        .SummonedCreature.set(BEAR_SUMMON.ID)
    )
    // =================================================
    // 
    // - Visuals -
    // 
    // =================================================
    .Visual.modRefCopy(x=>x
        .CastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Summon Precast Hand")
                .Filename.set("Spells\\Summon_PreCast_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .BaseEffect.modRefCopy(x=>x
                .Name.set("SummonPet Cast Impact Base")
                .Filename.set("Spells\\SummonPet_Cast_Impact_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(6096)
            .Animation.SPELL_CAST_OMNI.set()
            .StartAnimation.set(-1)
        )
        .ChannelKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Magic PreCast Hand")
                .Filename.set("Spells\\Magic_PreCast_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(3136)
            .Animation.CHANNEL_CAST_DIRECTED.set()
            .StartAnimation.set(-1)
        )
        .PrecastKit.modRefCopy(x=>x
            .addBothHands(x=>x
                .Name.set("Summon Precast Hand")
                .Filename.set("Spells\\Summon_PreCast_Hand.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .BaseEffect.modRefCopy(x=>x
                .Name.set("SummonPet PreCast Impact Base")
                .Filename.set("Spells\\SummonPet_Impact_Base.mdx")
                .AreaSize.set(1)
                .Scale.set(1,0.009999999776482582,100)
            )
            .CameraShake.set(0)
            .Flags.set(0)
            .Sound.set(6554)
            .Animation.READY_SPELL_OMNI.set()
            .StartAnimation.set(-1)
        )
    )