import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "./routes/blog/Blog";
import SignIn from "./routes/SignIn/SignIn";
import SignUp from "./SignUp";
import Checkout from "./checkout/Checkout";
import Pricing from "./routes/pricing/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="blog" element={<Blog />} />
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="pricing" element={<Pricing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
