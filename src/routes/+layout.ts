// This automatically enables analytics if you're deploying your website with vercel.

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });