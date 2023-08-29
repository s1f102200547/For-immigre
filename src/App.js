import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

import Blog from "./routes/blog/Blog";
import SignIn from "./routes/SignIn/SignIn";
import Pricing from "./routes/pricing/Pricing";

function App() {

  const [user, setUser] = useState();


  function RequiredAuth(props){
    if (!user){
      return (<Navigate to="/signin"/>);
    }
    return props.children;
  }

  function SetLoggedInUser(user){
    setUser(user);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SignIn SetLoggedInUser={SetLoggedInUser} />} />
        <Route path="/" element={<RequiredAuth><Blog /></RequiredAuth>} />
        <Route path="pricing" element={<RequiredAuth><Pricing/></RequiredAuth>}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
