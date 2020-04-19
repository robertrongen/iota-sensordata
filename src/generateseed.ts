// The call to Mam.init() generates a random seed and returns a state object that we can use to control and track the message stream

// require IOTA Modules
const Mam = require('@iota/mam')                // Masked Authenticated Messaging client library 

// IOTA API entry point
const provider = 'https://nodes.devnet.iota.org:443'

// initalize MAM state
let state = Mam.init(provider)
console.log(state)
