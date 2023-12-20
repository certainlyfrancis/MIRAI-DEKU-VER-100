module.exports.config = {
  name: "waifu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Siegfried Sama",
  description: "Random Anime Waifu",
  commandCategory: "...",
  usages: " [random waifu] ",
  cooldowns: 3,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/Wp07PF3c/image.jpg", "https://i.postimg.cc/Y2xm3100/3e4b5532-26e0-4990-a6c1-643700616825.jpg", "https://i.postimg.cc/CKy1Y159/DESTINY.jpg", 
"https://i.postimg.cc/5NT9q0Bj/mahiru.jpg", 
"https://i.postimg.cc/9FRCMh62/Yor-Forger.jpg",  "%https://i.postimg.cc/WzDLhGf8/images-2.jpg",  "https://i.postimg.cc/K4hRv8v9/Ginny-Icon.jpg",  "https://i.postimg.cc/8k24x8Vc/Ai.jpg",  "https://i.postimg.cc/DzpdgHg2/Lycoris-Recoil-episodes-12-13.jpg",  "https://i.postimg.cc/150GTfH7/Nishikigi-Chisato.jpg",  "https://i.postimg.cc/6qX7LfDW/image.jpg",
  ];
	 var callback = () => api.sendMessage({body:`Here is your waifu 🩷`,attachment: fs.createReadStream(__dirname + "/cache/sieg.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/sieg.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/sieg.jpg")).on("close",() => callback());
   };