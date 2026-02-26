import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Inicio from "./views/Inicio";
import Informacion from "./views/Informacion";
import Alumnos from "./views/Alumnos";
import AlumnosHorarios from "./views/alumnos/horarios";
import AlumnosCupos from "./views/alumnos/cupos";
import AlumnosRedes from "./views/alumnos/redes";
import AlumnosCalendario from "./views/alumnos/calendario";
import AlumnosTutores from "./views/alumnos/tutores";
import AlumnosExtraordinarios from "./views/alumnos/extraordinarios";
import AlumnosFormacion from "./views/alumnos/formacion";
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
        <Route path="alumnos/horarios" element={<AlumnosHorarios />} />
        <Route path="alumnos/cupos" element={<AlumnosCupos />} />
        <Route path="alumnos/redes" element={<AlumnosRedes />} />
        <Route path="alumnos/calendario" element={<AlumnosCalendario />} />
        <Route path="alumnos/tutores" element={<AlumnosTutores />} />
        <Route
          path="alumnos/extraordinarios"
          element={<AlumnosExtraordinarios />}
        />
        <Route path="alumnos/formacion" element={<AlumnosFormacion />} />
        <Route path="plan-estudios" element={<PlanEstudios />} />
        <Route path="profesores" element={<Profesores />} />
        <Route path="egresados" element={<Egresados />} />
        <Route path="ligas-interes" element={<LigasInteres />} />
      </Route>
    </Routes>
  );
}

export default App;
