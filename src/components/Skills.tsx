import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Skills = () => {
  return (
    <Container
      id="Skills"
      disableGutters
      maxWidth="xl"
      sx={{
        width: "100%",
        backgroundColor: "#ccffcc",
        paddingLeft: "10px",
        paddingBottom: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Languages:
      </Typography>
      <Grid container sx={{ flexDirection: { xs: "row", md: "row" } }}>
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="Java"
          variant="outlined"
        />
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="JavaScript"
          variant="outlined"
        />
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="Python"
          variant="outlined"
        />
      </Grid>
      <Typography
        variant="subtitle1"
        sx={{
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Frameworks:
      </Typography>
      <Grid container sx={{ flexDirection: { xs: "row", md: "row" } }}>
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="Reactjs"
          variant="outlined"
        />
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="Nodejs"
          variant="outlined"
        />
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="Django"
          variant="outlined"
        />
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="React Native"
          variant="outlined"
        />
      </Grid>
      <Typography
        variant="subtitle1"
        sx={{
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Other Skills:
      </Typography>
      <Grid container sx={{ flexDirection: { xs: "row", md: "row" } }}>
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="DevOps"
          variant="outlined"
        />
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="Azure"
          variant="outlined"
        />
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="Linux"
          variant="outlined"
        />
        <Chip
          sx={{ fontWeight: "700", margin: "5px" }}
          label="Machine Learning (Basics)"
          variant="outlined"
        />
      </Grid>
    </Container>
  );
};

export default Skills;
