import {  useEffect } from "react"
export default function Home(){
    useEffect(()=>{
        fetch('https://back-nine-zeta.vercel.app/home', {
            credentials: 'include'
          })
        .then(r => r.json())
        .then(a => console.log(a))
    },[])
    return <>Home</>
}