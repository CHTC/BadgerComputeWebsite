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

				<Container maxWidth="md" sx={{ mt: 8 }}>
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
									Engage Your Research
								</Typography>
								<Typography variant="h5" gutterBottom>
									Interactive Computing with BadgerCompute
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
				</Container>
			</Box>
      {/* Main Content Section */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          What is BadgerCompute?
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
					BadgerCompute is a{' '}
                  <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    Jupyter
                  </a>
                  -based interactive compute service for academic and research computing at the University of Wisconsin-Madison.
                  Compute, visualize data, and write Jupyter notebooks without additional installation or leaving your laptop.
        </Typography>
        <Typography variant="body1" component="p">
            Explore our{' '}
                  <a href="/docs" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    documentation
                  </a>{' '}, join our{' '}
                  <a href="https://community.badgercompute.wisc.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    community
                  </a>{' '}, and{' '}
                  <a href="/get-started" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    get started
                  </a>!
        </Typography>
      </Container>
      {/* Use Cases Section */}
      <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Use Cases for BadgerCompute
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1: Develop your code */}
					<Grid size={{xs: 12, md: 4}}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
              <CardMedia
                component="img"
                image={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-code.png`}
                alt="Develop your code"
                sx={{ width: 300, height: "auto", objectFit: "contain", mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom align="center">
                  Develop your code
                </Typography>
                <Typography variant="body2" align="center">
                  Use BadgerCompute&apos;s Jupyter Notebooks to develop and execute scripts in your preferred programming language.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card 2: Compute and analyze */}
					<Grid size={{xs: 12, md: 4}}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
              <CardMedia
                component="img"
                image={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-compute.png`}
                alt="Compute and analyze"
                sx={{ width: 300, height: "auto", objectFit: "contain", mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom align="center">
                  Compute and analyze
                </Typography>
                <Typography variant="body2" align="center">
                  Execute scripts and programs using standard software.
                  BadgerCompute integrates with with{' '}
                  <a href="https://mybinder.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    Binder
                  </a>{' '}
                  so that you can deploy any software that isn&apos;t already provided!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card 3: Interact with your data */}
          <Grid size={{xs: 12, md: 4}}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
              <CardMedia
                component="img"
                image={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-interact.png`}
                alt="Interact with your data"
                sx={{ width: 300, height: "auto", objectFit: "contain", mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom align="center">
                  Interact with your data
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
