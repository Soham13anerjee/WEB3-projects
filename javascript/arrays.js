let friends = []

function addFriendAtEnd(friend){
    friends.push(friend)
    return
}

addFriendAtEnd('garg')
addFriendAtEnd('sagnik')
addFriendAtEnd('dipuda')

friends = []

function addFriendAtStart(friend){
    friends.unshift(friend) // unshift function adds to beginning of array
}

addFriendAtStart('garg')
addFriendAtStart('shounak')
addFriendAtStart('sagnik')

console.log(friends)

console.log(friends.length) // .length function gives length of array

let pop_val = friends.pop()

console.log('pop value,',pop_val)

console.log('after popping last element',friends)

// popping from empty array = return undefined with empty array

// update and access from array

friends[0]='dipuda'

console.log('after updation,',friends)