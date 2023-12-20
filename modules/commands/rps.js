module.exports.config = {
  name: "rps",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "Jas",
  description: "Rock Paper Scissors Game from Goatbot modified",
  commandCategory: "Random", 
  usages: "[✊, ✋, ✌️] [money]", 
  cooldowns: 0,
};
module.exports.run = async function({ api, event, args, Currencies}) {
    var { threadID, messageID, senderID} = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const moneyUser = (await getData(senderID)).money;
    const userChoice = args[0];
    const betAmount = parseInt(args[1]);
    if (isNaN(betAmount) || betAmount <= 0) {
    return api.sendMessage("Please Bet a money first.", threadID, messageID);
    }
    if (betAmount > moneyUser) {
    return api.sendMessage("Not enough money", threadID, messageID);
    }
    const choices = ["✊", "✋", "✌️"];
    if (!userChoice || !choices.includes(userChoice)) {
      return api.sendMessage("Please choose either ✊, ✋, or ✌️!", threadID, messageID);
    }

    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    api.sendMessage(`You chose ${userChoice}. I chose ${botChoice}.`, threadID, messageID);

    if (userChoice === botChoice) {
      api.sendMessage("It's a tie! ⚖️", threadID, messageID);
    } else if (
      (userChoice === "✊" && botChoice === "✌️") ||
      (userChoice === "✋" && botChoice === "✊") ||
      (userChoice === "✌️" && botChoice === "✋")
    ) {
      const winnings = betAmount * 2;
      api.sendMessage("Congratulations! You won: $"+winnings, threadID, messageID);
      await increaseMoney(senderID, winnings);
    } else {
      api.sendMessage("I win! Better luck next time\n You lose: $"+betAmount, threadID, messageID);
      await decreaseMoney(senderID, betAmount);
    }
};