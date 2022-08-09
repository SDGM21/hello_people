import logo from "./logo512.png"

const App = () => {
  return (
    <div className="container box-border flex flex-col items-center content-center">
     <div className="w-1/2 border bg-blue-500 rounded-xl flex items-center">
      <div className="border p-2 mx-auto">
        <img className="block" src={logo} alt="" />
      </div>
      <div className="border p-2">
        <h3>Hola</h3>
        <p>My name is</p>
      </div>
     </div>
    </div>
  );
}

export default App;
