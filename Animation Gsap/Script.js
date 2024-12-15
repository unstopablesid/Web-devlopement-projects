gsap.from("#box",{
    x : 1000 ,
    duration : 11,
    rotate : 360,
    scale : 0.5,
    borderRadius : "50%",
    ease : "elastic",

})
gsap.to("h1",{
    duration : 2,
    text : "Hello World",
    color : "red",
    fontSize : "50px",
    backgroundColor : "black",
    padding : "20px",
    borderRadius : "50%",
    ease : "elastic",
    delay : 5,
})