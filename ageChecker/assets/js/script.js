// document.querySelector("#btn").addEventListener("click", function(){
//    let inputAge = parseFloat(document.getElementById("inputAge").value)
//     switch (inputAge) {
//         case 18 :
//             document.getElementById("message").innerHTML = "You are eligible"
            
//             break;
//             case >=18 :
//             document.getElementById("message").innerHTML = "You are eligible"
            
//             break;
            
    
//         default:
//             break;
//     }
// })
document.querySelector("#btn").addEventListener("click", function(){
    message.innerHTML=""
    const inputAge = parseFloat(document.getElementById("inputAge").value);
    if (inputAge >= 18) {
        document.getElementById("message").innerHTML = "You are Eligible"
        
    } if (inputAge <0) {
        document.getElementById("message").innerHTML = "You must choose a positive age number "

     
    }

    else if (inputAge<18) {
        document.getElementById("message").innerHTML= "You are not Eligible"

        
    } if (!inputAge) {
        document.getElementById("message").innerHTML= "Select an age"

        
        
    }
    
    
})