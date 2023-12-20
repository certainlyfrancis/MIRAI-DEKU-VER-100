module.exports.config = {
  name: "random",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "random image of waifu/neko/husbu/loli/cosplay",
  usages: "[waifu/neko/husbu/loli/cosplay]",
  commandCategory: "Other",
  cooldowns: 0,
  dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage(`Please use ${global.config.PREFIX}${this.config.name} [waifu/neko/husbu/loli/cosplay]`, event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://api-velgrynd-2.bitpushblockcha.repl.co/api/randomimage/${text}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}