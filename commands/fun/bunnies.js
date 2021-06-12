module.exports = {
	name: 'pat',
	description: 'pat the user lmfao!',
	execute(message, args) {
        let victim = message.mentions.users.first()
        if(!victim) message.reply("**Mention someone to Pat UwU(JK).**")
        else{
            return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `**${victim} was pat by ${message.author}**`
                }
            })
       
        }
	},
};