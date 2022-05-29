module.exports = (bot, messageCreate) => {
const Discord = require("discord.js")
let {dprefix, ownerid, Default_dual_prefix} =  require("../config.json")

let prefix = messageCreate.content.includes(Default_dual_prefix) ? Default_dual_prefix : dprefix
if (messageCreate.author.bot || messageCreate.channel.type === 'dm') return;
    if (messageCreate.content.indexOf(prefix) !== 0){
      return;
    }
const args = messageCreate.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
if(!cmd){return}
if(cmd){
    try{
    cmd.execute(bot, messageCreate, args)
    console.log(`${messageCreate.author.username} ran ${cmd.name} or ${cmd.aliases} in ${messageCreate.channel.name}, from ${messageCreate.guild}`)
}catch(e){
    return  console.log(e)
}}
}
