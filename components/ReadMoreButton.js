"use client";

const { useRouter } = require("next/navigation");

// currently not in use but may be used in the future

function ReadMoreButton({article}){
    const router = useRouter();
    const querystring = require('querystring');

    const handleClick = () => {
        const queryString = querystring.stringify(article);
        console.log(queryString)
        const url = `/article?${queryString}`;
        console.log(url)
            router.push(url);
    }

    return (
        <button
        onClick={handleClick} 
        className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500">
        Leer más
        </button>
    );
    
}

export default ReadMoreButton;