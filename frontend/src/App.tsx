import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Components/Layout";
import ListPage from "./Pages/List";
import NewTask from "./Pages/NewTask";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/new" element={<NewTask />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
