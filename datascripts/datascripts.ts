import * as fs from 'fs';
import { std } from "wow/wotlk";

let str = 'import { std } from "wow/wotlk"\n\n'

function add_item(id: number, name: string)
{
    str += std.Items.load(id).codify({mod:'mod',id:name,name:name}) + '\n\n'
}

function add_creature(id: number, name: string)
{
    str += std.CreatureTemplates.load(id).codify({mod:'mod',id:name,name:name}) + '\n\n'
}

add_item(49623,'shadowmourne')
add_item(34334,'thoridal')
add_item(46349,'chefs_hat')
add_item(51850,'pale_corpse_boots')

add_creature(32587,'illidan')

str += std.GameObjectTemplates.Goobers.load(184503).codify({mod:'mod',id:'translocation'}) + '\n\n'
str += std.GameObjectTemplates.MeetingStones.load(179596).codify({mod:'mod',id:'summoning'}) + '\n\n'
fs.writeFileSync(__dirname + '/../out.txt',str)

const MAGE = std.Classes.load('MAGE').Stats.RegenMPPerSpt.get()
std.Classes.load('HUNTER')
    .Stats.RegenMPPerSpt.set((old,index)=>MAGE[index].get());