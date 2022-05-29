const Discord = require("discord.js");

module.exports = {
    name: 'r/neovim',
    aliases: [],
    category : 'scrapers',
    utlilistaion : 'r/neovim',
    desc : 'Sends a reddit post from the r/neovim subreddit',
async execute(bot, messageCreate, args){
    const got = await import("got")
    let subreddit = "neovim" //is a varriable so its easier to change later on
    const embed = new Discord.MessageEmbed();
    got.got(`https://www.reddit.com/r/${subreddit}/random/.json`)
        .then(response =>{
            const [list] = JSON.parse(response.body);
            const [post] = list.data.children;

            const permaLink = post.data.permalink;
            const postURL = `https://reddit.com${permaLink}`;
            const postImage = post.data.url;
            const postTitle = post.data.title;
            const postUpvotes = post.data.ups;
            const postNumComments = post.data.num_comments;
            embed.setTitle(`${postTitle}`);
            embed.setURL(`${postURL}`);
            embed.setColor("RED");
            embed.setImage(postImage);
            embed.setFooter({text:`👍 ${postUpvotes} 💬 ${postNumComments}`});
            messageCreate.channel.send({embeds:[embed]});
        })
        .catch(console.error);
    }
}
