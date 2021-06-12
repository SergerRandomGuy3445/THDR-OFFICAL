const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'send the users ping',
	execute(message, args) {
        var ping = Date.now() - message.createdTimestamp + " ms";
          return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `**Your ping is ${ping}**`
                }
            })
    
	},
};