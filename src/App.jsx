import Sidebar from "./component/Sidebar/Sidebar"
import ChatSection from "./component/chatSection/chatSection"
import Separation from "./component/Separation/Separation"
import { useContext } from "react";
import { dataContext } from "./context/UserContext";
function App() {

  return (
    <>
     <Sidebar/>
     <Separation/>
     <ChatSection/>
    </>
  )
}

export default App
