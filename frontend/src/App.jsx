//import { InputBox } from "./components/InputBox";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Signin from "./pages/SIgnin";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

