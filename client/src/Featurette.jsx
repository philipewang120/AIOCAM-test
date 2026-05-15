import { Grid, Typography } from "@mui/material";

export default function Featurette({
  title,
  subtitle,
  text,
  image,
  reverse
}) {
  return (
    <Grid
      container
      spacing={4}
      direction={reverse ? "row-reverse" : "row"}
      alignItems="center"
    >
      <Grid size={{ xs: 12, md: 7 }}>
        <Typography variant="h4">
          {title}{" "}
          <span style={{ color: "#888" }}>{subtitle}</span>
        </Typography>
        <Typography sx={{ mt: 2 }}>{text}</Typography>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <img src={image} style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
}