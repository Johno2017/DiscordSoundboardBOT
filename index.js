const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();

const ytdl = require('ytdl-core');

var servers = {};

const token = process.env.token;

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online');
});

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'johno' :

            if(!message.member.voice.channel) {
                message.channel.send("You must be in a channel to play the bot!");
                return;
            }
            
            var server = message.guild.id

            if(!message.guild.voiceStates.connection) message.member.voice.channel.join().then(function(connection){
                const dispatcher = connection.play('./Johnpopoff.mp3');
            });
            break;
        
        case 'masi' :

            if(!message.member.voice.channel) {
                message.channel.send("You must be in a channel to play the bot!");
                return;
            }
            
            var server = message.guild.id

            if(!message.guild.voiceStates.connection) message.member.voice.channel.join().then(function(connection){
                const dispatcher = connection.play('./MasiPopOff.mp3');
            });
            break;
        
        case 'russle' :

            if(!message.member.voice.channel) {
                message.channel.send("You must be in a channel to play the bot!");
                return;
            }
            
            var server = message.guild.id

            if(!message.guild.voiceStates.connection) message.member.voice.channel.join().then(function(connection){
                const dispatcher = connection.play('./Adampopoff.mp3');
            });
            break;
        
        case 'bart' :

            if(!message.member.voice.channel) {
                message.channel.send("You must be in a channel to play the bot!");
                return;
            }
            
            var server = message.guild.id

            if(!message.guild.voiceStates.connection) message.member.voice.channel.join().then(function(connection){
                const dispatcher = connection.play('./Dexpopoff.mp3');
            });
            break;

        case 'stop' :
            var server = message.guild.id;

            message.member.voice.channel.leave()
            message.channel.send('Goodbye frens');

    }
});

bot.login(token);