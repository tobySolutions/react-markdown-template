import React, { useState, useEffect } from "react";
import { ThemeProvider } from "../utils/themeContext";
import Nav_bar from "../utils/nav_bar";
import MarkdownRender from "../utils/markdownRender";
import Footer from "../utils/footer";

const MarkdownPage = (renderProps) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <ThemeProvider>
                    <div className="mb-6">
                        <Nav_bar></Nav_bar>
                        <div className=" flex flex-col max-w-[120ch] px-8 md:px-20 mx-auto mt-6">
                            <MarkdownRender mdstr={renderProps.mdstr}></MarkdownRender>
                        </div>
                    </div>
                    <Footer></Footer>
                </ThemeProvider>
            </div>
        </>
    );
};

export default MarkdownPage;
