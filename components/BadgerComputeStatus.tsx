'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Link as MuiLink,
  Chip,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface StatuspageComponent {
  id: string;
  name: string;
  status: ComponentStatus;
}

interface IncidentUpdate {
  body: string;
  created_at: string;
}

interface Incident {
  id: string;
  name: string;
  status: string;
  impact: string;
  incident_updates: IncidentUpdate[];
  components: { id: string; name: string }[];
}

type ComponentStatus =
  | 'operational'
  | 'under_maintenance'
  | 'degraded_performance'
  | 'partial_outage'
  | 'major_outage'
  | string;

interface StatusInfo {
  label: string;
  color: string;
}

const STATUS_MAP: Record<ComponentStatus, StatusInfo> = {
  operational: { label: 'Operational', color: '#36B37E' },
  under_maintenance: { label: 'Maintenance', color: '#FFAB00' },
  degraded_performance: { label: 'Degraded', color: '#FF8B00' },
  partial_outage: { label: 'Partial Outage', color: '#FF8B00' },
  major_outage: { label: 'Major Outage', color: '#FF5630' },
};

async function getBadgerStatus(): Promise<StatuspageComponent | undefined> {
  try {
    const res = await fetch(
      'https://status.chtc.wisc.edu/api/v2/components.json',
      { cache: 'no-store' }
    );
    const data = await res.json();

    return data.components.find((c: StatuspageComponent) =>
      c.name.toLowerCase().includes('badgercompute')
    );
  } catch (error) {
    console.error('Failed to fetch BadgerCompute status:', error);
    return undefined;
  }
}

async function getUnresolvedIncidents(): Promise<Incident[]> {
  try {
    const res = await fetch(
      'https://status.chtc.wisc.edu/api/v2/incidents/unresolved.json',
      { cache: 'no-store' }
    );
    const data = await res.json();
    return data.incidents as Incident[];
  } catch (error) {
    console.error('Failed to fetch incidents:', error);
    return [];
  }
}

export default function BadgerComputeStatus() {
  const [component, setComponent] = useState<StatuspageComponent | undefined>();
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [componentData, incidentsData] = await Promise.all([
          getBadgerStatus(),
          getUnresolvedIncidents(),
        ]);
        setComponent(componentData);
        setIncidents(incidentsData);
      } catch (error) {
        console.error('Error fetching status data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const relatedIncidents = component
    ? incidents.filter((incident) =>
        incident.components.some((c) => c.id === component.id)
      )
    : [];

  const statusInfo = component && STATUS_MAP[component.status]
    ? STATUS_MAP[component.status]
    : { label: 'Unknown', color: '#6554C0' };

  const containerSx: SxProps<Theme> = {
    position: 'fixed',
    bottom: 2,
    right: 2,
    zIndex: 9999,
  };

  const cardSx: SxProps<Theme> = {
    minWidth: 250,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
  };

  const headerSx: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #DFE1E6',
    cursor: 'pointer',
    bgcolor: '#F4F5F7',
    p: 2,
  };

  const contentSx: SxProps<Theme> = {
    fontSize: '14px',
    p: 2,
  };

  const incidentContainerSx: SxProps<Theme> = {
    mb: 2,
  };

  const incidentItemSx: SxProps<Theme> = {
    mt: 1,
    p: 1,
    bgcolor: '#FAFBFC',
    border: '1px solid #DFE1E6',
    borderRadius: 1,
  };

  const incidentTitleSx: SxProps<Theme> = {
    fontWeight: 600,
    mb: 0.75,
    fontSize: '13px',
  };

  const incidentBodySx: SxProps<Theme> = {
    fontSize: '13px',
    color: '#42526E',
    whiteSpace: 'pre-wrap',
  };

  const noIncidentsSx: SxProps<Theme> = {
    color: '#42526E',
    mb: 2,
  };

  const statusLinkSx: SxProps<Theme> = {
    display: 'inline-block',
    p: '8px 12px',
    bgcolor: '#0052CC',
    color: 'white',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '13px',
    '&:hover': {
      bgcolor: '#0047B2',
      textDecoration: 'none',
    },
  };

  return (
    <Box sx={containerSx}>
      <Card
        sx={cardSx}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen);
          }
        }}
      >
        {/* Header / Summary */}
        <Box sx={headerSx}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Status
          </Typography>
          <Chip
            label={isLoading ? 'Loading...' : statusInfo.label}
            size="small"
            sx={{
              bgcolor: statusInfo.color,
              color: 'white',
              fontWeight: 600,
              fontSize: '12px',
            }}
          />
        </Box>

        {/* Expandable Content */}
        {isOpen && !isLoading && (
          <CardContent sx={contentSx}>
            {/* Incidents Section */}
            {relatedIncidents.length > 0 ? (
              <Box sx={incidentContainerSx}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                  Active Incidents:
                </Typography>
                {relatedIncidents.map((incident) => {
                  const latestUpdate =
                    incident.incident_updates[0]?.body ?? 'No details available.';

                  return (
                    <Box key={incident.id} sx={incidentItemSx}>
                      <Typography sx={incidentTitleSx}>
                        {incident.name}
                      </Typography>
                      <Typography sx={incidentBodySx}>
                        {latestUpdate}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            ) : (
              <Typography variant="body2" sx={noIncidentsSx}>
                No active incidents affecting BadgerCompute.
              </Typography>
            )}

            {/* Status Page Link */}
            <MuiLink
              href="https://status.chtc.wisc.edu/"
              target="_blank"
              rel="noopener noreferrer"
              sx={statusLinkSx}
            >
              View Status Page →
            </MuiLink>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}
