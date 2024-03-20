console.log("Hola Mundo!");
const search = document.querySelector("#search");
const body= document.querySelector("#bodyody");
search.addEventListener('keypress', async function(e) {
    try {
        if (e.key === 'Enter') {
            const mom = search.value;
            const response = await axios.get(`https://restcountries.com/v3.1/name/${mom}`);
            console.log(response.data);
//             const div = document.createElement("div");
//             div.innerHTML= response.data[0].altSpellings[2];
//             document.body.append(div);
        }
    } catch (error) {
        console.log('nope', error);
    }
});
//trying to create a card with country data
search.addEventListener('keypress', async function(e) {
    try {
        if (e.key === 'Enter') {
            const searchName= search.value;
            search.value='';
        const response = await axios.get(`https://restcountries.com/v3.1/name/${searchName}`);
        // countryData.forEach(country=>{
            const card={
                countryFlag:response.data[0].flags.svg,
                countryName:response.data[0].name.official,
                countryPop:response.data[0].population,
                countryRegion:response.data[0].continents[0],
                countryCapital:response.data[0].capital[0]};
            const div = document.createElement("div");
            div.innerHTML= `<div class="row justify-content-center searchCountry">
            <div class="col-md-4">
            <div class="card">
            <img src="${card.countryFlag}">            
            <h3>${card.countryName}</h3>
            <p>Population: ${card.countryPop}</p>
            <p>Region: ${card.countryRegion}</p>
            <p>Capital: ${card.countryCapital}</p></div>
            </div>
            </div>`
            // [card.countryFlag, card.countryName, card.countryPop, card.countryRegion, card.countryCapital];
                document.body.append(div);
        // })            
        }
    } catch(error){
        console.log(`nooo ${error}`);
    }
})
//all the countries on the front page
async function urmom(){
    try{
        const all = await axios.get(`https://restcountries.com/v3.1/all/`);
     for(let i=0; i<50; i++){
            const divAll = document.createElement("div");
            const cardALL={con:all.data[i].flags.svg};
            divAll.innerHTML= `<div class="row justify-content-center searchCountry">
        <div class="col-md-4">
        <div class="card">
        <img src="${cardALL.con}">            
        </div>
        </div>`
            // cuntry += all[i];
            console.log(all.data[i]);
            document.body.append(divAll);
        }
        const cardAll=
        {countryFlag:all.data[i].flags.svg,
        countryName:all.data.name.official,
        countryPop:all.data.population,
        countryRegion:all.data.continents[0],
        countryCapital:all.data.capital[0]}
        
        divAll.innerHTML= `<div class="row justify-content-center searchCountry">
        <div class="col-md-4">
        <div class="card">
        <img src="${cardAll.countryFlag}">            
        <h3>${cardAll.countryName}</h3>
        <p>Population: ${cardAll.countryPop}</p>
        <p>Region: ${cardAll.countryRegion}</p>
        <p>Capital: ${cardAll.countryCapital}</p></div>
        </div>
        </div>`
        // [card.countryFlag, card.countryName, card.countryPop, card.countryRegion, card.countryCapital];
    }catch(error){
        console.log(`oh no ${error}`);
    }
}
console.log("Hola Mundo!");
urmom();
//I worked but well...