import {
  Box,
  Container,
  Typography,
  Grid,
  Card
} from "@mui/material";

export default function About() {
  return (
    <>
      {/* HERO */}
  <Box
  sx={{
    minHeight: {
    xs: "35vh",
    sm: "40vh",
    md: "50vh"
  },
   px: 2,
  py: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage: "url('src/assets/images/Jumbotron5.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white"
  }}
>
  {/* overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.5)"
    }}
  />

  {/* content */}
  <Box sx={{ position: "relative" }}>
    <Typography variant="h3" fontWeight="bold">
      About AIOCAM
    </Typography>
    <Typography variant="h6">
      Cameroon Awareness and Orientation Initiative
    </Typography>
  </Box>
</Box>

      {/* WHO WE ARE */}
      <Container sx={{ py: 5 }}>
        <Box textAlign="center" maxWidth="800px" mx="auto">
          <Typography variant="h4" sx={{ textAlign: "center",mb: 3 }}>
            Who We Are
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            The Cameroon Awareness and Orientation Initiative (AIOCAM) is a civic initiative
            focused on promoting awareness, responsibility and structured national engagement among young people.
          </Typography>

          <Typography variant="body1">
            We work with schools, institutions, media platforms and strategic partners
            to foster a culture of service and ethical leadership.
          </Typography>
        </Box>
      </Container>

      {/* VISION & MISSION */}
      <Box sx={{ backgroundColor: "#f9f9f9", py: 5 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
                  Our Vision
                </Typography>
                <Typography>
                  To build a generation of Cameroonians who are conscious,
                  responsible and actively committed to national progress.
                </Typography>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ p: 4, height: "100%" }}>
                <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
                  Our Mission
                </Typography>
                <Typography>
                  To promote civic awareness, ethical values and structured community
                  participation through education, media and partnerships.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CORE VALUES */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" sx ={{ textAlign: "center", mb: 5 }}>
          Core Values
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {[
            "Responsibility",
            "Integrity",
            "Service",
            "National Consciousness",
            "Collaboration"
          ].map((value, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={i}>
              <Card sx={{ p: 2, textAlign: "center" }}>
                <Typography>{value}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}