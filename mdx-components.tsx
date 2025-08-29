import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import type { MDXComponents } from 'mdx/types'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function getTextFromChildren(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getTextFromChildren).join('');
  if (typeof children === 'object' && children && 'props' in children) {
    // @ts-ignore
    return getTextFromChildren(children.props.children);
  }
  return '';
}

const components: MDXComponents = {
	h1: ({ id, children, ...props }) => {
    const text = getTextFromChildren(children);
    const generatedId = id || slugify(text);
    return <Typography component={'h1'} variant="h2" gutterBottom id={generatedId} {...props}>{children}</Typography>;
  },
	h2: ({ id, children, ...props }) => {
    const text = getTextFromChildren(children);
    const generatedId = id || slugify(text);
    return <Typography component={'h2'} variant="h3" gutterBottom id={generatedId} {...props}>{children}</Typography>;
  },
	h3: ({ id, children, ...props }) => {
    const text = getTextFromChildren(children);
    const generatedId = id || slugify(text);
    return <Typography component={'h3'} variant="h4" gutterBottom id={generatedId} {...props}>{children}</Typography>;
  },
	h4: ({ id, children, ...props }) => {
    const text = getTextFromChildren(children);
    const generatedId = id || slugify(text);
    return <Typography component={'h4'} variant="h5" gutterBottom id={generatedId} {...props}>{children}</Typography>;
  },
	h5: ({ id, children, ...props }) => {
    const text = getTextFromChildren(children);
    const generatedId = id || slugify(text);
    return <Typography component={'h5'} variant="h6" gutterBottom id={generatedId} {...props}>{children}</Typography>;
  },
	h6: ({ id, children, ...props }) => {
		const text = getTextFromChildren(children);
		const generatedId = id || slugify(text);
		return <Typography component={'h6'} variant="h6" gutterBottom id={generatedId} {...props}>{children}</Typography>;
	},
	p: (props) => <Typography variant="body1" {...props} />, // use sx for spacing
	a: (props) => <MuiLink {...props} />,
	ul: (props) => <Box component="ul" sx={{ pl: 4, mb: 2 }} {...props} />,
	ol: (props) => <Box component="ol" sx={{ pl: 4, mb: 2 }} {...props} />,
	li: (props) => <Box component="li" sx={{ mb: 0.5 }} {...props} />,
	code: (props) => <Box component="code" sx={{ bgcolor: 'grey.100', px: 0.5, py: 0.2, borderRadius: 1, fontFamily: 'monospace', fontSize: '0.95em' }} {...props} />,
	pre: (props) => <Box component="pre" sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 2, overflow: 'auto', mb: 2 }} {...props} />,
}

export function useMDXComponents(): MDXComponents {
	return components
}
