const friends = [
  { fullname: 'Paul Lee', address: 'Bangkok, Thailand' },
  { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
];

function getFullName(name, surname) {
  return `${name} ${surname}`;
}
//getFriend is a higher order funct.
function getFriendName(name, surname, callback) {
  //asynchronous
  return new Promise( // อบ่าลืม return
    (resolve, reject) => {
    const fullname = callback(name, surname);
    if (fullname == undefined) reject(new Error('cannot get full name!'));
    resolve(fullname);
    }
  );
  //synchronous
  //const fullname = callback(name,surname);
  //console.log(fullname);
}
function getAddress(fullname)  {
  return new Promise(
    (resolve,reject) =>{
      let myFriend = friends.find((friend) => friend.fullname.includes((fullname)));
      if(myFriend === undefined)
        reject(new Error('your friend was not found'));
      resolve(myFriend.address);
    }
  )
}

//getFullName = callback funct.
//getFriend('Paul','Lee', getFullName); // เรียกของ synchronous

// เรียกของ asynchronous
//1. using promise.then() method
/*getFriendName('Paul','Lee', getFullName)
  .then((myFriendName) => {
    console.log(myFriendName)
    return myFriendName;
  })  
  .then((friendFullName) => {
    console.log(friendFullName);
    getAddress(friendFullName)
    .then((friendAddr) => console.log(friendAddr));
  })
  .catch((err) => console.log(err));
*/

//2. using async/await
async function main(){
  const myFriendName = await getFriendName('Paul','Lee', getFullName);
  const myFriendAddr = getAddress(myFriendName);
  console.log(myFriendAddr);
}
main();




























/*
function getAddress(fullname) {
  return new Promise((resolve, reject) => {
    let myFriend = friends.find((friend) => friend.fullname.includes(fullname));

    if (myFriend === undefined) {
      reject(new Error('your friend was not found'));
    }

    resolve(myFriend.address);
  });
}
//1. using promise.then() method
const myFriendAddr = getFriend('Paul', 'Lee', getFullName)
  .then((fullName) => {
    console.log(fullName);
    return fullName;
  })
  .then((friendName) => {
    console.log(friendName);
    getAddress(friendName).then((friendAddr) => console.log(friendAddr));
  })
  .catch((error) => {
    console.log(error);
  });
*/
//2. using async/await
// (add async in front of getAddress and getFriend)

// async function test() {
//   const friendName = await getFriend('Paul', 'Lee', getFullName);
//   console.log(friendName);
//   const friendAddr = await getAddress(friendName);
//   console.log(friendAddr);
// }
// test();
