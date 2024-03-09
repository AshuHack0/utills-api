import React from 'react';
import styles from '../assets/RecentScroll.module.css';

const RecentScroll = () => {
  return (
    <section className={`${styles.SectionRecommendation} block content-3`}>
      <div className="block gap-2 content-full">
        <h2>Suggested for you</h2>
        <div className="inline">
          <ul id="scroller" className={`${styles.UserList} ${styles.Scroller} inline gap-1`}>
            <li>
              <a href="#" className={`${styles.Card} block-center-center gap-1`}>
                <button className={`${styles.RemoveBtn}`}>
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="closeIcon" d="M8.00003 8.93334L4.73337 12.2C4.61114 12.3222 4.45559 12.3833 4.2667 12.3833C4.07781 12.3833 3.92225 12.3222 3.80003 12.2C3.67781 12.0778 3.6167 11.9222 3.6167 11.7333C3.6167 11.5444 3.67781 11.3889 3.80003 11.2667L7.0667 8L3.80003 4.73334C3.67781 4.61111 3.6167 4.45556 3.6167 4.26667C3.6167 4.07778 3.67781 3.92222 3.80003 3.8C3.92225 3.67778 4.07781 3.61667 4.2667 3.61667C4.45559 3.61667 4.61114 3.67778 4.73337 3.8L8.00003 7.06667L11.2667 3.8C11.3889 3.67778 11.5445 3.61667 11.7334 3.61667C11.9223 3.61667 12.0778 3.67778 12.2 3.8C12.3223 3.92222 12.3834 4.07778 12.3834 4.26667C12.3834 4.45556 12.3223 4.61111 12.2 4.73334L8.93337 8L12.2 11.2667C12.3223 11.3889 12.3834 11.5444 12.3834 11.7333C12.3834 11.9222 12.3223 12.0778 12.2 12.2C12.0778 12.3222 11.9223 12.3833 11.7334 12.3833C11.5445 12.3833 11.3889 12.3222 11.2667 12.2L8.00003 8.93334Z" fill="#777777" />
                  </svg>
                </button>
                <figure className="block-center-center gap-1">
                  <picture>
                    <source srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/recommendation-carousel/images/img-1.avif" type="image/avif" />
                    <img src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/recommendation-carousel/images/img-1.webp" alt="" width={80} height={80} />
                  </picture>
                  <figcaption className="block-center-center gap-1">
                    <div className={styles.Name}>Max Tailor</div>
                    <div className={`${styles.Username}`}>max_the_pawesome</div>
                  </figcaption>
                </figure>
                <button className={`${styles.FollowButton}`}>Follow</button>
              </a>
            </li>

            <li>
              <a href="#" className={`${styles.Card} block-center-center gap-1`}>
                <button className={`${styles.RemoveBtn}`}>
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="closeIcon" d="M8.00003 8.93334L4.73337 12.2C4.61114 12.3222 4.45559 12.3833 4.2667 12.3833C4.07781 12.3833 3.92225 12.3222 3.80003 12.2C3.67781 12.0778 3.6167 11.9222 3.6167 11.7333C3.6167 11.5444 3.67781 11.3889 3.80003 11.2667L7.0667 8L3.80003 4.73334C3.67781 4.61111 3.6167 4.45556 3.6167 4.26667C3.6167 4.07778 3.67781 3.92222 3.80003 3.8C3.92225 3.67778 4.07781 3.61667 4.2667 3.61667C4.45559 3.61667 4.61114 3.67778 4.73337 3.8L8.00003 7.06667L11.2667 3.8C11.3889 3.67778 11.5445 3.61667 11.7334 3.61667C11.9223 3.61667 12.0778 3.67778 12.2 3.8C12.3223 3.92222 12.3834 4.07778 12.3834 4.26667C12.3834 4.45556 12.3223 4.61111 12.2 4.73334L8.93337 8L12.2 11.2667C12.3223 11.3889 12.3834 11.5444 12.3834 11.7333C12.3834 11.9222 12.3223 12.0778 12.2 12.2C12.0778 12.3222 11.9223 12.3833 11.7334 12.3833C11.5445 12.3833 11.3889 12.3222 11.2667 12.2L8.00003 8.93334Z" fill="#777777" />
                  </svg>
                </button>
                <figure className="block-center-center gap-1">
                  <picture>
                    <source srcSet="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/recommendation-carousel/images/img-1.avif" type="image/avif" />
                    <img src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/recommendation-carousel/images/img-1.webp" alt="" width={80} height={80} />
                  </picture>
                  <figcaption className="block-center-center gap-1">
                    <div className={styles.Name}>Max Tailor</div>
                    <div className={`${styles.Username}`}>max_the_pawesome</div>
                  </figcaption>
                </figure>
                <button className={`${styles.FollowButton}`}>Follow</button>
              </a>
            </li>
          </ul>
          <div className={`${styles.Controls} block-center-center`}>
            <div className="inline content-3 space-between content-full">
              <button id="PrevBtn" className="ControlsBtn previous" aria-label="Previous item" title="Previous item" onClick={() => {}}>
                <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button id="NextBtn" className={`${styles.ControlsBtn} next`} aria-label="Next item" title="Next item" onClick={() => {}}>
                <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentScroll;
