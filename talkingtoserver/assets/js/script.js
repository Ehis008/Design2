   async function getData() {
      const tableDiv = document.querySelector("#table-wrapper");
            const response= await fetch("local-api/api.json")
           const users = await response.json();
           console.log(users.data);
           let table =`<table class = "table text-primary fst-italic font fw-bold">
           <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Education</th>
            <th>Image</th>
           </tr>`

           let i = 1;
           users.data.forEach(user => {
            console.log(user);
            table +=`
            <tr>
                <td>${i++}</td>
                <td>${user.name}</td>
                <td>${user.gender}</td>
                <td>${user.age}</td>
                <td>${user.education}</td>
                <td><img src="${user.imageURL}" alt=${user.name}" style= "height:50px; border-radius:50%;"/></td>
            </tr>`
            
           });
           table+= `</table>`
             tableDiv.innerHTML = table;

           
      
      
    }
    getData()
 
 