const myObject = {
    key1 : 'first key' ,
    key2 : {
        a : 'one',
        b : 'two'
    },
    'key 3' : null,
    key4 : function(a,b){
        return a+b
    },
}
// all possibilities of js object listed below

console.log(myObject.key4(4,5))
console.log(myObject['key 3'])
console.log(myObject.key2.a)
console.log(myObject['key2']['a'])
console.log(myObject['key2'].b)
