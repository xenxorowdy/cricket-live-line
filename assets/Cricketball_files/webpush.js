/*!
 * CADENAS WebPush Notifications
 * https://www.cadenas.de/
 *
 * Copyright 2017 CADENAS GmbH
 */

(function () {
    'use strict';
    var seDefaultNotificationUrl = '/community/';

    if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker._register = navigator.serviceWorker.register;
        navigator.serviceWorker.register = function (url, options) {
            options = options || {};
            options.scope = seDefaultNotificationUrl; // overwrite the scope
            return navigator.serviceWorker._register.call(navigator.serviceWorker, url, options);
        };

        // unregister old/deprecated service worker
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
            registrations.forEach(function (registered) {
                if (registered.active && registered.active.state === 'activated' && registered.active.scriptURL.match(/pushwoosh-service-worker-(?:light|dark)\.js/)) {
                    console.log('try to unregister: ' + registered.active.scriptURL);
                    registered.unregister().then(function (status) {
                        if (status) {
                            console.log('successfully unregistered: ' + registered.active.scriptURL);
                        }
                    });
                }
            });
        });
    }

    // init pushwoosh
    window.Pushwoosh = window.Pushwoosh || [];
    window.Pushwoosh.push([
        'init', {
            logLevel: 'error', // or debug
            autoSubscribe: true,
            applicationCode: '4BB0E-A9BE1',
            safariWebsitePushID: 'web.de.cadenas.cadmodels',
            defaultNotificationTitle: '3D CAD Models Engineering',
            defaultNotificationImage: '/community/application/modules/Cadenasmiscellaneous/externals/webpush/icon192x192.png',
            defaultNotificationUrl: seDefaultNotificationUrl,
            serviceWorkerUrl: '/community/application/modules/Cadenasmiscellaneous/externals/webpush/pushwoosh-service-worker.js'
        }
    ]);
})();