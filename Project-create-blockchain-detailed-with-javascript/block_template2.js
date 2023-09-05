class Block{
    constructor({timestamp,prevhash,newhash,message}){
        this.timestamp=timestamp
        this.prevhash=prevhash
        this.newhash=newhash
        this.message=message
    }
}

const block1 = new Block({
    timestamp :'02/02/2010 05:24',
    newhash :'0xaa123',
    prevhash :'0xab6c',
    message :'lorem26'
})

console.log(block1)
console.log(block1.message)