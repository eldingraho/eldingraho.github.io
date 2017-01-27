
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            console.log('success: serviceWorker registered at - ' + registration.scope)
        }).catch(function (err) {
            console.log('failde: serviceWorker registration failed err: ', err);
        });
    })
}