'use client';

// SentimentAnalysis.js (Client-Side React Component)
import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: process.env.CO_API_KEY,
});

export default function SentimentAnalysis({ articleTitle,  articleText }) {
    const [responseText, setResponseText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await cohere.chat({
                    message: 'objetivo o subjectivo , positivo o negativo, isquierda centro o derecha: ' + articleTitle + articleText,
                });
                console.log(response.text);
                setResponseText(response.text);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [articleText]);

    return (
        <div>
            <p>Análisis: {responseText}</p>
        </div>
    );
}