import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Contact = () => {
  return (
    <Container id="Contact" maxWidth="xl" sx={{ backgroundColor: "#ccccff" }}>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          textAlign: "center",
          margin: "5px",
        }}
      >
        <Typography variant="h4" component="div">
          Contact
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
        <Typography variant="subtitle1" component="div">
          Email :
        </Typography>
        <Typography variant="subtitle1" component="div">
          Linkedin :
        </Typography>
        <Typography variant="subtitle1" component="div">
          Github :
        </Typography>
      </div>
    </Container>
  );
};

export default Contact;
