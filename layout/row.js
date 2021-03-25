import React from "react";
import {css, styled, connect} from "frontity";
import {mq} from ".";

const RowComponent = ({
  children,
  alignCenter=false, alignSMCenter=false, alignMDCenter=false, alignLGCenter=false, alignXLCenter=false,
  alignItems=false, alignSMItems=false, alignMDItems=false, alignLGItems=false, alignXLItems=false,
  alignContent=false, alignSMContent=false, alignMDContent=false, alignLGContent=false, alignXLContent=false,
  justifyContent=false, justifySMContent=false, justifyMDContent=false, justifyLGContent=false, justifyXLContent=false,
}) => {

  return <Row {...{
    alignCenter, alignSMCenter, alignMDCenter, alignLGCenter, alignXLCenter,
    alignItems, alignSMItems, alignMDItems, alignLGItems, alignXLItems,
    alignContent, alignSMContent, alignMDContent, alignLGContent, alignXLContent,
    justifyContent, justifySMContent, justifyMDContent, justifyLGContent, justifyXLContent,
  }}>
    {children}
  </Row>
}

export default connect(RowComponent);

const Row = styled.div`
  ${({
    alignCenter, alignSMCenter, alignMDCenter, alignLGCenter, alignXLCenter,
    alignItems, alignSMItems, alignMDItems, alignLGItems, alignXLItems,
    alignContent, alignSMContent, alignMDContent, alignLGContent, alignXLContent,
    justifyContent, justifySMContent, justifyMDContent, justifyLGContent, justifyXLContent,
  })=>css`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    // Alignment
    ${alignCenter? `align-items: center;`: ""}
    ${alignSMCenter? `
      ${mq.sm}{
        align-items: center;
      }
    `: ""}
    ${alignMDCenter? `
        ${mq.md}{
        align-items: center;
      }
    `: ""}
    ${alignLGCenter? `
        ${mq.lg}{
        align-items: center;
      }
    `: ""}
    ${alignXLCenter? `
        ${mq.xl}{
        align-items: center;
      }
    `: ""}

    ${alignItems? `
      align-items: ${alignItems};
    `: ""}
    ${alignSMItems? `
      ${mq.sm}{
        align-items: ${alignSMItems};
      }
    `: ""}
    ${alignMDItems? `
      ${mq.md}{
        align-items: ${alignMDItems};
      }
    `: ""}
    ${alignLGItems? `
      ${mq.lg}{
        align-items: ${alignLGItems};
      }
    `: ""}
    ${alignXLItems? `
      ${mq.xl}{
        align-items: ${alignXLItems};
      }
    `: ""}

    ${alignContent? `
      align-content: ${alignContent};
    `: ""}
    ${alignSMContent? `
      ${mq.sm}{
        align-content: ${alignSMContent};
      }
    `: ""}
    ${alignMDContent? `
      ${mq.md}{
        align-content: ${alignMDContent};
      }
    `: ""}
    ${alignLGContent? `
      ${mq.lg}{
        align-content: ${alignLGContent};
      }
    `: ""}
    ${alignXLContent? `
      ${mq.xl}{
        align-content: ${alignXLContent};
      }
    `: ""}

    ${justifyContent? `
      justify-content: ${justifyContent};
    `: ""}
    ${justifySMContent? `
      ${mq.sm}{
        justify-content: ${justifySMContent};
      }
    `: ""}
    ${justifyMDContent? `
      ${mq.md}{
        justify-content: ${justifyMDContent};
      }
    `: ""}
    ${justifyLGContent? `
      ${mq.lg}{
        justify-content: ${justifyLGContent};
      }
    `: ""}
    ${justifyXLContent? `
      ${mq.xl}{
        justify-content: ${justifyXLContent};
      }
    `: ""}
  `}
`;