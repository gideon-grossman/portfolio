import { Stack } from "@mui/material";

const Headshot = () => {
  return (
    <Stack width="300px">
      <img
        src="./Headshot.JPG"
        height="100%"
        style={{ borderRadius: "16px" }}
        alt="Gideon Grossman Headshot"
      />
    </Stack>
  );
};

export default Headshot;
