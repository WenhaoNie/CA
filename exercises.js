const city = 'New York City'

const logCitySkyline =() =>{
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())

let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

const callMyNightSky = () =>{
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

const logVisibleLightWaves = () =>{
    const lightWaves = 'Moonlight'
    let region = 'The Arctic'
    if (region === 'The Arctic'){
        let lightWaves = 'Northern Lights'
        console.log(lightWaves)
    }
    console.log(lightWaves)
}

logVisibleLightWaves()
console.log(lightWaves)