// const eidi = document.getElementById('eidi')
// const array = []
 
// function distributeEidi(param){
//     console.log(param)
//     // array.push(...array, eidi.value)
//     array.push(param)
//     const total = array.reduce((a,b)=>a+b,0)
//     console.log('array', array)
//     console.log('total', total)
//     // console.log("eidi", eidi)
//     eidi.value = total
//     }
let eidi = document.getElementById("eidi");
let array =[]

function distributeEidi(parm){
    console.log(parm)

   array.push(parm);
   const total = array.reduce((a,b)=>a+b,0);
   console.log("array",array);
   console.log("total",total);
   eidi.value = total;
   
}
