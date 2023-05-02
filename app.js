if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
	   navigator.serviceWorker.register('/service-worker.js')
	      .then(registration => console.log('SW registered'))
		  .catch(err => console.log(`SW not registered - Error: ${err}`))
    })
} else {
    console.log('Service Worker is not supported in this browser.')
}

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
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(images/' + color + '.jpg)';
}