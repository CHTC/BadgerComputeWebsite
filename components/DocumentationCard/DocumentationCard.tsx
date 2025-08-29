import { Card, CardContent, Typography, Box } from "@mui/material";
import { ReactNode } from "react";

/**
 * Main component for displaying documentation categories on the index page
 *
 * Contains an icon, title and description for each category
 */

export interface DocumentationCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const DocumentationCard = ({ icon, title, description }: DocumentationCardProps) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, flexGrow: 1 }}>
    <Box sx={{ mb: 2, mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48 }}>
      {icon}
    </Box>
    <CardContent sx={{ flexGrow: 1, width: '100%', textAlign: 'center' }}>
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default DocumentationCard;
