import { Layout, Menu, Typography, Row, Col } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import logoUnam from "../assets/images/unam.png";
import logofes from "../assets/images/logofes.png";
import logoico from "../assets/images/logoico.png";
import background from "../assets/images/background.png";
import aniv from "../assets/images/footer/50aniv.png";
import correo from "../assets/images/footer/mail-icon-white.png";
import wa from "../assets/images/footer/waicon.png";
import fb from "../assets/images/footer/facebooicon.png";
const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const items = [
  { key: "/", label: "Inicio" },
  { key: "/informacion", label: "Información" },
  { key: "/alumnos", label: "Alumnos" },
  { key: "/plan-estudios", label: "Plan de estudios" },
  { key: "/profesores", label: "Profesores" },
  { key: "/egresados", label: "Egresados" },
  { key: "/ligas-interes", label: "Ligas de interés" },
];

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          paddingInline: 24,
          background: "#001529",
          width: "100%",
        }}
      >
        {/* Contenedor para el logo */}
        <div
          className="header-logo-container"
          style={{
            width: 48,
            height: 48,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <img
            src={logoUnam}
            alt="Logo UNAM - FES Aragón"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <Text
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 17,
            fontWeight: 500,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Facultad de Estudios Superiores Aragón
        </Text>
        <Menu
          className="nav-menu-principal"
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          onClick={({ key }) => navigate(key)}
          style={{
            flex: 1,
            borderBottom: "none",
            lineHeight: "64px",
            minWidth: "auto",
            justifyContent: "flex-end",
          }}
        />
      </Header>
      {/* Cabecera con logos */}
      <div
        style={{
          background:
            "linear-gradient(to right,rgb(8, 43, 88) 25%,rgb(210, 224, 240) 100%)",
          borderTop: "5px solid #ba9a3a",
          borderBottom: "5px solid #ba9a3a",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          flexWrap: "wrap",
          flexGrow: 1,
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <img
          src={logofes}
          alt="Logo FES Aragón"
          style={{ height: "auto", width: "750px", objectFit: "contain" }}
        />
        <img
          src={logoico}
          alt="Logo ICO"
          style={{ height: "auto", width: "400px", objectFit: "contain" }}
        />
      </div>
      <Content style={{ padding: "24px 16px" }}>
        <Row justify="center">
          <Col xs={24} sm={24} md={22} lg={20} xl={18} xxl={16}>
            <Outlet />
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          background: "#032047",
          color: "rgba(255,255,255,0.85)",
          textAlign: "center",
          padding: "16px 24px",
          borderTop: "5px solid #ba9a3a",
          display: "flex",
          alignItems: "center",
          gap: 100,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          src={aniv}
          alt="50 aniversario"
          style={{ width: "150px", height: "auto" }}
        />
        <div
          style={{
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontWeight: 800 }}>Jefa de Carrera</div>
            <div>Ing. Ana Claudia Reyes Cruz</div>
          </div>
          <div>
            <div style={{ fontWeight: 800 }}>Secretario Técnico</div>
            <div>Ing. Roberto Agustín García Castrejón</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <a
            href="mailto:computacion@aragon.unam.mx"
            aria-label="Enviar correo a computacion@aragon.unam.mx"
          >
            <img
              src={correo}
              alt="Correo"
              style={{ width: "100px", height: "auto", display: "block" }}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5216632132912&text=Hola%21%20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Jefatura Ingeniería en Computación"
          >
            <img
              src={wa}
              alt="WhatsApp"
              style={{ width: "100px", height: "auto", display: "block" }}
            />
          </a>
          <a
            href="https://www.facebook.com/FESAragon.computacion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook FES Aragón Computación"
          >
            <img
              src={fb}
              alt="Facebook"
              style={{ width: "100px", height: "auto", display: "block" }}
            />
          </a>
        </div>
      </Footer>
    </Layout>
  );
}
