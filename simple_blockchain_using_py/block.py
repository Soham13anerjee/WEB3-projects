import hashlib #imports hashlib library to use sha256

# function to perform hash operation
def hashGenerator(data):
    result = hashlib.sha256(data.encode())
    return result.hexdigest()

class Block:
    def __init__(self, data, hash, prev_hash):
        self.data = data
        self.hash = hash
        self.prev_hash = prev_hash


class Blockchain:
    def __init__(self):
        prev_hash='0'
        data='genesis data'
        present_hash=hashGenerator(data + prev_hash)

        genesis=Block(data,present_hash,prev_hash)

        self.chain=[genesis]

    def add(self, data):
        prev_hash=self.chain[-1].hash
        hash = hashGenerator(data + prev_hash)
        new_blc = Block(data,hash,prev_hash)
        self.chain.append(new_blc)
        


bc1 = Blockchain()

bc1.add('Transaction 1')
bc1.add('Transaction 2')
bc1.add('Transaction 3')
bc1.add('Transaction 4')

for block in bc1.chain:
    print(block.__dict__)