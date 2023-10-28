import {Route, Routes} from "react-router-dom";
import Home from '../components/Home';

function MainRouter() {

    return (
        <Routes>
            <Route path={''} element={<Home/>}/>
        </Routes>
    )
}

export default MainRouter