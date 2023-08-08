import logo from './logo.svg';
import './App.css';
//import the navbar
import NavBar from './component/Navbar';
//import textbox.js 
import TextBox from './component/TextBox';



function App() {
  return (
    <>
    {/*all pre-coded React made  */}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>

    {/*My code starts from here*/}
    {/*navbar div */}
    <div id="NavBarId">
      <NavBar title="Text-Conversion-App" />
    </div>

    {/*textbox.js div*/}
    <div className="container mb-4">
      <TextBox title="Convert Lower to Upper Case"/>
    </div>
    
  </>
  );

}

export default App;
