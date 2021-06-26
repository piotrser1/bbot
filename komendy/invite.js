module.exports = {
    name: 'invite',
    description: 'zaproś bota na własny serwer!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
 
        .setColor('#FF0000')
        .setTitle('Zaproś mnie na swój serwer!')
        .setURL('https://discord.com/oauth2/authorize?client_id=857981903693283349&scope=bot&permissions=8589934591')
        .setDescription('Aby zaprosić mnie na własny serwer, użyj **linku powyżej**!')
        .setFooter('Mam nadzieję że będziesz się świetnie bawił z **BBOTEM!**');
 
        message.channel.send(newEmbed);
    }
}