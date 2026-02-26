import { Row, Col } from "antd";
import horarios from "../assets/images/alumnos/horariosicon.png";
import calendario from "../assets/images/alumnos/calendarioicon.png";
import extraordinarios from "../assets/images/alumnos/extraicon.png";
import tutores from "../assets/images/alumnos/tutoresicon.png";
import laboratorio from "../assets/images/alumnos/horarioslabicon.png";
import complementaria from "../assets/images/alumnos/formacionicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function Alumnos() {
  return (
    <>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={horarios} alt="Horarios" />}
            titulo="HORARIOS"
            descripcion="Horarios de clase del semestre actual."
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={horarios} alt="Cupos" />}
            titulo="CUPOS"
            descripcion="Cupos disponibles para el semestre actual."
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={calendario} alt="Calendario" />}
            titulo="CALENDARIO"
            descripcion="Calendario de actividades escolares del semestre actual."
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={extraordinarios} alt="Extraordinarios" />}
            titulo="EXTRAORDINARIOS"
            descripcion="Horarios de examenes extraordinarios del semestre actual."
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={tutores} alt="Tutores" />}
            titulo="TUTORES"
            descripcion="Información sobre los tutores del semestre actual."
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={laboratorio} alt="Laboratorio" />}
            titulo="HORARIOS DE LABORATORIO"
            descripcion="Horarios de laboratorio del semestre actual."
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={complementaria} alt="Formacion" />}
            titulo="HORAS DE FORMACIÓN COMPLEMENTARIA"
            descripcion="Información sobre las horas de formación complementaria."
          />
        </Col>
      </Row>
    </>
  );
}
