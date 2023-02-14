import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedRoutes from "Routes";


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Prudential | Software Company</title>
        <meta name="author" content="Juan Pablo Listte"></meta>
        <meta name="publisher" content="Juan Pablo Listte"></meta>
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
    
  );
}

export default App;
