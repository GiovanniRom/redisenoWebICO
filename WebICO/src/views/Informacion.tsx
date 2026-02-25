import { Row, Col } from "antd";
import {
  InfoCircleOutlined,
  BankOutlined,
  TeamOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

const iconStyle = { fontSize: 48, color: "#032047" };

export default function Informacion() {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} sm={12} md={6}>
        <TarjetaIconoTitulo
          icono={<InfoCircleOutlined style={iconStyle} />}
          titulo="FES Aragón"
          descripcion="Conoce la Facultad de Estudios Superiores Aragón."
        />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <TarjetaIconoTitulo
          icono={<BankOutlined style={iconStyle} />}
          titulo="La carrera"
          descripcion="Información sobre la carrera de Ingeniería en Computación."
        />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <TarjetaIconoTitulo
          icono={<TeamOutlined style={iconStyle} />}
          titulo="Comunidad"
          descripcion="Nuestra comunidad académica y estudiantil."
        />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <TarjetaIconoTitulo
          icono={<FileTextOutlined style={iconStyle} />}
          titulo="Documentos"
          descripcion="Documentos y trámites de interés."
        />
      </Col>
    </Row>
  );
}
