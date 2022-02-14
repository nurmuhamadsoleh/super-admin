import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainContext from "./context/index";
import { UMKMLayout, PublicLayout, AdminLayout, SuperAdminLayout, BpdLayout, BUMDesLayout } from "./layouts";

const App = () => {
  // useEffect(() => {
  //   localStorage.getItem("jwt") ? <Redirect push to="/admin-desa/dashboard" /> : <Redirect to="/public/login" push />;
  // });

  return (
    <Router>
      <MainContext>
        <Switch>
          <Route path="/public" render={(props) => <PublicLayout {...props} />} />
          <Route path="/admin-desa" render={(props) => <AdminLayout {...props} />} />
          <Route path="/bpd" render={(props) => <BpdLayout {...props} />} />
          <Route path="/bumdes" render={(props) => <BUMDesLayout {...props} />} />
          <Route path="/super-admin" render={(props) => <SuperAdminLayout {...props} />} />
          <Route path="/umkm" render={(props) => <UMKMLayout {...props} />} />
          <Redirect to="/public/login" />
        </Switch>
        <div style={{ position: "sticky", width: "100%", bottom: "0" }}></div>
      </MainContext>
    </Router>
  );
};

export default App;
