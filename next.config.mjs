import createMDX from '@next/mdx'
import remarkFrontmatter from "remark-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	output: "export"
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
})

export default withMDX(nextConfig);
