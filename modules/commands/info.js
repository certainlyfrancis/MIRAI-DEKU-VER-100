module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.postimg.cc/rmH06yjg/cid-kagenou-vinz-1.jpg", "https://i.postimg.cc/Xq0ZN1My/Kagenou-Cid-1.jpg", "https://i.postimg.cc/2yzzXsRT/image.jpg", "https://i.postimg.cc/Kvw616qV/630193b1-89cf-4d48-87e7-29d405778dc9.jpg", "https://i.postimg.cc/HWPKKGgx/Cid-Kageno-The-Eminence-in-Shadow-Aesthetic.jpg", "https://i.postimg.cc/bJwCCgVk/Cid-Kagenou.jpg", "https://i.postimg.cc/fyBBx9f5/image.jpg", "https://i.postimg.cc/Kz5N2MwF/cid-kagenou-vinz-2.jpg"];
var callback = () => api.sendMessage({body:`➢ Admin and Bot Information

⁂ Bot Name: ${global.config.BOTNAME}

✧ Bot Admin: ${global.config.BOTCREATOR}

♛ Bot Admin Link: ${global.config.CREATORLINK}

❂ Bot Prefix: ${global.config.PREFIX}

✫ Bot Owner: ${global.config.BOTOWNER}

➟ UPTIME

✬ Today is: ${juswa} 

➳ Bot is running ${hours}:${minutes}:${seconds}.

✫ Thanks for using ${global.config.BOTNAME} Bot!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };