const mypromise=new Promise((resolve,reject)=>{
console.log("executed promise");
});
mypromise.then(()=>{
    console.log("all set");
});

const Mypromise=new Promise((resolve,reject)=>{
    console.log("executed promise!!");
    resolve("success");
    });
    Mypromise.then((msg)=>{
        console.log(msg);
    }).catch((err)=>{
        console.log(err);
    })
// http://api.github.com/users/Ak-Kansal

// promise with API
// fetch("http://api.github.com/users/Ak-Kansal")
// .then(response =>{
//     if(!response.ok){
//         throw new error('network error')
//     }
// })