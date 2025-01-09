import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyAlert from "./components/MyAlert"
import AllMyBooks from "./components/AllMyBooks"
import Books from "./assets/books/horror.json"
import BookList from "./components/BookList"

function App() {

  return (
    <>
      <MyNav/>
      <MyAlert/>
      <BookList ArrBook={Books}/>
      <AllMyBooks/>
      <MyFooter/>
    </>
  )
}

export default App
