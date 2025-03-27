const students = [ "michael", "Moses", "Judith", "David", "Edison", "Batholomew"]
const absentees = [ "Anna", "Gloria", "Veronica", "Martins", "Naomi"]
students.push(absentees);
console.log(students)
console.log(students[6][1])
for (let item of absentees){
    students.push(item)
}
console.log(students)
const total_students = [
    students,...absentees
]
console.log(total_students)
const num1 = [1,2,3,4,5]
const num2 = [...num1,6,7,8,9,10]
console.log(num2)
// Array Destruction
const [a,b,c,...others] = students
console.log (a)
console.log(b)
console.log(c)
console.log(others)
// Adding element to an array
console.log(Array.prototype)
// Array.prototype outputs array methods on your array

const person = {
    name: "Judith Anselem",
    age: 18,
    SSCE: true,
    SSCE_type: "WAEC",
    gender: "female"}
    console.log (person.name)
    console.log (person["age"])
    // Object destructuring
    const {name, age, SSCE, SSCE_type, gender} = person
   



    // Conditional Statement
    let userage = 17
    if(userage>=18){
        console.log('you are eligible to vote')
    }else{
        console.log('you can\'t vote')
    }
    let day = "Tuesday"
    switch(day){
        case "monday":
            console.log ("Today is Monday");
            break;
            case "Tuesday":
                console.log ("Today is Tuesday");
                break;
                case "Wednesday":
                console.log ("Today is Wednesday");
                break;
                case "Thursday":
                console.log ("Today is Thursday");
                break;
                case "Friday":
                    console.log("Today is Friday");
                    break;
                    default:
                        console.log("Today is Weekend")
                    
    }
    function addition (){
        return a+b;
    }
