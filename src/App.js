import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Users } from "./components/users/Users";
import { EmployeeForm } from "./components/EmployeeForm";
import { UseStateDemo } from "./components/UseStateDemo";
import { StudentReg } from "./components/users/StudentReg";
import { UserReg } from "./components/UserReg";
import { ExamForm } from "./components/ExamForm";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Netfix/Home";
import { Shows } from "./components/Netfix/Shows";
import { Movies } from "./components/Netfix/Movies";
import { Series } from "./components/Netfix/Series";
import { MovieDetail } from "./components/Netfix/MovieDetail";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { PostApiDemo } from "./components/api/PostApiDemo";
import { PostApiDemo2 } from "./components/api/PostApiDemo2";
import { AddUser } from "./components/crud/AddUser";
import { UserList } from "./components/crud/UserList";
import { UpdateUser } from "./components/crud/UpdateUser";
import { PopUpDemo } from "./components/crud/PopUpDemo";
import { EmployeeList } from "./components/crud2/EmployeeList";
import { AddEmployee } from "./components/crud2/AddEmployee";
import { AddBook } from "./components/crud/AddBook";
import { BookList } from "./components/crud/BookList";
import { AddPdf } from "./components/crud/AddPdf";
import ViewPdf from "./components/crud/ViewPdf";
import { LoadPdf } from "./components/crud/LoadPdf";
import { LoginUser } from "./components/LoginUser";
import ProtectedRoutes from "./components/hooks/ProtectedRoutes";
import { StudentList } from "./components/students/StudentList";
import { Students } from "./components/students/Students";
import { AppContext } from "./context";
import { PieChartDemo } from "./components/chart/PieChartDemo";

function App() {
  var title = "ROYAL TECHNOSOFT";

  // var age =20
  // var name = 'John'
  // var per = 0.5
  // var isTrue = false
  // var user = {
  //   id:1,
  //   name:"raj",
  //   age:24
  // }

  // var students = [
  //   {
  //     id:1,
  //     name:"amit",
  //     age:23
  //   },
  //   {
  //     id:2,
  //     name:"neet",
  //     age:26
  //   },
  //   {
  //     id:2,
  //     name:"ajay",
  //     age:30
  //   }
  // ]

  return (
    // <div className='App'>
    //   <h1>HELLO</h1>
    //   {age}
    //   <h1>AGE {age}</h1>
    //   <h2>NAME = {name}</h2>
    //   <h3>PER = {per}</h3>
    //   <h4>isTrue = {isTrue==true?"TRUE":"FALSE"}</h4>
    //   <h5>user = {user.name}</h5>
    //   <h6>user = {user.age}</h6>
    //   <h7>user = {user.id}</h7>

    // {
    //   students.map((stu)=>{
    //     return(
    //       <ul>
    //         <li>{stu.id}</li>
    //         <li>{stu.name}</li>
    //       </ul>
    //     )
    //   })
    // }

    // <h1>filter....</h1>
    // {
    //   students.filter((stu)=>{
    //     return stu.age>25
    //   }).map((stu)=>{
    //     return(
    //       <ul>
    //         <li>{stu.id}</li>
    //         <li>{stu.name}</li>
    //         <li>{stu.age}</li>
    //       </ul>
    //     )
    //   })
    // }

    // </div>
    // <div className='App' style={{background:"#BAF9C8",height:"700px"}}>
    //   <Header/>
    //   <h1>APP COMPONENT</h1>
    //   <Footer/>
    // </div>
    <div className="App">
      {/* <Users t = {title}/> */}
      {/* <EmployeeForm/> */}
      {/* <StudentReg/> */}
      {/* <UserReg/> */}
      {/* <ExamForm/> */}
      {/* <UseStateDemo/> */}
      <Navbar />
      <AppContext.Provider value={{ title }}>
        <Routes>
          <Route path="/" element={<LoginUser />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/shows" element={<Shows />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
          </Route>
          <Route path="/shows/series" element={<Series />}></Route>
          <Route path="/movie/detail/:name" element={<MovieDetail />}></Route>
          <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
          <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
          <Route path="/postapidemo" element={<PostApiDemo />}></Route>
          <Route path="/postapidemo2" element={<PostApiDemo2 />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/upadteuser/:id" element={<UpdateUser />}></Route>
          <Route path="/popup" element={<PopUpDemo />}></Route>
          <Route path="/employeelist" element={<EmployeeList />}></Route>
          <Route path="/addemp" element={<AddEmployee />}></Route>
          <Route path="/addbook" element={<AddBook />}></Route>
          <Route path="/getbooks" element={<BookList />}></Route>
          <Route path="/addpdf" element={<AddPdf />}></Route>
          <Route path="/viewPdf" element={<ViewPdf />}></Route>
          <Route path="/loadpdf" element={<LoadPdf />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/piechart" element={<PieChartDemo />}></Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
