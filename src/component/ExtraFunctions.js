import axios from "axios";

const handleSubmit = (e) =>{
    axios.post("URL here",objectHere)
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
}

const handleGet = (e) =>{
    axios.get("URL here")
    .then((response)=>{
        console,log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
}


// axios.interceptors.request.use((request)=>{
//     console.log(request);
// })
// axios.interceptors.response.use((response)=>{
//     console.log(response);
// })

// axios.defaults.baseURL = "set url here ";