//select all  the stars and store them in a nodelist
const stars=document.querySelectorAll(".review-icon2 i");
//loop through the star nodelist
stars.forEach((star,index1) =>  {
    star.addEventListener("click",()=>{
        stars.forEach((star,index2) =>  {
            index1 >= index2 ? star.classList.add("active"):star.classList.remove("active");
        });

        
    }
    );



});