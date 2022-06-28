// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { ODc2MTY4Nzg2NDIyNjg1Njk2.G6kMxu.uAmW0U35ESV2rwTd8tZM06EbAAymPuAPPIA6sU } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(ODc2MTY4Nzg2NDIyNjg1Njk2.G6kMxu.uAmW0U35ESV2rwTd8tZM06EbAAymPuAPPIA6sU);
