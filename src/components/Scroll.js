import React, { useEffect, useState } from "react";


const Scroll = (props) => {
    let { height, width } = useWindowDimensions();
    height = height - 200;
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: height}}>
            {props.children}
        </div>
    );
};

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export default Scroll;