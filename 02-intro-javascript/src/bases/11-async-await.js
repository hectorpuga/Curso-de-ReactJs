// const getImagenPromesa= ()=> new Promise(resolve=> resolve('https://hola.com'));
// getImagenPromesa().then(console.log)


const getImage = async () => {
try {
    
    const apikey = '63HKx1jMKcfzXKIehTgk58RaZK2IgCId';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    const {data} = await resp.json();
    console.log(data);
    const {url}=data.images.original;
    console.log(url);
    const img=document.createElement('img');
    img.src=url;

    document.body.append(img);

} catch (error) {
// Manejo del error

console.error(error);
}
}

getImage();


