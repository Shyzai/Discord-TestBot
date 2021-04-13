module.exports = {
	name: 'userparse',
	description: 'testing!',
	execute(message, args) {

		const fs = require('fs');
		const userData = fs.readdirSync('./userdata').filter(file => file.endsWith('.json'));
		const taggedUser = message.mentions.users.first();
		if (!taggedUser) {
			fs.readFile(`./userdata/${message.author.id}.json`, `utf8`, function (err, data) {
				let jsonData = JSON.parse(data);
				message.channel.send(`UID: ${jsonData.uid}`);
				message.channel.send(`Message: ${jsonData.message}`);
				message.channel.send(`Test: ${jsonData.test}`);
			});
		} else {
			fs.readFile(`./userdata/${taggedUser.id}.json`, `utf8`, function (err, data) {
				let jsonData = JSON.parse(data);
				message.channel.send(`UID: ${jsonData.uid}`);
				message.channel.send(`Message: ${jsonData.message}`);
				message.channel.send(`Test: ${jsonData.test}`);
			});
		}



	},
};
