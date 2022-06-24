import React, {useEffect} from "react";
import "./App.css";

import Navigation from "./components/Navigation";

import {useDispatch, useSelector} from "react-redux";
import {selectAppLoading} from "./store/appState/selectors";
import {getUserWithStoredToken} from "./store/user/actions";
import HeroBanner from "./components/HeroBanner";
import {bootstrapLoginState} from "./store/appState/actions";
import {Route, Routes} from "react-router-dom";
import MessageBox from "./components/MessageBox";
import Loading from "./components/Loading";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Space from "./pages/Space/Space";
import HomePage from "./pages/HomePage/HomePage";
import MySpace from "./pages/MySpace/MySpace";


const Other = () => (
    <HeroBanner>
        <h1>Other</h1>
    </HeroBanner>
);

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectAppLoading);


    // useEffect(() => {
    //     dispatch(getUserWithStoredToken());
    //     dispatch(bootstrapLoginState)
    // }, [dispatch]);


    return (
        <div className="App">
            <Navigation/>
            <MessageBox/>
            {isLoading ? <Loading/> : null}
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/space/:id" element={<Space/>}/>
                <Route exact path="/space/me" element={<MySpace/>}/>
                <Route path="/other" element={<Other/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
