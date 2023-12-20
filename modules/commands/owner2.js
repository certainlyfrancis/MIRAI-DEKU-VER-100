module.exports.config = {
	name: "owner2",
	version: "1.0.0",
	hasPermssion: 0,
  credits: "John Arida",
	description: "Owner",
	commandCategory: "Others",
	cooldowns: 5
}

module.exports.run =  ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var callback = () => api.sendMessage(
  {body:`»🤖 | 𝗢𝗪𝗡𝗘𝗥 𝗢𝗙 ${global.config.BOTNAME} 𝗔𝗜 «\n𝗢𝗪𝗡𝗘𝗥: ${global.config.BOTOWNER}\n 𝗔𝗗𝗠𝗜𝗡 𝗨𝗜𝗗: ${global.config.OWNERID}\n 𝗔𝗗𝗠𝗜𝗡 𝗙𝗕 𝗔𝗖𝗖𝗢𝗨𝗡𝗧 𝗟𝗜𝗡𝗞:\n${global.config.OWNERLINK}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/${global.config.OWNERID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };