let scrollbar = document.querySelector(".scroll").cloneNode(true);
document.querySelector(".before").append(scrollbar);


let arrow = document.querySelectorAll(".arrow");
let herobtn = document.querySelectorAll(".hero_btn");


herobtn.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        arrow.forEach(arr => {
            arr.innerHTML = "arrow_forward";
        })
    })
})
herobtn.forEach(btn => {
    btn.addEventListener("mouseleave", () => {
        arrow.forEach(arr => {
            arr.innerHTML = "chevron_right";
        })
    })
})

//Creating animation effects

window.addEventListener('scroll', reveal);
var myvideo=document.getElementById("myvideo");
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var reveals2 = document.querySelectorAll(".reveal2");
    var windowheight = window.innerHeight;
    var revealpoint = 10;
    reveals.forEach(reveal => {

        var revealtop = reveal.getBoundingClientRect().top;
        if (revealtop < windowheight - revealpoint) {
            reveal.classList.add('active');
            myvideo.play();
        }
    })
    reveals2.forEach(reveal2 => {

        var revealtop = reveal2.getBoundingClientRect().top;

        if (revealtop < windowheight - revealpoint) {
            reveal2.classList.add('active2');
            reveal2.style.display="block";
        }
    })
}
//Preloader
var loader = document.getElementById("preloader");
var heading = document.querySelector(".heading");
window.addEventListener("load", () => {
    loader.style.display = "none";
    heading.classList.remove("heading");
    heading.classList.add("show");
    console.log("window loaded");
})

//play pause video

let play = document.querySelector(".pause");
let vid1 = document.querySelector(".vid1");

play.addEventListener("click", () => {
    if (vid1.paused) {
        vid1.play();
        play.innerHTML = "pause";
    } else {
        vid1.pause(); // Corrected: use vid1.pause() to pause the video
        play.innerHTML = "play";
    }
});


let menus = document.querySelectorAll(".menu");
let burger = document.querySelector(".burger");

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        if (burger.classList.contains("show1")) {
            burger.classList.remove("show1");
            setTimeout(() => {
                burger.style.display = "none";
            }, 1000);
        } else {
            burger.style.display = "flex";
            setTimeout(() => {
                burger.classList.add("show1");
            }, 100);
        }
    });
});

//Stopping the scroll


let nav = document.querySelector(".nav2");
let scrolls = document.querySelectorAll(".scroll");

nav.addEventListener("mouseover", () => {
    scrolls.forEach(scroll => {
        scroll.style.animationPlayState = "paused";
    });
});

nav.addEventListener("mouseleave", () => {
    scrolls.forEach(scroll => {
        scroll.style.animationPlayState = "running";
    });
});

//Play the video on scroll
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll(".side-vid");
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => {
        observer.observe(video);
    });
});
