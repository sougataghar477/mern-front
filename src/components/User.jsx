import { useEffect,useState } from "react";
import { useParams } from "react-router";
export default function User(){
    const { id } = useParams();
    let [response,setResponse]=useState('');
      useEffect(() => {
        fetch('https://back-nine-zeta.vercel.app/users/'+id)
          .then(r => r.json())
          .then(data => setResponse(data.id))
          .catch(err => console.error('Fetch error:', err)); // ✅ Always good to include
      }, [id]);
    return <>
    User {response || 'Not Found'}
    </>
}