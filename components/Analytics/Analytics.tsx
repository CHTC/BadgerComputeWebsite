'use client'

import { init, push } from '@socialgouv/matomo-next';
import { usePathname } from 'next/navigation';
import { useEffect, useRef  } from 'react';

const Analytics = ({url, siteId}: {url?: string, siteId?: string}) => {

	if (!url || !siteId) {
		console.warn('Matomo URL or Site ID not set');
		return null;
	}

	const pathname = usePathname();
	const isInitialLoad = useRef(true);

	useEffect(() => {
		try {
			console.log('Matomo initializing');
			init({ url, siteId, disableCookies: true });
			return () => push(['HeatmapSessionRecording::disable']);
		} catch {
			console.error('Matomo failed to initialize');
		}
	}, []);

	useEffect(() => {
		if (isInitialLoad.current) {
			isInitialLoad.current = false;

		} else {
			if (pathname) {
				try {
					push(['setCustomUrl', pathname]);
					push(['trackPageView']);
				} catch {
					console.error('Matomo failed to track page view');
				}
			}
		}
	}, [pathname])

	return null
}

export default Analytics;
