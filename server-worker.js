var CACHE_VERSION = 'myapp-v1';
var CACHE_FILES = [
    'images/lightblue.jpg',
    'images/lightgold.jpg',
    'app.js',
    'styles.css'
];

self.addEventListener('install', event => {
    console.log('SW installed');
    event.waitUntil(
        caches
        .open(CACHE_VERSION)
        .then(cache => {
            console.log('SW caching files');
            cache.addAll(CACHE_FILES)
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    console.log('SW activated');
    event.waitUntil(
        caches.keys().then(keyNames => {
            return Promise.all(
                keyNames.map(key => {
                    if(key !== CACHE_VERSION) {
                        console.log('SW clearing old caches');
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('SW fetching');
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

const colorSelect = document.getElementById("colorSelect")
    const value = colorSelect.value
    const lightbluebg = document.getElementById("lightblue")
    const lightgoldbg = document.getElementById("lightgold")

    colorSelect.addEventListener("change", handleSelectChange)

    
    function handleSelectChange(event) {
        const currentValue = event.target.value;
        console.log(currentValue)
        changeTheme(currentValue)
    }
    function changeTheme(color) {
        console.log("changetheme")
        document.getElementsByTagName('body')[0].style.backgroundImage = 'url(/images/' + color + '.jpg)';
    }