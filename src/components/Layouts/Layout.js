import React from 'react'
import css from './Layout.module.css'
import moment from 'moment/moment'
import {BiSearch} from 'react-icons/bi'
const Layout = () => {
  return (
    <div className={css.container}>
        <div>Sidebar</div>
        <div className={css.dashboard}>
            <div className={css.topBaseGradient}>
                <div className="gradient-red">

                </div>
                <div className="gradient-orange">

                </div>
                <div className="gradient-blue">

                </div>
            </div>
            <div className={css.header}>
                <span>{moment().format("dddd, do MMM YYYY")}</span>
                <div className={css.searcBbar}>
                    <BiSearch size={20}/>
                    <input type="text" placeholder='Enter hear'/>
                </div>

                <div className={css.profile}>
                    <img src="./profile" alt="" />
                    <div className={css.details}>
                        <span>Sai Venkat</span>
                        <span>saivenkatsalpala@gmail.com</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Layout
