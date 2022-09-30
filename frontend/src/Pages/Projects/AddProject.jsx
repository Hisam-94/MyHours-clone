import React from "react";
import style from "./AddProject.module.css";

export const AddProject = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.div1}></div>

      <div className={style.div2}>
        <div className={style.topSection2}>
          <div className={style.tophead1}>
            <h1 className={style.head1}>Add Project</h1>
          </div>
          <br />

          <form className={style.form}>
            {/* ***************div************** */}
            <div className={style.formRow1}>
              <div className={style.formRow2}>
                <label className={style.label}>Name</label>
                <input type="text" className={style.input} placeholder='Enter name of the project...' />
              </div>
            </div>

            {/* ***************div************** */}
            <div className={style.formRow1}>
              <div className={style.formRow2}>
                <label className={style.label}>Client</label>
                <input type="text" className={style.input} placeholder='' />
              </div>
            </div>


            {/* ***************div************** */}
            <div className={style.formRow1}>
              <div className={style.formRow2}>
                <label className={style.label}>Description</label>
                <textarea rows="4" cols="50" className={style.input} placeholder='' />
              </div>
            </div>


            {/* ***************div************** */}
            <div className={`${style.formRow1} ${style.row1}`}>

                <div className={style.formRow2}>
                  <button className={style.btn}> Create project </button>
                  <span className={style.span}>Next: add project members & rates</span>
               </div>
               
               <div>
                  <button className={style.btn2}> Cancel </button>
               </div>

            </div>




          </form>
        </div>
      </div>
    </div>
  );
};
