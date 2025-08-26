export interface TableOfContentsEntry {
	value: string;
	depth: number;
	id?: string;
	children?: Array<TableOfContentsEntry>;
}
