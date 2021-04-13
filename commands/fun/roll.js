module.exports = {
	name: 'roll',
	description: 'testing4!',
	execute(message, args) {
		message.channel.send(Math.floor(Math.random() * (args[0]) ) + 1);
	},
};
