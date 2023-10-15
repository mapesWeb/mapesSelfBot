const Discord = require("sd-v13.js");
const {language} = require('../../fonctions')
module.exports = {
  name: "snipe",
  description: "Snipe the last message",
  run: async (client, message, args) => {
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.edit("Aucun message enregistré.")

    message.edit(await language(client, 
      `<a:Butterfly:1117049511097946112>__**Speed-Snipe**__<a:Butterfly:1117049511097946112> 
    > Auteur: ${msg.author}
    > Message: ${msg.content}
    > Image: ${msg.image}
    > Date: <t:${parseInt(msg.date / 1000, 10)}:R>`,
      `<a:Butterfly:1117049511097946112>__**Speed-Snipe**__<a:Butterfly:1117049511097946112>
    > Author: ${msg.author}
    > Content: ${msg.content}
    > Image: ${msg.image}
    > Date: <t:${parseInt(msg.date / 1000, 10)}:R>`))    
  }
}