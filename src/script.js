
// Universe effect for the default theme of the website, interchangeable with the white background
document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 19.18081918081918,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

}, false);

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.floating-image');
  
    images.forEach((image, index) => {
      // Set random initial position
      image.style.top = Math.random() * 100 + 'vh';
      image.style.left = Math.random() * 100 + 'vw';
  
      // Define different animations for each image
      const animations = ['float1', 'float2', 'float3', 'float4'];
      const animation = animations[index % animations.length];
      
      // Set random animation duration and delay
      const duration = Math.random() * 20 + 10; 
      const delay = Math.random() * 10; 
      image.style.animation = `${animation} ${duration}s infinite alternate ease-in-out ${delay}s`;
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var animationPath = document.getElementById('lottie-animation').getAttribute('data-animation-path');
    
    lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath, 
    });
});

