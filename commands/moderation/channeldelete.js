module.exports = {
	name: 'channeldelete',
	description: 'yes!',
	execute(message, args) {
     if(message.member.hasPermission("MANAGE_CHANNELS")) {
	message.channel.delete()
     } else {
       message.reply("You dont have permission to delete channels.")
     }
	},
};

