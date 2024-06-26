'use client';

// SentimentAnalysis.js (Client-Side React Component)
import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: process.env.NEXT_PUBLIC_COHERE_API,
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
            } catch (error) {
                console.error(error);
            }
        };
        

        fetchData();
    }, [articleText]);

    return (
        <div >
    <p className='text-sm '> MENSAJERO AI: {responseText}</p>
</div>
    );
}