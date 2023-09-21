function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var popularHeader = document.getElementById("popular-header-id");
    var popularCards = document.getElementById("popular-cards-id");
    var experienceContent = document.getElementById("experience-content");
    var experienceImageBig = document.getElementById("experience-image-big-id");
    var experienceImageSmall = document.getElementById("experience-image-small-id");
    var courseHeader = document.getElementById("course-header-id");
    var studentsHeader = document.getElementById("students-header-id");
    var studentCards = document.querySelectorAll("[id^='student-card-']");
    
    if (window.scrollY > 165) {
        popularHeader.classList.remove("hidden")
        popularHeader.classList.add("slide-up");
    }

    if (window.scrollY > 200) {
        popularCards.classList.remove("hidden")
        popularCards.classList.add("slide-up");
    }

    if (window.scrollY > 680) {
        experienceContent.classList.remove("hidden")
        experienceContent.classList.add("slide-from-right");
    }

    if (window.scrollY > 680) {
        experienceImageBig.classList.remove("hidden")
        experienceImageBig.classList.add("grow-from-center");
        setTimeout(function() {
            experienceImageSmall.classList.remove("hidden")
            experienceImageSmall.classList.add("grow-from-center");
        }, 400);
    }

    if (window.scrollY > 1120) {
        courseHeader.classList.remove("hidden")
        courseHeader.classList.add("slide-up");
    }

    if (window.scrollY > 2150) {
        studentsHeader.classList.remove("hidden")
        studentsHeader.classList.add("slide-up");
    }

    if (window.scrollY > 2420) {
        studentCards[0].classList.remove("hidden")
        studentCards[0].classList.add("slide-from-right");
        setTimeout(function() {
            studentCards[1].classList.remove("hidden")
            studentCards[1].classList.add("slide-from-right");
        }, 500);
        setTimeout(function() {
            studentCards[2].classList.remove("hidden")
            studentCards[2].classList.add("slide-from-right");
        }, 1000);
    }
}


window.addEventListener("scroll", handleScroll);


