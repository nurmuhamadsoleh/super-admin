import AuthUserContext from "./AuthContext";
import KependudukanContext from "./kependudukan/KependudukanContext";

const MainContext = ({ children }) => {
  return (
    <AuthUserContext>
      <KependudukanContext>{children}</KependudukanContext>
    </AuthUserContext>
  );
};

export default MainContext;
