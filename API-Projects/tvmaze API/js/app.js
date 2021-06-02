const form = document.getElementById('searchForm');
const resultContainer = document.querySelector('#resultContainer');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm =  form.elements.query.value;
    const config = {params: {q: searchTerm}, }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    
    // reset
    form.elements.query.value = '';
    resultContainer.innerHTML = '';

    makeImages(res.data);
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            console.log('result.show:', result.show);
            resultContainer.append(img);
        }
    }
}