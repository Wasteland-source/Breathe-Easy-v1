//Giving a random prompt with a relaxing image to help relaxing visualtion

module.exports = async function(setting, tag, guild, channel) {

  try {
    const discord = require('discord.js'),
      prompt = new discord.RichEmbed(),
      time = new Date();
    //initialises a new block

    let randomNumber;

    switch (setting) {
      case 'campfire':
        randomNumber = Math.ceil(Math.random() * 5)
        console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Prompt command success ${setting}\n`);
        break;
      case 'rain':
        randomNumber = Math.ceil(Math.random() * 5) + 5
        console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Prompt command success ${setting}\n`);
        break;
      case 'snow':
        randomNumber = Math.ceil(Math.random() * 4) + 10
        console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Prompt command success ${setting}\n`);
        break;
      case 'random':
        randomNumber = Math.ceil(Math.random() * 14)
        console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Prompt command success ${setting}\n`);
        break;
      default:
        const promptHelpBlock = new discord.RichEmbed();

        promptHelpBlock.addField('Keyword', '\n\n/prompt campfire\n\n/prompt rain\n\n/prompt snow\n\n/prompt random', true);
        promptHelpBlock.addField('Description', '\n\nSends a random prompt from the campfire group\n\nSends a random prompt from the rain group\n\nSends a random prompt from the snow group\n\nSends a random prompt from any group', true);
        promptHelpBlock.setColor(0x06b890);
        promptHelpBlock.setFooter('Breathe Easy');
        channel.send(promptHelpBlock);
        console.log('\x1b[36m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Prompt command success keywords\n`);
    }
    //Generates a random number based on optional inputs from the user

    console.log(randomNumber)
    switch (randomNumber) {
      case 1:
        prompt.setTitle('The Valley');
        prompt.setDescription('You sit inbetween two large hills an hour before sunset.\nAs the sun begins to retreat behind the large hill over your right shoulder you find a feeling of safety and protection from the flickering light and warmth of the campfire coupled with the security from the large hill\'s to each side of you.\nYou feel safe.');
        prompt.setColor(0xe86d0c);
        prompt.setImage('https://i.imgur.com/GK0BzRJ.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 2:
        prompt.setTitle('By The River');
        prompt.setDescription('Your legs dangle down the side of the raised grass platform, The tips of your shoe\'s creating light ripple\'s and trail\'s in the otherwise placid water.\nA small school of fish swim up to the surface of the river, gliding and flowing around and between your feet with innocent glee.\nThe light of the fire flickers across your face as you smile and follow a particularly curious fish with the tip of your shoe.\nYou feel at one with nature.');
        prompt.setColor(0xe86d0c);
        prompt.setImage('https://i.imgur.com/nZMOhL2.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 3:
        prompt.setTitle('The Lakeside');
        prompt.setDescription('You\'re looking across the the edge of the lake watching your partner run around with your big goofball dog.\nThey throw a stick into the lake and your fluffy best friend dives into the still, undisturbed lake sending loud ripple\'s and splashes outwards from the now soaking pup.\nYour partner is covered from head to toe in the water thrown up from the pup and you can hear their laughter from your seat by the campfire and you feel it deep inside you.\nYou feel warm inside.');
        prompt.setColor(0xe86d0c);
        prompt.setImage('https://i.imgur.com/Ko4prHL.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 4:
        prompt.setTitle('The Beach');
        prompt.setDescription('A dozen people sit round the bonfire on the beach just a stone\'s throw from the light rythmic rolling of the waves, some you know, some you don\'t.\nA man you don\'t know sit\'s opposite you strumming an old worn guitar producing a warm soft melody in time with the rolling waves, You friend sing\'s along with a smile on her face and you all listen intently, taking in the warmth of the fire and the warmth of the song.\nYou are not alone.');
        prompt.setColor(0xe86d0c);
        prompt.setImage('https://i.imgur.com/3z21rbf.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 5:
        prompt.setTitle('The Forest');
        prompt.setDescription('You lay on a stack of hay with your partner, You\'re firmly held in their arms and vice versa.\nWhen you first dropped gently into the haystack and invited your partner to join you it was light and the sun was prominent in the sky, Now you slowly wake from a blissful respite as the sun set\'s behind the tree\'s and the only source of light and warmth soon become\'s your fire and your partner.\nA smile glide\'s across your face and you pull your partner tightly toward\'s you, Resting their forehead against your own.\nYou feel loved.');
        prompt.setColor(0xe86d0c);
        prompt.setImage('https://i.imgur.com/2gyMZYs.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 6:
        prompt.setTitle('Travelling');
        prompt.setDescription('You\'d always heard bad things about this place. The people,the culture,the traffic,the food but your experience hasn\'t been how people described it here, You\'d found this place to be inviting and welcoming and kind.\nYou stand with the warm rain coating your surroundings with a comforting haze, The streets aren\'t crowded like people said they would be, The open area around you had only one or two people walking home presumably after a long shift at work and even with the rain pelting down on them they\'d flash you a smile as they passed under the bright red sign to your hotel. This isn\'t a cold and distant place, It\'s warm and caring.\nYou\'ve found your happy place.');
        prompt.setColor(0x21618c);
        prompt.setImage('https://i.imgur.com/Hwvku8q.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 7:
        prompt.setTitle('Against The Window');
        prompt.setDescription('Your head rests against the window and you look out onto the street below, The rain outside slowly rolling down the window and leaving cool streaks you can feel through the glass.\nYou see a squirrel run across the road outside and run up a tree escaping the rain and the cold successfully and you feel happy for it.\nNature is beautiful.');
        prompt.setColor(0x21618c);
        prompt.setImage('https://i.imgur.com/TJm2nf6.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 8:
        prompt.setTitle('Hot Drink');
        prompt.setDescription('Sitting by the window with a book and a hot drink as the cold rain poured down was always a favourite pass time of yours.\nYou find beauty in the juxtapostion between the still,ordered passtime of reading and the choatic force just outside the window, The freezing winds and cold rain and the hot drink you sip from gleefully as you read.\nYou find beauty in the little things');
        prompt.setColor(0x21618c);
        prompt.setImage('https://i.imgur.com/teXcaHM.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 9:
        prompt.setTitle('Sitting On Your Porch');
        prompt.setDescription('Your chair squeaks quietly as you press your weight into the back rest, The rain pounds against the roof above you and you can hear it run down the diveted slates and drip down from the roof to the floor creating an ever-shifting barrier of water between the cold, wet outside and the warm dry porch.\nYou reach your hand out towards the wall and let your hand hover in the middle, The cold water flows down the side your hand and down between your fingers and you chuckle to yourself as you rotate your hand finding some simple enjoyment in the rain running off your hand.\nYou love the rain.')
        prompt.setColor(0x21618c);
        prompt.setImage('https://i.imgur.com/nkeinBG.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 10:
        prompt.setTitle('Down The Forest Path');
        prompt.setDescription('You\'re walking down the forest path home after a hard day at work and it begins to rain.\nYou wince expecting to be covered in wet rain but you never feel it hit you, the rain simply patters against the leaves of the trees as they\'ve created a roof above you.\nThe rain has cooled the air around you and relaxes you on your walk back home, After such a long hard day it\'s nice to really feel surrounded by nature and all of it\'s wonderers without the wet rain drenching you.\nYou feel lucky.');
        prompt.setColor(0x21618c);
        prompt.setImage('https://i.imgur.com/docyS2q.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 11:
        prompt.setTitle('Aurora Borealis Cabin')
        prompt.setDescription('The air is cool and soft against your skin as you walk down to your weekend cabin, There is thick snow all around but the immediate area around the cabin up on the cliff is a salvation from the deep gutters of snow dominating this place.\nIf you didn\'t know better you\'d say this cabin is magic, A place of saftey in a place that should hold no respite.\nYou feel enchanted');
        prompt.setColor(0xffffff);
        prompt.setImage('https://i.imgur.com/DwCU4wh.gif');
        prompt.setFooter('Prompt provided by queen of the stone age');
        channel.send(prompt);
        break;
      case 12:
        prompt.setTitle('Winter Cabin');
        prompt.setDescription('The fire crackles gently and throws warmth out into the snug shielded room.\nThe wind skirts along the walls of your cabin and snow comes to a steady stop just outside of the protective, comforting bulwark from the cold and choatic outside.\nYour knees are up against your chest as you sit comfy in your soft warm chair with your favourite drink safe from any cold or negativity in your shelter.\nYou feel protected.');
        prompt.setColor(0xffffff);
        prompt.setImage('https://i.imgur.com/7jRLq1B.gif');
        prompt.setFooter('Prompt provided by queen of the stone age');
        channel.send(prompt);
        break;
      case 13:
        prompt.setTitle('Kitten\'s First Snow');
        prompt.setDescription('You loved your new kitten.\nThey\'d turned up at your door one day cold and wet presumably after being abandoned by it\'s previous family. You took it in, gave it warmth, dryed it off and fed it and ever since it hasn\'t left your side, you\'re it\'s saviour and protector.\nIt watched intently out the window as the first snow of winter gently began to rest on the ground, Piling up into a deep carpet.\nYou let it out and watch as it experiences something it never has before and never would have had you not brought it safety and a happy, content life.\nYou are a good person.');
        prompt.setColor(0xffffff);
        prompt.setImage('https://i.imgur.com/CL5b3bz.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
      case 14:
        prompt.setTitle('Aurora Borealis Tent\'s');
        prompt.setDescription('You always loved the northern lights, The shifting mass of light and colour blanketing the sky was a mircle of nature. Experiencing the majesty and beauty of this remarkable feet of pure cosmic coincidence with others however, Looking up at the sky and knowing the people to both sides of you are in the same stunned awe you are brings a feeling of intense warmth and joy to your heart even in such a frigid, harsh climate.\nYou can see light even in darkness');
        prompt.setColor(0xffffff);
        prompt.setImage('https://i.imgur.com/twp5la1.gif');
        prompt.setFooter('Breathe Easy');
        channel.send(prompt);
        break;
    }
    //Setting the title,image,description and colour of the prompt block
  } catch {
    channel.send('*Breathe Easy is flipping through a list of prompts muttering to herself and seems to lose her place*\n\noh no! I\'ve really messed up retrieving this prompt for you. Try again and i\ll have another go at it');
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Prompt command fail\n`);
    return;
  }
}
