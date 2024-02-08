import {Route, Routes} from "react-router-dom";
import { Suspense } from "react";
import Home from '../components/Home';
import { useLoading } from '../context/LoadingContext';
import ComponentLoader from "../common/Loader/ComponentLoader";
import DefaultLayout from "../layout/DefaultLayout";
import routes from "./routes";
import Loader from "../common/Loader/ComponentLoader";

function    MainRouter() {
    return (
        <div>
        
        <Routes>
            {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<DefaultLayout />}>
                <Route
                    index={path === '/'}
                    element={
                    <Suspense fallback={<Loader is_uploading={false} />}>
                        <Component />
                    </Suspense>
                    }
                />
                </Route>
            ))}
        </Routes>
        </div>      
    )
}

export default MainRouter