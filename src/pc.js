import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video3 from './assets/videos/video3.mp4';
import video1 from './assets/videos/video2.mp4';
import video4 from './assets/videos/video1.mp4';
import video5 from './assets/videos/video5.mp4';
import video6 from './assets/videos/video6.mp4';
import shot1 from './assets/images/shot1.png';
import shot2 from './assets/images/shot2.png';
import shot3 from './assets/images/shot3.png';
import shot4 from './assets/images/shot4.png';
import './pc.css';


export default function PC() {
    const contentRef = useRef();
    const cRef = useRef();
    const sRef = useRef();
    const c1Ref = useRef();
    const c2Ref = useRef();
    const s1Ref = useRef();
    const s2Ref = useRef();
    const univLogoRef = useRef();
    const estpRef = useRef();
    const mbtiRef = useRef();
    const font1Ref = useRef();
    const v1Ref = useRef();
    const v2Ref = useRef();
    const videoRef =useRef();
    const font7Ref = useRef();
    const font8Ref = useRef();
    const endRef = useRef();
    const endVidRef = useRef();
    const video5Ref = useRef();
    const video6Ref = useRef();

    useEffect(() => {       // "c1 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.font2',
        start: 'top 60%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 60%',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(c1Ref.current, {
                opacity: (self.progress),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  
    useEffect(() => {       // "c2 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.font2',
        start: 'top 60%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 60%',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(c2Ref.current, {
                opacity: (self.progress),  // opacity 0->1
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  
    useEffect(() => {       // "s1 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.font2',
        start: 'top 60%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 60%',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(s1Ref.current, {
                opacity: (self.progress),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  
    useEffect(() => {       // "s2 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: true,
        trigger: '.font2',
        start: 'top 60%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 60%',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(s2Ref.current, {
                opacity: (self.progress),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // background video move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.section1',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(univLogoRef.current, {
                scrollTrigger: {
                    markers: false
                },
                y: (self.progress * -300),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // mbti pin
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(mbtiRef.current, {
            scrollTrigger: {
                markers: false,
                trigger: '.font4',
                start: 'top 20%', 
                end: 'bottom 20%',  // .font4를 통과하는 동안 고정됨
                pin: true,
                pinSpacing: false, 
          }
        });
      }, []);

    useEffect(() => {       // font1 first move
        setTimeout(() => {
        gsap.from('.font1-1', {
            y: 150,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,   // font1-1 이라는 className을 가진 component들끼리의 간격. 부모-자식 관계에는 성립 X
            })
        }, 0);
    }, []);

    useEffect(() => {       // font1 scroll move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.section0',
        start: 'top 0%',  // scroll start/end가 어디 있느냐에 따라 '시작점의 진행상황'이 달라짐
        end: 'bottom 0%',  // ex) 20%에서 시작하면 20%는 진행된 상태로 시작 -> 매우 애매
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(font1Ref.current, {
                scale: self.progress * 80,
                transformOrigin: '5.5% 28%',  // bottom left
                overwrite: true,
                pin: true, 
            });
            },
        });
    
        ScrollTrigger.update();
    }, []); 

    useEffect(() => {       // video opacity
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.to(videoRef.current, {
            scrollTrigger: {
                markers: false,
                trigger: '.section0',
                start: 'top top', 
                end: 'bottom top', 
                onUpdate: (self) => {
                    gsap.to(videoRef.current, {
                        opacity: 1-self.progress*2,
                    })
                },
                pinSpacing: false, 
          }
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // video pin
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.to(videoRef.current, {
            scrollTrigger: {
                markers: false,
                trigger: '.section0',
                start: 'top top', 
                end: 'bottom top', 
                pin: true,
                pinSpacing: false, 
          }
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // v move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.font3-3',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(v1Ref.current, {
                x: (self.progress * 1000),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  
    useEffect(() => {       // v move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.font3-3',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(v2Ref.current, {
                x: (self.progress * -1000),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);   

    useEffect(() => {       // font7-2 pin
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(font7Ref.current, {
            scrollTrigger: {
                markers: false,
                trigger: '.font7',
                start: 'top 25%', 
                end: 'bottom 25%',  
                scrub: 3,
                pin: true,
                pinSpacing: false, 
          }
        });
      }, []);

    useEffect(() => {       // font7-2 pin
        gsap.registerPlugin(ScrollTrigger);
        const font7_2 = font7Ref.current;

        gsap.to(font7Ref.current, {
            x: -font7_2.offsetWidth * 3.4,
            scrollTrigger: {
                markers: false,
                trigger: '.font7',
                start: 'top 25%', 
                end: 'bottom 25%',  
                scrub: 3,
                pinSpacing: false, 
                onUpdate: ({ progress }) => {
                    gsap.set(font7_2, { 
                        x: -font7_2.offsetWidth * 3.4 * progress 
                    });
                  }
          }
        });
      }, []);

    useEffect(() => {       // end move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.end',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(endRef.current, {
                y: (self.progress * -1000),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  

    useEffect(() => {       // end video move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.end',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(endVidRef.current, {
                y: (self.progress * -500),
                overwrite: true,
            });
            },
        });
    
        ScrollTrigger.update();
    }, []);  

      const screenWidth = (window.innerWidth);
      const videoWidth = window.innerWidth / 3;
      console.log("width ::: ", screenWidth, videoWidth);


    return (
        <div className='root'>

            <div className='upperBar'>
                <h1>PORTFOLIO</h1>
            </div>

                <div className='contentBackground' ref={contentRef}>

                    <div className='section0'>

                        <video className='video1' ref={videoRef} src={video1} autoplay='autoplay' loop muted='muted' style={{width:`${screenWidth}px`}}></video>

                        <div className='font1' ref={font1Ref}>
                            <p className='font1-1'>FRONT-END</p>
                            <p className='font1-1'>DEVELOPER</p>
                            <p className='font1-1'>BASED IN SEOUL,</p>
                            <p className='font1-1'>SOUTH KOREA</p>
                        </div>

                    </div>

                    <div style={{height: '1500px'}}></div>

                    <div className='section1'>
                        {/* <img className='univLogo' src={univLogo} ref={univLogoRef} /> */}
                        <video className='univLogo' src={video3} ref={univLogoRef} autoplay='autoplay' muted loop />
                        <div className='font2'>
                            <p>MAJOR IN</p>
                            <div className='font2-1'>
                                <p className='font3'>H</p>
                                <p className='font3 font3-1' ref={c1Ref}>ISTORY</p>
                                <p className='font3' ref={cRef} style={{marginLeft:'30px'}}>C</p>
                                <p className='font3 font3-1' ref={c2Ref}>ONTENTS &</p>
                            </div>
                            <div className='font2-2'>
                                <p className='font3'>C</p>
                                <p className='font3 font3-1' ref={s1Ref}>OMPUTER</p>
                                <p className='font3 S' ref={sRef} style={{marginLeft:'30px'}}>S</p>
                                <p className='font3 font3-1' ref={s2Ref}>CIENCE</p>
                            </div>
                        </div>
                    </div>

                    <div className='tr1' style={{height:`100px`}}></div>

                    


                    <div className='font3-2'>
                        <p className='font3-3' ref={v1Ref}>사람들에게 즐거움을 선사하는</p>
                        <p className='font3-4' ref={v2Ref}>개발자가 되고자 합니다</p>
                    </div>

                    


                    <div className='font4-1'>
                        <div className='font4' >
                            <p className='mbti' ref={mbtiRef}>MBTI</p>
                        </div>

                        <div className='font5-1'>
                            <p className='font6'>언제든, 어디로부터든, 어디로든. 편견없이 즐기는. 너 내 동료가 되라</p>
                            <p className='estp font5' style={{marginLeft: '50px'}} ref={estpRef}>ESTP</p>  
                        </div>
                        
                    </div>

                    <div className='font7' ref={font7Ref}>
                        {/* 어떻게 사진 크기를 반응형에 맞게 설정할 것인가 */}
                        <img className='font7-2' src={shot1} style={{ width: '1000px', height: '500px' }}></img>    
                        <img className='font7-3' src={shot2} style={{width: '1000px', left:`1500px`, height: '500px'}}></img>
                        <img className='font7-4' src={shot3} style={{width: '1000px', left:`2500px`, height: '500px'}}></img>
                        <img className='font7-5' src={shot4} style={{width: '1000px', left:`3500px`, height: '500px'}}></img>
                    </div>
                    <div className='font7-6' style={{height: '500px'}}></div>

                    <div style={{height: '1000px'}}></div>


                    <div className='end' ref={endRef}>
                        <p className='end-1'>Thanks For Reading!</p>
                        <video className='endVid' ref={endVidRef} src={video4} autoplay='autoplay' muted loop />
                        
                    </div>

                

                

                </div>

            </div>
    )
} 