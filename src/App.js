import './App.css';
import {Home} from "./frontend/pages/home/Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
        <ToastContainer/>
        <Home/>
    </div>
  );
}

export default App;
