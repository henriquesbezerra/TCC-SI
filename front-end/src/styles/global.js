import {createGlobalStyle} from 'styled-components';

import { fonts } from './fonts';
import { typography } from './typography';

export const backgroundGradient = `
    background: rgb(4,23,55);
    background: -moz-linear-gradient(351deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    background: -webkit-linear-gradient(351deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    background: linear-gradient(351deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#041737",endColorstr="#401daa",GradientType=1);
`;

export const backgroundGradient_invert = `
    background: rgb(4,23,55);
    background: -moz-linear-gradient(131deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    background: -webkit-linear-gradient(131deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    background: linear-gradient(131deg, rgba(4,23,55,1) 0%, rgba(13,21,106,1) 10%, rgba(38,33,153,1) 34%, rgba(64,29,170,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#041737",endColorstr="#401daa",GradientType=1);
`;

export const highlightGradient = `
    background: rgb(58,64,180);
    background: -moz-linear-gradient(90deg, rgba(58,64,180,1) 0%, rgba(163,31,61,1) 43%, rgba(180,40,62,1) 57%, rgba(193,22,22,1) 85%, rgba(252,148,69,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(58,64,180,1) 0%, rgba(163,31,61,1) 43%, rgba(180,40,62,1) 57%, rgba(193,22,22,1) 85%, rgba(252,148,69,1) 100%);
    background: linear-gradient(90deg, rgba(58,64,180,1) 0%, rgba(163,31,61,1) 43%, rgba(180,40,62,1) 57%, rgba(193,22,22,1) 85%, rgba(252,148,69,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a40b4",endColorstr="#fc9445",GradientType=1);
`;

export const highlightGradient_invert = `
    background: rgb(58,64,180);
    background: -moz-linear-gradient(279deg, rgba(58,64,180,1) 0%, rgba(163,31,61,1) 43%, rgba(180,40,62,1) 57%, rgba(193,22,22,1) 85%, rgba(252,148,69,1) 100%);
    background: -webkit-linear-gradient(279deg, rgba(58,64,180,1) 0%, rgba(163,31,61,1) 43%, rgba(180,40,62,1) 57%, rgba(193,22,22,1) 85%, rgba(252,148,69,1) 100%);
    background: linear-gradient(279deg, rgba(58,64,180,1) 0%, rgba(163,31,61,1) 43%, rgba(180,40,62,1) 57%, rgba(193,22,22,1) 85%, rgba(252,148,69,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a40b4",endColorstr="#fc9445",GradientType=1);
`;

export const highlightGradient_hover = `
    background: rgb(44,49,140);
    background: -moz-linear-gradient(90deg, rgba(44,49,140,1) 0%, rgba(130,26,49,1) 43%, rgba(158,39,58,1) 57%, rgba(168,21,21,1) 85%, rgba(193,114,54,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(44,49,140,1) 0%, rgba(130,26,49,1) 43%, rgba(158,39,58,1) 57%, rgba(168,21,21,1) 85%, rgba(193,114,54,1) 100%);
    background: linear-gradient(90deg, rgba(44,49,140,1) 0%, rgba(130,26,49,1) 43%, rgba(158,39,58,1) 57%, rgba(168,21,21,1) 85%, rgba(193,114,54,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2c318c",endColorstr="#c17236",GradientType=1);
`;

export default createGlobalStyle`
        
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f6;
        color: #333;
        -webkit-font-smoothing: antialiased !important; 
    }

    ul{
        list-style: none;
    }

    ${fonts}
    ${typography}


    .circleButton{
        display: flex;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #FFF;
        padding: 5px;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 3px #00000073;
    }

    .df{
        display: flex;
    }

    .fdc{
        flex-direction:column;
    }

    .fdr{
        flex-direction: row;
    }

    .alic{
        align-items:center;
    }

    .alib{
        align-items: baseline;
    }

    .jc-c{
        justify-content: center;
    }

`;
