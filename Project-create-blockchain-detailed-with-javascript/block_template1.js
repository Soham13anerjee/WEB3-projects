class Block{
    constructor(timestamp,prev_hash,hash,data){
        this.timestamp=timestamp
        this.prev_hash=prev_hash
        this.hash=hash
        this.data=data
    }
}

const block1 = new Block('02022010','0x2121a','0xaf11','hello. creation of first block')

console.log(block1)