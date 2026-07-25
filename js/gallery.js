document.addEventListener("DOMContentLoaded", () => {


    const sliders = document.querySelectorAll(".gallery-container");


    sliders.forEach((slider) => {


        const track = slider.querySelector(".gallery-track");

        const cards = slider.querySelectorAll(".gallery-card");

        const next = slider.querySelector(".next");

        const prev = slider.querySelector(".prev");


        let index = 0;

        const cardWidth = cards[0].offsetWidth + 25;



        function moveSlider(){

            track.style.transform =
            `translateX(-${index * cardWidth}px)`;

        }



        next.addEventListener("click",()=>{


            index++;


            moveSlider();



            // infinite reset

            if(index >= cards.length / 2){

                setTimeout(()=>{

                    track.style.transition="none";

                    index=0;

                    moveSlider();


                    setTimeout(()=>{

                        track.style.transition=".5s ease";

                    },50);


                },500);

            }


        });



        prev.addEventListener("click",()=>{


            index--;


            if(index < 0){

                index = cards.length / 2 - 1;

                track.style.transition="none";

                moveSlider();


                setTimeout(()=>{

                    track.style.transition=".5s ease";

                },50);

            }


            moveSlider();


        });



        // Auto movement

        setInterval(()=>{


            next.click();


        },3000);



    });


});