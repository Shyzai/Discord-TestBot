//109578
const axios = require('axios');
const discord = require('discord.js');

module.exports = {
	name: 'gacha',
	description: 'testing!',
  cooldown: '1',
	execute(message) {
    try{
      var id = Math.floor(Math.random() * 109580 ) + 1
      axios.get('https://www.animecharactersdatabase.com/vars.php')
      .then ((response) => {
        var startIndex = response.data.indexOf("axios");
        var endIndex = response.data.indexOf("<", startIndex);
        const userAgent = response.data.substring(startIndex, endIndex);

        console.log('User Agent: ' + userAgent);

        const options = {
          headers: {'User-Agent' : userAgent}
        };

        axios.get('http://www.animecharactersdatabase.com/api_series_characters.php?character_id=' + id, options)
        .then((response2) => {
          console.log(response2.data);

          const embed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(response2.data.id)
            .addFields(
              { name: response2.data.name + ' ('+response2.data.gender[0]+')', value: response2.data.origin },
              { name: 'rating', value: 'tbd'},
            )
            .setImage(response2.data.character_image);

          message.channel.send(embed);
        }, (error2) => {
          console.log('error2 : ' + error);
        })

      }, (error) => {
        console.log('error : ' + error);
      })

    }catch(e){
      console.log(e)
    }
	},
};
