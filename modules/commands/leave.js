module.exports.config = {
    name: "leave",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Kanichi",
    description: "𝖫𝖾𝖺𝗏𝗂𝗇𝗀 𝖳𝗁𝖾 𝖡𝗈𝗍 𝖳𝗈 𝖳𝗁𝖾 𝖦𝗋𝗈𝗎𝗉 𝖢𝗁𝖺𝗍",
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}