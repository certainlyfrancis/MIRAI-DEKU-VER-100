module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`🙍‍♂️ | 𝖨 𝖼𝖺𝗇𝗍 𝖺𝖽𝖽 𝗆𝖺𝗌𝗍𝖾𝗋: ${name} 𝖽𝗎𝖾 𝗍𝗈 𝗂𝗍𝗌 𝖿𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝗌𝖾𝗍𝗍𝗂𝗇𝗀𝗌 `, event.threadID)
   } else api.sendMessage(`🙅‍♂️ | 𝖧𝗈𝗅𝖽 𝗈𝗇 𝗆𝖺𝗌𝗍𝖾𝗋 ${name} 𝖽𝗈 𝗒𝗈𝗎 𝗋𝖾𝖺𝗅𝗅𝗒 𝗍𝗁𝗂𝗇𝗄 𝗒𝗈𝗎 𝖼𝖺𝗇 𝖾𝗌𝖼𝖺𝗉𝖾 𝗁𝖾𝗋𝖾 𝗁𝗎𝗁? 𝖺𝗌 𝗅𝗈𝗇𝗀 𝖺𝗌 𝖨 𝖺𝗆 𝗁𝖾𝗋𝖾 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝗇𝗈𝗍 𝖺𝖻𝗅𝖾 𝗍𝗈 𝖾𝗌𝖼𝖺𝗉𝖾 𝗆𝖺𝗌𝗍𝖾𝗋.`, event.threadID);
  })
 }
                            }