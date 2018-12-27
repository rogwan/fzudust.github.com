self.importScripts('https://cdn.jsdelivr.net/npm/workbox-sw');
workbox.setConfig({
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
const filter = (url, arr) => {
	const filter = arr.filter(regexp => url.href.match(regexp));
	return filter.length > 0
}

workbox.routing.registerRoute(
	({
		url
	}) => {
		return filter(url, [
			'https://cdn.jsdelivr.net/npm/react/umd/react.development.js',
			'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.js',
			/.+(?:\.ico|\.svg|\.woff)$/ig,
			/g\.alicdn\.com/ig,
			/\/img\/rss\.png/ig,
		])
	},
	workbox.strategies.cacheFirst(),
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
	/\/proxy\?url=.*/ig,
	async ({
			url,
		}) => {

			try {
				return await fetch(baseUrl + '/proxy' + url.search);
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
	({
		url,
	}) => filter(url, [
		/\.zhimg\.com/ig,
		/miaozhen\.com/ig,
		/res\.infoq\.com/ig,
		/www\.cnbeta\.com.*read\?_csrf=.*/ig,
	]),
	() => new Response('block', {
		status: 599,
		statusText: 'block'
	}),
);

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

self.addEventListener('install', (event) => {
	event.waitUntil(self.skipWaiting())
})
