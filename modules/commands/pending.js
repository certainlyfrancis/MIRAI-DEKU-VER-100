module.exports.config = {
	name: "pending",
	version: "1.0.5",
	credits: "Réynél",
	hasPermssion: 2,
	description: "Manage bot's waiting messages",
	commandCategory: "admin",
  usages: "[pending]",
	cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "invaildNumber": "%1 không phải là một con số hợp lệ",
        "cancelSuccess": "Đã từ chối thành công %1 nhóm!",
        "notiBox": "Box của bạn đã được admin phê duyệt để có thể sử dụng bot",
        "approveSuccess": "Đã phê duyệt thành công %1 nhóm!",

        "cantGetPendingList": "Không thể lấy danh sách các nhóm đang chờ!",
        "returnListPending": "「PENDING」❮ Tổng số nhóm cần duyệt: %1 nhóm ❯\n\n%2",
        "returnListClean": "「PENDING」Hiện tại không có nhóm nào trong hàng chờ"
    },
    "en": {
        "invaildNumber": "❎ | 𝖬𝖺𝗌𝗍𝖾𝗋, 《%1》 𝗂𝗌 𝗇𝗈𝗍 𝖺𝗇 𝗏𝖺𝗅𝗂𝖽 𝗇𝗎𝗆𝖻𝖾𝗋.",
        "cancelSuccess": "🚮 | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝗋𝖾𝖿𝗎𝗌𝖾𝖽 《%1》 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌.",
        "approveSuccess": "✅ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖺𝗉𝗉𝗋𝗈𝗏𝖾𝖽 《%1》 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌.",

        "cantGetPendingList": "❎ | 𝖦𝗈𝗆𝖾𝗇 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖨 𝖼𝖺𝗇'𝗍 𝗀𝖾𝗍 𝗍𝗁𝖾 𝗉𝖾𝗇𝖽𝗂𝗇𝗀 𝗅𝗂𝗌𝗍.",
        "returnListPending": "《《《《 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 》》》》\n✿━━━━━━━━━━━━━━━━━✿\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾 𝗐𝗁𝗈𝗅𝖾 𝗇𝗎𝗆𝖻𝖾𝗋 𝗈𝖿 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌 𝗂𝗇𝖻𝗈𝗑 𝗍𝗈 𝖺𝗉𝗉𝗋𝗈𝗏𝖾 𝗂𝗌 《%1》 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌 𝗂𝗇𝖻𝗈𝗑.\n✿━━━━━━━━━━━━━━━━━✿\n%2",
        "returnListClean": "《《《《 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 》》》》\n✿━━━━━━━━━━━━━━━━━✿\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾𝗋𝖾 𝗂𝗌 𝗇𝗈 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌 𝗂𝗇 𝗍𝗁𝖾 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗂𝗇𝖻𝗈𝗑."
    }
}

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("cancelSuccess", count), threadID, messageID);
    }
    else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.sendMessage(`🌟 | 𝖬𝗂𝗇𝖺-𝗌𝖺𝗇, ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME} 𝖼𝗈𝗇𝗇𝖾𝖼𝗍𝖾𝖽 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝗂𝗇 𝗍𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉!\n\n𝗨𝘀𝗲: ${global.config.PREFIX}𝗁𝖾𝗅𝗉 𝖿𝗈𝗋 𝗆𝗈𝗋𝖾 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝖻𝗈𝗎𝗍 𝗆𝗒 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌 𝗅𝗂𝗌𝗍.`, handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("approveSuccess", count), threadID, messageID);
    }
}

module.exports.run = async function({ api, event, getText }) {
	const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;

    try {
		var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
		var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
	} catch (e) { return api.sendMessage(getText("cantGetPendingList"), threadID, messageID) }

	const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `👥 | 𝗧𝗵𝗿𝗲𝗮𝗱: 《${index++}》\n${single.name}\n\n🆔 | 𝗧𝗜𝗗: ｟${single.threadID}｠\n✿━━━━━━━━━━━━━━━━━✿\n`;

    if (list.length != 0) return api.sendMessage(getText("returnListPending", list.length, msg), threadID, (error, info) => {
		global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
	}, messageID);
    else return api.sendMessage(getText("returnListClean"), threadID, messageID);
}
