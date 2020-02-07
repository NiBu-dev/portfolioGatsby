import React from "react";

import CircleSvg from "../svg/circleSvg";
import CharXSvg from "../svg/charXSvg";
import HexagonSvg from "../svg/hexagonSvg";
import SquareSvg from "../svg/squareSvg";
import TreeSvg from "../svg/treeSvg";
import TriangleSvg from "../svg/triangleSvg";

const FiguresBg = () => {
    return (
        <div className="figuresBg">
            <CircleSvg className="circle-1"/>
            <CircleSvg className="circle-2"/>
            <CircleSvg className="circle-3"/>
            <CharXSvg className="charx-1"/>
            <CharXSvg className="charx-2"/>
            <HexagonSvg className="hexagon-1"/>
            <SquareSvg className="square-1"/>
            <SquareSvg className="square-2"/>
            <TreeSvg className="tree-1"/>
            <TriangleSvg className="triangle-1"/>
            <div className="animatedBg">
                <CircleSvg className="circle-4"/>
                <HexagonSvg className="hexagon-2"/>
                <TriangleSvg className="triangle-2"/>
            </div>
            <div className="animatedBgSlow">
                <TreeSvg className="tree-2"/>
                <SquareSvg className="square-3"/>
                <CircleSvg className="circle-5"/>
                <CircleSvg className="circle-6"/>
                <TriangleSvg className="triangle-3"/>
                <CharXSvg className="charx-2"/>
            </div>
        </div>
    )
};

export default FiguresBg;