//Breathe easy, A discord bot to bring relaxation and good vibes to it's users
//https://discordapp.com/oauth2/authorize?botBE_id=626274863220523008&permissions=573627457&scope=bot

const discord = require('discord.js'),
  botBE = new discord.Client(),
  auth = require('./Meta Data/Auth.json'),
  config = require('./Meta Data/Config.json');
//Importing the discord library and meta data and initialising a botBE
const admin = require('./Commands/BreatheEasy_Admin.js'),
  ping = require('./Commands/BreatheEasy_Ping.js'),
  help = require('./Commands/BreatheEasy_Help.js'),
  prompt = require('./Commands/BreatheEasy_Prompt.js'),
  request = require('./Commands/BreatheEasy_Request.js'),
  breath = require('./Commands/BreatheEasy_Breathing.js'),
  count = require('./Commands/BreatheEasy_Counting.js'),
  feedback = require('./Commands/BreatheEasy_Feedback.js'),
  hug = require('./Commands/BreatheEasy_Hug.js'),
  intro = require('./Commands/BreatheEasy_intro.js'),
  encourage = require('./Commands/BreatheEasy_Encouragement.js'),
  reddit = require('./Commands/BreatheEasy_Reddit.js'),
  updates = require('./Commands/BreatheEasy_Updates.js');
//Importing the commands

const adminID = ('343352390977585162');
//Seting myself as admin so i can limit some commands

botBE.on('ready', function() {
  console.log('\x1b[36m%s\x1b[0m', `Breathe Easy has logged in`);
  console.log('\x1b[36m%s\x1b[0m', `Breathe Easy has connected to ${botBE.guilds.size} guilds with ${botBE.users.size} users`);
  botBE.user.setActivity('/help for help || Everything is going to be okay, I promise <3');
});
//Logging messages to console when Breathe Easy comes online

botBE.on('message', async function(msg) {
  if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;
  //Ignores all messages not starting with the prefix and by the bot himself

  const args = msg.content.slice(config.prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  //declare's the args variable and command variable

  switch (command) {
    case 'welcome':
      intro(msg.author.tag, msg.guild.name, msg.channel);
      break;
    case 'ping': //A simple ping command
      ping(botBE.ping, msg.author.tag, msg.guild, msg.channel);
      break;
    case 'help': //Sends a help block
      help(msg.author.tag, msg.guild, msg.channel);
      break;
    case 'feedback': //Sends feedback to me via the bot
      feedback(msg.content.slice(command.length + 1), msg.author.tag, msg.guild, msg.channel, botBE.guilds.get('560014471599489046').channels.get('627248802084159507'));
      break;
    case 'admin': //Admin commands
      if (msg.author.id === adminID) {
        admin(args[0], botBE, msg.author.tag, msg.guild, msg.channel, auth.token, botBE.guilds.size, botBE.users.size, msg.content.slice(command.length + 9));
      } else {
        msg.channel.send('Only Wasteland can touch me there UwU');
        console.log('\x1b[35m%s\x1b[0m', `${msg.guild}:${msg.author.tag} Admin command refuse`);
      }
      break;
    case 'prompt': //Sends a visualtion prompt
      prompt(args[0], msg.author.tag, msg.guild, msg.channel);
      break;
    case 'request': //Allows users to send requests for prompts to me
      request(msg.content.slice(command.length + 1), msg.author.tag, msg.guild, msg.channel, botBE.guilds.get('560014471599489046').channels.get('627342241253425153'));
      break;
    case 'breath': //Sends a breathing exercise
    case 'breathe':
      breath(msg.author.tag, msg.guild, msg.channel);
      break;
    case 'count': //Sends a counting exercise
      count(msg.author.tag, msg.guild, msg.channel);
      break;
    case 'hug': //Sends a hug to people you mention
      hug(msg.mentions.members.first(), msg.author.tag, msg.guild, msg.author.username, msg.channel, botBE.user.id);
      break;
    case 'encourage': //Sends encouraging messages
    case 'encouragement':
      encourage(msg.author.tag, msg.guild, msg.channel);
      break;
    case 'reddit': //Sends cat images
      reddit(args[0], msg.author.tag, msg.guild, msg.channel);
      break;
    case 'updates': //Informs the user of upcoming features and changes
    case 'update':
      updates(msg.author.tag, msg.guild, msg.channel);
      break;
  }
  return;
});

botBE.on('guildCreate', async function(guild) {
  console.log('\x1b[36m%s\x1b[0m', `Breathe Easy has joined ${guild.name}`)
});

botBE.on('guildDelete', async function(guild) {
  console.log('\x1b[36m%s\x1b[0m', `Breathe Easy has left ${guild.name}`);
});

botBE.login(auth.token);
//Logs into the client using the bot token
