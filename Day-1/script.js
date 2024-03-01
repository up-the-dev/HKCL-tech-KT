const getDataFromServer= () =>{
    return new Promise(resolve => {
        setTimeout(() => {  
          resolve(1);
      },4000);
 })
}

/* function getDataFromServer(){
    // traditional function
}
   */
const main= async()=>{
  const data= await getDataFromServer();
   console.log(data)
}

getDataFromServer()
main()
localStorage.setItem("token","sjhsadkjasdkja")
document.cookie="name=rohit"
console.log(localStorage.getItem("token"))

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))


//   1.db operations
//   2.fetch from server

