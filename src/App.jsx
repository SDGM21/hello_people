import { useState } from "react";
import WriteForm from "./components/WriteForm";
import logo from "./logo512.png";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="container box-border flex flex-col items-center content-center">
      <div className="w-1/2 border bg-blue-500 rounded-xl">
        <div className="border p-2 mx-auto">
          <img className="block" src={logo} alt="" />
        </div>
        <div className="border p-2">
          <h3>Hola</h3>
          <p>My name is</p>
        </div>
        <div>
          <button
            className={formOpen ? "bg-red-500" : "bg-green-500"}
            onClick={() => {
              setFormOpen(!formOpen);
            }}
          >
            Escribir
          </button>
        </div>
        {formOpen && <WriteForm />}
      </div>
    </div>
  );
};

export default App;
