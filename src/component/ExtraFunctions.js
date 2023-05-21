import axios from "axios";
import { useEffect } from "react";


//................................................Axios Instance Creation...................................
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});




//.....................................................Fetch Function................................
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
},[])


// axios.interceptors.request.use((request)=>{
//     console.log(request);
// })
// axios.interceptors.response.use((response)=>{
//     console.log(response);
// })

// axios.defaults.baseURL = "set url here ";