module.exports.config = {
  name: "fbcover3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "JRT",
  description: "make fbcoverv3",
  commandCategory: "fbcover",
  cooldowns: 0,
  dependencies: {
      "fs-extra": "",
      "request": "",
      "axios": ""
  }
};
module.exports.handleReply = async function ({ event, api, handleReply }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const timeStart = Date.now();
  if (handleReply.author != event.senderID) return;
  const { threadID, messageID, senderID, body } = event;
  var id = handleReply.id;
  const name = this.config.name;
  switch (handleReply.type) {
    case "jrt": {
      var id = handleReply.id;
      var names = handleReply.names;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`[!] You have selected the background text as ${event.body}\n\n[!] Reply to this message enter your subname [!]`,threadID, function (err, info) {
        return global.client.handleReply.push({
                  type: "color",
                  name,
                  author: senderID,
                  id: id,
                  names,
                  nen: event.body,
                  messageID: info.messageID
              });
      },messageID)
    }
    case "color": {
      var nen = handleReply.nen;
      var id = handleReply.id;
      var names = handleReply.names;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`[!] You have selected the signature : ${event.body}\n\n[!] Enter your color (note: enter the English name of the color - If you don't want to enter the color, enter "no") [!]`,threadID, function (err, info) {
        return global.client.handleReply.push({
                  type: "create",
                  name,
                  author: senderID,
                  id: id,
                  nen: nen,
                  names,
                  ky: event.body,
                  messageID: info.messageID
              });
      },messageID) 
    }
    case "create": {
      var nen = handleReply.nen;
      var id = handleReply.id;
      var ky = handleReply.ky;
      var color = event.body;
      var names = handleReply.names;
      var color2 = ``;
      api.unsendMessage(handleReply.messageID);
      if (color == "no") var color = `#`;
      var callback = () => api.sendMessage({body:`[⚜️] Character name: ${names}\n[⚜️] Character code: ${id}\n[⚜️] Background text: ${nen}\n[⚜️] Subname: ${ky}\n[⚜️] Background color: ${color}`,attachment: fs.createReadStream(__dirname + "/cache/tad.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tad.png"),event.messageID); 
     return request(encodeURI(`https://api-rosie.jrt-official.repl.co/fbcover/v2?name=${nen}&id=${id}&subname=${ky}`)).pipe(fs.createWriteStream(__dirname+'/cache/tad.png')).on('close',() => callback());    
  }
 }
}
module.exports.run = async function({ api, event, args, permssion }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
 const { threadID, messageID, senderID, body } = event;
if (args[0] == "list") {
  axios.get(`https://api-rosie.jrt-official.repl.co/taoanhdep/list`).then(res => {
    var count = res.data.listAnime.length;
    var data = res.data.listAnime
    var page = 1;
    page = parseInt(args[1]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 20;
    var numPage = Math.ceil(count/limit);
    var msg = ``;
    for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
       if(i >= count) break;
      msg += `[ ${i+1} ] - ${data[i].Name} |  ${data[i].color}\n`;
    }
    msg += `[⚜️] Page (${page}/${numPage})\n[⚜️] Use ${global.config.PREFIX}${this.config.name} list <number of pages>`;
    return api.sendMessage(msg, threadID,messageID);
  });
}
else if (args[0] == "color") {
      var callback = () => api.sendMessage({body:`here you are UwU`,attachment: fs.createReadStream(__dirname + "/cache/taoanhdep.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/taoanhdep.png"),event.messageID); 
     return request(encodeURI(`https://www.studytienganh.vn/upload/2017/08/40.jpg`)).pipe(fs.createWriteStream(__dirname+'/cache/taoanhdep.png')).on('close',() => callback());    
  } 
else if (args[0] == "search") {
let nhanvat = args.join(" ");
const res = await axios.get(`https://api-rosie.jrt-official.repl.co/taoanhdep/search?key=${nhanvat}`);
var text = res.data.search.Name;
var idz = res.data.search.ID;
var color = res.data.search.color;
var source = res.data.search.source;
if (!nhanvat) return api.sendMessage(`[⚜️] Nhập id cần coi info đi\n[⚜️] Dùng ${global.config.PREFIX}taoanhdep list để coi danh sách nhân vật `, event.threadID, event.messageID);

return api.sendMessage(`[⚜️] Character: ${text} \n[⚜️] ID: ${idz}\n[⚜️] Default Color: ${color}\n[⚜️] Source: ${source}`, event.threadID, event.messageID)
}
else if(args[0] == "find"){
     const ress = await axios.get('https://api-rosie.jrt-official.repl.co/taoanhdep/data')
    var nhanvat = args[1]
    const data2 = ress.data.anime[nhanvat - 1].imgAnime
    var imag = (await axios.get(`${data2}`, {
        responseType: "stream"
      })).data;
      var msg = {
        body: `[⚜️] Here's Your Photo`,
        attachment: imag
      }
    return api.sendMessage(msg, threadID, messageID)
  }
else {
  if (senderID == api.getCurrentUserID()) return;
  const name = this.config.name;
  var id = args[0];
  axios.get(`https://api-rosie.jrt-official.repl.co/taoanhdep/list`).then (res => {
    if (!res.data.listAnime[id]) return api.sendMessage(`[⚜️] No data found!!!`,threadID,messageID);
    var names = res.data.listAnime[id - 1].Name;
 return api.sendMessage(`[!] Character ID found: ${id}[!]\n[!] Character name is ${names}\n\n[!] Reply to this message and choose background text for your image [!]`,event.threadID, (err, info) => {
   return global.client.handleReply.push({
          type: "jrt",
          name,
          author: senderID,
          id: id,
          names,
          messageID: info.messageID
      });
  },event.messageID);
})
}
}
