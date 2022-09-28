import React from 'react';
import style from "./Work.module.css";

const Work = () => {
  return (
    <div>
      <div className={style.topDiv}>
          <h1 className={style.heading45}>How it works</h1>
          <h2 className={style.heading47}>& why you should switch to My Hours</h2>
          <div className={style.textBlock}>Time tracking was a pain. We fixed it and made time tracking worth the effort. My Hours is easy to use and gets the most out of your data with powerful reporting. Teams that use My Hours are more productive, efficient and organized.</div>
          <button className={style.btn}> <strong className={style.text}>Get Started - It's Free</strong> </button>
      </div>

      {/* ****************Video**************** */}
    <div>
        <div className={style.cont2}>
            <div className={style.cont2Div}>
                <iframe src="https://www.youtube.com/embed/VpMysclixyQ?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameborder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto" allow="autoplay; encrypted-media" allowfullscreen="" title="My Hours Intro video"></iframe>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Work
