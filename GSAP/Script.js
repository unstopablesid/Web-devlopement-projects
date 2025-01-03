// // gsap.to(
// //     "#Box",{
// //         x : 500 ,
// //         duration : 5,
// //         rotate : 360,
// //         borderRadius : "50%",
// //         ease : "elastic",
// //     }
// // )
// // gsap.from(
// //     "#Box",{
// //         x: 100,
// //         duration : 10,
// //         rotate : 360,
// //         borderRadius : "50%",
        
// //         opacity: 0,
// //         stagger: 1,
// //         repeat : -1,
// //         yoyo : true,
// //     }
// // )
// gsap.to(
//     "#page1 #Box1",{
//         duration : 5,
//         rotate : 360,
//         borderRadius : "50%",
//         scrollTrigger : {
//             trigger : "#page1",
//             start : "top center",
//             end : "bottom center",
//             scrub : true,
//             markers : true,
//         },
//     }
    // )
    gsap.to(
        "#page2 #Box2",{
        duration : 1,
        rotate : 360,
        borderRadius : "50%",
        scrollTrigger : {
            trigger : "#page2",
            scroller:"body",
            start : "top 30%",
            end : "bottom 50%",
            scrub : 5,
            markers : true,
        },
    });
        
// gsap.to(
//             "#page3 #Box3",{
//                 duration : 5,
//                 rotate : 360,
//                 borderRadius : "50%",
//                 ease : "elastic",
//             }
//             )
