// Remark and Rehype plugins



// Other imports
import {jsx, Fragment} from "react/jsx-runtime"
import {jsxDEV} from "react/jsx-dev-runtime";
import {evaluate} from '@mdx-js/mdx'

import rehypeComponents from './rehypeComponents'

const MarkdownComponent = async ({children}: {children: string}) => {

	// Preprocess the markdown content

	console.log(process.cwd())

	// Process the markdown content
	const {default: Post, ...props} = await evaluate(children, {
		development: true,
		jsx,
		jsxDEV,
		jsxs: jsx,
		Fragment,
    baseUrl: process.cwd()
  });

	console.log(String(Post), JSON.stringify(props));

	return <Post components={rehypeComponents} />
};



export default MarkdownComponent;
