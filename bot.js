require('dotenv').config();
const { Client, Intents } = require('discord.js');

// Create a new Discord client
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the bot is ready, log a message
client.once('ready', () => {
  console.log('Bot is online!');
});

// Event listener for new messages
client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!ping') {
    message.channel.send('Pong!');
  }
});

// Log in to Discord using the token from the environment variables
client.login(process.env.DISCORD_TOKEN);
