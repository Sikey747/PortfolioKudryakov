"use client";

import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useMeasure } from "react-use";

interface InnerProps {
    children: React.ReactNode;
}

function Inner({ children }: InnerProps) {
    const [ref, { height }] = useMeasure();

    return (
        <>
            <Header inerrRef={ref} />
            <main style={{ marginTop: height + 20 }} className="page">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Inner;
