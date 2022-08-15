
import {sha} from "sha1"


let blocks: Array<string>;
let network_hash_power: number = 500000; 
let my_address: number = 0x123ab;


async function  main(){
    let new_block: string;
    let nounce: number;

    new_block = await listen();
    nounce = await search_nounce(new_block);

    broadcast_block(new_block, nounce, my_address)
    let vote = await consensus()
    if(vote){
        blocks.push(new_block)
    }

}


function listen(): string{
    return "new block "
}

function search_nounce(_new_block: string): number{
    let nonce: number = 0;
    let result_hash: number;
    do {
        result_hash = hash( _new_block + nonce + my_address );
    }
    while ( result_hash < network_hash_power )
    return result_hash;
}

function broadcast_block(_new_block : string, nounce: number, my_address: number){

}

function consensus (): boolean{
    # 
    return true;
}

function hash(_block_data: string): number{
    // here we should have hash function to return the hash 
    return sha(_block_data);
}

