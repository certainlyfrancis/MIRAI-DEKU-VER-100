module.exports.config = {
  name: "randomanime",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "Keyl",
  description: "random images of anime",
  commandCategory: "Hình Ảnh",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
}

module.exports.handleReply = async ({ api, event, handleReply }) => {
  const axios = require("axios");
const { threadID, messageID, body } = event;
    switch(handleReply.type) {
        case "reply": {
            switch(body) {

          case "1": {
                const res = await axios.get("https://APIURL.miraiofficials123.repl.co");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download = (await axios.get(data, {
      responseType: "stream"
    })).data;
            api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: ` Anya <3`, attachment: download}, threadID, messageID);
          };
      break;

        case "2": {
                const res = await axios.get("https://apikanna.ngochan6666.repl.co");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download2 = (await axios.get(data, {
      responseType: "stream"
    })).data;
    api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: ` Kanna`, attachment: download2}, threadID, messageID);
          };
      break;

        case "3": {
                const res = await axios.get("https://api.xlshsad.repl.co/images/mirai");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download3 = (await axios.get(data, {
      responseType: "stream"
    })).data;
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: `Mirai <3`, attachment: download3}, threadID, messageID);
          };
      break; 

        case "4": {
                const res = await axios.get("https://APIURLChitanda.miraiofficials123.repl.co");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download4 = (await axios.get(data, {
      responseType: "stream"
    })).data;
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: ` Chitanda <3`, attachment: download4}, threadID, messageID);
          };
      break;

        case "5": {
                const res = await axios.get("https://APIURLLoLi.miraiofficials123.repl.co");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download5 = (await axios.get(data, {
      responseType: "stream"
    })).data;
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: `Loli <3`, attachment: download5}, threadID, messageID);
          };
      break;

        case "6": {
                const res = await axios.get("https://APIdoraemon.miraiofficials123.repl.co");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download6 = (await axios.get(data, {
      responseType: "stream"
    })).data;
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: `Doraemon <3`, attachment: download6}, threadID, messageID);
          };
      break;

        case "7": {
                const res = await axios.get("https://APIURLViolet.miraiofficials123.repl.co");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download7 = (await axios.get(data, {
      responseType: "stream"
    })).data;
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: `Violet <3`, attachment: download7}, threadID, messageID);
          };
      break;

        case "8": {
                const res = await axios.get("https://api.apidata.repl.co/gentle");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download8 = (await axios.get(data, {
      responseType: "stream"
    })).data;
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: `Gentle <3`, attachment: download8}, threadID, messageID);
          };
      break;     

        case "9": {
                const res = await axios.get("https://apiboy.thanhduongtran465.repl.co/");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download9 = (await axios.get(data, {
      responseType: "stream"
    })).data;
          api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: `omsim`, attachment: download9}, threadID, messageID);
          };
      break;         

          default:
        const choose = parseInt(body);
              if (isNaN(body)) return api.sendMessage("💟 Pick 1-9 ", threadID, messageID);
              if (choose > 9 || choose < 1) return api.sendMessage("Option not on the list", threadID, messageID); 
      }
    }
  }
}

module.exports.run = async ({ api, event, handleReply }) => {
  return api.sendMessage({ body: 
    "⠀ ⠀ = Existing stock =" +
    "\n\n1. Anya" +
    "\n2. Kanna" +
    "\n3. Mirai" +
    "\n4. Chitanda" +
    "\n5. Loli" +
    "\n6. Doraemon" +
    "\n7. Violet" +
    "\n8. Gái" +
    "\n9. Trai" +
    "\n\nReply stt picture you want to see"
            }, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
                  } 