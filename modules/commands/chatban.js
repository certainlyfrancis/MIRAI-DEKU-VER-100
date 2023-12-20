 const num = 10
 const timee = 20 // During `timee` spam `num` times will be banned
 module.exports.config = {
  name: "chatban",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "NTKhang", //fix get by  D-Jukie translated to en by Deku
  description: `automatically ban users if spam chats ${num} time/${timee}s`,
  commandCategory: "System",
  cooldowns: 5
};

module.exports. run = async function ({api, event})  {
  return api.sendMessage(`Automatically ban users if spam ${num} time/${timee}s`, event.threadID, event.messageID);
};

module.exports.handleEvent = async function ({ Users, Threads, api, event})  {
  let { senderID, messageID, threadID } = event;
  var datathread = (await Threads.getData(event.threadID)).threadInfo;
  
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(threadID) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body != 0) return;
  
  if ((global.client.autoban[senderID].timeStart + (timee*1000)) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= num) {
      var namethread = datathread.threadName;
      const moment = require("moment-timezone");
      const timeDate = moment.tz("Asia/Manila").format("DD/MM/YYYY HH:mm:ss");
      let dataUser = await Users.getData(senderID) || {};
      let data = dataUser.data || {};
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `Spamming chat ${num} times` || null;
      data.dateAdded = timeDate;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage("You have been banned from using bots\nID: " + senderID + " \nName: " + dataUser.name + `\nReason: spam chat ${num} time ${timee}s\n\nContact admin to unban immediately`, threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`Spam offenders ${num} time/${timee}s\nName: ${dataUser.name} \Sender ID: ${senderID}\nGroup ID: ${threadID} \nName of group: ${namethread} \nAt the time: ${timeDate}`, 
          ad);
    }
    })
    }
  }
};

