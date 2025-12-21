import { useState } from "react";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background-light  w-full min-h-screen flex items-center justify-center">
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
