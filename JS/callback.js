
function getdata(cb){
    // console.log("got data");
    setTimeout(()=>{
        console.log("got data");
    },3000);
    cb();
}
function displaydata(){
    // console.log("displaydata");
    setTimeout(()=>{
        console.log("displaydata");
    },4000);
}
function register(cb){
    // console.log("register email");
    setTimeout(()=>{
        console.log("register email");
    },5000);
    cb();
    // waitforthreesec();
}
function sendemail(cb){
    // console.log("email send");
    // waitforthreesec();
    setTimeout(()=>{
        console.log("email send");
    },7000);
    cb();
}
function Login(cb){
    // console.log("login end");
    setTimeout(()=>{
        console.log("login end");
    },8000);
    cb();
}
// function waitforthreesec(){
//     const ms=3000+new Date().getTime();
//     while(ms>new Date()){}
// }
console.log("start");
register(function(){
    sendemail(function(){
        Login(function(){
            getdata(function(){
                displaydata(function(){

                })
            })
        })
    })
})