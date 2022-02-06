
    export const getGifs = async( category ) =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=DfLcAOJyFHqDReQ9NNS4x88b1ETUn4Js`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifts = data.map((img)=>{
            return {
                url: img.images?.downsized_medium.url,
                title: img.title,
                id: img.id
            }
        })
        return gifts;
    }