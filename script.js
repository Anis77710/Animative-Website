function firstPageAnimation() {
    let tl = gsap.timeline()

tl.from(".navlogo, .navlists a, navlists button,.navbtn",{
    y:-30,
    duration:0.7,
    delay:1,
    stagger: 0.15,
    opacity:0
})

tl.from(".hero1 h1",{
    x: -200,
    opacity:0,
    duration:0.6
})
tl.from(".hero1 p",{
    x: -100,
    opacity:0,
    duration:0.4
})
tl.from(".hero1 button",{
    opacity:0,
    duration:0.4
})

tl.from(".hero2 img",{
    duration:0.6,
    opacity:0,
    x:100

},"-=1")

tl.from(".brands img",{
    y:30,
    opacity:0,
    duration:0.4,
    stagger:0.15
})
}



function secondPageAnimation(params) {
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:".services, .boxes",
            scroller:"body",
            start:"top 50%",
            end:"top -60%",
            scrub:2
        }
    })
    
    tl.from(".services",{
        y:30,
        opacity:0
    })
    
    tl.from(".elem.left",{
        x:-50,
        opacity:0,
        duration:1
    },"top")
    
    tl.from(".elem.right",{
        x:50,
        opacity:0,
        duration:1
    },"top")
    
    
    tl.from(".elem.left1",{
        x:-50,
        opacity:0,
        duration:1
    },"btm")
    
    tl.from(".elem.right1",{
        x:50,
        opacity:0,
        duration:1
    },"btm")
    
    
    tl.from(".elem.left2",{
        x:-50,
        opacity:0,
        duration:1
    },"btm1")
    
    tl.from(".elem.right2",{
        x:50,
        opacity:0,
        duration:1
    },"btm1")
    
    
    tl.from(".elem.left3",{
        x:-50,
        opacity:0,
        duration:1
    },"btm2")
    
    tl.from(".elem.right3",{
        x:50,
        opacity:0,
        duration:1
    },"btm2")
}

function thirdPageAnimation(params) {
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:".wholething,.leftthing,.rightthing.getstarted",
            scroller:"body",
            start:"top 50%",
            end:"top 30%",
            scrub:2
        }
    })

    tl.from(".wholething",{

    
        opacity:0
    })

    tl.from(".leftthing",{
        x:-30,
        duration:0.6,
        opacity:0
    
    })
    tl.from(".rightthing",{
        x:30,
        duration:0.6,
        opacity:0
    
    })
    
}


function forthPageAnimation(params) {
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:".getstarted, .inending,.ending p",
            scroller:"body",
            start:"top 50%",
            end:"top 30%",
            scrub:2
        }
    })

    tl.from(".getstarted",{
        y:50,
        duration:1,
        opacity:0
    })

    tl.from(".inending",{
        opacity:0
    })

    tl.from(".ending p",{
        x:-70,
        duration:1,
        opacity:0,
        stagger:0.4
    })

}











firstPageAnimation()
secondPageAnimation()
thirdPageAnimation()
forthPageAnimation()