module.exports = {
	name: 'userset',
	description: 'testing2!',
	execute(message, args) {

		const fs = require('fs');
		const userData = fs.readdirSync('./userdata').filter(file => file.endsWith('.json'));
    const taggedUser = message.mentions.users.first();
    if (!taggedUser) {
  		fs.readFile(`./userdata/${message.author.id}.json`, `utf8`, function (err, data) {
  			let jsonData = JSON.parse(data);
        var temp = "";
        var i;
        for (i = 1; i < args.length - 1; ++i) {
          temp += args[i] + " ";
        }
        temp += args[i];
        if (args[0] === `message`) {
          jsonData.message = temp;
        } else if (args[0] === `test`) {
          jsonData.test = temp;
        }

  			fs.writeFile(`./userdata/${message.author.id}.json`, JSON.stringify(jsonData, null, 2), function writeJSON(err) {
  				if (err) return console.log(err);
  			} );
  		});
    } else {
      fs.readFile(`./userdata/${taggedUser.id}.json`, `utf8`, function (err, data) {
  			let jsonData = JSON.parse(data);
        var temp = "";
        var i;
        for (i = 2; i < args.length - 1; ++i) {
          temp += args[i] + " ";
        }
        temp += args[i];
        if (args[1] === `message`) {
          jsonData.message = temp;
        } else if (args[1] === `test`) {
          jsonData.test = temp;
        }

  			fs.writeFile(`./userdata/${taggedUser.id}.json`, JSON.stringify(jsonData, null, 2), function writeJSON(err) {
  				if (err) return console.log(err);
  			} );
  		});
    }


	},
};
