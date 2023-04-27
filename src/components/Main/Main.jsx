import React from "react";
import './Main.css';
import Specials from "./Specials/Specials";
import Testimonials from './Testimonials/Testimonials';
import About from  './About/About';
import Header from "../Header/Header";
export default function Main() {
    return (
    <>
    <Header />
    <main>
        <Specials />
        <Testimonials />
        <About />
    </main>
    </>
    );
}