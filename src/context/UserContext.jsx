import React,{createContext} from 'react'
import run from '../gemini'
import { useState } from 'react'
export const dataContext = React.createContext()
function UserContext({children}) {
  const [input,setInput]=useState("")
  const [showResult,setShowResult]=useState(false)
  const [loading,setLoading]=useState(false)
  const [resultData,setResultData]=useState("")
  const [recentPrompt,setRecentPrompt]=useState("") 
  const [prevPrompts,setPrevPrompts]=useState([])
  function newChat(){
    setShowResult(false)
    setLoading(false)
  }
  async function sent(input){
    setResultData("")
    setShowResult(true)
    setRecentPrompt(input)
    setLoading(true)
    setPrevPrompts(prev=>[...prev,input])  
    let response=await run(input)
    setResultData(response.split("**")&&response.split("*"))
    setLoading(false)
    setInput("")

  }
  const data = {
    input,
    setInput,
    sent,
    loading,
    setLoading,
    showResult,
    setShowResult,
    resultData,
    setResultData,
    recentPrompt,
    setRecentPrompt,
    newChat

  }
  return (
    <>
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
    </>
  )
}

export default UserContext
