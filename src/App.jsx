import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "./components/common/Button";
import { SectionTitle } from "./components/common/SectionTitle";

const App = () => {
  return (
    <BrowserRouter>
      <main className="font-onest ">
        <Button>Good</Button>
        <Button className="bg-red-500">Dark</Button>
        <SectionTitle>Section Title</SectionTitle>
        <Routes>
          {/* <Route path="" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Route> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
