module.exports.config = {
	name: "adminUpdate",
	eventType: ["log:thread-admins","log:thread-name", "log:user-nickname","log:thread-icon","log:thread-color"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Update team information quickly",
    envConfig: {
        sendNoti: true,
    }
};

module.exports.run = async function ({ event, api, Threads,Users }) {
	const fs = require("fs");
	var iconPath = __dirname + "/emoji.json";
	if (!fs.existsSync(iconPath)) fs.writeFileSync(iconPath, JSON.stringify({}));
    const { threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;

    const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["adminUpdate"] != "undefined" && thread["adminUpdate"] == false) return;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`ฅ^•ﻌ•^ฅ===[ 𝗡𝗢𝗧𝗜𝗖𝗘 ]===ฅ^•ﻌ•^ฅ\n[ 𝗨𝗦𝗘𝗥 𝗨𝗣𝗗𝗔𝗧𝗘 ] 𝖴𝗌𝖾𝗋 𝖨𝖣: ${logMessageData.TARGET_ID} 𝗁𝖺𝗌 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖻𝖾𝖼𝗈𝗆𝖾 𝖺𝗇 𝗀𝗋𝗈𝗎𝗉 𝖺𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝗍𝗈𝗋 𝗂𝗇 𝗍𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉.`, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`ฅ^•ﻌ•^ฅ===[ 𝗡𝗢𝗧𝗜𝗖𝗘 ]===ฅ^•ﻌ•^ฅ\n[ 𝗨𝗦𝗘𝗥 𝗨𝗣𝗗𝗔𝗧𝗘 ] 𝖴𝗌𝖾𝗋 𝖨𝖣: ${logMessageData.TARGET_ID} 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝗋𝖾𝗆𝗈𝗏𝖾 𝖺𝗌 𝖺𝖽𝗆𝗂𝗇 𝗂𝗇 𝗍𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉 𝖺𝗇𝖽 𝖻𝖾𝖼𝗈𝗆𝖾 𝖺 𝗆𝖾𝗆𝖻𝖾𝗋.`, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                break;
            }

            case "log:thread-icon": {
            	let preIcon = JSON.parse(fs.readFileSync(iconPath));
            	dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`» [ GROUP UPDATE ] y.replace("emoji", "icon")}\n» Original icon: ${preIcon[threadID] || "unknown"}`, threadID, async (error, info) => {
                	preIcon[threadID] = dataThread.threadIcon;
                	fs.writeFileSync(iconPath, JSON.stringify(preIcon));
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
            case "log:thread-color": {
            	dataThread.threadColor = event.logMessageData.thread_color || "🌤";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`» [ GROUP UPDATE ]\n» ${event.logMessageBody.replace("Theme", "color")}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
          
            case "log:user-nickname": {
                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                if (typeof global.configModule["nickname"] != "undefined" && !global.configModule["nickname"].allowChange.includes(threadID) && !dataThread.adminIDs.some(item => item.id == event.author) || event.author == api.getCurrentUserID()) return;
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`ฅ^•ﻌ•^ฅ===[ 𝗡𝗢𝗧𝗜𝗖𝗘 ]===ฅ^•ﻌ•^ฅ\n[ 𝗨𝗦𝗘𝗥 𝗨𝗣𝗗𝗔𝗧𝗘 ] 𝖴𝗌𝖾𝗋 𝖨𝖣: ${logMessageData.participant_id} 𝗐𝖺𝗌 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖼𝗁𝖺𝗇𝗀𝖾𝖽 𝗍𝗁𝖾 𝗇𝗂𝖼𝗄𝗇𝖺𝗆𝖾 𝗍𝗈: ${(logMessageData.nickname.length == 0) ? "original name": logMessageData.nickname}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }

            case "log:thread-name": {
                dataThread.threadName = event.logMessageData.name || "No name";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`ฅ^•ﻌ•^ฅ===[ 𝗡𝗢𝗧𝗜𝗖𝗘 ]===ฅ^•ﻌ•^ฅ\n[ 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 ] 𝖳𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉 𝗇𝖺𝗆𝖾 𝗐𝖺𝗌 𝖼𝗁𝖺𝗇𝗀𝖾𝖽 𝗂𝗇𝗍𝗈 ${dataThread.threadName}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
}