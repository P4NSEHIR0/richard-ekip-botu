const { Discord, MessageEmbed } = require("discord.js");
require('discord-reply');
module.exports.execute = async(ModerationClient , message, args) => {
  let user = message.guild.members.cache.get(message.author.id);
  if(user.displayName.includes("[AFK]")){
    message.lineReply("Zaten AFK'sın.")
    return;
  }
   if(memberdb.cek(`${message.author.id}.afk`)) return moderationfx.embedHata(message.author, message.channel, `${emojis.hata} AFK durumdayken tekrardan __AFK__ olamazsın ${message.member}!`).then(x => x.delete({timeout: 5000}));;
 
  let sebep = args.slice(0).join(' ')
   if(!sebep) sebep = 'En Yakın Zamanda Geri Döneceğim!';

   let cezalı = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
  if(cezalı.some(a => message.content.includes(a))){
    return message.lineReply(
      new MessageEmbed()
      .setDescription('**AFK Komutu İle Reklam Yapamazsın!**')
      .setColor('RED').setFooter(config.footer)
    )
  }
            
  if(user.manageable) user.setNickname('[AFK] ' + user.displayName)
       memberdb.ayarla(`${message.author.id}.afk`, true)
       memberdb.ayarla(`${message.author.id}.afk.sure`, new Date());
      message.react(emojis.afk)

    };
      
      module.exports.config = {
          name: "afk",
          aliases: [],
          usage: "Taslak",
          description: "Taslak Komutu."
      };