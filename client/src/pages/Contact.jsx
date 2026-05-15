import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Grid,
  Card
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <Container sx={{ py: 5 }}>
      
      {/* HEADER */}
      <Box sx = {{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4" fontWeight="bold">
          Cameroon Awareness and Orientation Initiative (AIOCAM)
        </Typography>

        <Grid container spacing={4} justifyContent="center" mt={2}>
          <Grid size={{ xs: 12, md: 4 }} item>
            <EmailIcon />
            <Typography>info@aiocam.org</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} item>
            <PhoneIcon />
            <Typography>+237 694529059</Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }} item>
            <LocationOnIcon />
            <Typography>Yaounde, Cameroon</Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={5}>
        
        {/* FORM */}
        <Grid size={{ xs: 12, md: 6 }} item>
          <Card sx={{ p: 4 }}>
            <Typography variant="h6" mb={3}>
              Send Us a Message
            </Typography>

            {status === "success" && (
              <Alert severity="success">Form submitted successfully</Alert>
            )}

            {status === "error" && (
              <Alert severity="error">Something went wrong</Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Card>
        </Grid>

        {/* MAP + SOCIAL */}
        <Grid size={{ xs: 12, md: 6 }}>
          
          <Box mb={3}>
            <iframe
              src="https://www.google.com/maps?q=Yaounde,Cameroon&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            />
          </Box>

          <Box textAlign="center" mt={4}>
            <a href="https://facebook.com/profile.php?id=61583334122074" target="_blank">
              <FacebookIcon />
            </a>{" | "}
            <a href="https://twitter.com/CameroonAw92238" target="_blank">
              <XIcon />
            </a>{" | "}
            <a href="https://instagram.com/" target="_blank">
              <InstagramIcon />
            </a>{" | "}
            <a href="https://wa.me/237694529059" target="_blank">
              <WhatsAppIcon />
            </a>
          </Box>

        </Grid>
      </Grid>
    </Container>
  );
}