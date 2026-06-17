import {
  Box,
  Container,
  Typography,
  Grid
} from "@mui/material";

const activities = [
  {
    title: "School Outreach Program",
    text: [
      "Interactive sessions in secondary schools and universities focused on:",
      "Civic responsibility",
      "Leadership and character development",
      "National development mindset",
      "Community service culture"
    ],
    image: "/images/outreach.jpg",
    reverse: false
  },

  {
    title: "Community Service Framework",
    text: [
      "AIOCAM is working toward structured community service programs in partnership with educational institutions, encouraging students to complete community service hours before graduation.",
      "This model is flexible, measurable and designed for long-term impact."
    ],
    image: "/images/comService.jpg",
    reverse: true
  },

  {
    title: "Media Engagement",
    text: [
      "AIOCAM engages national media platforms to promote civic awareness and public dialogue.",
      "Media serves as a strategic tool for national orientation."
    ],
    image: "/images/mediaOutreach1.jpg",
    reverse: false
  }
];

export default function Activities() {
  return (
    <>
      {/* HERO */}
      <Box
        sx={{
          py: 8,
          backgroundColor: "#f5f5f5",
          textAlign: "center"
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            PROGRAMS & ACTIVITIES
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Our programs are structured to build responsible citizenship,
            measurable impact and national consciousness.
          </Typography>
        </Container>
      </Box>

      {/* SECTIONS */}
      {/* SECTIONS */}
<Container sx={{ py: 8 }}>
  <Grid container spacing={4}>
    {activities.map((activity, index) => (
      <Grid size={{ xs: 12, md: 4 }} key={index}>
        <Box sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
          <Box
            component="img"
            src={activity.image}
            alt={activity.title}
            sx={{
              width: "100%",
              height: 220,
              objectFit: "cover"
            }}
          />
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              {activity.title}
            </Typography>
            {activity.text.map((paragraph, i) => (
              <Typography key={i} color="text.secondary" sx={{ mb: 1 }}>
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
</Container>
    </>
  );
}