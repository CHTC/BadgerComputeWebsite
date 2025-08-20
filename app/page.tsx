"use client";

import { Box, Typography, Button, Container, Fade, Card, CardMedia, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!overlayRef.current) return;
      const rect = overlayRef.current.getBoundingClientRect();
      setShowOverlay(rect.top < window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ minHeight: "200vh", bgcolor: "background.default" }}>
      {/* Video Background Section */}
      <Box sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", md: "80vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-video.webm`}
        />
        {/* Overlay Content */}
        <Box
          ref={overlayRef}
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: "60vh", md: "80vh" },
            color: "common.white",
            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          <Fade in={showOverlay} timeout={1000}>
            <Box>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Welcome to BadgerHub
              </Typography>
              <Typography variant="h5" gutterBottom>
                The collaborative platform for UW–Madison
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
                href="/get-started"
              >
                Get Started
              </Button>
            </Box>
          </Fade>
        </Box>
        {/* Overlay gradient for readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.7) 100%)",
            zIndex: 1,
          }}
        />
      </Box>
      {/* Main Content Section */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About BadgerHub
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
					BadgerHub provides a Jupyter-based interactive compute service for researchers at the University of Wisconsin-Madison.
        </Typography>
        <Typography variant="body1" component="p">
          Explore our features, join communities, and get started on your journey today!
        </Typography>
      </Container>
      {/* Use Cases Section */}
      <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Use Cases for BadgerHub
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1: Code in Jupyter Notebook */}
					<Grid size={{xs: 12, md: 4}}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
              <CardMedia
                component="img"
                image={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-code.png`}
                alt="Code in Jupyter Notebook"
                sx={{ width: 300, height: "auto", objectFit: "contain", mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom align="center">
                  Code in Jupyter Notebook
                </Typography>
                <Typography variant="body2" align="center">
                  Use BadgerHub&apos;s Jupyter Notebooks to write and execute scripts in your preferred programming language.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card 2: Compute in Jupyter Notebook */}
					<Grid size={{xs: 12, md: 4}}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
              <CardMedia
                component="img"
                image={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-compute.png`}
                alt="Compute in Jupyter Notebook"
                sx={{ width: 300, height: "auto", objectFit: "contain", mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom align="center">
                  Compute in Jupyter Notebook
                </Typography>
                <Typography variant="body2" align="center">
                  Execute scripts and run programs using standard software and Jupyter Notebooks.<br />
                  Comes with integration with{' '}
                  <a href="https://mybinder.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    Binder
                  </a>{' '}
                  so that you can deploy any software that isn&apos;t already provided!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card 3: Interact in Jupyter Notebook */}
          <Grid size={{xs: 12, md: 4}}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
              <CardMedia
                component="img"
                image={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-interact.png`}
                alt="Interact in Jupyter Notebook"
                sx={{ width: 300, height: "auto", objectFit: "contain", mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom align="center">
                  Interact in Jupyter Notebook
                </Typography>
                <Typography variant="body2" align="center">
                  Easily visualize and interact with data and plots using the Jupyter interface.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
