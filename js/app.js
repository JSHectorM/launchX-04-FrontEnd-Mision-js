
const fetchPokemon = () => {

    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    let nombreEli = document.getElementById('nombreChido');

    //nombreEli.innerHTML  = "Eliza"

    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("assets/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {

        if (data) {

            // console.log(data);

            let pokeImg = data.sprites.front_default;
            let pokemonname = data.forms[0].name;
            let pokemonabil = data.abilities;

            nombreEli.innerHTML = pokemonname;
             console.log(pokemonname);

             extraerAbil(pokemonabil)


            pokeImage(pokeImg);

            // console.log(pokeImg);
        }
    });
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const extraerAbil = ( cajaDeAbilidades ) => {

    console.log("Funcion que extrae abilidades");

    // console.log(cajaDeAbilidades[0].ability.name);

    for (let index = 0; index < cajaDeAbilidades.length; index++) {
        console.log(cajaDeAbilidades[index].ability.name);
        
    }

}