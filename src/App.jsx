import { useState } from "react";
import WriteForm from "./components/WriteForm";
import MainView from "./components/MainView";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="container box-border flex flex-col items-center content-center">
      <div className="w-1/2 border bg-blue-500 rounded-xl">
        <MainView/>
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
