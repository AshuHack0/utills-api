import React from 'react';
import styles from '../assets/Welcome.module.css'; // Importing existing CSS module
import InfiniteScroll from './scroll';



const HiringWithUs = () => {
  
  return (
    <div className={`container `}>
      <div className="row" style={{ display: 'flex', justifyContent: 'center' , marginTop:'4rem' }} data-aos="fade-up">
        <h1 className={`text-align-center ${styles.heading} mt-4`} style={{textAlign:'center'}}>Companies Hiring with us :</h1>
        <InfiniteScroll/>
        {/* <div className={`col-md-10 d-flex  ${styles.animatedBoxMain}`} style={{overflow:'hidden' , padding:'2rem'}}>
          <span className={` ${styles.box} ${styles.animatedBox}`}>
            <img src='https://www.jobhai.com/static/companies/swiggy.png' width={91} height={28}/>
          </span>
          <span className={` ${styles.box} ${styles.animatedBox}`}>
            <img src='https://www.jobhai.com/static/companies/blue-dart.png' width={91} height={28}/>
          </span>
          <span className={` ${styles.box} ${styles.animatedBox}`}>
            <img src='https://www.jobhai.com/static/companies/zomato.png' width={91} height={28}/>
          </span>
          <span className={` ${styles.box} ${styles.animatedBox}`}>
            <img src='https://www.jobhai.com/static/companies/swiggy.png' width={91} height={28}/>
          </span>
          <span className={` ${styles.box} ${styles.animatedBox}`}>
            <img src='https://www.jobhai.com/static/companies/bajaj-finserv.png' width={91} height={28}/>
          </span>
          <span className={` ${styles.box} ${styles.animatedBox}`}>
            <img src='https://www.jobhai.com/static/companies/big-basket.png' width={91} height={28}/>
          </span>
          <span className={` ${styles.box} ${styles.animatedBox}`}>
            <img src='https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg' width={91} height={28}/>
          </span>
          <span className={` ${styles.box} ${styles.animatedBox}`}>
            <img src=' https://www.amcham.gr/wp-content/uploads/2015/03/accenture.jpg' width={91} height={28}/>
          </span>
          
          
        </div> */}
      </div>
    </div>
  );
};

export default HiringWithUs;
