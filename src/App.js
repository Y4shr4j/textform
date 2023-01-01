
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';

function App() {
  return (
    <div>
      <Navbar title="TextUtils "/>
      <div className="container my-3">
      <TextForm heading="Enter the text to Analyze" />
      <About/>
      </div>
    </div>
  );
}

export default App;
