const data=fetch("http://api.github.com/users/Ak-Kansal");
data.then((value)=>{
   return value.json();
}).then((res)=>{
    console.log(res);
})