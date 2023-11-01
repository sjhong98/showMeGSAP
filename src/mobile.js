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
import video1_shot from './assets/images/video1.png';
import video2_shot from './assets/images/video2.png';
import video3_shot from './assets/images/video3.png';
import './mobile.css';

export default function Mobile() {

    const font1Ref = useRef();
    const videoRef = useRef();
    const video2Ref = useRef();
    const c1Ref = useRef();
    const c2Ref = useRef();
    const s1Ref = useRef();
    const s2Ref = useRef();
    const v1Ref = useRef();
    const v2Ref = useRef();
    const mbtiRef = useRef();
    const estpRef = useRef();
    const font7Ref = useRef();
    const endVidRef = useRef();
    const endRef = useRef();

    useEffect(() => {       // font1 first move
        setTimeout(() => {
        gsap.from('.font1-2_m', {
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
        trigger: '.section1_m',
        start: 'top top',  // scroll start/end가 어디 있느냐에 따라 '시작점의 진행상황'이 달라짐
        end: 'bottom top',  // ex) 20%에서 시작하면 20%는 진행된 상태로 시작 -> 매우 애매
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(font1Ref.current, {
                opacity: 1-self.progress,
                scale: self.progress * 30, 
                transformOrigin: 'left 80%',
                overwrite: true,
                pin: true,
                color: `rgb(${187 + (self.progress * (255 - 187))}, ${187 + (self.progress * (255 - 187))}, ${187 + (self.progress * (255 - 187))})`, // why?
            });
            },
        });
    
        ScrollTrigger.update();
    }, []); 

    useEffect(() => {       // video move
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.to(videoRef.current, {
            scrollTrigger: {
                markers: false,
                trigger: '.section1_m',
                start: 'top top', 
                end: 'bottom top', 
                onUpdate: (self) => {
                    gsap.to(videoRef.current, {
                        opacity: 1-self.progress,
                    })
                },
                pin: true,
                pinSpacing: false, 
          }
        });
    
        ScrollTrigger.update();
    }, []); 

    useEffect(() => {       // "c1 move"
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.tr1',
        start: 'top 95%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 750px',     // when the "X" of the endTrigger hits "Y" of the scroller
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
        trigger: '.tr1',
        start: 'top 95%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 750px',     // when the "X" of the endTrigger hits "Y" of the scroller
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
        trigger: '.tr1',
        start: 'top 95%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 750px',     // when the "X" of the endTrigger hits "Y" of the scroller
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
        markers: false,
        trigger: '.tr1',
        start: 'top 95%',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom 750px',     // when the "X" of the endTrigger hits "Y" of the scroller
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
        trigger: '.section2_m',
        start: 'top bottom',  // when the "X" of the startTrigger hits "Y" of the scroller
        end: 'bottom top',     // when the "X" of the endTrigger hits "Y" of the scroller
        scrub: 3,
        onUpdate: (self) => {
            gsap.to(video2Ref.current, {
                y: (self.progress * -300),
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
        trigger: '.section3_m',
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
        trigger: '.section3_m',
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
                trigger: '.section5_m',
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
                trigger: '.section5_m',
                start: 'top 25%', 
                end: 'bottom 25%',  
                scrub: 3,
                pinSpacing: false, 
                onUpdate: ({ progress }) => {
                    gsap.set(font7_2, { 
                        x: -font7_2.offsetWidth * 3 * progress 
                    });
                  }
          }
        });
      }, []);


    useEffect(() => {       // end move
        gsap.registerPlugin(ScrollTrigger);
      
        ScrollTrigger.create({
        markers: false,
        trigger: '.section6_m',
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
        trigger: '.section6_m',
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


    const screenHeight = window.innerHeight;

    return (
        <div className='root_m'>

            <div>
                <p className='upperBar_m'>PORTFOLIO</p>
            </div>


            <div className='section1_m'>
                <img className='video1_m' src={video1_shot} ref={videoRef} />
                <div className='font1_m' ref={font1Ref}>
                    <p className='font1-2_m'>FRONT-END</p>
                    <p className='font1-2_m'>DEVELOPER</p>
                    <p className='font1-2_m'>BASED IN SEOUL,</p>
                    <p className='font1-2_m'>SOUTH KOREA</p>
                </div>
            </div>

            <div style={{height:'2000px'}}></div>

            <div className='section2_m'>
                    <img className='video2_m' src={video2_shot} ref={video2Ref} />
                        <div className='font2_m'>
                                <p>MAJOR IN</p>
                                <div className='font2-2_m'>
                                    <p className='font2-3_m'>H</p>
                                    <p className='font2-3_m font2-4_m' ref={c1Ref}>ISTORY</p>
                                    <p className='font2-3_m' style={{marginLeft:'15px'}}>C</p>
                                    <p className='font2-3_m font2-4_m' ref={c2Ref}>ONTENTS &</p>
                                </div>
                                <div className='font2-2_m'>
                                    <p className='font2-3_m'>C</p>
                                    <p className='font2-3_m font2-4_m' ref={s1Ref}>OMPUTER</p>
                                    <p className='font2-3_m' style={{marginLeft:'15px'}}>S</p>
                                    <p className='font2-3_m font2-4_m' ref={s2Ref}>CIENCE</p>
                                </div>
                        </div>
                </div>
                <div className='tr1' style={{height:`100px`}}></div>


                <div style={{height: '500px'}}></div>


                <div className='section3_m'>
                        <p className='font3-1_m' ref={v1Ref}>사람들에게 즐거움을 선사하는</p>
                        <p className='font3-2_m' ref={v2Ref}>개발자가 되고자 합니다</p>
                </div>
                
                <div style={{height: '500px'}}></div>

                <div className='section4_m'>
                        <div className='font4_m' >
                            <p className='font4-1_m' ref={mbtiRef}>MBTI</p>
                        </div>

                        <div className='font4-2_m'>
                            <p className='font4-3_m'>언제든, 어디로부터든, 어디로든. 편견없이 즐기는. 너 내 동료가 되라</p>
                            <p className='font4-4_m'>ESTP</p>  
                        </div>
                </div>

                <div className='section5_m' ref={font7Ref}>
                        {/* 어떻게 사진 크기를 반응형에 맞게 설정할 것인가 */}
                        <img className='font5-1_m' src={shot1} style={{ height: '30vh' }}></img>    
                        <img className='font5-2_m' src={shot2} style={{ height: '30vh', marginLeft: '10vh'}}></img>
                        <img className='font5-3_m' src={shot3} style={{ height: '30vh'}}></img>
                        <img className='font5-4_m' src={shot4} style={{ height: '30vh'}}></img>
                    </div>
                    <div className='font7-6' style={{height: '500px'}}></div>

                <div style={{height: '1000px'}}></div>

                <div className='section6_m' ref={endRef}>
                    <p className='font6-1_m'>Thanks For Reading!</p>
                    <img className='endVid_m' ref={endVidRef} src={video3_shot} />  
                </div>

        </div>
    )
}