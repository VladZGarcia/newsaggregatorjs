'use client';

// SentimentAnalysis.js (Client-Side React Component)
import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const { CohereClient } = require('cohere-ai');

const cohere = new CohereClient({
  token: '5wdN1oLjMmuQPb0vn3qlvEOux9STwF3lAVaCTvnp',
});

export default function SentimentAnalysis({ articleTitle,  articleText }) {
    const [responseText, setResponseText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await cohere.chat({
                    message: '"Är artikeln Objektiv eller subjektiv, positiv eller negativ, vänster, mitten eller höger: ' + articleTitle + articleText,
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
        <div >
    <p className='text-sm'> COHERE AI: {responseText}</p>
</div>
    );
}