import React from 'react';
import { withRouter } from 'react-router-dom';

import { ReactComponent as CoursesSvg } from './assets/noun_Folder_3415647.svg';
import { ReactComponent as ScheduleSvg } from './assets/noun_schedule_605246.svg';
import { ReactComponent as QuestionSvg } from './assets/noun_Question_1101884.svg';
import { ReactComponent as MaterialSvg } from './assets/noun_Assignment_1906701.svg';
import { ReactComponent as ChatSvg } from './assets/noun_chat_2310760.svg';
import { ReactComponent as ActivitySvg } from './assets/noun_activity_1908062.svg';
import { ReactComponent as AchievementSvg } from './assets/noun_achievement_195251.svg';
import { ReactComponent as ReportSvg } from './assets/noun_Assignment_1906701.svg';
import { ReactComponent as PaymentSvg } from './assets/noun_payment_1806700.svg';
import { ReactComponent as SettingsSvg } from './assets/noun_Settings_3126968.svg';


function Navbar(props) {
    return (
        <div className="sidenav">
            <div className="courses-div sidenav-divs">
                <CoursesSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Courses </span>
            </div>
            <div className="sidenav-divs">
                <ScheduleSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Schedule </span>
            </div>
            <div className="sidenav-divs">
                <QuestionSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Ask a Question </span>
            </div>
            <div className="sidenav-divs">
                <MaterialSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Materials </span>
            </div>
            <div className="sidenav-divs">
                <ChatSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Chat </span>
            </div>
            <div className="sidenav-divs">
                <ActivitySvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Activity Zone </span>
            </div>
            <div className="sidenav-divs">
                <AchievementSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Achievements </span>
            </div>
            <div className="sidenav-divs">
                <ReportSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Reports </span>
            </div>
            <div className="sidenav-divs">
                <PaymentSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/payment')}> Payments </span>
            </div>
            <div className="sidenav-divs">
                <SettingsSvg className="sidenav-svg-icons" />
                <span className="sidenav-span" onClick={() => props.history.push('/')}> Settings </span>
            </div>
        </div>
    )
}

export default withRouter(Navbar);