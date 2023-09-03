from cryptography.hazmat.primitives.asymmetric import rsa,padding
from cryptography.hazmat.primitives import hashes
from cryptography.exceptions import InvalidSignature

def generate_keys():
    private=rsa.generate_private_key(
        public_exponent = 65537,
        key_size=2048
    )
    public = private.public_key()
    return public,private

def sign(message,private):
    message = bytes(str(message),'utf-8') #converting message in bytes format

    signature=private.sign(
        message,
        padding.PSS(
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    ) 
    return signature

def verify(message,sig,public):
    message=bytes(str(message),'utf-8')
    try:
        public.verify(
            sig,
            message,
            padding.PSS(
                mgf=padding.MGF1(hashes.SHA256()),
                salt_length=padding.PSS.MAX_LENGTH
            ),
            hashes.SHA256()
        )
        return True
    except InvalidSignature:
        return False
    except:
        print("verify function malfunctioned")
        return False

if __name__=='__main__':
    # print(generate_keys())
    pu,pr = generate_keys()

    message = "Hello! first transaction sent for testing purposes"
    sig = sign(message,pr)
    print(sig)
    # message = "I was transferred 10000 bitcoins! Haha" -> outputs rigged transaction which is desired as well
    if verify(message,sig,pu):
        print("Transaction verified")
    else:
        print("Rigged Transaction.")
