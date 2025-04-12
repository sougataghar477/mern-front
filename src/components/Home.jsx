import {  useEffect } from "react"
export default function Home(){
    useEffect(()=>{
        fetch('/api/home', {
            credentials: 'include',
            mode:'cors'
          })
        .then(r => r.json())
        .then(a => console.log(a))
    },[])
    return <>Home</>
}