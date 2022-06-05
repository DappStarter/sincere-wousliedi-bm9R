require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note tank upgrade inflict globe flock siren'; 
let testAccounts = [
"0xbdce419704b4a24e0130e7f798a15a2285a9189b729baff9bbcbcddca51e1d05",
"0x31c245a0ecce9e5732c1501dd6fe12db7488d159f14cb9d6641408aa5f992790",
"0x471fca4e2a401857002fd8c407e679063080a05233c371523128135c9815c74e",
"0x9ac1948a567a19b70b59852266e9b1714f9aef872dd322e0eaea422cceb83f6c",
"0xd81a6626b591fc84a56cc46041e2de54a42f68867a1b6d5b3cf128211264882d",
"0xeff071c0899a77a65d7d10c86e95d3c8dbc3e9ff471ed1a182a2d32eaffe6b9e",
"0xf60da498adf72c13e60c317862884162168b7ca6943aadc9d66c45cea537c78c",
"0xb98d802ce7d291fdca15675d3056858cf20cfe0692ac2dda4ed91790a974bb2d",
"0x8a49b9696387c41411ff2538a763aad449ec7c80d491225c69fcd811febcd9a4",
"0x5f2fdaafb27846af6ad17bd1dd2487362171944ff243d4b7907a96b751b73db9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

