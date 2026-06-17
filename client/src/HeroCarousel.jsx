import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

const slides = [
  {
    img: "/images/Jumbotron5.png",
    title: "The Future starts with us.",
    text: "Become a partner with AIOCAM...",
    btn: "Partner with Us",
    link: "/volunteer"
  },
  {
    img: "/images/Jumbotron2.jpg",
    title: "Leaders of Tomorrow.",
    text: "Join AIOCAM and be part of the movement...",
    btn: "Join the Movement",
    link: "/volunteer"
  },
  {
    img: "/images/Jumbotron3.jpg",
    title: "Together for a better Cameroon.",
    text: "Civic responsibility is our duty...",
    btn: "Support AIOCAM",
    link: "/contact"
  }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage: `url(${slide.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        p: 5,
        color: "white"
      }}
    >
      <Box maxWidth="500px">
        <Typography variant="h3">{slide.title}</Typography>
        <Typography sx={{ my: 2 }}>{slide.text}</Typography>
        <Button variant="contained" href={slide.link}>
          {slide.btn}
        </Button>
      </Box>
    </Box>
  );
}