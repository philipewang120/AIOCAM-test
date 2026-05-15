import {
  Box,
  Container,
  Typography
} from "@mui/material";

export default function News() {
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
          backgroundImage: "url('src/assets/images/Jumbotron3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
          color: "white"
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        />

        {/* Content */}
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold" , textAlign: "center"}}
          >
            News & Media
          </Typography>

          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Latest updates from AIOCAM
          </Typography>
        </Box>
      </Box>

      {/* VIDEO SECTION */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 5 }}
        >
          Latest Videos
        </Typography>

        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3
          }}
        >
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/wcs70ZaMENc"
            title="AIOCAM Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              width: "100%",
              height: {
                xs: 250,
                sm: 400,
                md: 500
              },
              border: 0
            }}
          />
        </Box>
      </Container>
    </>
  );
}