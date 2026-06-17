import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";
import { Link } from "react-router-dom";

const methodologyItems = [
  {
    title: "Sensitization",
    text: "We create awareness through school visits, media discussions and structured engagements."
  },
  {
    title: "Orientation",
    text: "We guide young people toward responsible thinking and ethical civic behavior."
  },
  {
    title: "Structured Engagement",
    text: "We promote measurable community service participation."
  },
  {
    title: "Institutional Collaboration",
    text: "We partner with schools, ministries and organizations to scale impact."
  }
];

export default function OurApproach() {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
            minHeight: {
    xs: "35vh",
    sm: "40vh",
    md: "50vh"
  },
  px: 2,
  py: 6,
          backgroundImage: "url('/images/Jumbotron6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        {/* OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        />

        {/* CONTENT */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Button
            component={Link}
            to="/activities"
            variant="contained"
            size="large"
          >
            Our Activities
          </Button>

          <Button
            component={Link}
            to="/volunteer"
            variant="contained"
            size="large"
          >
            Become a Volunteer
          </Button>
        </Box>
      </Box>

      {/* METHODOLOGY */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
           sx={{ textAlign: "center", mb: 6 }}
        >
          Methodology
        </Typography>

        <Grid container spacing={4}>
          {methodologyItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <CardContent sx={{ textAlign: "center", py: 5 }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}