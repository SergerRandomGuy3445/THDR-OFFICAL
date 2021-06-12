const Discord = require("discord.js");

module.exports = {
	name: 'avatar',
	description: 'show the avatar of the user!', 
	execute(message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("YOUR AVATAR!")
.setImage(`${message.author.displayAvatarURL({dynamic : true})}`)
.setColor("PURPLE")
.setFooter(`${message.author.username}`)
message.channel.send(embed)

	},
};