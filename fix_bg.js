    // Get the section element
    var section = document.getElementById('triggerSection');

    // Function to check if the section is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to change the background color
    function updateBackgroundColor() {
        var body = document.body;
        if (isElementInViewport(section)) {
            body.style.backgroundColor = 'white'; // Section is visible
        } else {
            body.style.backgroundColor = 'black'; // Section is not visible
        }
    }

    // Attach the updateBackgroundColor function to the scroll event
    window.addEventListener('scroll', updateBackgroundColor);

    // Initial call to set the initial background color based on the section's visibility
    updateBackgroundColor();
