const {GENESIS_DATA} = require('./config')

class Block{
    constructor({timestamp,prev_hash,hash,data}){
        this.timestamp=timestamp
        this.prev_hash=prev_hash
        this.hash=hash
        this.data=data
    }

    static genesis(){
        return new this(GENESIS_DATA)
    }
}

const genesisBlock = Block.genesis()
console.log(genesisBlock)
