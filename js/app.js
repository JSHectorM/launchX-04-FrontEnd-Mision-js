(function(){
    // console.log('Datos default');

    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    let nombrePokemon = document.getElementById('nombrePoke');
    let idPokemon = document.getElementById('idPoke');
    let tipoPoke = document.getElementById('tipo');
    let statsPoke = document.getElementById('stats');
    let movPoke = document.getElementById('mov');

    
    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("assets/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {

        if (data) {

            let pokeImg = data.sprites.other.home.front_default;
            let pokemonname = data.forms[0].name;
            let pokemonabil = data.abilities;
            let identificadorPokemon =  data.id;


            pokeImage(pokeImg);
            
            idPokemon.innerHTML = "No: "+ identificadorPokemon;
            nombrePokemon.innerHTML = pokemonname;
            
            tipoPoke.innerHTML = extraerTipo(data.types);

            movPoke.innerHTML = extraerAbilidades(pokemonabil);

            statsPoke.innerHTML = extraerstats(data.stats)

            extraerstats(data.stats)
        }
    });
    

})();

const fetchPokemon = () => {

    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    let nombrePokemon = document.getElementById('nombrePoke');
    let idPokemon = document.getElementById('idPoke');
    let tipoPoke = document.getElementById('tipo');
    let statsPoke = document.getElementById('stats');
    let movPoke = document.getElementById('mov');



    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("assets/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {

        if (data) {

            // console.log(data);

            let pokeImg = data.sprites.other.home.front_default;
            let pokemonname = data.forms[0].name;
            let pokemonabil = data.abilities;
            let identificadorPokemon =  data.id;


            pokeImage(pokeImg);
            
            idPokemon.innerHTML = "No: "+ identificadorPokemon;
            nombrePokemon.innerHTML = pokemonname;
            
            tipoPoke.innerHTML = extraerTipo(data.types);

            movPoke.innerHTML = extraerAbilidades(pokemonabil);

            statsPoke.innerHTML = extraerstats(data.stats)

            extraerstats(data.stats)
        }
    });
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const extraerAbilidades = (cajaDeAbilidades) => {
    let aux;

    for (let index = 0; index < cajaDeAbilidades.length; index++) {

        if (index === 0) {
            aux = cajaDeAbilidades[index].ability.name+ " ";
        } 
        else {
            aux += cajaDeAbilidades[index].ability.name+ " ";
        }

    }
    return aux;
}
const extraerTipo = (cajaDeTipos) => {
    let aux;

    for (let index = 0; index < cajaDeTipos.length; index++) {

        if (index === 0) {
            aux = cajaDeTipos[index].type.name + " "; 
        }
        else {
            aux += cajaDeTipos[index].type.name + " "; 
        }

    }
    return aux;

}

const extraerstats = (cajaDestats) => {

    let aux;

    for (let index = 0; index < cajaDestats.length; index++) {
        if (index === 0) {
            aux = cajaDestats[index].stat.name + ": " + cajaDestats[index].base_stat + " | " ; 
        }
        else {
            aux += cajaDestats[index].stat.name + ": " + cajaDestats[index].base_stat + " | "; 
        }

    }

    return aux;

}