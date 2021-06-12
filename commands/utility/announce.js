const Discord = require('discord.js');

module.exports = {
	name: 'announce',
	description: 'send the users ping',
	execute(message, args) {
const anntext = message.content.slice("".length).trim().split(/ +/);
anntext.shift().toLowerCase().split(" ")[0]
 let embed = new Discord.MessageEmbed()
 .setDescription(`**${anntext.join(" ")}**`)
 .setColor("RANDOM")
 .setFooter(`Announce by ${message.author.tag}`)
 message.channel.send(embed)
 message.delete()
}
}