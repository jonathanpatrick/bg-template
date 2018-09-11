import * as React from "react";

export interface ISVGProps {
}


const svgtest = (props: ISVGProps) => {

    return (

        <svg id="board-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="500">
            <defs>
                <pattern id="image-bg" x="0" y="0" height="300" width="300" patternUnits="userSpaceOnUse">
                    <image width="300" height="300" ></image>
                </pattern>
            </defs>
            <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20" fill="url('#image-bg')"></polygon>
        </svg >
    );
};
export default svgtest;