import React from "react";
import Navbar1 from "./Navbar1/Navbar1";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Class1 from "./Pages/Class-1/Class1";
import Class2 from "./Pages/Class-2/Class2";
import Class3 from "./Pages/Class-3/Class3";
const Training = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar1 />
                <Routes>
                    <Route path="/class-1" element={<Class1 />} />
                    <Route path="/class-2" element={<Class2 />} />
                    <Route path="/class-3" element={<Class3 />} />

                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Training;
