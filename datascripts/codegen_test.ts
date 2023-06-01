import { std } from "wow/wotlk"

export const SHADOWMOURNE = std.Items.create('mod','shadowmourne')
    .Name.enGB.set('shadowmourne')
    .ItemSetName.enGB.set('Shadowmourne')
    .Bonding.BINDS_ON_PICKUP.set()
    .Class.AXE_2H.set()
    .InventoryType.TWOHAND.set()
    .Material.METAL.set()
    .SheatheType.set(1)
    .Quality.ORANGE.set()
    .ClassMask.set(['WARRIOR','PALADIN','DEATH_KNIGHT',0x200,0x800,0x1000,0x2000,0x4000,0x8000,0x10000,0x20000])
    .RaceMask.set(['HUMAN','ORC','DWARF','NIGHTELF','UNDEAD','TAUREN','GNOME','TROLL','BLOODELF','DRAENEI',0x100,0x800,0x1000,0x2000,0x4000,0x8000,0x10000,0x20000,0x40000,0x80000,0x100000,0x200000,0x400000,0x800000,0x1000000,0x2000000,0x4000000,0x8000000,0x10000000,0x20000000,0x40000000])
    .Damage.add('PHYSICAL',954,1592)
    .Delay.set(3700)
    .Durability.set(145)
    .ItemLevel.set(284)
    .MaxCount.set(1)
    .MaxStack.set(1)
    .Sheath.set(1)
    .SocketBonus.set(3312)
    .SoundOverride.set(-1)
    .Socket.add('RED',0)
    .Socket.add('RED',0)
    .Socket.add('RED',0)
    .Stats.add('STRENGTH',223)
    .Stats.add('STAMINA',198)
    .Stats.add('CRIT_RATING',114)
    .Stats.add('ARMOR_PENETRATION_RATING',114)
    .Spells.addMod(x=>x
        .Spell.set(71903)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Spells.addMod(x=>x
        .Spell.set(-1)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Spells.addMod(x=>x
        .Spell.set(-1)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .DisplayInfo.modRefCopy('mod','shadowmourne_display',x=>x
        .Icon.set('inv_axe_113')
        .Models.set(0,'axe_2h_icecrownraid_e_01.mdx','axe_2h_icecrownraid_e_01')
        .Visuals.modRefCopy(x=>x
        )
    )


export const THORIDAL = std.Items.create('mod','thoridal')
    .Name.enGB.set('thoridal')
    .Description.enGB.set('The energy of the Sunwell courses through Thori\'dal.')
    .ItemSetName.enGB.set('Thori\'dal, the Stars\' Fury')
    .Bonding.BINDS_ON_PICKUP.set()
    .Class.BOW.set()
    .InventoryType.RANGED.set()
    .Material.METAL.set()
    .Quality.ORANGE.set()
    .BonusArmor.set(59.5)
    .Damage.add('PHYSICAL',356,524)
    .Delay.set(2700)
    .Durability.set(110)
    .ItemLevel.set(164)
    .MaxCount.set(1)
    .MaxStack.set(1)
    .SoundOverride.set(-1)
    .Stats.add('AGILITY',17)
    .Stats.add('CRIT_RATING',16)
    .Spells.addMod(x=>x
        .Spell.set(15806)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Spells.addMod(x=>x
        .Spell.set(43219)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .Spells.addMod(x=>x
        .Spell.set(46699)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .DisplayInfo.modRefCopy('mod','thoridal_display',x=>x
        .Icon.set('INV_WEAPON_BOW_39')
        .SpellVisual.modRefCopy(x=>x
            .Missile.mod(x=>x
                .HasMissile.set(1)
                .Attachment.set(-1)
                .CastOffset.set({"x":0,"y":0,"z":0})
                .DestinationAttachment.set(1)
                .Model.set(3822)
                .Sound.set(4222)
                .FollowGround.mod(x=>x
                    .Approach.set(0)
                    .DropSpeed.set(0)
                    .Flags.set(0)
                    .Height.set(0)
                )
            )
            .CastKit.modRefCopy(x=>x
                .CameraShake.set(0)
                .Flags.set(0)
                .Sound.set(1146)
                .Animation.ATTACK_BOW.set()
                .StartAnimation.set(-1)
            )
            .ImpactKit.modRefCopy(x=>x
                .CameraShake.set(0)
                .Flags.set(0)
                .Sound.set(4296)
                .Animation.COMBAT_WOUND.set()
                .StartAnimation.set(-1)
            )
            .PrecastKit.modRefCopy(x=>x
                .CameraShake.set(0)
                .Flags.set(0)
                .Sound.set(1144)
                .Animation.LOAD_BOW.set()
                .StartAnimation.set(-1)
            )
        )
        .Models.set(0,'Bow_1H_Sunwell_D_02.mdx','Bow_1H_Sunwell_D_02')
    )


export const CHEFS_HAT = std.Items.create('mod','chefs_hat')
    .Name.enGB.set('chefs_hat')
    .ItemSetName.enGB.set('Chef\'s Hat')
    .Bonding.BINDS_ON_PICKUP.set()
    .Class.MISC.set()
    .InventoryType.HEAD.set()
    .Material.CLOTH.set()
    .Quality.BLUE.set()
    .BonusArmor.set(-40)
    .Disenchant.set(32)
    .ItemLevel.set(1)
    .MaxStack.set(1)
    .SoundOverride.set(-1)
    .Spells.addMod(x=>x
        .Spell.set(67556)
        .CategoryCooldown.set(-1)
        .Cooldown.set(-1)
        .Trigger.ON_EQUIP.set()
    )
    .DisplayInfo.modRefCopy('mod','chefs_hat_display',x=>x
        .Icon.set('achievement_profession_chefhat')
        .Models.set(0,'Helm_Cloth_Chefhat_A_01.mdx','helm_cloth_chefhat_a_01')
        .Texture.setIndex(0,'Robe_D_02Brown_Sleeve_AU')
        .Texture.setIndex(3,'Robe_D_02Brown_Chest_TU')
        .Texture.setIndex(4,'Robe_D_02Brown_Chest_TL')
        .HelmGeosetVis.setIndex(0,265)
        .HelmGeosetVis.setIndex(1,265)
    )


export const PALE_CORPSE_BOOTS = std.Items.create('mod','pale_corpse_boots')
    .Name.enGB.set('pale_corpse_boots')
    .ItemSetName.enGB.set('Pale Corpse Boots')
    .Bonding.BINDS_ON_PICKUP.set()
    .Class.CLOTH_EQUIP.set()
    .InventoryType.FEET.set()
    .Material.CLOTH.set()
    .Quality.PURPLE.set()
    .ClassMask.set(['WARRIOR','PALADIN','HUNTER','ROGUE','PRIEST','DEATH_KNIGHT','SHAMAN','MAGE','WARLOCK','DRUID',0x200,0x800,0x1000,0x2000,0x4000,0x8000,0x10000,0x20000])
    .RaceMask.set(['HUMAN','ORC','DWARF','NIGHTELF','UNDEAD','TAUREN','GNOME','TROLL','BLOODELF','DRAENEI',0x100,0x800,0x1000,0x2000,0x4000])
    .Flags.set(['HEROIC'])
    .Armor.set(243)
    .Disenchant.set(68)
    .Durability.set(50)
    .ItemLevel.set(264)
    .MaxStack.set(1)
    .SocketBonus.set(100)
    .SoundOverride.set(-1)
    .Socket.add('BLUE',0)
    .Socket.add('YELLOW',0)
    .Stats.add('SPELL_POWER',122)
    .Stats.add('STAMINA',92)
    .Stats.add('INTELLECT',92)
    .Stats.add('SPIRIT',64)
    .Stats.add('CRIT_RATING',80)
    .DisplayInfo.modRefCopy('mod','pale_corpse_boots_display',x=>x
        .Icon.set('inv_boots_cloth_27')
        .Texture.setIndex(6,'robe_raidpriest_h_01gold_boot_ll')
        .Texture.setIndex(7,'robe_raidpriest_h_01gold_Boot_FO')
        .GeosetGroup.setIndex(0,1)
    )


export const ILLIDAN = std.CreatureTemplates.create('mod','illidan')
    .Name.enGB.set('illidan')
    .Subname.enGB.set('')
    .SheathState.set(1)
    .FactionTemplate.set(14)
    .RegenHealth.set(1)
    .Type.HUMANOID.set()
    .TypeFlags.set(['BOSS'])
    .UnitFlags.set(['REGENERATE_POWER'])
    .FlagsExtra.set(['NO_XP'])
    .UnitClass.WARRIOR.set()
    .Icon.set('[object Object]')
    .Level.set(82,82)
    .MovementSpeed.set(1,1.14286)
    .Rank.BOSS.set()
    .AttackTime.set(2000,2000,1,1)
    .Gold.set(0,0)
    .AIName.set('')
    .HoverHeight.set(1)
    .Movement.set(176)
    .Weapons.add(32633,32632,0)
    .Stats.ArmorMod.set(1)
    .Stats.DamageMod.set(35)
    .Stats.ExperienceMod.set(1)
    .Stats.HealthMod.set(160)
    .Stats.ManaMod.set(1)
    .Models.addMod(x=>x.modRefCopy('mod','illidan-display-0',x=>x
        .Model.modRefCopy(x=>x
            .ModelName.set('Creature\\Illidan\\Illidan.mdx')
            .SizeClass.set(2)
            .ModelScale.set(1)
            .Blood.set(1)
            .FootprintTexture.set(6)
            .FootprintTextureLength.set(18)
            .CollisionHeight.set(2.0309998989105225)
            .CollisionWidth.set(0.6111000180244446)
            .WorldEffectScale.set(1)
            .AttachedEffectScale.set(1)
            .AttachedEffectScale.set(1)
            .Geobox.set({minX:-5.473406791687012, minY:-4.26162576675415, minZ:-0.01807500049471855,maxX:1.2174659967422485,maxY:5.660175800323486,maxZ:7.033809185028076})
            .Sound.set(2397)
        )
        .CreatureModelScale.set(1.100000023841858)
        .CreatureModelAlpha.set(255)
        .BloodLevel.set(-1)
        .TextureVariation.setIndex(0,'Illidan')
    ))


export const TRANSLOCATION = std.GameObjectTemplates.Goobers.create('mod','translocation')
    .Faction.set(1735)
    .Type.GOOBER.set()
    .Name.enGB.set('Orb of Translocation')
    .Display.modRefCopy('mod','translocation-display',x=>x
        .ModelName.set('WORLD\\EXPANSION01\\DOODADS\\GENERIC\\BLOODELF\\TRANSLOCATOR\\BE_TRANSLOCATOR.MDX')
        .GeoBox.set({minX:-3.2665860652923584, minY:-3.266587018966675, minZ:-0.08965999633073807,maxX:3.266585111618042,maxY:3.2665860652923584,maxZ:4.369225025177002})
    )
    .Spell.set(35727)


export const SUMMONING = std.GameObjectTemplates.MeetingStones.create('mod','summoning')
    .Faction.set(35)
    .Type.MEETING_STONE.set()
    .Name.enGB.set('Meeting Stone')
    .Display.modRefCopy('mod','summoning-display',x=>x
        .ModelName.set('World\\Generic\\ActiveDoodads\\MeetingStones\\Meetingstone05.mdx')
        .GeoBox.set({minX:-2.0301129817962646, minY:-3.0554139614105225, minZ:-0.23933400213718414,maxX:2.5925090312957764,maxY:3.023228883743286,maxZ:10.828343391418457})
    )
    .MinLevel.set(13)
    .MaxLevel.set(255)
    .Area.set(2437)

console.log(std.Compare(ILLIDAN.Models.get(0).getRef().Model.getRef().row.objectify(),std.CreatureTemplates.load(32587).Models.get(0).getRef().Model.getRef().row.objectify()))