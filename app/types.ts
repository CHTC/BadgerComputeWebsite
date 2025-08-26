/**
 * Extend the module declaration for MDX files to include custom exports.
 */
declare module '*.mdx' {
	import { TableOfContentsEntry } from '@/components/types';

	export const tableOfContents: TableOfContentsEntry[];
	export const frontmatter: Record<string, unknown>;
}
