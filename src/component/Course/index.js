import React from 'react';

import Icon1 from '../../images/programmer.svg'
import Icon2 from '../../images/web_dev.svg'
import Icon3 from '../../images/data_process.svg'


import {
    CoursesContainer,
    CoursesH1,
    CoursesWrapper,
    CoursesCard,
    CoursesIcon,
    CoursesH2,
    CoursesP,

} from './courseElements'

const Courses = () => {
    return (
        <CoursesContainer id='course'>
            <CoursesH1>Our Courses</CoursesH1>
            <CoursesWrapper>
                <CoursesCard>
                    <CoursesIcon src={Icon1} />
                    <CoursesH2>Basic Computer Skills</CoursesH2>
                    <CoursesP>We help to under how your computer and how to navigate around your computer</CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon2} />
                    <CoursesH2>Web apps development</CoursesH2>
                    <CoursesP>We help to under how your computer and how to navigate around your computer</CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon3} />
                    <CoursesH2>Data science</CoursesH2>
                    <CoursesP>We help to under how your computer and how to navigate around your computer</CoursesP>
                </CoursesCard>
            </CoursesWrapper>
        </CoursesContainer>

    )
};

export default Courses;
