import { Grid, Typography, Button, Box } from "@mui/material";

const items = [
  {
    img: "src/assets/images/why.jpg",
    title: "Why AIOCAM Exists",
    text: "Cameroon’s development requires..."
  },
  {
    img: "src/assets/images/what.jpg",
    title: "What We Do",
    text: "• School outreach\n• Civic education\n• Community service"
  },
  {
    img: "src/assets/images/highlighted.jpg",
    title: "Highlighted Activities",
    text: "• Youth Week tours\n• Media engagement\n• Awareness sessions"
  }
];

export default function MarketingSection() {
  return (
    <Grid container spacing={4}>
      {items.map((item, i) => (
        <Grid size={{ xs: 12, md: 4 }} key={i}>
          <Box textAlign="center">
            <img
              src={item.img}
              style={{ width: 140, height: 140, borderRadius: "50%" }}
            />
            <Typography variant="h5" sx={{ mt: 2 }}>
              {item.title}
            </Typography>
            <Typography sx={{ my: 2, whiteSpace: "pre-line" }}>
              {item.text}
            </Typography>
            <Button variant="outlined">Read More</Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}