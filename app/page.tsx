import { Box, Typography, Button, Container, Fade, Card, CardMedia, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
export default function Home() {

  return (

    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Video Background Section */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${process.env.NEXT_PUBLIC_BASE_PATH}/website/Messier_24_(infrared,_red,_green).jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
					backdropFilter: "brightness(40%)",
        }}
      >
        {/* Overlay Content */}
        <Container maxWidth="md">
          <Box
            sx={{
							py: 8,
              zIndex: 2,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "common.white",
              textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
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
								href="/docs/hello-jupyter/"
							>
								Get Started
							</Button>
						</Box>
          </Box>
        </Container>
      </Box>
			<Box pr={1}>
				<Typography variant={'subtitle2'} align="right">
					Messier 24 (infrared, red, green), Photo by Brandon Flores
				</Typography>
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
                  <a href="/docs/hello-jupyter/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    get started
                  </a>!
        </Typography>
      </Container>
      {/* Use Cases Section */}
      <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: '1em', fontWeight: 700 }}>
          Power your research with BadgerCompute
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1: Develop your code */}
					<Grid size={{xs: 12, md: 4}} display={"flex"}>
            <Card sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
              <CardMedia
                component="img"
                image={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-languages.svg`}
                alt="Develop your code"
                sx={{ width: 300, height: "auto", objectFit: "contain", mb: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom align="center">
                  Develop your code
                </Typography>
                <Typography variant="body2" align="center">
                  Develop code and scripts for research in your preferred programming language on BadgerCompute&apos;s Jupyter notebooks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card 2: Compute and analyze */}
					<Grid size={{xs: 12, md: 4}} display={"flex"}>
            <Card sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
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
                  BadgerCompute also integrates with{' '}
                  <a href="https://mybinder.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                    Binder
                  </a>{' '}
                  so that you can deploy any software that isn&apos;t already provided!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Card 3: Interact with your data */}
          <Grid size={{xs: 12, md: 4}} display={"flex"}>
            <Card sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
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
                  Explore, visualize, and interact with data and plots directly in your notebook,
                  using your code, Markdown, and Jupyter&apos;s Interact widget.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
			{/* Access BadgerCompute Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{xs: 12, md: 5}}>
            <Typography variant="h4" component="h2" gutterBottom>
              Access BadgerCompute through your browser
            </Typography>
            <Typography variant="body1">
              No extra downloads or installations are needed to access BadgerCompute. Launch BadgerCompute right from your browser.
            </Typography>
          </Grid>
          <Grid size={{xs: 12, md: 7}}>
            <video
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/website/jupyter-video.mp4`}
              autoPlay
							loop
							muted
							playsInline
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
