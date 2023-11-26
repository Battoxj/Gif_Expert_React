

export const getGifs = async (category) => {

//    console.log(" ANTES LLEGO " + category);

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ln7HA9wZv0nPH2stHrnRKXr8gsybeod1&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data } = await resp.json();

  //  console.log("Resultado Data :" , data)

    const gifs = data.map(img =>({
        id : img.id,
        title : img.title,
        url: img.images.downsized_medium.url  
    }));

 
   // console.log(" GIFTS LISTO :" , gifs)
    return gifs;


}