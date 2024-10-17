function register(resolve){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("register email");
            resolve();
        },3000);
    })
};
function getdata(resolve){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("got data");
            resolve();
        },3000);
    })    
};
function displaydata(resolve){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("displaydata");
            resolve();
        },3000);
    })    
}''
function sendemail(resolve){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("email send");
            resolve();
        },3000); 
    })
    
}
function Login(resolve){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login end");
            resolve();
        },3000);
    })
};
console.log("start");
// register(function(){
//     sendemail(function(){
//         Login(function(){
//             getdata(function(){
//                 displaydata(function(){

//                 })
//             })
//         })
//     })
// })
register().then(sendemail).then(Login).then(getdata).then(displaydata).catch((err)=>{
    console.log("error",err);
});
console.log("complete");