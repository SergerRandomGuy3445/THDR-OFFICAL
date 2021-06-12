const https = require('https');
const Discord = require('discord.js');

module.exports = {
	name: 'google',
	description: 'GOOGLE WHEN SMART!',
	execute(message, args) {
  let MSG = message.content.split(" ");
  let Query = MSG.slice(1).join("+");
  let QueryD = MSG.slice(1).join(" ");
  if (!Query) message.reply("Please specify a search query.")
  else
  {
    let GG = new Discord.MessageEmbed()
    .setTitle(`Your Search Query: ${QueryD}`)
    .setDescription(`**Search Result** - [Click Here](https://www.google.com/search?q=${Query})`)
    .setColor("GREEN")
    .setFooter("Search Results")
    .setThumbnail(`${message.author.displayAvatarURL({dynamic : true})}`)
    .setImage(`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png`)
    message.channel.send(GG)
  }
	},
};