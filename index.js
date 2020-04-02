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
    console.log('This is bot is online');
});

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'johno' :

            function play(connection, message){
                var server = servers[message.guild.id];

                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

                server.queue.shift();

                server.dispatcher.on('end', function(){
                    if(server.queue[0]){
                        play(connection, message);
                    }else{
                        connection.disconnect();
                    }
                });
            }

            if(!message.member.voice.channel) {
                message.channel.send("You must be in a channel to play the bot!");
                return;
            }
            
            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue : []
            }

            var server = servers[message.guild.id]

            server.queue.push('https://www.youtube.com/watch?v=fUbUZHBmNTU');

            if(!message.guild.voiceStates.connection) message.member.voice.channel.join().then(function(connection){
                play(connection, message);
            });
            break;

        case 'stop' :
            var server = servers[message.guild.id];
            if(server.dispatcher) server.dispatcher.end();
            message.channel.send('Gudbai my frens. Tirr Nek time');

    }
});

bot.login(token);

