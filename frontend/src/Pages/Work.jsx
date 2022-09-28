import React from 'react';
import style from "./Work.module.css";

const Work = () => {
  return (
    <div>
      <div className={style.topDiv}>
          <h1>How it works</h1>
          <h2>& why you should switch to My Hours</h2>
          <div>Time tracking was a pain. We fixed it and made time tracking worth the effort. My Hours is easy to use and gets the most out of your data with powerful reporting. Teams that use My Hours are more productive, efficient and organized.</div>
          <button className={style.btn}> <strong className={style.text}>Get Started - It's Free</strong> </button>
      </div>
    </div>
  )
}

export default Work
