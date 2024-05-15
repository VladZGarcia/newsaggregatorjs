// // server.js
// const express = require('express');
// const { LanguageServiceClient } = require('@google-cloud/language');

// const app = express();
// app.use(express.json());

// app.post('/analyze-sentiment', async (req, res) => {
//     const { articleText } = req.body;

//     const languageClient = new LanguageServiceClient();
//     const document = {
//         content: articleText,
//         type: 'PLAIN_TEXT',
//     };

//     const [result] = await languageClient.analyzeSentiment({ document });
//     const sentiment = result.documentSentiment;

//     res.json({ score: sentiment.score, magnitude: sentiment.magnitude });
// });

// app.listen(3001, () => {
//     console.log('Server running on port 3001');
// });