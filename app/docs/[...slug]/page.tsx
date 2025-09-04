import { glob } from 'glob';

import DocumentationPage from "@/components/DocumentationPage";
import {Metadata, ResolvingMetadata} from "next";

type Props = {
	params: Promise<{ slug: string[] }>
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const slug = (await params).slug;
	const { default: Post, frontmatter, tableOfContents } = await importSlug(slug);

	return {
		title: frontmatter?.title || tableOfContents?.[0]?.value || 'Documentation',
		description: frontmatter?.description || 'BadgerCompute documentation and tutorials',
		openGraph: {
			title: frontmatter?.title || 'Documentation',
			description: frontmatter?.description || 'BadgerCompute documentation and tutorials',
		}
	}
}


export default async function Page({ params }: {
	params: Promise<{ slug: string[] }>;
}) {
	const slug = (await params).slug;
	const { default: Post, frontmatter, tableOfContents } = await importSlug(slug);

	return (
			<DocumentationPage Page={Post} tocEntries={tableOfContents} frontMatter={frontmatter} />
	)
}

// Get the doc paths, looking for md and mdx files in the docs directory
export async function generateStaticParams() {
	const docPaths = await glob("docs/**/*.{md,mdx}");
	return docPaths.map((doc) => {
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
}

/**
 * The slug could point to a directory (index.md/x) or a file (<name>.md/x)
 * Try both before erring out
 * @param slug
 */
const importSlug = async (slug: string[]) => {

	const FILES = ['/index', ''];

	const path = slug.join('/')

	for (const file of FILES) {
		const fullPath = `${path}${file}`;
		try {
			return await import(`@/docs/${fullPath}.md`);
		} catch {}
		try {
			return await import(`@/docs/${fullPath}.mdx`);
		} catch {}
	}

	throw new Error(`Could not find document for slug: ${slug.join('/')}`);
}