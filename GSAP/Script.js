// gsap.to(
//     "#Box",{
//         x : 500 ,
//         duration : 5,
//         rotate : 360,
//         borderRadius : "50%",
//         ease : "elastic",
//     }
// )
gsap.from(
    "#Box",{
        x: 500,
        duration : 10,
        rotate : 360,
        borderRadius : "50%",
        
        opacity: 0,
        stagger: 1,
    }
)