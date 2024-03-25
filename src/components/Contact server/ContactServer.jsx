import { useEffect, useState } from "react";

function ContactServer(){
    const [authors, setAuthors]= useState([]);
    const [fullName, setFullName] = useState("");
    const [yearBorn, setYearBorn] = useState("");
    const [technology, setTechnology] = useState("");
    const [submited, setSubmited] = useState(false);

    useEffect(()=>{
        fetch(process.env.REACT_APP_URL + "api/authors")
        .then((response)=>
            response.json()
        ).then((data)=>{
            setAuthors(data);
            console.log(data)
        })},[submited]);
    
        function addAuthor(e, formData) {
            e.preventDefault();
            
            fetch(process.env.REACT_APP_URL + "api/authors/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({fullName,
        year_Born : yearBorn,
        technology})
})
.then(function(res){ 
    console.log(res);
    setSubmited(!submited)
 }).catch((err)=>{console.log(err)})
            
          
        }
    

    return<div>
        {authors.map((author, index)=>{
          return  <div key={index}>{author.fullName}</div>
        })}

        <form onSubmit={addAuthor}>
            <input name="fullName"  onChange={(e)=>setFullName(e.target.value)}/>
            <input name="yearBorn" onChange={(e)=>setYearBorn(e.target.value)}/>
            <input name="technology" onChange={(e)=>setTechnology(e.target.value)}/>
            <button type="submit">add author</button>
        </form>
    </div>
}
export default ContactServer;
