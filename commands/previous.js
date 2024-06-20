const db = require("../mongoDB");
module.exports = {
  name: "previous",
  description: "Toca a música anterior",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) return interaction.reply({ content: `⚠️ Não tem música tocando brother`, ephemeral: true }).catch(e => { })
      try {
        let song = await queue.previous()
        interaction.reply({ content: `**Presenciem a melodia do passado!**` }).catch(e => { })
      } catch (e) {
        return interaction.reply({ content: `❌ Sem música anterior`, ephemeral: true }).catch(e => { })
      }
    } catch (e) {
    console.error(e); 
  }
  },
};
