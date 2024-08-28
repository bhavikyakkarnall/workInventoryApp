import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Masterlist from '../components/Masterlist';
import DispatchForm from '../components/DispatchForm';
import Navigation from '../components/Navigation';
import StockOrder from '../components/StockOrder';
import Returns from '../components/Returns';

export default function AppRoute() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mastelist' element={<Masterlist />} />
                <Route path='/DispatchForm' element={<DispatchForm />} />
                <Route path='/StockOrder' element={<StockOrder/>}/>
                <Route path='/Returns' element={<Returns/>}/>
            </Routes>
        </Router>
    );
}
