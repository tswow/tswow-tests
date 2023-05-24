// Currently not working

/*
const SCHOOL_FISH_ITEM = dummyItem('Test Locked School Fish')
std.GameObjectTemplates.FishingHoles.create('tswow-tests','fishinghole-locked')
    .Name.enGB.set(`School of Locked Test School Fish`)
    .Display.set(6291)
    .Radius.set(4)
    .Lock.modRefCopy(value=>{
        value.addEmpty()
            .addLockType(19,5)
    })
    .MinSuccessOpens.set(2)
    .MaxSuccessOpens.set(6)
    .Loot.modRefCopy(table=>{
        table.addItem(SCHOOL_FISH_ITEM.ID,[100,'[0-100]'],1,1)
    })
    .Spawns.add('tswow-tests','fishinghole-locked-spawn',[
        {map:TEST_MAP.ID,x:14717.258789,y:14567.586914,z:45.616001+1.43,o:4.260241},
    ],10)
*/