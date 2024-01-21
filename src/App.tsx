import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { reset } from "./styles/reset";
import { theme } from "./styles/theme";
import { Global, ThemeProvider } from "@emotion/react";

import NotFound from "./pages/notFound";
import Main from "./pages/main";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Theme from "./components/themeUI";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Router>
        <div>
          <Routes>
            <Route path="/" index element={<Main />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/theme-ui" element={<Theme />} />
            <Route path="*" element={<Navigate to="not-found" />} />
            <Route path="not-found" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
