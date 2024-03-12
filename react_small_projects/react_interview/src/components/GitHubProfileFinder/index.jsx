
import { useEffect } from 'react'
import { useState } from 'react'
import User from './User'
import "./styles.css"

const  GitHubProfileFinder= () => {
    const[userName,setUserName]=useState('Mrinal-xx-Singha')
    const[userData,setUserData]=useState(null)
    const[loading,setLoading]=useState(false)
  
    
  
  function handleSubmit(){
    fetchGitHubUserData()

  }

  async function fetchGitHubUserData(){
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    
    const data = await res.json()

    if(data){
      setUserData(data)
      setLoading(false)
      setUserName('')
    }

    console.log(data);
  }

  useEffect(()=>{
    fetchGitHubUserData()

  },[])

  if(loading){
    return <h1>Loading Data please wait</h1>
  }
  
    return (
    <div className='github-profile-container'>
        <div className='input-wrapper'>
            <input type="text"
            name='Search-by-username'
            placeholder='Search Github Username ....'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />

            <button
            onClick={handleSubmit}
            >Search</button>
        </div>
        {
          userData !== null ?
          <User user={userData}/> 
          :null
        }
    </div>
  )
}

export default GitHubProfileFinder