import React from 'react';
import s from './Resume.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from "../common/BlockHeader/BlockHeader";
import Fade from "react-reveal/Fade";

function Resume(props) {
    return (
        <div className={s.MainBlock} id={'resume'}>
            <Fade bottom cascade>
                <div className={cs.Container}>
                    <div className={s.mainContent}>
                        <BlockHeader blockHeader={'Here you can download my resume'}/>
                        <a href="https://drive.google.com/file/d/1C_z25fDFPr7m-KcIc_ekwdRnJaLVWeWA/view?usp=sharing" className={s.customBtn} spy={true}
                              smooth={true} offset={-50} duration={500} target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Resume;