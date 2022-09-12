import React from 'react';
import s from './MyProjects.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import BlockHeader from '../common/BlockHeader/BlockHeader';
import Project from './Project/Project';
import todoLogo from '../../assets/images/projects/to-do-list-app.png'
import githubLogo from '../../assets/images/projects/githup.png'
import socialNetworkLogo from '../../assets/images/projects/socialNetwork.png'
import onlineTheatreLogo from '../../assets/images/projects/online-theatre.png'
import Fade from "react-reveal/Fade";

function MyProjects() {
    const socialNetworkBG = {
        backgroundImage: `url(${socialNetworkLogo})`
    }
    const todolistBG = {
        backgroundImage: `url(${todoLogo})`
    }
    const githubFinderBG = {
        backgroundImage: `url(${githubLogo})`
    }
    const onlineTheatreBG = {
        backgroundImage: `url(${onlineTheatreLogo})`
    }

    const todoDescription = 'TodoList is smart task list for everyday use. No matter who you are and what you do - you will be better organized! Features: authorization (login, logout), creating, deleting todolists and tasks for it, updating titles of todolists and tasks (by double clicking on the title). Task status might be changed, there is filtration on tasks statuses.\n ' + 'STACK: ReactJs, Redux, TS, REST (axios), TDD, Jest, Css, MaterialUI, Formic'

    const socialNetworkDescription = 'A big project with aim to improve my skills. Features: Authorization (login, logout), uploading new user’s avatar. possibility of changing user information (by pen button) and status (by double clicking on the status). Also you can see all users in this social network (users tabpage in the menu), by clicking on any user you will see his profile and ability to add him into your friends list (follow) and deleting from friends list (unfollow)\n' + 'STACK: ReactJS, Redux, ReduxForm, TS, Css, Jest, TDD, REST (axios)'

    const gitHubFinderDescription = 'A small application with such features as: search a github user and watch his repositories, add and remove repos from favourites. All favourites repos save to local storage.\n' +
        'STACK: ReactJs, Redux Toolkit, RTKQuery, TypeScript, react-router-dom, Tailwind, Firebase\n'

    const onlineTheatreDescription = 'Online database of information related to films, TV shows including cast, production team, biographies, plot summaries, ratings, and reviews. Based on the "developers.themoviedb.org" API. Features: After refreshing the page you can see different movies on header poster, also you can watch trailers of movies by clicking on movies icons or click play on header. Movies are refreshed by API. \n' +
    'STACK: ReactJs, Redux Toolkit, TypeScript, Firebase, REST (axios), MaterialUI, SASS, React-youtube, movie-trailer\n' + 'P.s. The app is in development\n'

    return (
        <div className={s.MyProjectsBlock} id={'myProjects'}>
            <Fade bottom cascade>
                <div className={cs.Container}>
                    <div className={s.MyProjectsBlockContent}>
                        <BlockHeader blockHeader={'My projects'}/>
                        <div className={s.Projects}>
                            <Project style={onlineTheatreBG} projectTitle={'Online Theatre'}
                                     projectDescription={onlineTheatreDescription}
                                     projectUrl={'https://online-theatre.web.app/'}
                            />
                            <Project style={todolistBG} projectTitle={'TodoList'}
                                     projectDescription={todoDescription}
                                     projectUrl={'https://dmitryd7.github.io/todolist-ts/#/'}
                            />
                            <Project style={socialNetworkBG} projectTitle={'Social Network'}
                                     projectDescription={socialNetworkDescription}
                                     projectUrl={'https://dmitryd7.github.io/Social_Network'}
                            />
                            <Project style={githubFinderBG} projectTitle={'Github Finder'}
                                     projectDescription={gitHubFinderDescription}
                                     projectUrl={'https://github-finder-8ea8b.web.app/'}
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default MyProjects;