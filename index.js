async function fetchData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json();
}
