import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { Graphic } from "./pages/Graphic";
import { Login } from './pages/SignIn';
import { FoodMenu } from "./pages/Menu";
import { Sidebar } from "./component/Sidebar";
import { Order } from "./pages/Order";
import { Configuration } from "./pages/Settings";
import { SingUp } from "./pages/SingUp";
import { CustomTheme } from './style/theme';
import { Layout } from "./pages/Layout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CustomTheme>
          {/* {pathName ==='http://localhost:3000/' || pathName ==='http://localhost:3000/signup' ? "" : <NavBar/>} */}
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<SingUp />} />
            <Route path="/" element={<Layout/>}>
              <Route path='/navbar' element={<Sidebar/>} />
              <Route path="/order" element={<Order />} />
              <Route path="/graphic" element={<Graphic />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/menu" element={<FoodMenu />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Route>
          </Routes>
        </CustomTheme>
      </AuthProvider>
    </Router>
  );
}
export default App;
