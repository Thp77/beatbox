function playSound(e) {

    // appel les sons dans index //

    const audio = document.querySelector('audio[data-key="${e.KeyCode}"]')

    console.log(audio);
}

window.addEventListener('keydown, playSound')