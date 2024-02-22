
const apikey='63HKx1jMKcfzXKIehTgk58RaZK2IgCId';

const peticion=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
peticion.then(resp=>resp.json()).then(({data})=>{
    data.images.original.url
    const {url}=data.images.original;
    console.log(url);
    const img=document.createElement('img');
    img.src=url;

    document.body.append(img);
}).catch(console.warn)