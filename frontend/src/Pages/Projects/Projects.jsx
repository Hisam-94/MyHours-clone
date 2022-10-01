import React from 'react'
import style from "./Projects.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Projects = () => {
  return (
    <div className={style.mainDiv}>
        <div className={style.div1}></div>


        <div className={style.div2}>
            {/* ***************Section-1********************************* */}
            <div className={style.topSection}>
                <div>
                    <h1 className={style.head1}>Projects</h1>
                </div>
                <div>
                    <button className={style.btn}> + Add new project </button>
                </div>
            </div>

            {/* ***************Section-2********************************* */}
            <div className={style.section2}>
                <div className={style.sectionDiv2}>
                    <div className={style.topSection2}>
                        <span className={style.text2}>Organize your work with projects</span>
                        <button className={style.btn2}>
                            <AiOutlineClose />
                        </button>
                    </div>
                    <span className={style.span2}>Before you start tracking your work, create projects, assign clients, and add tasks. You can choose from advanced billing rates, set up approval workflow, add custom budgets, and set task estimates. Assign tasks to your team and monitor allocated time.</span>
                </div>
            </div>


            {/* ***************Section-3********************************* */}
            <table className={style.table}>
                <th>NAME</th>
                <th>CLIENT</th>
                <th>TOTAL HOURS</th>
                <th>BILLABLE AMOUNT</th>
                <th>CREATED</th>
                <th>STATUS</th>

                <br />
                {/* <hr className={style.hr} /> */}

                <tr></tr>
            </table>

        </div>
    </div>
  )
}

export default Projects
