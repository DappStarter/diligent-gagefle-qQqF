require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain umbrella guess clinic only slice'; 
let testAccounts = [
"0x22891360131a444a37bf87f77ebd6fd6afb6f325c2b926072b4f6b53c1af17ac",
"0xfe8f96e968946996dbb86013d2e6c8e922c7902be7d8eb9e17f58c71f1cfc4d1",
"0xd56c9badeeb60102bbe3c8454d9a403374213f8da42c9be82351a4fcc53d4750",
"0xfa29f0cd496fefca15b68cf228c05787d1c64fd870bae964e3938ab95d166851",
"0x23b3687fa5a135c06ffc5dcf09f2fd0454715d15fa5419c081aee630df396116",
"0x705f423a10fc145a45c9f5a381c7b5870831da2ff37479c263ae613d19e971ce",
"0x8accf3f7397408b06785281b83cfed7f2313c78b3a8c8e9ff8f6af9ef6e9f7a7",
"0xf02366e41ebaa388a6a07ddaa9b08ef7e8915025128fb7c1925639fb5e199148",
"0x0d2b41ba561fb737bac7b03a2d0f201555049b0896c1eb0b84b3b68180fa1742",
"0x00b6b7ade126edb55d9a086c8f43ad33082f602e10ff48d163b19e65cfec34a3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


