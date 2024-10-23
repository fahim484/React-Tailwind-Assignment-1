import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/shared";
import { Dashboard, Locations } from "./components/home";
import { Incidents } from "./components/home/incidents/Incidents";
import Error from "./components/error/Error";
import { IncidentsFirstPage } from "./components/home/incidents/IncidentsFirstPage";

const App = () => {
  return (
    <BrowserRouter>
      <main className="font-onest ">
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Incidents" element={<Incidents />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/new-incident" element={<IncidentsFirstPage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
