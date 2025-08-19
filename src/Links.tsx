import { Button, Stack } from "@mui/material";
import theme from "./theme";
const cv = "./Software_Eng_Gideon_Grossman_CV_Jul_2025.pdf";

const Links = () => {
  const links = [
    {
      url: "https://www.linkedin.com/in/gideon-grossman-51ab8935/",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
  ];
  return (
    <Stack direction="row" gap={2} alignItems="center">
      {links.map((link) => (
        <Button onClick={() => window.open(link.url, "_blank")}>
          <img
            src={link.icon}
            width={theme.spacing(8)}
            height={theme.spacing(8)}
            style={{ borderRadius: "5px" }}
          />
        </Button>
      ))}
      <a href={cv} download="Gideon_Grossman_CV" target="_blank">
        <Button
          variant="outlined"
          sx={{ color: "black", textTransform: "none" }}
        >
          Download CV
        </Button>
      </a>
    </Stack>
  );
};
export default Links;
