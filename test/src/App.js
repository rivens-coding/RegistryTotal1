
import Login from "./pages/login/Login";
import View from "./pages/view/View";
import DepartmentManagement from "./admin/DepartmentManagement";
import UserManagement from "./admin/UserManagement";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import RegistryTable from "./admin/RegistryTable";
import InfoButton from "./admin/InfoButton";
import AddRegistry from "./admin/AddRegistry";
import UpdateRegistry from "./admin/UpdateRegistry";
import DepartmentAccountEdit from "./admin/DepartmentAccountEdit";
import UserAccountEdit from "./admin/UserAccountEdit";
import AddDepartmentAccount from "./admin/AddDepartmentAccount";
import AddUserAccount from "./admin/AddUserAccount";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/*">
            <Route index element={<RegistryTable />} />
            <Route path="login" element={<Login />} />
            <Route path="admin">
              <Route index element={<RegistryTable />} />
              <Route path="rt" element={<RegistryTable />} />
              <Route path="ib" element={<InfoButton />} />
              <Route path="ar" element={<AddRegistry />} />
              <Route path="ur" element={<UpdateRegistry />} />
              <Route path="uau" element={<UserAccountEdit />} />
              <Route path="dau" element={<DepartmentAccountEdit />} />
              <Route path="da" element={<AddDepartmentAccount />} />
              <Route path="ua" element={<AddUserAccount />} />
              <Route path="dm" element={<DepartmentManagement />} />
              <Route path="um" element={<UserManagement />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
