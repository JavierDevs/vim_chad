const fs = require('fs')
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const myIntents = new Intents(32767);
const bot = new Client({ intents: myIntents });
bot.commands = new Discord.Collection();
bot.responses = new Discord.Collection();
function commander(){
console.log(`\x1b[32m%s`, "---------------------------------------------------------------------")
console.log(`\x1b[32m%s`, "⭕ Commands ⭕")
console.log(`\x1b[32m%s`, "---------------------------------------------------------------------")
fs.readdirSync('./commands').forEach(dirs => {
const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`\x1b[32m%s`, `Loading command ${file} from ${dirs} ✅!`);
        bot.commands.set(command.name.toLowerCase(), command);
    };
});
console.log(`\x1b[32m%s`, "---------------------------------------------------------------------")
}

function eventer() {
console.log(`\x1b[35m%s`, "---------------------------------------------------------------------")
console.log(`\x1b[35m%s`, "⭕ Events ⭕")
console.log(`\x1b[35m%s`, "---------------------------------------------------------------------")
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
    console.log(`\x1b[35m%s`,`Loading discord.js event ${file} ✅!`);
    const event = require(`./events/${file}`);
    bot.on(file.split(".")[0], event.bind(null, bot));
};
console.log(`\x1b[35m%s`, "---------------------------------------------------------------------")
}

module.exports = {eventer: eventer, commander: commander, bot: bot}