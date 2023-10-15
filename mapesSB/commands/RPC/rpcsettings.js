const Discord = require("sd-v13.js");
const {  language, savedb } = require("../../fonctions")

 module.exports = {
  name: "rpcsettings",
  description: "Config your rpc",
  run: async (client, message, args, db, prefix) => {
    try{

        message.edit(await language(client, `<a:Butterfly:1117049511097946112>__**mapes- Rpc Settings**__<a:Butterfly:1117049511097946112>

> Nom : \`${db.rpctitle || "None"}\`
> Type : \`${db.rpctype || "None"}\`
> State : \`${db.rpcstate || "None"}\`
> Détails : \`${db.rpcdetails || "None"}\`
> App ID : \`${db.appid || "None"}\`
> Petite Image : \`${db.rpcsmallimage || "None"}\`
> Texte Petite Image : \`${db.rpcsmallimagetext || "None"}\`
> Grande Image : \`${db.rpclargeimage || "None"}\`
> Texte Grande Image : \`${db.rpclargeimagetext || "None"}\``,


`<a:Butterfly:1117049511097946112>__**mapes- Rpc Settings**__<a:Butterfly:1117049511097946112>
        
> Name : \`${db.rpctitle || "None"}\`
> Type : \`${db.rpctype || "None"}\`
> State : \`${db.rpcstate || "None"}\`
> Details : \`${db.rpcdetails || "None"}\`
> App ID : \`${db.appid || "None"}\`
> Small Image : \`${db.rpcsmallimage || "None"}\`
> Small Text : \`${db.rpcsmallimagetext || "None"}\`
> Large Image : \`${db.rpclargeimage || "None"}\`
> Large Text : \`${db.rpclargeimagetext || "None"}\``))

        }
        catch(e){}
    }
 }