// import logo from './logo.svg';
import './App.css';
// import Navebar from './NaveBar';
// import { Suriya } from './Suriya';
// import  {Karuppu}  from './Karuppu';
// import { Task } from './Task';
import Form from './Form';
import Count from './Count';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import LoginRegister from './LoginRegister';


function App() {
// let name = "Suriya"
// var int1 = 100;
// var int2 = 500 ;
// var int3 = (int1 +int2);
// let kar = [{name:"karuppu",age:26},{name:"Muthu",age:50}];
// let na = kar.splite(...'age');
  return (
  <div>
   {/* <h1 style={{textAlign:'center',color:'blue'}}>Hello World</h1>
    <h1 style={{textAlign:'center',color:'blue'}}>Mother World</h1> 
   
  <Navebar></Navebar>
  <br></br>
  <Suriya></Suriya>
<Karuppu poj={name} />
<Task value ={int3}/>
<Task val = {na}/> */}
<BrowserRouter>
<Routes>
  <Route path="/" element={<Count />} />
  <Route path="/Form" element={<Form />} />
</Routes>
</BrowserRouter>
<LoginRegister />
{/* <Form /> 
<Count /> */}
  </div>
  );
}

export default App;
