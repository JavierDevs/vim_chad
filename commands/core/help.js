const Discord = require("discord.js")
module.exports = {
    name: 'help',
    aliases: [''],
    category: 'core',
    utilisation: `help`,
    desc: "Fetches list of commands!",
execute(bot, messageCreate, args) {
    const embed = new Discord.MessageEmbed();
    embed.setColor("GREEN");
    const commands = bot.commands.filter(x => x.showHelp !== false);
    embed.addField(`Commands - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(', '));
    embed.setTimestamp();
    embed.setDescription("How to read: `command name(alias)`!")
    embed.setFooter({text:'USE VIM!', iconURL:messageCreate.author.avatarURL({ dynamic: true })});
    messageCreate.channel.send({ embeds: [embed] });
}}