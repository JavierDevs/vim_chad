const Discord = require("discord.js")
const db = require("../../assets/database.json")
let execute = function (bot, messageCreate, args) {
    if (!args[0]) {
        messageCreate.channel.send(`You need to enter a valid parameter! \n${this.utilisation}`)
        return
    }
    let subCommand = args[0].toLowerCase()
    switch (subCommand) {
        case "list":
            const listembed = new Discord.MessageEmbed()

            let ideList = Object.keys(db).map(x => `\`${x}\``).join(", ")
            let desclist = `IDES: ${ideList}`
            listembed.setColor("GREEN")
            listembed.setTitle("List of IDEs!")
            listembed.setDescription(desclist)
            listembed.setFooter({ text: `Requested by ${messageCreate.author.username}`, iconURL: messageCreate.author.avatarURL({ dynamic: true }) })
            listembed.setTimestamp()
            messageCreate.channel.send({ embeds: [listembed] })
            break
        default:
            messageCreate.channel.send(`You need to enter a valid parameter! \n${this.utilisation}`)
            break
    }

}

module.exports = {
    name: 'ide',
    aliases: [],
    category: 'guide',
    utilisation: `ide list/details`,
    desc: "Lists most popular vim forks, as well as linux related IDES!",
    execute
}
