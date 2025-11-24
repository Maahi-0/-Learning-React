import "bootstrap/dist/css/bootstrap.min.css"
import Student_details from "./components/students"
import "./App.css"
function App() {

  return (


    <>
      <Student_details name="muskan" age={20} is_student={true} />
      <Student_details name="khushi" age={35} is_student={false} />
      <Student_details name="himanshu" age={20} is_student={true} />
      <Student_details name="sakshi" age={30} is_student={false} />
    </>
  )
}

export default App
