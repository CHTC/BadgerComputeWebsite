import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import { TableOfContentsEntry } from "../types";

interface TableOfContentsProps {
	entries: TableOfContentsEntry[];
}

function TOCList({ entries }: TableOfContentsProps ) {
  if (!entries || entries.length === 0) return null;
  return (
    <List disablePadding>
      {entries.map((entry) => (
        <React.Fragment key={entry.id || entry.value}>
          <ListItem sx={{ pl: (entry.depth - 2) * 2 }} disableGutters>
            {entry.id &&
              <Link href={`#${entry.id}`} underline="hover" color="inherit">
								{entry.value}
              </Link>
						}
          </ListItem>
          {entry.children && entry.children.length > 0 && (
            <TOCList entries={entry.children} />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({entries}: TableOfContentsProps) => {
  if (!entries || entries.length === 0) return null;
  return (
    <nav aria-label="Table of contents">
      <TOCList entries={entries} />
    </nav>
  );
};

export default TableOfContents;
