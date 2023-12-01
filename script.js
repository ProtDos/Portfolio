try {  // this is just temporary, this can't be in production by any means.
    
    // This is for the trippy grid animation
    var myDiv = document.getElementById('shit');
    function convertCursorPosition(x, y) {
        const maxX = 15;
        const maxY = 15;
        const minX = -15;
        const minY = -15;
    
        const convertedX = (x / window.innerWidth) * (maxX - minX) + minX;
    
        const convertedY = (y / window.innerHeight) * (maxY - minY) + minY;
    
        return { x: convertedX, y: convertedY };
    }
    
    function handleMouseMove(event) {
        const originalX = event.clientX;
        const originalY = event.clientY;
        const convertedPosition = convertCursorPosition(originalX, originalY);            
        
        myDiv.style.backgroundPosition = `calc(50% + ${convertedPosition.x * -1}px) calc(50% + ${convertedPosition.y * -1}px)`
    }
    
    
        var cont = document.getElementById("da_section");
        cont.addEventListener('mousemove', handleMouseMove);
    
    
    
    // This is for the work carousel
    let isDragging = false;
    let startX;
    let scrollLeft;
    
    const draggableList = document.getElementById('project-carousel');
    
    draggableList.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - draggableList.offsetLeft;
        scrollLeft = draggableList.scrollLeft;
    });
    
    draggableList.addEventListener('mouseleave', () => {
        isDragging = false;
    });
    
    draggableList.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    draggableList.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - draggableList.offsetLeft;
        const walk = (x - startX) * 2;
        draggableList.scrollLeft = scrollLeft - walk;
    });
    
    // This is for the testimonials carousel
    let isDragging2 = false;
    let startX2;
    let scrollLeft2;
    
    const draggableList2 = document.getElementById('da_thing_2');
    
    draggableList2.addEventListener('mousedown', (e) => {
        isDragging2 = true;
        startX2 = e.pageX - draggableList2.offsetLeft;
        scrollLeft2 = draggableList2.scrollLeft;
    });
    
    draggableList2.addEventListener('mouseleave', () => {
        isDragging2 = false;
    });
    
    draggableList2.addEventListener('mouseup', () => {
        isDragging2 = false;
    });
    
    draggableList2.addEventListener('mousemove', (e) => {
        if (!isDragging2) return;
        e.preventDefault();
        const x2 = e.pageX - draggableList2.offsetLeft;
        const walk2 = (x2 - startX2) * 2;
        draggableList2.scrollLeft = scrollLeft2 - walk2;
    });
    
    var clickableElements = document.getElementsByClassName('clickable');
    
    Array.from(clickableElements).forEach(function(element) {
        element.addEventListener('click', function() {
        var href = element.getAttribute('data-href');
    
        window.open(href, '_blank');
        });
    });
    
    // This is to fix scrollbar for testimonials on mobile
    
    // testing out this function
    window.mobileAndTabletCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    
    
    // JavaScript to change the class name on mobile devices
    if (window.innerWidth <= 1081) { // doing this for now.
    // if (window.mobileAndTabletCheck()) {
        document.getElementById('da_thing_2').className = 'grid auto-cols-min grid-flow-col gap-x-6 overflow-x-auto ps-10';
    } else {
        document.getElementById('da_thing_2').className = 'grid auto-cols-min grid-flow-col gap-x-6 overflow-x-hidden ps-10';
    }
    
    
    // Navbar with background after leaving section
    document.addEventListener("DOMContentLoaded", function () {
        var element1 = document.getElementById("really");
        var element2 = document.getElementById("about2");
    
        window.addEventListener('scroll', function () {
    
            if (element1 && element2) {
                var yPosition1 = element1.getBoundingClientRect().top;
                var yPosition2 = element2.getBoundingClientRect().top;
    
                if (yPosition1 < yPosition2) {
                    if (document.getElementById('nacbar').classList.contains("animated_bar")) {
                        document.getElementById('nacbar').className = 'mt-4 rounded-full border-0.5 p-2 transition-colors duration-500 border-transparent bg-transparent animated_bar';
                    } else {
                        document.getElementById('nacbar').className = 'mt-4 rounded-full border-0.5 p-2 transition-colors duration-500 border-transparent bg-transparent';
                    }
                } else if (yPosition1 > yPosition2) {

                    if (document.getElementById('nacbar').classList.contains("animated_bar")) {
                        document.getElementById('nacbar').className = 'mt-4 rounded-full border-0.5 p-2 transition-colors duration-500 border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50 animated_bar';
                    } else {
                        document.getElementById('nacbar').className = 'mt-4 rounded-full border-0.5 p-2 transition-colors duration-500 border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50';
                    }
                    } else {
                }
            } else {
            }
        });
    });
    
    // Typing animation
    const textArray = [
        "Developer",
        "Coder",
        "Enterpreneur"
    ];
    
    let typeJsText = document.querySelector("#animatedText");
    let stringIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    
    function typeJs() {
        if (stringIndex < textArray.length) {
            const currentString = textArray[stringIndex];
    
            if (isTyping) {
                if (charIndex < currentString.length) {
                    typeJsText.innerHTML += currentString.charAt(charIndex);
                    charIndex++;
                } else {
                    isTyping = false;
                }
            } else {
                if (charIndex > 0) {
                    typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    isTyping = true;
                    stringIndex++;
    
                    if (stringIndex >= textArray.length) {
                        stringIndex = 0; 
                    }
    
                    charIndex = 0;
                    typeJsText.innerHTML = ""; 
                }
            }
        }
    }
    
    setInterval(typeJs, 250);

} catch(error) { 
}
