import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Container id="About" maxWidth="xl" sx={{ backgroundColor: "#ffccff" }}>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          textAlign: "center",
          margin: "5px",
        }}
      >
        <Typography variant="h4" component="div">
          About Me
        </Typography>
      </div>

      <div
        style={{
          width: "100%",
          justifyContent: "center",
          textAlign: "center",
          margin: "5px",
        }}
      >
        <Typography variant="h5" component="div">
          My name is Praveen Reddy , I am currently studying(2024 graduate)
          Integrated Mtech Software Engineering at an Indian University
        </Typography>
        <Typography variant="h5" component="div">
          I am passionate about web and mobile app development. Committed to
          staying up-to-date with the latest technologies. Take pride in
          delivering high-quality, user-friendly applications.
        </Typography>
      </div>
    </Container>
  );
};

export default About;
