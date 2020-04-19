// require IOTA Modules
const Mam = require('@iota/mam')                // Masked Authenticated Messaging client library 
// const Converter = require('@iota/converter')

// IOTA API entry point
const provider = 'https://nodes.devnet.iota.org:443'

// set mode
// const mode = "public" // public | private | restriced

// set side key
// const sideKey = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

// initalize MAM state
let state = Mam.init(provider)
console.log(state)

/*
// set proper mode
if (mode == 'private') {
    Mam.changeMode(state, 'private')
} else if (mode == 'restricted') {
    Mam.changeMode(state, 'restricted', sideKey)
}

// publish message 
const publish = async function(packet) {
    // convert packet data from ASCII to trytes
    const trytes = Converter.asciiToTrytes(JSON.stringify(packet))

    // create message
    const message = Mam.create(state, trytes)

    // set new state
    state = message.state
    //console.log(state)

    // attach message to tangle and wait for it
    await Mam.attach(message.payload, message.address)
    console.log(message.root)

    // return new root
    return message.root
}

// create random sensor data
const sensorData = () => {
    return JSON.stringify({ time: new Date(), data: Math.floor(Math.random()*100+1)})
}

// publish sensor data interval
setInterval(() => {
    publish(sensorData())
}, 10000)

*/