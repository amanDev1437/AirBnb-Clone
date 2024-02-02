import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./Pages/RegisterPage";
import { UserContextProvider } from "./UserContext";

import axios from "axios";
import AccountPage from "./Pages/AccountPage";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

const App = () => {
  return (
   <div>
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<IndexPage></IndexPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/account/:subpage?" element={<AccountPage></AccountPage>}></Route>
          <Route path="/account/:subpage/:action" element={<AccountPage></AccountPage>}></Route>
          
        </Route>
      </Routes>
      </UserContextProvider>
   </div>
  );
};

export default App;
