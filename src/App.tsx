import User from "./screen/user";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDisplay from "./screen/userDisplay";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="userdis/:id" element={<UserDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
