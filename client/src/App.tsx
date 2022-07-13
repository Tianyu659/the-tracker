/**
 * Project: The Tracker
 * Description: The default starting point for React page.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAppSelector } from './app/hooks';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Auth, UserOverview, ProjectOverview, ProjectTasks, ProjectMembers } from './pages';
import './App.css';

/**
 * This component is responsible for the routing of the applicatoin.
 */
function App() {
    const { activeMenu } = useAppSelector((state) => state.theme);

    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    {/* User */}
                    <Route path="/" element={<Auth />} />
                    <Route path="/user/user" element={<UserOverview />} />

                    {/* Project */ }
                    <Route path="/project/overview" element={<ProjectOverview />} /> 
                    <Route path="/project/tasks" element={<ProjectTasks />} /> 
                    <Route path="/project/members" element={<ProjectMembers />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;