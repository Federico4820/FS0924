import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyAlert from "./components/MyAlert"
import AllMyBooks from "./components/AllMyBooks"

function App() {

  return (
    <>
      <MyNav/>
      <MyAlert/>
      <AllMyBooks/>
      <MyFooter/>
    </>
  )
}

export default App
