// 
import React, { useEffect, useRef } from 'react';
import styles from '../assets/scroll.module.css';

const InfiniteScroll = () => {
  const photoWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const photos = photoWrapperRef.current.querySelectorAll('.photo');
      photos.forEach(checkPosition);
    };

    const checkPosition = (photo) => {
      if (photo.getBoundingClientRect().right - 4 <= 0) {
        photo.remove();
        photoWrapperRef.current.appendChild(photo);
        photoWrapperRef.current.scrollLeft = 0;
      }
    };

 

// const infiniteScroll = () => {
//     const wrapper = photoWrapperRef.current;
//     if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.offsetWidth) {
//       wrapper.scrollLeft = 0;
//     } else {
//       wrapper.scrollLeft += 0.5; // Adjust the value to control the scrolling speed
//     }
//     requestAnimationFrame(infiniteScroll);
//   };
const infiniteScroll = () => {
  const wrapper = photoWrapperRef.current;
  if (wrapper) {
    if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.offsetWidth) {
      wrapper.scrollLeft = 0;
    } else {
      wrapper.scrollLeft += 0.5; // Adjust the value to control the scrolling speed
    }
    requestAnimationFrame(infiniteScroll);
  }
};


    window.addEventListener('scroll', handleScroll);
    infiniteScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className={`photoWrapper ${styles.photoWrapper}`} ref={photoWrapperRef}>
    <div className={`photo  ${styles.photo}`}>
      <img src="https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys" alt="Cat" />
    </div>

    <div className={`photo  ${styles.photo}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png" alt="Cat" />
    </div>
    <div className={`photo  ${styles.photo}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" alt="Cat" />
    </div>
    
    <div className={`photo  ${styles.photo}`}>
      <img src="https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png" alt="Cat" />
    </div>
    
    <div className={`photo  ${styles.photo}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" alt="Cat" />
    </div>  
    
    <div className={`photo  ${styles.photo}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/2560px-Genpact_logo.svg.png" alt="Cat" />
    </div>  

    <div className={`photo  ${styles.photo}`}>
      <img src="https://mma.prnewswire.com/media/633365/4364085/Infosys_Logo.jpg?p=facebook" alt="Cat" />
    </div>  

    <div className={`photo  ${styles.photo}`}>
      <img src="https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo-2019.png" alt="Cat" />
    </div>  

    <div className={`photo  ${styles.photo}`}>
      <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="Cat" />
    </div>

    <div className={`photo  ${styles.photo}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png" alt="Cat" />
    </div>
    <div className={`photo  ${styles.photo}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" alt="Cat" />
    </div>
    
      {/* Add more photos here */}
  </div>
  );
};

export default InfiniteScroll;
