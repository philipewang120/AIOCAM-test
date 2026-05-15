import {
  Container,
  Typography,
  Grid,
  Card,
  Box
} from "@mui/material";

const partners = [
  "src/assets/images/partner1.png",
  "src/assets/images/partner2.png",
  "src/assets/images/partner3.png"
];

export default function Partnerships() {
  return (
    <Container sx={{ py: 8 }}>

      {/* HEADING */}
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 6 }}
      >
        Our Partners
      </Typography>

      {/* LOGOS */}
      <Grid
        container
        spacing ={5}
        sx={{ justifyContent: "center", alignItems: "center"}}
      >
        {partners.map((partner, index) => (
          <Grid size = {{ xs: 6, md: 4, lg: 3 }} key={index}>
            <Card
              elevation={3}
              sx={{
                p: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 180,
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.03)",
                  boxShadow: 8,
                },
              }}
            >
              <Box
                component="img"
                src={partner}
                alt={`Partner ${index + 1}`}
                sx={{
                  maxWidth: "100%",
                  maxHeight: 100,
                  objectFit: "contain",
                  transition: "filter 0.3s ease, opacity 0.3s ease",
                  filter: "grayscale(40%)",
                  opacity: 0.85,
                  "&:hover": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
