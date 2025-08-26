import { glob } from 'glob';
import DocumentationPage from "@/components/DocumentationPage";

const RELATIVE_DOCS_PATH = '../../../docs';

export default async function Page({ params }: {
	params: Promise<{ slug: string[] }>;
}) {
	const slug = (await params).slug;
	const { default: Post, frontmatter: any, tableOfContents: TableOfContents } = await importSlug(slug);

	return (
			<DocumentationPage Page={Post} tocEntries={TableOfContents} frontMatter={any} />
	)
}

// Get the doc paths, looking for md and mdx files in the docs directory
export async function generateStaticParams() {
	const docPaths = await glob("docs/**/*.{md,mdx}");
	const y = docPaths.map((doc) => {
		const slug = doc.split("/").slice(1);

		// At this point we have two files types: index.md/x and <name>.md/x
		// Pull out the slugs accordingly
		if (slug[slug.length - 1].startsWith("index.")) {
			slug.pop();
		} else {
			slug[slug.length - 1] = slug[slug.length - 1].replace(/\.mdx?$/, "");
		}

		return { slug }
	})

	console.log(y)

	return y;
}

/**
 * The slug could point to a directory (index.md/x) or a file (<name>.md/x)
 * Try both before erring out
 * @param slug
 */
const importSlug = async (slug: string[]) => {

	const EXTENSIONS = ['md', 'mdx'];
	const FILES = ['/index', ''];

	const path = slug.join('/')

	for (const ext of EXTENSIONS) {
		for (const file of FILES) {
			const fullPath = `${RELATIVE_DOCS_PATH}/${path}${file}.${ext}`;
			try {
				return await import(fullPath);
			} catch (e) {}
		}
	}

	throw new Error(`Could not find document for slug: ${slug.join('/')}`);
}