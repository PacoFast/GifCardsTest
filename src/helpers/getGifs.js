export const getGifs = async (category) => {
    const url =
        `https://api.giphy.com/v1/gifs/search?api_key=Ryvq8zhSXmgZNK9ECYRvA5SeYdhN7tOR&q=${encodeURI(category)}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const filteredData = data.map((d) => ({
        id: d.id,
        title: d.title,
        imageUrl: d.images?.downsized_medium.url,
    }));

    return filteredData; 
};