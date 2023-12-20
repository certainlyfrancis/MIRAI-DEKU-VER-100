module.exports.config = {
  name: "cat",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝖠𝗄𝗁𝗂𝗋𝗈𝗄𝗂𝗒𝗈𝗌𝗁𝗂",
  description: "𝖱𝖺𝗇𝖽𝗈𝗆𝗅𝗒 𝗌𝖾𝗇𝖽𝗌 𝖼𝗎𝗍𝖾 𝖼𝖺𝗍 𝗉𝗂𝖼𝗍𝗎𝗋𝖾𝗌",
  commandCategory: "Random-IMG",
  usages: "/cat",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
  "https://i.imgur.com/LZieDn1.jpg",
  "https://i.imgur.com/zDF6k6n.jpg",
  "https://i.imgur.com/OyxWgp9.jpg",
  "https://i.imgur.com/Rwltf0b.jpg",
  "https://i.imgur.com/KxhEPKz.jpg",
  "https://i.imgur.com/vBYy6Hi.jpg",
  "https://i.imgur.com/dEH2XWD.jpg",
  "https://i.imgur.com/pQOUxi4.jpg",
  "https://i.imgur.com/XskAaTU.jpg",
  "https://i.imgur.com/9hTlrl8.jpg",
  "https://i.imgur.com/Zzd8fwM.jpg",
  "https://i.imgur.com/U5moKi7.jpg",
  "https://i.imgur.com/hNBeWld.jpg",
  "https://i.imgur.com/tbjzqj5.jpg"
    ];// 𝗒𝗈𝗎 𝗆𝖺𝗒 𝖺𝖽𝖽 𝗌𝗈𝗆𝖾 𝖼𝖺𝗍 𝗉𝗂𝖼 𝗎𝗌𝗂𝗇𝗀 𝗂𝗆𝗀𝗎𝗋 𝗎𝗉𝗅𝗈𝖺𝖽𝖾𝗋 𝗁𝖾𝗋𝖾'𝗌 𝗍𝗁𝖾 𝗅𝗂𝗇𝗄 (https://img.doerig.dev/)
     var callback = () => api.sendMessage({body:`𝗠𝗘𝗢𝗪 ~ 🐈`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };