'use client';

// SentimentAnalysis.js (Client-Side React Component)
import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: '1991wOsP4EbT7cmfR4rtZmojY7n1YJ2sqzp8w9yM',
});

export default function SentimentAnalysis({ articleTitle,  articleText, prompt }) {
    const [responseText, setResponseText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await cohere.chat({
                    message: prompt + articleTitle + articleText,
                });
                // console.log(response.text);
                setResponseText(response.text);
                console.log(response)
            } catch (error) {
                console.error(error);
            }
        };
        

        fetchData();
    }, [articleText]);

    return (
        <div >
    <p className='text-sm '> COHERE AI: {responseText}</p>
</div>
    );
}