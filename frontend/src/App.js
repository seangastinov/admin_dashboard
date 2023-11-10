import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {productInputs, userInputs} from "./formSources";
import {rowsUser, rowsProduct, columnsProduct, columnsUser} from "./datatablesources";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    {/*this is the default path localhost:3000 will give component Home /*/}
                    <Route index element={<Home />} />
                    {/*this is localhost:3000/login gives component Login /*/}
                    <Route path = "login" element={<Login />} />
                    <Route path = "users">
                        <Route index element={<List type={"User"} columns={columnsUser} rows={rowsUser}/>} />
                        <Route path = ":userId" element={<Single />} />
                        <Route path = "new" element={<New input={userInputs} title={"Add New User"}/>} />
                    </Route>
                    <Route path = "products">
                        <Route index element={<List type={"Product"} rows={rowsProduct} columns={columnsProduct}/>} />
                        <Route path = ":productId" element={<Single />} />
                        <Route path = "new" element={<New input={productInputs} title={"Add New Product"}/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
