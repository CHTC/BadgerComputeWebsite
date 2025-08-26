import DocumentationPage from "@/components/DocumentationPage";
import MDX, { frontmatter, tableOfContents } from './policies.mdx';

export default async function Page() {
	return (
			<DocumentationPage Page={MDX} tocEntries={tableOfContents} frontMatter={frontmatter} />
	)
}
