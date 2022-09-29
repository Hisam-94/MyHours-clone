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
                <iframe className={style.video} src="https://www.youtube.com/embed/VpMysclixyQ?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0" frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen="" title="My Hours Intro video"></iframe>
            </div>
        </div>
    </div>

    {/* **********************Section-3****************** */}
    <div className={style.cont3}>
        <div className={style.cont3Div}>
            <h2 className={style.heading2}>Organize your work with projects and tasks</h2>
            <div className={style.textBlock2}>Breaking down your work into projects and tasks is done with a few keystrokes. Prioritize tasks, add details and assign them to your team to complete. Set up an estimated budget on a project or task level.</div>
        </div>
        <div className={style.imageDiv}>
            <img className={style.image} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7198fa6df4249877e6d5b_HIW-1(1).png" alt="" />
        </div>
    </div>



    {/* **********************Section-3 - 2****************** */}
    <div className={style.cont3}>
        <div className={style.cont3Div}>
            <h2 className={style.heading2}>Set flexible billable rates and manage rate changes</h2>
            <div className={style.textBlock2}>Every client, project, task and team member can be billed with a custom rate, but with smart defaults. And, when rates change, you decide how it applies to your past work.</div>
        </div>
        <div className={style.imageDiv}>
            <img className={style.image} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60c3106b6d15b4476d545c47_Project%20billing.png" alt="" />
        </div>
    </div>



    {/* **********************Section-3 - 3****************** */}
    <div className={style.cont3}>
        <div className={style.cont3Div}>
            <h2 className={style.heading2}>Track your time working with all the details</h2>
            <div className={style.textBlock2}>Tracking work time is more than a few fields. Add styled notes to your logs, tag with custom keywords, attach files and enter expenses. With keyboard shortcuts, you can do it in no-time.</div>
        </div>
        <div className={style.imageDiv}>
            <img className={style.image} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61693180d0c70441fdcc29cd_Timesheet%20with%20timer-p-1080.png" alt="" />
        </div>
    </div>




    {/* **********************Section-3 - 4****************** */}
    <div className={style.cont3}>
        <div className={style.cont3Div}>
            <h2 className={style.heading2}>Dazzle your clients with custom reports</h2>
            <div className={style.textBlock2}>No more one-style-fits-all reports. Go beyond filters and set up reports the way you or your clients want them, without having to retreat back to Excel.</div>
        </div>
        <div className={style.imageDiv}>
            <img className={style.image} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71990c1a06b2e03f1be70_HIW-4(1).png" alt="" />
        </div>
    </div>




    {/* **********************Section-3 - 5****************** */}
    <div className={style.cont3}>
        <div className={style.cont3Div}>
            <h2 className={style.heading2}>Look at the time spent from every angle</h2>
            <div className={style.textBlock2}>Fancy dashboards are not enough and with My Hours you can calculate your profit, generate real-time pivot tables or download a simple weekly timesheet.</div>
        </div>
        <div className={style.imageDiv}>
            <img className={style.image} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692c9dbe4680c6916e960b_time-analytics.png" alt="" />
        </div>
    </div>



    {/* **********************Section-3 - 6****************** */}
    <div className={style.cont3}>
        <div className={style.cont3Div}>
            <h2 className={style.heading2}>Approve or comment on your team’s time logs  </h2>
            <div className={style.textBlock2}>Going through every timesheet is a hassle. Select a few projects or team members that might need a careful inspection, while other time logs do not need explicit approval.</div>
        </div>
        <div className={style.imageDiv}>
            <img className={style.image} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692ce83988430ca662abb6_Approve%20timesheets-p-1080.png" alt="" />
        </div>
    </div>


    {/* **********************Section-4****************** */}
    <div className={style.cont4}>
        <div className={style.cont4Div1}>
            <img className={style.image1} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6bd377fbe34a0cc7a0f_HIW-7-p-500.png" alt="" />
        </div>
        <div className={style.cont4Div2}>
            <h2 className={style.heading4}>Keep clients in the loop with scheduled email reports</h2>
            <div className={style.textBlock4}>Setting and downloading reports each month takes precious time. Save your report settings and have My Hours send it to you or your clients directly every period.</div>
        </div>
    </div>


     {/* **********************Section-4 - 2****************** */}
     <div className={style.cont4}>
        <div className={style.cont4Div1}>
            <img className={style.image1} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6d0c755c679d71eda9f_HIW-8-p-500.png" alt="" />
        </div>
        <div className={style.cont4Div2}>
            <h2 className={style.heading4}>Create invoices straight from your tracked hours</h2>
            <div className={style.textBlock4}>No need for an additional tool that handles the invoicing. Calculate the billable amount for each client and generate a numbered invoice that can be sent via email straight away.</div>
        </div>
    </div>

      {/* **********************Section-4 - 3****************** */}
      <div className={style.cont4}>
        <div className={style.cont4Div1}>
            <img className={style.image1} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc913df96a46f4b42ee4264_Roles-p-800.png" alt="" />
        </div>
        <div className={style.cont4Div2}>
            <h2 className={style.heading4}>Flexible, but simple access roles</h2>
            <div className={style.textBlock4}>With a simple 3-role system, you’ll always know who sees what. You can hide costs and billable amounts from anyone, except account administrators.</div>
        </div>
    </div>


      {/* **********************Section-4 - 4****************** */}
      <div className={style.cont4}>
        <div className={style.cont4Div1}>
            <img className={style.image1} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png" alt="" />
        </div>
        <div className={style.cont4Div2}>
            <h2 className={style.heading4}>Count your chickens and calculate your costs</h2>
            <div className={style.textBlock4}>On top of billable rates, teams can add labor costs and expenses. Monitor your project costs with a (monthly) budget and calculate your profits or losses.</div>
        </div>
    </div>


      {/* **********************Section-5****************** */}

    <div className={style.cont4}>
        <div className={style.cont4Div1}>
            <h2 className={style.heading4}>Sync your data with more than a 1000 tools</h2>
            <div className={style.textBlock4}>Transfer clients, projects and tasks from Quickbooks and other solutions via Zapier. Documented API enables tech-savvy folks to build their own integrations.</div>
            <br /> <br />
            <img className={style.image1} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9145d6e47e935f0570ff3_Integrations-p-500.png" alt="" />
        </div>
        <div className={style.cont4Div2}>
            <h2 className={style.heading4}>Track time on the go with a mobile app</h2>
            <div className={style.textBlock4}>Besides tracking time, add new projects, manage tasks and view reports - all through our mobile apps. Both iOS and Android are supported.</div>
            <br /> <br />
            <img className={style.image1} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd73713f912e4498947d1a3_HIW-mobile%20(1)(1)-p-500.png" alt="" />
        </div>
    </div>


    </div>
  )
}

export default Work
