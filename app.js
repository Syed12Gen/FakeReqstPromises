
// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
} 

fakeRequestPromise('birdburger.com/api/mildburger/page1')
.then((data)=> {
    console.log("IT WORKED..!! (PAGE1)")
    console.log(data)
    return fakeRequestPromise('birdburger/api/wildburger/page2')
})
.then((data)=> {
    console.log("IT WORKED..!! (PAGE2)")
    console.log(data)
    return fakeRequestPromise('birdburger/api/specialburger/page3')
})
.then((data)=> {
    console.log("IT WORKED..!! (PAGE3)")
    console.log(data)
})
.catch((err)=>{
    console.log("OH NO, A REQUEST FAILED")
    console.log(err)
})
