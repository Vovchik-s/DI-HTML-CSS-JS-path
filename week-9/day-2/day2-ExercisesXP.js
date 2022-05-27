 // Exercise 1 : Comparison

 function compareToTen(num){
     return new Promise((resolve,reject) =>{
         if(num < 10){
             resolve(`your number is ${num}`)
         }else{
             reject('Ooops')
         }
     })
 }

 // compareToTen(15)
 //     .then(result => console.log(result))
 //     .catch(error => console.log(error))


 compareToTen(8)
     .then(result => console.log(result))
     .catch(error => console.log(error))


 // Exercise 2 : Promises

 let promise = new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve('success')
     },4000)
 })
 .then((result)=> console.log(result))
 .catch((error)=> console.log('Ooops something went wrong', error))


 // Exercise 3 : Resolve & Reject


 let promise2 = new Promise((resolve,reject)=>{
 if(false){
     resolve(3)
 }else{
     reject('Boo!');
 }
 })
 .then((result)=> console.log(result))
 .catch((error)=> console.log(error));