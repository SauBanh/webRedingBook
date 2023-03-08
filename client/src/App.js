import React from 'react';
import { publicRoutes, privateRoutes } from './routes';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

import { DefaultLayout } from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout || DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
