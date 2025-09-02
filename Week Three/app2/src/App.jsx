

// import './App.css'
// import HelloWorld from './components/functionalComponent/helloWorld'

import Propcomp from "./components/propComponents/propcomponent1";

// import HiWorld from "./components/classComponent/World";

let date = "2025-09-02";
function App() {
  return <Propcomp date={date} />
  // return <HiWorld date="1-1-1111"/>
  // return <HelloWorld date="logu" />
     
}

export default App;
