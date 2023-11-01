import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
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
import PC from './pc.js';
import Mobile from './mobile.js';

export default function Main() {

    const isPc = useMediaQuery({
        query: "(min-width: 767px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)"
    });

    return (
        <div>
            {isPc && <PC />}
            {isMobile && <Mobile />}
        </div>
    )
}