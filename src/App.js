import "./App.css";

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3" >
        <Textform heading="Enter Your text" />
      </div>
    </>
  );
}

export default App;
