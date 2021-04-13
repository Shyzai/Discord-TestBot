module.exports = {
	name: 'newuser',
	description: 'testing3!',
	execute(message, args) {

		const fs = require('fs');
		const userData = fs.readdirSync('./userdata').filter(file => file.endsWith('.json'));
		user = {
		  "uid": `${message.author.id}`,
		  "message": "newuser",
		  "test": ""
		}
		fs.writeFile(`./userdata/${message.author.id}.json`, JSON.stringify(user, null, 2), function writeJSON(err) {
				if (err) return console.log(err);
		});


	},
};
