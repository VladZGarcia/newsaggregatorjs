
export default function sortNewsByImage(news) {
    try {
        // Check if news is an object with pagination and data properties
        if (!news || !news.pagination || !news.data || !Array.isArray(news.data)) {
            console.error("Error in sortNewsByImage: Invalid news data structure");
            return { pagination: { count: 0, limit: 0, offset: 0, total: 0 }, data: [] };
        }

        const newsWithImage = news.data.filter((item) => item.image !== null);
        const newsWithoutImage = news.data.filter((item) => item.image === null);

        const sortedNewsResponse = {
            pagination: news.pagination,
            data: [...newsWithImage, ...newsWithoutImage],
        };
        //console.log("SortedNews Res:", sortedNewsResponse);
        return sortedNewsResponse;
    } catch (error) {
        console.error("Error in sortNewsByImage:", error.message);
        return { pagination: { count: 0, limit: 0, offset: 0, total: 0 }, data: [] };
    }
}