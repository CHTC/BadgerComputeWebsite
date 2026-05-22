import Link from "next/link";

type ComponentStatus =
  | "operational"
  | "under_maintenance"
  | "degraded_performance"
  | "partial_outage"
  | "major_outage"
  | string;

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

async function getBadgerStatus() {
  const res = await fetch(
    "https://status.chtc.wisc.edu/api/v2/components.json",
    { cache: "no-store" }
  );
  const data = await res.json();

  return data.components.find((c: StatuspageComponent) =>
    c.name.toLowerCase().includes("badgercompute")
  );
}

async function getUnresolvedIncidents() {
  const res = await fetch(
    "https://status.chtc.wisc.edu/api/v2/incidents/unresolved.json",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.incidents as Incident[];
}

export default async function BadgerComputeStatus() {
  const component = await getBadgerStatus();
  const incidents = await getUnresolvedIncidents();

  // Filter incidents that affect BadgerCompute
  const relatedIncidents = component
    ? incidents.filter((incident) =>
        incident.components.some((c) => c.id === component.id)
      )
    : [];

  const statusMap: Record<ComponentStatus, { label: string; color: string }> = {
    operational: { label: "Operational", color: "#36B37E" },
    under_maintenance: { label: "Maintenance", color: "#FFAB00" },
    degraded_performance: { label: "Degraded", color: "#FF8B00" },
    partial_outage: { label: "Partial Outage", color: "#FF8B00" },
    major_outage: { label: "Major Outage", color: "#FF5630" },
  };

  const statusInfo =
    component && statusMap[component.status]
      ? statusMap[component.status]
      : { label: "Unknown", color: "#6554C0" };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <details
        style={{
          width: "200px",
          borderRadius: "8px",
          background: "white",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <summary
          style={{
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            fontWeight: 600,
            fontSize: "14px",
            background: "#F4F5F7",
            borderBottom: "1px solid #DFE1E6",
          }}
        >
          Status
          <span
            style={{
              background: statusInfo.color,
              color: "white",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {statusInfo.label}
          </span>
        </summary>

        <div style={{ padding: "16px", fontSize: "14px" }}>
          {/* INCIDENT SECTION */}
          {relatedIncidents.length > 0 ? (
            <div style={{ marginBottom: "16px" }}>
              <strong>Active Incidents:</strong>
              {relatedIncidents.map((incident) => {
                const latestUpdate =
                  incident.incident_updates[0]?.body ?? "No details available.";

                return (
                  <div
                    key={incident.id}
                    style={{
                      marginTop: "10px",
                      padding: "10px",
                      background: "#FAFBFC",
                      border: "1px solid #DFE1E6",
                      borderRadius: "6px",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 600,
                        marginBottom: "6px",
                        fontSize: "13px",
                      }}
                    >
                      {incident.name}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#42526E",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {latestUpdate}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{ marginTop: "0px",marginBottom: "16px", color: "#42526E" }}>
              No active incidents affecting BadgerCompute.
            </p>
          )}

          <Link
            href="https://status.chtc.wisc.edu/"
            style={{
              display: "inline-block",
              padding: "8px 12px",
              background: "#0052CC",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "13px",
            }}
          >
            View Status Page →
          </Link>
        </div>
      </details>
    </div>
  );
}
