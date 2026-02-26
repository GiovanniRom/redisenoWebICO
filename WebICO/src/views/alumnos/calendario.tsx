import { Typography } from "antd";

const { Title } = Typography;

export default function AlumnosHorarios() {
  return (
    <div
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <Title level={2}>Calendario</Title>
    </div>
  );
}
