import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Projects = () => {
  return (
    <Container
      id="Projects"
      maxWidth="xl"
      sx={{
        width: "100%",
        marginTop: "10px",
        paddingBottom: "20px",
        paddingTop: "20px",
        paddingLeft: "5px",
        paddingRight: "5px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffcc",
      }}
    >
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          textAlign: "center",
          margin: "5px",
        }}
      >
        <Typography variant="h4" component="div">
          Projects
        </Typography>
      </div>

      <Grid
        container
        sx={{ flexDirection: { xs: "row", md: "row" } }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item style={{ display: "flex" }}>
          <Card
            sx={{
              maxWidth: 300,
              minHeight: 375,
              margin: "5px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/covid.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Disease Outbreak Tracker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In this project I display current covid cases in India, display
                current outbreaks around the world and display predictions for
                next 10 days
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="http://dot.praveenreddy.tech" size="small">
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item style={{ display: "flex" }}>
          <Card
            sx={{
              maxWidth: 300,
              minHeight: 375,
              margin: "5px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/sign.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Indian Sign Language Detector App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In this project, I created an app that predicts sign images from
                uploads or displays sign symbols for entered characters. It
                works on Android devices.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="http://isl.praveenreddy.tech" size="small">
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item style={{ display: "flex" }}>
          <Card
            sx={{
              maxWidth: 300,
              minHeight: 375,
              margin: "5px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/legacy.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                FND
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Legacy App / Outdated App / Failed Project
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="http://fnd.praveenreddy.tech" size="small">
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item style={{ display: "flex" }}>
          <Card
            sx={{
              maxWidth: 300,
              minHeight: 375,
              margin: "5px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="/legacy.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                SFCM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A Web app for calculating demand using sales force composite
                method Which i built as part of my software economics project.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="http://sfcm.praveenreddy.tech" size="small">
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
