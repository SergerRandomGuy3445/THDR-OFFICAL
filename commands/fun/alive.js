module.exports = {
	name: 'alive',
	description: 'Alive the user',
	execute(message, args) {
		 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention someone to Kill")
 else{
let replies = [ (`${victim} revived`), (`${victim} sent back to earth from heaven`), (`${victim} god made him a chance to survived`), 
 (`${victim} miracle save him/her`), (`A named ShardyBun revived him/her ${victim}`), 
 (`KoalaThecat saved ${victim}`), 
 (` A named serger saved ${victim}`), (`${victim} was able to fly and save him/her self`), 
 (`invisbility save him/her ${victim}`), ('${victim} was unbanned'), (`${victim} was unmute`), 
 (`${victim} was survived in a nuclear explosion`), 
 (`a named ZeroZee Revived ${victim}`), (`${victim} was able to walk away from danger`), 
 (`${victim} found alived`),]

 message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`) 
 }
	},
};