module.exports.config = {
  name: "groupstats",
  version: "1.1.0",
  hasPermission: 2,
  credits: "Réynél",
  description: "Get information about the current group chat.",
  commandCategory: "group",
  usages: ["/Groupstats"],
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  try {
    const threadInfo = await api.getThreadInfo(event.threadID);
    const threadName = threadInfo.threadName || "Unnamed Thread";
    const threadType = threadInfo.isGroup ? "Group" : "Personal Chat";
    const participantCount = threadInfo.participantIDs.length;

    const groupID = threadInfo.isGroup ? `\n  ⦿ 𝗚𝗿𝗼𝘂𝗽 𝗜𝗗: ${event.threadID}` : "";
    const groupStatus = threadInfo.isGroup ? `\n  ⦿ 𝗚𝗿𝗼𝘂𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: ${threadInfo.approvalMode ? "𝖠𝗉𝗉𝗋𝗈𝗏𝖺𝗅 𝖬𝗈𝖽𝖾 𝖮𝗇" : "𝖠𝗉𝗉𝗋𝗈𝗏𝖺𝗅 𝖬𝗈𝖽𝖾 𝖮𝖿𝖿"}${threadInfo.restrictions ? `\n  ⦿ 𝗚𝗿𝗼𝘂𝗽 𝗜𝘀𝘀𝘂𝗲𝘀: ${threadInfo.restrictions}` : ""}` : "";

    const adminIDs = threadInfo.adminIDs || [];
    const nicknames = await Promise.all(threadInfo.participantIDs.map(async (userID) => {
      const userInfo = await api.getUserInfo(userID);
      return `• ${userInfo[userID].name}\n- ${userID}\n`;
    }));

    const infoMessage = `╭┉┉┅┉┅┄┄•◦ೋ•◦❥•◦ೋ\n  ⟬𝗥.𝗖.𝗕.⟭ 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗬𝗨𝗥𝗜\n•◦ೋ•◦❥•◦ೋ•┈┄┄┅┉┅┉╯\n\n👾 | 𝖪𝗈𝗇𝗇𝗂𝖼𝗁𝗂𝗐𝖺 ${threadName}\n\nℹ️ ${threadName}'𝗌 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇\n\n  ⦿ 𝗡𝗔𝗠𝗘: ${threadName}\n  ⦿ 𝗧𝗬𝗣𝗘: ${threadType}${groupID}${groupStatus}\n  ⦿ 𝗣𝗔𝗥𝗧𝗜𝗖𝗜𝗣𝗔𝗡𝗧𝗦: ${participantCount}\n  ⦿ 𝗣𝗔𝗥𝗧𝗜𝗖𝗜𝗣𝗔𝗡𝗧𝗦:\n ${nicknames.join("\n")}`;

    api.sendMessage(infoMessage, event.threadID, event.messageID);
  } catch (error) {
    console.error("Error fetching thread information:", error);
    api.sendMessage("❎ | 𝖦𝗈𝗆𝖾𝗇 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖻𝗎𝗍 𝖾𝗋𝗋𝗈𝗋 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀 𝗍𝗁𝗋𝖾𝖺𝖽 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇. 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋.", event.threadID, event.messageID);
  }
};