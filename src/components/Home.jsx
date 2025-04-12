import {  useEffect } from "react"
export default function Home(){
    useEffect(()=>{
        fetch('https://mern-back-production-aab8.up.railway.app/home', {
            credentials: 'include',
            mode: 'cors',
          })
        .then(r => r.json())
        .then(a => console.log(a))
    },[])
    return <>Home</>
}