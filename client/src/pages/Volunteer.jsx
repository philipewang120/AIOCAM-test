import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  MenuItem,
  Button,
  Alert
} from "@mui/material";
import { useState } from "react";

export default function Volunteer() {
  const [type, setType] = useState("");
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({});

  function handleTypeChange(e) {
    setType(e.target.value);
    setFormData({}); // reset fields when type changes
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/volunteer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ type, ...formData })
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setFormData({});
        setType("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Container sx={{ py: 5 }}>
      
      {/* HERO */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          HOW TO GET INVOLVED
        </Typography>
      </Box>

      {/* CARDS */}
      <Grid container spacing={4} mb={5}>
        {[
          {
            title: "FOR STUDENTS",
            img: "src/assets/images/campusAmbassador.png",
            text: "Become a campus ambassador..."
          },
          {
            title: "FOR INSTITUTIONS",
            img: "src/assets/images/institution.jpg",
            text: "Partner with AIOCAM..."
          },
          {
            title: "FOR SPONSORS",
            img: "src/assets/images/sponsor.jpg",
            text: "Support initiatives..."
          }
        ].map((item, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <img
                src={item.img}
                style={{ width: 110, height:100, borderRadius: "50%" }}
              />
              <Typography variant="h6" mt={2}>
                {item.title}
              </Typography>
              <Typography>{item.text}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FORM */}
      <Card sx={{ p: 4 }}>
        <Typography variant="h5" sx ={{ textAlign: "center", mb: 3 }}>
          Sign Up Form
        </Typography>

        {status === "success" && (
          <Alert severity="success">Submitted successfully</Alert>
        )}
        {status === "error" && (
          <Alert severity="error">Submission failed</Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          
          {/* SELECT TYPE */}
          <TextField
            select
            fullWidth
            label="Sign up as"
            value={type}
            onChange={handleTypeChange}
            margin="normal"
            required
          >
            <MenuItem value="">Select option</MenuItem>
            <MenuItem value="student">Student Ambassador</MenuItem>
            <MenuItem value="institution">Institution</MenuItem>
            <MenuItem value="sponsor">Sponsor</MenuItem>
          </TextField>

          {/* DYNAMIC FIELDS */}

          {type === "student" && (
            <>
              <TextField fullWidth name="fullName" label="Full Name" onChange={handleChange} margin="normal" required />
              <TextField fullWidth name="school" label="School" onChange={handleChange} margin="normal" required />
              <TextField fullWidth name="email" label="Email" onChange={handleChange} margin="normal" required />
              <TextField fullWidth multiline rows={4} name="message" label="Why do you want to be an ambassador?" onChange={handleChange} margin="normal" required />
            </>
          )}

          {type === "institution" && (
            <>
              <TextField fullWidth name="school" label="Institution Name" onChange={handleChange} margin="normal" required />
              <TextField fullWidth name="position" label="Position" onChange={handleChange} margin="normal" required />
              <TextField fullWidth multiline rows={4} name="message" label="Message" onChange={handleChange} margin="normal" required />
            </>
          )}

          {type === "sponsor" && (
            <>
              <TextField fullWidth name="company" label="Company Name" onChange={handleChange} margin="normal" required />
              <TextField fullWidth name="fullName" label="Full Name" onChange={handleChange} margin="normal" required />
              <TextField fullWidth name="email" label="Email" onChange={handleChange} margin="normal" required />
              <TextField fullWidth name="phone" label="Phone" onChange={handleChange} margin="normal" required />
              <TextField fullWidth multiline rows={4} name="message" label="Message" onChange={handleChange} margin="normal" required />
            </>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </Container>
  );
}