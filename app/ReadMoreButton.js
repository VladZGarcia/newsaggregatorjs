"use client";

const { useRouter } = require("next/navigation");

// currently not in use but may be used in the future

function ReadMoreButton({article}){
    const router = useRouter();

    const handleClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value])=> `${key}=${value}`)
            .join("&");
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