module.exports.config = {
    name: "guard",
    eventType: ["log:thread-admins"],
    version: "1.0.0",
    credits: "D-Jukie",
    description: "Prevent admin changes",
};

module.exports.run = async function ({ event, api, Threads, Users }) {
    const { logMessageType, logMessageData, senderID } = event;
 	let data = (await Threads.getData(event.threadID)).data
 	if (data.guard == false) return;
    if (data.guard == true ) {
        switch (logMessageType) {
          case "log:thread-admins": {
            if (logMessageData.ADMIN_EVENT == "add_admin") {
              if(event.author == api.getCurrentUserID()) return
              if(logMessageData.TARGET_ID == api.getCurrentUserID()) return
              else {
                api.changeAdminStatus(event.threadID, event.author, false, editAdminsCallback)
                api.changeAdminStatus(event.threadID, logMessageData.TARGET_ID, false)
                function editAdminsCallback(err) {
                  if (err) return api.sendMessage("𝖡𝖺𝖺𝗄𝖺. 𝖻𝗅𝖾𝖾𝖾 😝", event.threadID, event.messageID);
                    return api.sendMessage(`✅ | 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝖾𝖽 𝖠𝗇𝗍𝗂-𝖱𝗈𝖻𝖻𝖾𝗋𝗒 𝖻𝗈𝗑 𝗆𝗈𝖽𝖾.`, event.threadID, event.messageID);
                }
              }
            }
            else if (logMessageData.ADMIN_EVENT == "remove_admin") {
              if(event.author == api.getCurrentUserID()) return
              if(logMessageData.TARGET_ID == api.getCurrentUserID()) return
              else {
                api.changeAdminStatus(event.threadID, event.author, false, editAdminsCallback)
                api.changeAdminStatus(event.threadID, logMessageData.TARGET_ID, true)
                function editAdminsCallback(err) {
                if (err) return api.sendMessage("𝖡𝖺𝖺𝗄𝖺. 𝖻𝗅𝖾𝖾𝖾 😝", event.threadID, event.messageID);
                return api.sendMessage(`✅ | 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝖾𝖽 𝖠𝗇𝗍𝗂-𝖱𝗈𝖻𝖻𝖾𝗋𝗒 𝖡𝗈𝗑 𝖬𝗈𝖽𝖾.`, event.threadID, event.messageID);
              }
            }
          }
        }
      }
    }
}
