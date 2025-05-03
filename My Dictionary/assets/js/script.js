
document.querySelector("#myButton").addEventListener('click', function(){
    let wordInput= document.getElementById("wordInput").value;
    
    if(wordInput=="array"){
        let array ={
            meaning:"array is a javascript datatype",
            example:[24, 25],
            
        }
        document.getElementById("meaning").innerHTML=array.meaning
        document.getElementById("example").innerHTML=array.example
    }
    else if (wordInput=="boolean") {
        let boolean ={
            meaning:"boolean is a javascript datatype",
            example:true,
            
        }
        document.getElementById("meaning").innerHTML=boolean.meaning
        document.getElementById("example").innerHTML=boolean.example
        
    }
    else if (wordInput=="strings") {
        let string ={
            meaning:"string is a javascript datatype",
            example:"string",
            
        }
        document.getElementById("meaning").innerHTML=string.meanings
        document.getElementById("example").innerHTML=string.example
        
    }
    else if (wordInput=="object") {
        let object ={
            meaning:"object is a javascript datatype",
            example: name,
            
        }
        document.getElementById("meaning").innerHTML=object.meaning
        document.getElementById("example").innerHTML=object.example
        
    }
    else if (wordInput=="number") {
        let number ={
            meaning:"number is a javascript datatype",
            example:25,
            
        }
        document.getElementById("meaning").innerHTML=number.meaning
        document.getElementById("example").innerHTML=number.example
        
    }
    else if (wordInput=="loop") {
        let loop ={
            meaning:"loop is a way to execute a block of code for a repeated number of times",
            example:"For Loop",
            
        }
        document.getElementById("meaning").innerHTML=loop.meaning
        document.getElementById("example").innerHTML=loop.example
        
    }
    else if (wordInput=="variable") {
        let variable ={
            meaning:"variables are like containers used to store Javascript datatype or values",
            example:"string",
            
        }
        document.getElementById("meaning").innerHTML=variable.meaning
        document.getElementById("example").innerHTML=string.example
        
    }
    else if (wordInput=="bootstrap") {
        let bootstrap ={
            meaning:"bootstrap is a CSS framework",
            example:"bootstrap color",
            
        }
        document.getElementById("meaning").innerHTML=string.meaning
        document.getElementById("example").innerHTML=string.example
        
    }
    
    
    
    else if(wordInput===""){
        document.getElementById("meaning").innerHTML= "No definition available"
        
    } 
    
})

    

    
    
