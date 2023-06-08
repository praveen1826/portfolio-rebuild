import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <Container
        id="Home"
        maxWidth="xl"
        sx={{
          width: "100%",
          height: "90vh",
          backgroundColor: "#cce0ff",
          marginTop: "10px",
          paddingBottom: "20px",
          paddingTop: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Hi , I am Praveen
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          I like to develop full stack web and mobile apps
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Link smooth to="/#Projects">
            <Button sx={{ alignSelf: "flex-start" }} variant="contained">
              Checkout My Projects
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Home;
