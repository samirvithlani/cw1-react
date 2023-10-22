import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Users } from './components/users/Users';
import { EmployeeForm } from './components/EmployeeForm';
import { UseStateDemo } from './components/UseStateDemo';
import { StudentReg } from './components/users/StudentReg';

function App() {

  var title ="ROYAL TECHNOSOFT"
  
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
    <div className='App'>
      {/* <Users t = {title}/> */}
      {/* <EmployeeForm/> */}
      <StudentReg/>
      {/* <UseStateDemo/> */}
    </div>
  );
}

export default App;
