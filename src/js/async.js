async function fetchUser() {
    return 'ellie'
    
}

const user = fetchUser()
user.then(console.log)
console.log(user)

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await delay(1000);
    return '🍎'
}

async function getBanana() {
    await delay(1000);
    return '🍌'
}

// async function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then( banana => 
//             `${apple} + ${banana}`
//         )
//     });
// }


// async function pickFruits() {
//    const apple = await getApple();
//    const banana = await getBanana();

//    return `${apple} + ${banana}`;
// }

pickFruits().then(console.log);