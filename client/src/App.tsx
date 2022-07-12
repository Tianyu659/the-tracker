import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { useStateContext } from './contexts/ContextProvider';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { UserOverview, ProjectOverview, ProjectTasks, ProjectMembers } from './pages';
import './App.css';



function App() {
    const { activeMenu } = useStateContext();

    return (
        <div className="">
            <BrowserRouter>
                <div className="flex relative dark:bj-main-dark-bg">
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white" >
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                        <div>
                            <Routes>
                                {/* {User} */}
                                <Route path="/" element={<UserOverview />} />
                                <Route path="/User/user" element={<UserOverview />} />

                                {/* Project */}
                                <Route path="/Project/overview" element={<ProjectOverview />} /> 
                                <Route path="/Project/tasks" element={<ProjectTasks />} /> 
                                <Route path="/Project/members" element={<ProjectMembers />} /> 
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;