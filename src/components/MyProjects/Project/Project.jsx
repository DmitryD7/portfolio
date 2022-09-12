import React from 'react';
import s from './Project.module.scss'

function Project(props) {
    return (
        <div className={s.Project}>
            <div className={s.projectLogo} style={props.style}>
                <a className={s.showBtn} href={props.projectUrl} target={'_blank'}>Show</a>
            </div>
            <div className={s.descriptionInfo}>
                <h3 className={s.projectTitle}>{props.projectTitle}</h3>
                <span className={s.projectDescription}>{props.projectDescription}</span>
            </div>
        </div>
    )
}

export default Project;