module.exports = {
    name: 'kick',
    description: 'this commands kicks a member!',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `***User has Been KICKED!!!***`
                }
            })
          } else {
             return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `***Mention The User To KICK!***`
                }
            })
          }
          
          }
    }