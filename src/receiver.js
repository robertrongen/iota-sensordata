// require IOTA Modules
const Mam = require('@iota/mam')
const Converter = require('@iota/converter')

// IOTA API entry point
const provider = 'https://nodes.devnet.iota.org:443'

// root of the message stream
const root = 'WRDQIUYABAXBPGPFQKNFGJTXYZDPRH9ZSZIE9MAUHMRRHOTUJVCLPOWXWIQDHIDWDTBCYWATGKXSXOVDY'

// set mode
const mode = "public" // public | private | restriced

// set side key
const sideKey = 'SLAWX9UKDHUZFOGRDXPCTFDSLHJURDABLT9CJZNTIKE9TQEWGKIHZXKMLDHJSSJG9RGYMN9IHPELMSPHV'

// initalize MAM state
let state = Mam.init(provider)
//console.log(state)

// set proper mode
if (mode == 'private') {
    Mam.changeMode(state, 'private')
} else if (mode == 'restricted') {
    Mam.changeMode(state, 'restricted', sideKey)
}

// receive messages function
async function receiveMessage(nextRoot) {
    let resp;

    // fetch messages according to mode
    if (mode != 'restricted') {
        resp = await Mam.fetch(nextRoot, mode)
    } else {
        resp = await Mam.fetch(nextRoot, mode, sideKey)
    }
    // log messages
    resp.messages.map(message => logger(message))
}

// logger function
function logger(data) {
    const json = JSON.parse(Converter.trytesToAscii(data))
    console.log(json)
}

// receive messages
receiveMessage(root)

// assignment: 
// * Expand receiver.js so that new data is continuously queried and displayed. 
// * Call Mam.fetch() with a callback function.

