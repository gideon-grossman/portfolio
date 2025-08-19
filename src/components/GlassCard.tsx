import { Stack, SxProps } from "@mui/material";

const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        backdropFilter: "blur(8px) saturate(100%)",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        backgroundColor: "rgba(255, 255, 255, 0.76)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        padding: "16px",
        alignItems: "center",
        flex: 1,
        gap: 2,
        color: "black",
      }}
    >
      {children}
    </Stack>
  );
};

export default GlassCard;
