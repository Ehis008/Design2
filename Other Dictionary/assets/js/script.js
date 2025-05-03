let dictionary = {
    array:{
        meaning: "Array",
        example: "Array",
    },
    boolean:{
        meaning: "boolean",
        example: "boolean"

    },
    string:{
        meaning: "string",
        example: "string"

    },
    object:{
        meaning: "boolean",
        example: "boolean"

    },
    loop:{
        meaning: "boolean",
        example: "boolean"

    },
    variable:{
        meaning: "boolean",
        example: "boolean"

    },
    variable:{
        meaning: "boolean",
        example: "boolean"

    },
    
}

document.querySelector("#myButton").addEventListener('click', function(){
    if (dictionary[wordInput]) {
        let wordInput = document.querySelector("#wordInput").value;
    document.getElementById("meaning").innerHTML =`meaning: ${dictionary[wordInput].meaning}`
    document.getElementById("example").innerHTML =`example: ${dictionary[wordInput].example}`
     console.log();

        
    } else {
        document.getElementById("meaning").innerHTML= "Word not found"

        
    }
    


    


})