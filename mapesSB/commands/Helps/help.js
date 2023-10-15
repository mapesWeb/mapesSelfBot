// command to get profile picture
const Discord = require("sd-v13.js");
const {  language } = require("../../fonctions")

module.exports = {
  name: "help",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `
<a:Butterfly:1117049511097946112> __**mapes SB**__ <a:Butterfly:1117049511097946112>
*La guerre ne détermine pas qui est bon, seulement qui est mauvais.*
\`${prefix}help\` ➜ **Menu d'aide (ce menu)**
\`${prefix}status\` ➜ **Commande de statuts**
\`${prefix}utility\` ➜ **Commandes d'utilitaire**
\`${prefix}mod\` ➜ **Commandes de modération**
\`${prefix}fun\` ➜ **Commandes de fun**
\`${prefix}settings\` ➜ **Commandes de paramètres**`
,`<a:Butterfly:1117049511097946112> __**mapes SB**__ <a:Butterfly:1117049511097946112>
*War does not determine who is right, only who is left.*
\`${prefix}help\` ➜ **Help menu (this menu)**
\`${prefix}status\` ➜ **Status commands**
\`${prefix}utility\` ➜ **Utility commands**
\`${prefix}mod\` ➜ **Moderation commands**
\`${prefix}fun\` ➜ **Fun commands**
\`${prefix}settings\` ➜ **Parameter commands**`))
  }
}; 