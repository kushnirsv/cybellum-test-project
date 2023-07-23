import {Route, Routes } from 'react-router';
import Login from "./pages/auth/Login";
import {PrivateOutlet} from "./utils/PrivateOutlet";
import Notification from "./pages/notifications/Notification";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<div>Forgot password</div>} />
      <Route path="*" element={<PrivateOutlet />}>
        <Route index element={<Notification />} />
      </Route>
      
      <Route path="/privacy-policy" element={<div>Privacy policy</div>} />
      <Route path="/terms" element={<div>Terms</div>} />
      <Route path="/contact-us" element={<div>Contact Us</div>} />
    </Routes>
  );
}

export default App;
