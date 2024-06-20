const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Informação sobre os comandos disponíveis",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Comandos musicais**')
        .addFields(
          { name: '🎹 Play', value: 'Toca uma música de um link ou texto' },
          { name: '⏹️ Stop', value: 'Me faz parar de tocar música e sair da call (paia ein)' },
          { name: '📊 Queue', value: 'Ver e mexer na lista de músicas' },
          { name: '⏭️ Skip', value: 'Pula a música atual' },
          { name: '⏸️ Pause', value: 'Pausa a música atual' },
          { name: '▶️ Resume', value: 'Volta a música atual' },
          { name: '🔁 Loop', value: 'Liga o modo loop' },
          { name: '🔄 Autoplay', value: 'Liga o autoplay (as músicas ficam por minha conta)' },
          { name: '⏩ Seek', value: 'Vai para uma parte específica da música' },
          { name: '⏮️ Previous', value: 'Toca a música anterior' },
          { name: '🔀 Shuffle', value: 'Embaralha as músicas da fila' },
          { name: '📃 playlist', value: 'Mexe nas playlists' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Comandos básicos**')
        .addFields(
          { name: '🏓 Ping', value: "Checa a latência do bot" },
          { name: '🗑️ Clear', value: 'Limpa a fila de músicas' },
          { name: '⏱️ Time', value: 'Mostra o tempo da música atual' },
          { name: '🎧 Filter', value: 'Coloca filtros de áudio nas músicas' },
           { name: '🎵 Now Playing', value: 'Mostra informação sobre a música atual' },
          { name: '🔊 Volume', value: 'Ajusta o volume ( aumenta o som marcelo )' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1150827819547504741/1168917372267151370/standard.gif?ex=65538222&is=65410d22&hm=b4994392f44679da41fc9304eb69deaa3769e136057556deec0db69ae8d33a97&')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/cBMWNEeQcW')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://github.com/Lippones/LippeBot')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};