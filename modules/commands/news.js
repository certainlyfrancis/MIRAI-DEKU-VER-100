const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'News',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'August Quinn',
  description: 'Fetch news articles about a specific topic.',
  commandCategory: 'Information Retrieval',
  usages: ['/News [topic]'],
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const apiKey = '1eb86ca2ef274afb978c704dcfcc5f15';

  if (args.length === 0) {
    api.sendMessage('Please provide a topic to search for news articles.', threadID, messageID);
    return;
  }

  const topic = args.join(' ');

  try {
    const baseUrl = 'https://newsapi.org/v2/everything';
    const response = await axios.get(baseUrl, {
      params: {
        q: topic,
        from: '2023-08-20',
        sortBy: 'publishedAt',
        apiKey: apiKey,
      },
    });

    if (response.data && response.data.articles && response.data.articles.length > 0) {
      const articles = response.data.articles;
      const article = articles[0];
      const imageUrl = article.urlToImage;
      const imageStream = await axios.get(imageUrl, { responseType: 'stream' });
      const imagePath = path.join(__dirname, '/cache/news.jpg');
      const imageWriter = fs.createWriteStream(imagePath);

      imageStream.data.pipe(imageWriter);

      imageWriter.on('finish', () => {
        const attachment = {
          body: `Title: ${article.title}\nDescription: ${article.description}\nPublished At: ${article.publishedAt}`,
          attachment: fs.createReadStream(imagePath),
        };

        api.sendMessage(attachment, threadID, messageID);
      });

      imageWriter.on('error', (error) => {
        console.error(error);
        api.sendMessage('An error occurred while fetching the news image.', threadID, messageID);
      });
    } else {
      api.sendMessage('No news articles found for the given topic.', threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage('An error occurred while fetching news articles. Please try again later.', threadID, messageID);
  }
};