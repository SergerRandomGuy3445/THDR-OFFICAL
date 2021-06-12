module.exports = {
    name: 'mute',
    description: 'this commands mutes a member!',
    execute(message, args){
        if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `***Mention The User To MUTE!***`
                }
            })
 else {
 member.roles.add("849610233793085440")
 return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `***THE USER HAS BEEN SUCESSFULLY MUTED!***`
                }
            })
 }

 }else {
return message.channel.send({
                embed: {
                    color: 0x4D5E94,
                    description: `***YOU DONT HAVE PERMISSION TO DO THAT!!***`
                }
            })
 
 } 
          
          }
    }
