import lottie from 'lottie-web';

export default{

    /**
     * Load the animation lottie json and push it to the DOM
     * It expects a key to match across the entire line so
     * make sure your json file and DOM elements have the
     * same naming convention.
     *
     * @param key
     */
    loadAnimation: function(key){

    // key = 'merry-animation'
    fetch('/'+key+'.json')
        .then(response => response.json())
        .then(function(animationJson) {

            let animation = lottie.loadAnimation({
                container: document.getElementById(key),
                renderer: 'svg',
                autoplay: true,
                loop: true,
                animationData: animationJson,
            });

            animation.setSpeed(1);
            animation.play();

        });
    },

    loadSwitch: function()
    {
        const christmasSwitch = document.getElementById('christmas-switch'),
            merryAnimationContainer = document.getElementById('merry-animation'),
            eerieAnimationContainer = document.getElementById('eerie-animation');

        christmasSwitch.addEventListener('change', function() {
            if(this.checked) {
                eerieAnimationContainer.classList.remove('hidden');
                merryAnimationContainer.classList.add('hidden');
            } else {
                eerieAnimationContainer.classList.add('hidden');
                merryAnimationContainer.classList.remove('hidden');
            }
        })
    }
}