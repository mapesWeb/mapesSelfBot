// command to get profile picture
const Discord = require("sd-v13.js");
const {  language } = require("../../fonctions")

module.exports = {
  name: "status",
  description: "Menu status",
  run: async (client, message, db, args, prefix) => {
    try{

        message.edit(await language(client, `
<a:Butterfly:1117049511097946112> __**mapes- Status**__ <a:Butterfly:1117049511097946112>
\`${prefix}setstatus [online, idle, dnd, invisible]\` ➜ **Changer le statut**
\`${prefix}setrpc [rpcname]\` ➜ **Mettre une rich présence en activité ${prefix}setrpc list pour la liste**
\`${prefix}spotify [text]\` ➜ **Activité spotify**
\`${prefix}clearstatus\` ➜ **Retire l'activité**
\`${prefix}clocktime [on/off]\` ➜ **Mets le temps actuel en activité**`, 
`
<a:Butterfly:1117049511097946112> __**mapes- Status**__ <a:Butterfly:1117049511097946112>
\`${prefix}setstatus [online, idle, dnd, invisible]\` ➜ **Change the status**
\`${prefix}setrpc [rpcname]\` ➜ **Set a rich presence to active ${prefix}setrpc list for the list**
\`${prefix}spotify [text]\` ➜ **Spotify activity**
\`${prefix}clearstatus\` ➜ **Remove activity**
\`${prefix}clocktime [on/off]\` ➜ **Set current time to active**`))

    }
    catch(e){}
  }
}