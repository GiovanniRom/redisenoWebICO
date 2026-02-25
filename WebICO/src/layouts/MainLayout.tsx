import { Layout, Menu, Typography, Row, Col } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import logoUnam from "../assets/images/unam.png";

const { Header, Content } = Layout;
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
      <Content style={{ padding: "24px 16px" }}>
        <Row justify="center">
          <Col xs={24} sm={24} md={22} lg={20} xl={18} xxl={16}>
            <Outlet />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
