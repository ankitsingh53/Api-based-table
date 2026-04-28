async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json();
    
    console.log(data);


    //  let row ='';
    // data.forEach((element) => {
    //     console.log(element);
    //     row +=  `<tr>
    //     <td>${element.id}</td>
    //     <td>${element.name}</td>
    //     <td>${element.username}</td>
    //     </tr>
    //     `
    //     document.getElementById("table-body").innerHTML = row
    // });

    data.forEach((element) => {
        
        // console.log(element);

        let row = document.createElement("tr")
        row.innerHTML=  `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        `
        document.getElementById("table-body").append(row)
    });
    
}
