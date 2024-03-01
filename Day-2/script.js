console.log("Day 2")

// storage api's

// sessionStorage ---> session(browser tab)
// localStorage --> manually or JS
// cookie ---> expiry is defined

// localstorage
localStorage.setItem("name","ramesh")
localStorage.setItem("token","hdwqdhqwhdkhhhsdada")
const token=localStorage.getItem("token")
console.log("token-->",token)

// sessionStorage
window.sessionStorage.setItem("email","umesh@gmail.com")
const email=sessionStorage.getItem("email")
console.log("email from session-->",email)

window.document.cookie="username=John Doe; expires=wed, 22 Feb 2024 12:00:00 UTC";

// fetch api
// get
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"GET"
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// post

const fetchData=async()=>{
    try {
        const response= await  fetch('https://jsonplaceholder.typicode.com/posts/jkkjd', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 'siadsdhask',
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
    
      const createdPost=  await  response.json()
          console.log(createdPost)
        
    } catch (error) {
        console.log("error catched-->",error)
    }finally{

    }

}

fetchData()





let emailID='umesh@gamil.com';
emailID=4;

