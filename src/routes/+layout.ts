// You can remove this code if you're not deploying your site with vercel.
// This simply enables analytics for your site if you are.

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });