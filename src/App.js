import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Products";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
      </main>
    </div>
  );
}

export default App;
