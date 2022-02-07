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
                    <CoursesP>Learn basic computer skills such as word processing software, spreadsheet software, Email management, Data entry etc</CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon2} />
                    <CoursesH2>Web apps development</CoursesH2>
                    <CoursesP>You will learn HTML, CSS and programming language such as Javascript, Nodejs etc and Javascript Libraries such as React</CoursesP>
                </CoursesCard>
                <CoursesCard>
                    <CoursesIcon src={Icon3} />
                    <CoursesH2>Data science</CoursesH2>
                    <CoursesP>In our Data science class you will get to learn Spreadsheets in detail, SQL, Python programming language</CoursesP>
                </CoursesCard>
            </CoursesWrapper>
        </CoursesContainer>

    )
};

export default Courses;
