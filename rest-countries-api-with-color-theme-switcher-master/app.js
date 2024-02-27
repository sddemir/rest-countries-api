console.log("Hola Mundo!");
const search = document.querySelector("#search");
const body= document.querySelector("#bodyody");
search.addEventListener('keypress', async function(e) {
    try {
        if (e.key === 'Enter') {
            const mom = search.value;
            const response = await axios.get(`https://restcountries.com/v3.1/name/${mom}`);
            console.log(response.data);
            const div = document.createElement("div");
            div.innerHTML= response.data[0].altSpellings;
            document.body.append(div);
        }
    } catch (error) {
        console.log('nope', error);
    }
});