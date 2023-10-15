// command to get profile picture
const Discord = require("sd-v13.js");
const {  language } = require("../../fonctions")

module.exports = {
  name: "mod",
  description: "Menu Mod",
  run: async (client, message, args, db, prefix) => {
      message.edit(await language(client, `<a:Butterfly:1117049511097946112> __**mapes- Modération**__ <a:Butterfly:1117049511097946112>
\`${prefix}kickbots\` ➜ **Expulse tout les bots du serveur**
\`${prefix}clearperms\` ➜ **Désactive la totalité des permissions dangereuse présente sur le serveur (rôles, administrateur)**
\`${prefix}renew\` ➜ **Recréé le salon demandé (utilisable uniquement sur un serveur)**`,
    `<a:Butterfly:1117049511097946112> __**mapes- Moderation**__ <a:Butterfly:1117049511097946112>
\`${prefix}kickbots\` ➜ **Kick all bots from the guild**
\`${prefix}clearperms\` ➜ **Disable all dangerous permissions on the server (roles, administrator)**
\`${prefix}renew\` ➜ **Recreate a channel (usable in guild only)**`))
  }
}