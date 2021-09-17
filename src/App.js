import React,{useState} from 'react' ;
import logo from './logo.svg';
import './App.css';


function App() {
  const student =['sakib','manna','rease','josim','bappi'];
  const prodact =[
    {name:'samsung', price:5000},
    {name:'samponi', price:2000},
    {name:'monitor', price:4000}
  ];
  
  const stylecolor = {
    color : 'white',
    border:'1px solid green'
  }
  return (
    <div className="App">
      <header className="App-header">
       <div >
         <h1>My first react !!!</h1>
         <Incring> </Incring>
         <ul>
           {student.map(name => <li>{name}</li>)}
         </ul>
         
         <Persion name='Sakib khan' nayika="Bulbuli khan"></Persion>
         <Persion name="Riyaj Alli" nayika="Purnima Rani"></Persion>
        
         {
           prodact.map(product=>  <Prody name={product.name} price={product.price}></Prody> )
         }
       </div>
      </header>
    </div>
  );
}

function Persion(pope){
const PersionStyle ={
  border:'1px solid gray',
  padding:'10px',
  color:'white',
  marginTop:'15px'
  
}
  return (
   <div style={PersionStyle}>
      <h2>Nayok Name: {pope.name}</h2>
      <p>Naika Name: {pope.nayika}</p>
   </div>
  );
}

function Prody(pro){
  const proStyle ={
    width:'300px',
    height:'300px',
    backgroundColor:'gray',
    padding:'10px',
    marginTop:'15px'
   
    
  };
 
  const btn ={
    border:'1px solid tomato',
    borderRadius:'5px',
    color:'gray'
    
  };
  return (
    <div style={proStyle}>
     <h2>Phone Name: {pro.name}</h2>
      <h3>Phone Price:   ${pro.price}</h3>
      <button style={ btn }>Buy Now</button>
    </div>
  )
}
function Incring(){
 const [count ,setCount]= useState(0);
 const addPro = () =>setCount(count+1);
 const stylebutton ={
   padding:'5px',
   width:'150px',
   fontSize:'20px',
   color:'#000080',
   borderRadius:'10px'
 }
  return (
    <div>
      <button onClick={addPro} style={stylebutton}> Add product</button>
      <h2 >product add: {count}</h2>
      <Extradd count={count+5}></Extradd>
    </div>
  )
}

function Extradd(popes){
  return (
    <div>
      <h3>softor total: {popes.count} </h3>
    </div>
  )
}
export default App;
