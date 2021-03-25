import React from "react";
import {css, styled, connect} from "frontity";
import mq from "./mq";

const colSize = size => (parseInt(size)>0 && parseInt(size)<=12 ?(100/12*parseInt(size))+"%": `100%`);

const ColComponent = (props) => {
    
    return <Col {...props }>{props.children}</Col>
}

export default connect(ColComponent);

const Col = styled.div`
    ${({
        size, sizeSM, sizeMD, sizeLG, sizeXL,
        order, orderSM, orderMD, orderLG, orderXL,
        noGutters, noGuttersSM, noGuttersMD, noGuttersLG, noGuttersXL,
        noLGutters, noLGuttersSM, noLGuttersMD, noLGuttersLG, noLGuttersXL,
        noRGutters, noRGuttersSM, noRGuttersMD, noRGuttersLG, noRGuttersXL,
        gutters, guttersSM, guttersMD, guttersLG, guttersXL,
        lGutters, lGuttersSM, lGuttersMD, lGuttersLG, lGuttersXL,
        rGutters, rGuttersSM, rGuttersMD, rGuttersLG, rGuttersXL,
        mxAuto, mxSMAuto, mxMDAuto, mxLGAuto, mxXLAuto,
        mlAuto, mlSMAuto, mlMDAuto, mlLGAuto, mlXLAuto,
        mrAuto, mrSMAuto, mrMDAuto, mrLGAuto, mrXLAuto,
        hidden, hiddenSM, hiddenMD, hiddenLG, hiddenXL,
        visible, visibleSM, visibleMD, visibleLG, visibleXL,
        alignSelf, alignSMSelf, alignMDSelf, alignLGSelf, alignXLSelf,
        alignCenter, alignSMCenter, alignMDCenter, alignLGCenter, alignXLCenter,
        zIndex, zIndexSM, zIndexMD, zIndexLG, zIndexXL,
    })=>css`

        ${!size || size == true? `flex-basis: 0;`: ""}
        ${!size || size == true? `flex-grow: 1;`: ""}
        ${size == "auto"? `flex: 0 0 ${size};` : parseInt(size)? `flex: 0 0 ${colSize(size)};` : "" }
        max-width: ${ parseInt(size) ? colSize(size)+";" : '100%;'}
        width: ${ size == "auto"? size+";" : "100%;"}
        position: relative;
        padding-left: 15px;
        padding-right: 15px;
        ${sizeSM ? `
            ${mq.sm}{
                ${sizeSM == true? `flex-basis: 0;`: ""}
                ${ sizeSM == true? `flex-grow: 1;`: ""}
                ${ sizeSM == "auto"? `flex: 0 0 ${sizeSM};` : parseInt(sizeSM)? `flex: 0 0 ${colSize(sizeSM)};` : "" }
                max-width: ${ parseInt(sizeSM) ? colSize(sizeSM)+";" : '100%;'}
                width: ${ sizeSM == "auto"? sizeSM+";" : "100%;"}
            }
        `: ""}
        ${sizeMD ? `
            ${mq.md}{
                ${sizeMD == true? `flex-basis: 0;`: ""}
                ${ sizeMD == true? `flex-grow: 1;`: ""}
                ${ sizeMD == "auto"? `flex: 0 0 ${sizeMD};` : parseInt(sizeMD)? `flex: 0 0 ${colSize(sizeMD)};` : "" }
                max-width: ${ parseInt(sizeMD) ? colSize(sizeMD)+";" : '100%;'}
                width: ${ sizeMD == "auto"? sizeMD+";" : "100%;"}
            }
        `: ""}
        ${sizeLG ? `
            ${mq.lg}{
                ${sizeLG == true? `flex-basis: 0;`: ""}
                ${ sizeLG == true? `flex-grow: 1;`: ""}
                ${ sizeLG == "auto"? `flex: 0 0 ${sizeLG};` : parseInt(sizeLG)? `flex: 0 0 ${colSize(sizeLG)};` : "" }
                max-width: ${ parseInt(sizeLG) ? colSize(sizeLG)+";" : '100%;'}
                width: ${ sizeLG == "auto"? sizeLG+";" : "100%;"}
            }
        `: ""}
        ${sizeXL ? `
            ${mq.xl}{
                ${sizeXL == true? `flex-basis: 0;`: ""}
                ${ sizeXL == true? `flex-grow: 1;`: ""}
                ${ sizeXL == "auto"? `flex: 0 0 ${sizeXL};` : parseInt(sizeXL)? `flex: 0 0 ${colSize(sizeXL)};` : "" }
                max-width: ${ parseInt(sizeXL) ? colSize(sizeXL)+";" : '100%;'}
                width: ${ sizeXL == "auto"? sizeXL+";" : "100%;"}
            }
        `: ""}

        ${order ? `
            order:${order};
        ` : ""}
        ${orderSM ? `
            ${mq.sm}{
                order:${orderSM};
            }
        ` : ""}
        ${orderMD ? `
            ${mq.md}{
                order:${orderMD};
            }
        ` : ""}
        ${orderLG ? `
            ${mq.lg}{
                order:${orderLG};
            }
        ` : ""}
        ${orderXL ? `
            ${mq.xl}{
                order:${orderXL};
            }
        ` : ""}

        // Gutters
        ${noGutters ? `
            padding-left: 0px;
            padding-right: 0px;
        ` : ``}
        ${noGuttersSM ? `
            ${mq.sm}{
                padding-left: 0px;
                padding-right: 0px;
            }
        ` : ""}
        ${noGuttersMD ? `
            ${mq.md}{
                padding-left: 0px;
                padding-right: 0px;
            }
        ` : ""}
        ${noGuttersLG ? `
            ${mq.lg}{
                padding-left: 0px;
                padding-right: 0px;
            }
        ` : ""}
        ${noGuttersXL ? `
            ${mq.xl}{
                padding-left: 0px;
                padding-right: 0px;
            }
        ` : ""}

        ${gutters ? `
            padding-left: 15px;
            padding-right: 15px;
        ` : ``}
        ${guttersSM ? `
            ${mq.sm}{
                padding-left: 15px;
                padding-right: 15px;
            }
        ` : ""}
        ${guttersMD ? `
            ${mq.md}{
                padding-left: 15px;
                padding-right: 15px;
            }
        ` : ""}
        ${guttersLG ? `
            ${mq.lg}{
                padding-left: 15px;
                padding-right: 15px;
            }
        ` : ""}
        ${guttersXL ? `
            ${mq.xl}{
                padding-left: 15px;
                padding-right: 15px;
            }
        ` : ""}

        // Right Gutter
        ${noRGutters ? `
            padding-right: 0px;
        ` : ``}
        ${noRGuttersSM ? `
            ${mq.sm}{
                padding-right: 0px;
            }
        ` : ""}
        ${noRGuttersMD ? `
            ${mq.md}{
                padding-right: 0px;
            }
        ` : ""}
        ${noRGuttersLG ? `
            ${mq.lg}{
                padding-right: 0px;
            }
        ` : ""}
        ${noRGuttersXL ? `
            ${mq.xl}{
                padding-right: 0px;
            }
        ` : ""}

        ${rGutters ? `
            padding-right: 15px;
        ` : ``}
        ${rGuttersSM ? `
            ${mq.sm}{
                padding-right: 15px;
            }
        ` : ""}
        ${rGuttersMD ? `
            ${mq.md}{
                padding-right: 15px;
            }
        ` : ""}
        ${rGuttersLG ? `
            ${mq.lg}{
                padding-right: 15px;
            }
        ` : ""}
        ${rGuttersXL ? `
            ${mq.xl}{
                padding-right: 15px;
            }
        ` : ""}

        // Left Gutter
        ${noLGutters ? `
            padding-left: 0px;
        ` : ``}
        ${noLGuttersSM ? `
            ${mq.sm}{
                padding-left: 0px;
            }
        ` : ""}
        ${noLGuttersMD ? `
            ${mq.md}{
                padding-left: 0px;
            }
        ` : ""}
        ${noLGuttersLG ? `
            ${mq.lg}{
                padding-left: 0px;
            }
        ` : ""}
        ${noLGuttersXL ? `
            ${mq.xl}{
                padding-left: 0px;
            }
        ` : ""}

        ${lGutters ? `
            padding-left: 15px;
        ` : ``}
        ${lGuttersSM ? `
            ${mq.sm}{
                padding-left: 15px;
            }
        ` : ""}
        ${lGuttersMD ? `
            ${mq.md}{
                padding-left: 15px;
            }
        ` : ""}
        ${lGuttersLG ? `
            ${mq.lg}{
                padding-left: 15px;
            }
        ` : ""}
        ${lGuttersXL ? `
            ${mq.xl}{
                padding-left: 15px;
            }
        ` : ""}

        // Alingment
        ${mxAuto ? `
            margin-left: auto;
            margin-right: auto;
        `:""}
        ${mxSMAuto ? `
            ${mq.sm}{
                margin-left: auto;
                margin-right: auto;
            }
        `:""}
        ${mxMDAuto ? `
            ${mq.md}{
                margin-left: auto;
                margin-right: auto;
            }
        `:""}
        ${mxLGAuto ? `
            ${mq.lg}{
                margin-left: auto;
                margin-right: auto;
            }
        `:""}
        ${mxXLAuto ? `
            ${mq.xl}{
                margin-left: auto;
                margin-right: auto;
            }
        `:""}

        ${mlAuto ? `
            margin: initial;
            margin-left: auto;
        `:""}
        ${mlSMAuto ? `
            ${mq.sm}{
                margin: initial;
                margin-left: auto;
            }
        `:""}
        ${mlMDAuto ? `
            ${mq.md}{
                margin: initial;
                margin-left: auto;
            }
        `:""}
        ${mlLGAuto ? `
            ${mq.lg}{
                margin: initial;
                margin-left: auto;
            }
        `:""}
        ${mlXLAuto ? `
            ${mq.xl}{
                margin: initial;
                margin-left: auto;
            }
        `:""}

        ${mrAuto ? `
            margin: initial;
            margin-right: auto;
        `:""}
        ${mrSMAuto ? `
            ${mq.sm}{
                margin: initial;
                margin-right: auto;
            }
        `:""}
        ${mrMDAuto ? `
            ${mq.md}{
                margin: initial;
                margin-right: auto;
            }
        `:""}
        ${mrLGAuto ? `
            ${mq.lg}{
                margin: initial;
                margin-right: auto;
            }
        `:""}
        ${mrXLAuto ? `
            ${mq.xl}{
                margin: initial;
                margin-right: auto;
            }
        `:""}

        // ${hidden ? `
        //     display: none;
        // `:""}
        ${hiddenSM ? `
            ${mq.sm}{
                display: none;
            }
        `:""}
        ${hiddenMD ? `
            ${mq.md}{
                display: none;
            }
        `:""}
        ${hiddenLG ? `
            ${mq.lg}{
                display: none;
            }
        `:""}
        ${hiddenXL ? `
            ${mq.xl}{
                display: none;
            }
        `:""}

        ${visible ? `
            display: block;
        `:""}
        ${visibleSM ? `
            ${mq.sm}{
                display: block;
            }
        `:""}
        ${visibleMD ? `
            ${mq.md}{
                display: block;
            }
        `:""}
        ${visibleLG ? `
            ${mq.lg}{
                display: block;
            }
        `:""}
        ${visibleXL ? `
            ${mq.xl}{
                display: block;
            }
        `:""}

        ${alignSelf? `
            align-Self: ${alignSelf};
        `: ""}
        ${alignSMSelf? `
            ${mq.sm}{
            align-Self: ${alignSMSelf};
            }
        `: ""}
        ${alignMDSelf? `
            ${mq.md}{
            align-Self: ${alignMDSelf};
            }
        `: ""}
        ${alignLGSelf? `
            ${mq.lg}{
            align-Self: ${alignLGSelf};
            }
        `: ""}
        ${alignXLSelf? `
            ${mq.xl}{
            align-Self: ${alignXLSelf};
            }
        `: ""}

        ${zIndex ? `
            z-index:${zIndex};
        ` : ""}
        ${zIndexSM ? `
            ${mq.sm}{
                z-index:${zIndexSM};
            }
        ` : ""}
        ${zIndexMD ? `
            ${mq.md}{
                z-index:${zIndexMD};
            }
        ` : ""}
        ${zIndexLG ? `
            ${mq.lg}{
                z-index:${zIndexLG};
            }
        ` : ""}
        ${zIndexXL ? `
            ${mq.xl}{
                z-index:${zIndexXL};
            }
        ` : ""}

        ${alignCenter? `
            display: flex;
            align-items: center;`
            : ""
        }
        ${alignSMCenter? `
            ${mq.sm}{
                display: flex;
                align-items: center;
            }
        `: ""}
        ${alignMDCenter? `
            ${mq.md}{
                display: flex;
                align-items: center;
            }
        `: ""}
        ${alignLGCenter? `
            ${mq.lg}{
                display: flex;
                align-items: center;
            }
        `: ""}
        ${alignXLCenter? `
            ${mq.xl}{
                display: flex;
                align-items: center;
            }
        `: ""}
        
    `}
`