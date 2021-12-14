#!/opt/local/bin/bash
#--syncmode "fast"

geth --rinkeby --datadir=./chaindata --port=30304 --rpc --rpcapi="db,eth,net,web3,personal" --rpcport 8545 --cache=2048 --rpcaddr "127.0.0.1" --rpccorsdomain "*"  --unlock="0x79f20fb947144c8c6C2f8684340B05e40aeF3Ce7" --password=./chaindata/password --maxpeers 9999
