// self.importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
self.importScripts('https://cdn.jsdelivr.net/npm/workbox-sw');
workbox.setConfig({
	// modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
	// modulePathPrefix: 'https://cdn.jsdelivr.net/npm/workbox-core@3.4.1/build/'
	// modulePathPrefix: 'https://cdn.jsdelivr.net/npm/'
	modulePathCb(e) {
		// console.log(e);
		return "https://cdn.jsdelivr.net/npm/" + e;
	}
});
workbox.core.setCacheNameDetails({
	prefix: 'my-app',
	suffix: 'v1'
});
const baseUrl = 'https://zhengjunzhe.tk';
// workbox.googleAnalytics.initialize();
/* workbox.setConfig({
	debug: true
});
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
workbox.precaching.precacheAndRoute([{
		url: '/index.html',
		revision: '8',
	},
	{
		url: '/build/index.css',
		revision: '10',
	},
	{
		url: '/build/index.js',
		revision: '11',
	},
	{
		url: '/js/promise.js',
		revision: '4',
	},

]); */
const filter = (url, arr) => {
	const filter = arr.filter(regexp => url.href.match(regexp));
	return filter.length > 0
}
// workbox.routing.registerRoute(
// 	({
// 		url
// 	}) => {
// 		return filter(url, [
// 			/google/ig,
// 			/baidu\.com/ig,
// 			/duomai\.com/ig,
// 			/taboola\.com/ig,
// 			/baidustatic\.com/ig,
// 			/twitter\.com/ig,
// 			/app-/ig,
// 			/res\.infoq\.com/ig,
// 			/\.zhimg\.com/ig,
// 			/www\.v2ex\.com.*fontawesome-webfont.*/ig,
// 			/www\.cnbeta\.com.*read\?_csrf=.*/ig,
// 		])
// 	},
// 	() => new Response('', {
// 		status: 599,
// 		statusText: 'block'
// 	}),
// );
/* workbox.routing.registerNavigationRoute('/index.html', {
	blacklist: [
		/google/ig,
		/baidu.com/ig,
		/duomai.com/ig,
		/taboola.com/ig,
		/baidustatic.com/ig,
		/twitter.com/ig,
		/app-/ig,
		/res.infoq.com/ig,
		/.zhimg.com/ig,
	]
}); */

workbox.routing.registerRoute(
	({
		url
	}) => {
		return filter(url, [
			// 'https://unpkg.com/react/umd/react.development.js',
			// 'https://unpkg.com/react-dom/umd/react-dom.development.js',
			'https://cdn.jsdelivr.net/npm/react/umd/react.development.js',
			'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.js',
			/.+(?:\.ico|\.svg|\.woff)$/ig,
			/g\.alicdn\.com/ig,
			/\/img\/rss\.png/ig,
			// /.+iframe\.(html|css).*/ig,
		])
	},
	workbox.strategies.cacheFirst(),
);
workbox.routing.registerRoute(
	// /\/proxy\?url=.*type=html/ig,
	/\/proxy\?url=.*/ig,
	async ({
			url,
			// event,
			// params
		}) => {
			/* const uri = decodeURIComponent(url.search.replace('?url=', '').replace('&type=html', ''));
			try {
				const response = await fetch(event.request);
				const location = response.headers.get('Location');
				const orgin = new URL(location || uri);
				const text = await response.text();
				const html = text.replace(/<script[\S|\s]*?>[\S|\s]*?<\/script>/ig, '')
					.replace('<head>', `<head><base href="${orgin.origin}" />`)
					.replace('</head>', `<link href="${url.origin}/iframe.css" rel="stylesheet"></head>`);
				const res = new Response(
					html, {
						headers: response.headers,
					});
				return res;
			} catch (error) {
				console.error(error);
				return new Response('proxy error', {
					status: 599,
					statusText: 'proxy error'
				});
			} */
			try {
				const response = await fetch(baseUrl + '/proxy' + url.search, {
					redirect: 'manual'
				});
				if (response.type === 'opaqueredirect') {  //重定向
					return response;
				}
				const orgin = new URL(url.search.replace('?url=', ''));
				const text = await response.text();
				const html = text.replace(/<script[\S|\s]*?>[\S|\s]*?<\/script>/ig, '')
					.replace('<head>', `<head><base href="${orgin.origin}" />`)
					.replace('</head>', `<link href="${url.origin}/iframe.css" rel="stylesheet"></head>`);
				const res = new Response(
					html, {
						headers: response.headers,
					});
				return res;
			} catch (error) {
				console.error(error);
				return new Response('proxy error', {
					status: 599,
					statusText: 'proxy error'
				});
			}

		},
		'GET'
);
workbox.routing.registerRoute(
	/.*/ig,
	({
		url,
		event
	}) => {
		event.request.text().then(text => fetch(baseUrl + url.pathname, {
			method: 'POST',
			body: text,
		}));

		return new Response('ok', {
			status: 200,
			statusText: 'ok'
		});
	},
	'POST'
);
workbox.routing.registerRoute(
	({
		url,
	}) => filter(url, [
		/\.zhimg\.com/ig,
		/miaozhen\.com/ig,
		// /player\.youku\.com/ig,
		// /img\.huxiucdn\.com/ig,
		/res\.infoq\.com/ig,
		/www\.cnbeta\.com.*read\?_csrf=.*/ig,
	]),
	() => new Response('block', {
		status: 599,
		statusText: 'block'
	}),
);

/* workbox.routing.registerRoute(
	/.+[\.jpg|\.png|\.jpeg]+/ig,
	async ({
			url,
			event,
		}) => {
			let response;
			try {
				response = await fetch(url.href, {
					referrerPolicy: "no-referrer",
					credentials:'omit',
					cache: "no-store",
				});
			} catch (error) {
				console.error(url, error);
				response = new Response('img error', {
					status: 599,
					statusText: 'error'
				})
			}
			return response;
		},
		'GET'
); */

self.onerror = function(e) {
	console.error(e);
}
self.addEventListener('push', function(event) {

	const notificationData = event.data.json();
	console.log('收到推送', notificationData);
	const title = notificationData.title;
	// 弹消息框
	event.waitUntil(self.registration.showNotification(title, notificationData));
});
self.addEventListener('notificationclick', function(event) {
	console.log('点击消息框');
	const notification = event.notification;
	notification.close();
	event.waitUntil(
		clients.openWindow(notification.data.url)
	);
});
/* self.onfetch = function(e) {
	console.log(e.request.url);
} */
self.addEventListener('install', (event) => {
	event.waitUntil(self.skipWaiting())
})
