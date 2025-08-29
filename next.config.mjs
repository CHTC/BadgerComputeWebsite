import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	output: "export",
	trailingSlash: true,
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
		rehypePlugins: ['rehype-highlight', 'rehype-slug', '@stefanprobst/rehype-extract-toc', '@stefanprobst/rehype-extract-toc/mdx']
	}
})

export default withMDX(nextConfig);
