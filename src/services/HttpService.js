import axios from "axios"

const api = axios.create({
    baseURL: "https://teacho-india.herokuapp.com/",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json",
      "Access-Control-Allow-Credentials":true,
      "Access-Control-Allow-Origin": "*"
    }
})

const file =axios.create({
   baseURL: "https://teacho-india.herokuapp.com/",
   headers: { "Content-Type": "multipart/form-data" },
})
class Service{
 postFile=async(endpoint,data) => {
   let res=await file.post(endpoint,data)
   return res;
}
   
 post = async(endpoint,data) => {
    let res = await api.post(endpoint,data)
    return res;
 }

 get = async(endpoint) => {
    let res = await api.get(endpoint)
    return res.data;
 }

 patch = async(endpoint,data) => {
    let res = await api.patch(endpoint,data)
    return res.data;
 }

 delete = async(endpoint) => {
    let res = await api.delete(endpoint)
    return res.data;
 }
 put = async(endpoint,data) => {
   let res = await api.put(endpoint,data)
   return res;
}
}

export default Service;