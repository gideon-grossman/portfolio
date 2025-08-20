import { Stack, Tooltip, Typography } from "@mui/material";
import theme from "./theme";

const Skills = () => {
  const frontEndSkills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },

    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },

    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },

    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      name: "Cypress",
      icon: "./cypressLogo.jpeg",
    },
    {
      name: "Jest",
      icon: "./jestLogo.jpeg",
    },
  ];
  const dataVisualizationSkills = [
    {
      name: "D3.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
    },

    {
      name: "WebGL",
      icon: "./webGLLogo.jpeg",
    },
    {
      name: "Highcharts",
      icon: "./highchartsLogo.jpeg",
    },
    {
      name: "AG-Grid",
      icon: "./agGridLogo.jpeg",
    },
    {
      name: "Mapbox",
      icon: "./mapboxLogo.png",
    },
  ];

  const backEndSkills = [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Elasticsearch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    },
  ];
  const devOpsSkills = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "./githubLightLogo.svg",
    },

    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "AWS",
      icon: "./awsLogo.jpeg",
    },
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
  ];

  const skillSection = (
    skills: { name: string; icon: string }[],
    title: string
  ) => {
    return (
      <Stack alignItems="center" gap={2}>
        <Typography>{title}</Typography>
        <Stack direction="row" flexWrap="wrap" gap={4} justifyContent="center">
          {skills.map((skill) => (
            <Tooltip title={skill.name}>
              <img
                src={skill.icon}
                alt={skill.name}
                width={theme.spacing(12)}
                height={theme.spacing(12)}
                style={{ borderRadius: "5px" }}
              />
            </Tooltip>
          ))}
        </Stack>
      </Stack>
    );
  };
  return (
    <Stack gap={4} alignItems="center" paddingBottom={2}>
      {skillSection(frontEndSkills, "Front End Technologies")}
      {skillSection(dataVisualizationSkills, "Data Visualization")}
      {skillSection(backEndSkills, "Back End")}
      {skillSection(devOpsSkills, "DevOps")}
    </Stack>
  );
};

export default Skills;
