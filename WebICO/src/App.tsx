import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Inicio from "./views/Inicio";
import Informacion from "./views/Informacion";
import Alumnos from "./views/Alumnos";
import PlanEstudios from "./views/PlanEstudios";
import Profesores from "./views/Profesores";
import Egresados from "./views/Egresados";
import LigasInteres from "./views/LigasInteres";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path="informacion" element={<Informacion />} />
        <Route path="alumnos" element={<Alumnos />} />
        <Route path="plan-estudios" element={<PlanEstudios />} />
        <Route path="profesores" element={<Profesores />} />
        <Route path="egresados" element={<Egresados />} />
        <Route path="ligas-interes" element={<LigasInteres />} />
      </Route>
    </Routes>
  );
}

export default App;
