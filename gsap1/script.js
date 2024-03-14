var tl = gsap.timeline();

tl.from(".nav img,.nav h3,.nav button",{
    y:-100,
    duration: 1,
    opacity:0,
    delay:0.3,
    stagger:0.2,
})

tl.from(".text h1",{
    y:100,
    opacity:0,
    stagger:0.3
})
tl.from(".main>img",{
    scale:0,
    opacity:0,
    stagger:0.5
})
tl.from(".main>h3",{
    scale:0,
    opacity:0
})
tl.to(".main>h3",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true
})