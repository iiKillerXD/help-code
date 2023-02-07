//help-code
client.on("messageCreate", async function(message) {

  if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")

      .setTitle("Help Commands")

      .setAuthor(message.author.tag,
        message.author.avatarURL({ dynamic: true }))

      .setThumbnail(client.user.avatarURL())

      .setFooter(message.guild.name,
        message.guild.iconURL({ dynamic: true }))

      .setTimestamp()

      .setDescription(`
#-Owner
**> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description**
#-General
**> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description**
#-Admin
**> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description
> ${prefix}command | Description**
          `)

    message.reply({ embeds: [embed] })

  }

})
