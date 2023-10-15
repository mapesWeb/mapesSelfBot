const Discord = require("sd-v13.js");
const { language } = require("../../fonctions")

module.exports = {
    name: "banner",
    description: "Get a user's banner",
    run: async (client, message, args) => {
        let user;
        if (args.length > 0) {
            const mention = args[0];
            const userID = mention.replace(/[^0-9]/g, '');

            user = client.users.cache.get(userID);

            if (!user) {
                return message.edit(await language(client, `<a:Butterfly:1117049511097946112> **__Speed__** <a:Butterfly:1117049511097946112>\n> Utilisateur introuvable. Veuillez spécifier un utilisateur valide.`, `<a:Butterfly:1117049511097946112> **__Speed__** <a:Butterfly:1117049511097946112>\n> User not found. Please specfy a valid user.`));
            }

        } else {
            user = message.author;
        }

        await user.fetch();

        if (!user.banner) {
            return message.edit(await language(client, `<a:Butterfly:1117049511097946112> **__Speed__** <a:Butterfly:1117049511097946112>\n> L'utilisateur ${user} ne possède pas de bannière.`, `<a:Butterfly:1117049511097946112> **__Speed__** <a:Butterfly:1117049511097946112>\n> User ${user} has no banner.`));
        }

        const bannerURL = user.bannerURL({ dynamic: true, format: 'png', size: 1024 });

        message.edit(await language(client, `<a:Butterfly:1117049511097946112> **__Speed__** <a:Butterfly:1117049511097946112>\n> **Bannière de ${user} :** ${bannerURL}`, `<a:Butterfly:1117049511097946112> **__Speed__** <a:Butterfly:1117049511097946112>\n> **Banner of ${user} :** ${bannerURL}`));
    }
}