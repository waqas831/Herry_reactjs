import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Analyse from './components/Analyse';
import Navbar from './components/Navbar';


function App() {
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('Dark');
  const [color,setColor]=useState('black');
  const [alert,setAlert]=useState({});

  const toogle=()=>{
    if(mode==='dark'){
      setMode('light');
      setText('Dark');
      setColor('white');
      document.body.style.color='black';
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled ","success")
     
    }
    else{
      setMode('dark');
       setText('Light');
       setColor('black');
       document.body.style.color='white';
       document.body.style.backgroundColor='black';
       showAlert("Dark mode is enabled ","warning")
       
    }
  }

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setInterval(() => {
    setAlert(null)
  }, 3000);
}

  return (
    <div className="App">
    <Navbar  mode={mode} text={text} toogle={toogle} color={color}  /> 
    <Alert alert={alert} />
    <Analyse title="Text Analyse App" mode={mode} alert={showAlert} />   
    </div>
  );
}

export default App;
