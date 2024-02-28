console.log("Hola Mundo!");
const search = document.querySelector("#search");
const body= document.querySelector("#bodyody");
// search.addEventListener('keypress', async function(e) {
//     try {
//         if (e.key === 'Enter') {
//             const mom = search.value;
//             const response = await axios.get(`https://restcountries.com/v3.1/name/${mom}`);
//             console.log(response.data);
//             const div = document.createElement("div");
//             div.innerHTML= response.data[0].altSpellings[2];
//             document.body.append(div);
//         }
//     } catch (error) {
//         console.log('nope', error);
//     }
// });
//trying to create a card with country data
search.addEventListener('keypress', async function(e) {
    try {
        if (e.key === 'Enter') {
            const searchName= search.value;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${searchName}`);
        // countryData.forEach(country=>{
            const card={
                countryFlag:response.data[0].flags.svg,
                countryName:response.data[0].altSpellings[2],
                countryPop:response.data[0].population,
                countryRegion:response.data[0].reigon,
                countryCapital:response.data[0].capital[0]};
            const div = document.createElement("div");
            div.innerHTML= [card.countryFlag, card.countryName, card.countryPop, card.countryRegion, card.countryCapital];
                document.body.append(div);
                console.log(response.data[0].flags.svg);
        // })            
        }
    } catch(error){
        console.log(`nooo ${error}`);
    }
})