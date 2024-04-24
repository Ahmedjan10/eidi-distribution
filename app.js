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
let eidi = document.getElementById("total-eidi");
let eidiReceiver = document.getElementById("reciver-input");
let array =[]
let myTotalEidi = 0

function distributeEidi(parm){
    // console.log(parm)

   array.push(parm);
   const total = array.reduce((a,b)=>a+b,0);
   console.log("array",array);
   console.log("total",total);
   eidi.value = total; 
   myTotalEidi = total
}


function sendEidi(){
    // let myeidi = document.getElementById("btn")
    //  alert("suscefully ", myTotalEidi, "eidi send to" , eidiReceiver)
    // console.log('snedEidi function')
    alert("Successfully sent "+ myTotalEidi +" to "+eidiReceiver.value)

}