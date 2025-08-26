import type { Metadata } from "next";

import {Box} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Banner, Footer } from "@/components/UW";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {Red_Hat_Display, Red_Hat_Text} from "next/font/google";

import {theme} from "./theme";
import Header from "@/components/Header";


const rhd = Red_Hat_Display({
	subsets: ['latin'], style: ['normal'], weight: ['300', '400', '700'], display: 'swap'
})
const rht = Red_Hat_Text({
	subsets: ['latin'], style: ['normal', 'italic'], weight: ['300', '400', '600'], display: 'swap'
})

export const metadata: Metadata = {
  title: "Badger Compute",
  description: "Jupyter-based interactive compute service for researchers at the University of Wisconsin-Madison",
	metadataBase: new URL('https://badgercompute.chtc.chtc.io'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rht.className} ${rhd.className}`}>
      <Box component={"body"} sx={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Banner />
						<Header />
						{children}
            <Footer
                menu={[]}
                contact={{
                  email: "chtc@cs.wisc.edu",
                  social: {
                    linkedin: "https://www.linkedin.com/company/center-for-high-throughput-computing/",
                    instagram: "https://www.instagram.com/uw_chtc/",
                    youtube: "https://www.youtube.com/channel/UCd1UBXmZIgB4p85t2tu-gLw",
                    github: "https://github.com/CHTC",
                  }
                }}
                accessibilityEmail={"chtc@cs.wisc.edu"}
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Box>
    </html>
  );
}
