// gsap.to(
//     "#Box",{
//         x : 500 ,
//         duration : 5,
//         rotate : 360,
//         borderRadius : "50%",
//         ease : "elastic",
//     }
// )
// gsap.from(
//     "#Box",{
//         x: 100,
//         duration : 10,
//         rotate : 360,
//         borderRadius : "50%",
        
//         opacity: 0,
//         stagger: 1,
//         repeat : -1,
//         yoyo : true,
//     }
// )
gsap.to(
    "#page1 #Box1",{
        duration : 5,
        rotate : 360,
        borderRadius : "100%",
        ease : "elastic",
    }
    )
    gsap.to(
        "#page2 #Box2",{
            duration : 5,
            rotate : 360,
            borderRadius : "50%",
            ease : "elastic",
        }
        )
        gsap.to(
            "#page3 #Box3",{
                duration : 5,
                rotate : 360,
                borderRadius : "50%",
                ease : "elastic",
            }
            )