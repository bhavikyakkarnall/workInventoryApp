import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Masterlist from '../components/Masterlist';
import DispatchForm from '../components/DispatchForm';
import Navigation from '../components/Navigation';

export default function AppRoute() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mastelist' element={<Masterlist />} />
                <Route path='/DispatchForm' element={<DispatchForm />} />
            </Routes>
        </Router>
    );
}
