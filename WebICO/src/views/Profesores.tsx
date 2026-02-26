import { Row, Col } from "antd";
import { TeamOutlined, ExperimentOutlined } from "@ant-design/icons";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

const iconStyle = { fontSize: 48, color: "#032047" };

export default function Profesores() {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<TeamOutlined style={iconStyle} />}
          titulo="Plantilla docente"
          descripcion="Conoce a los profesores de la carrera de Ingeniería en Computación."
        />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<ExperimentOutlined style={iconStyle} />}
          titulo="Líneas de investigación"
          descripcion="Áreas de investigación y cuerpos académicos."
        />
      </Col>
    </Row>
  );
}
