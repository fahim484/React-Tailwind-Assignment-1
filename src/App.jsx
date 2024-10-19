import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/shared";
import { Dashboard } from "./components/home";

const App = () => {
  return (
    <BrowserRouter>
      <main className="font-onest ">
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
