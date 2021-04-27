import React from "react";
import "materialize-css/dist/css/materialize.css";

const Covid = () => {
    return (
        <>
            <img src="images/coronavirus.jpg" alt="" className="w-full" />

            <div className="container mx-auto grid-rows-3 grid-columns-1 gap-10">
                <div className="flex flex-row">
                    <img
                        src="images/covid-img-1.jpg"
                        alt=""
                        className="w-1/2"
                    />
                    <div className="w-1/2">
                        <h1 className="text-2xl">Slow The Spread</h1>
                        <p className="">
                            Face coverings, often called masks, can help stop
                            your germs from infecting others. Research has shown
                            that wearing masks reduces the risk of infection,
                            especially when combined with other prevention
                            efforts such as washing your hands often and staying
                            6 feet away from others.<br></br>
                            <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">
                                CDC's Guide To Mask
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex flex-row">
                    <img
                        src="images/covid-img-1.jpg"
                        alt=""
                        className="w-1/2"
                    />
                    <div className="w-1/2">
                        <h1 className="text-2xl">Slow The Spread</h1>
                        <p className="">
                            Face coverings, often called masks, can help stop
                            your germs from infecting others. Research has shown
                            that wearing masks reduces the risk of infection,
                            especially when combined with other prevention
                            efforts such as washing your hands often and staying
                            6 feet away from others.<br></br>
                            <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">
                                CDC's Guide To Mask
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex flex-row">
                    <img
                        src="images/covid-img-1.jpg"
                        alt=""
                        className="w-1/2"
                    />
                    <div className="w-1/2">
                        <h1 className="text-2xl">Slow The Spread</h1>
                        <p className="">
                            Face coverings, often called masks, can help stop
                            your germs from infecting others. Research has shown
                            that wearing masks reduces the risk of infection,
                            especially when combined with other prevention
                            efforts such as washing your hands often and staying
                            6 feet away from others.<br></br>
                            <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">
                                CDC's Guide To Mask
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Covid;
