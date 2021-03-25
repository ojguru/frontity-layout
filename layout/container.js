import React from "react";
import {css, styled, connect} from "frontity";
import mq from "./mq";

const ContainerComponent = ({
  state, actions, libraries, children,
  fluid=false, fluidMD=false, fluidLG=false, fluidXL=false, notFluidMD=false, notFluidLG=false, notFluidXL=false,
  noGutters=false, space=false, 
  sizeSM="540px", sizeMD="720px", sizeLG="960px", sizeXL="1140px"
}) =>{

  const spaceSizes = {
    s: "2rem",
    m: "4rem",
    l: "6rem",
  }

  return <Container {...{
    fluid, fluidMD, fluidLG, fluidXL, notFluidMD, notFluidLG, notFluidXL,
    noGutters, space, spaceSizes, sizeSM, sizeMD, sizeLG, sizeXL
  }}>
    {children}
  </Container>
  
} 

export default connect(ContainerComponent);

const Container = styled.div`
  ${({
    fluid, fluidMD, fluidLG, fluidXL, notFluidMD, notFluidLG, notFluidXL,
    noGutters, space, spaceSizes, sizeSM, sizeMD, sizeLG, sizeXL
  })=>css`
    width: 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    ${!fluid && "margin: 0 auto"};
    ${!fluid?`
      ${mq.sm}{
        max-width: ${sizeSM};
      }
      ${mq.md}{
          max-width: ${sizeMD};
      }
      ${mq.lg}{
          max-width: ${sizeLG};
      }
      ${mq.xl}{
          max-width: ${sizeXL};
      }
      `:null
    };

    ${notFluidMD?`
      ${mq.sm}{
        max-width: ${sizeSM};
        margin: 0 auto;
      }
      ${mq.md}{
          max-width: ${sizeMD};
          margin: 0 auto;
      }
      ${mq.lg}{
          max-width: ${sizeLG};
          margin: 0 auto;
      }
      ${mq.xl}{
          max-width: ${sizeXL};
          margin: 0 auto;
      }
      `:null
    };

    ${fluidMD?`
      ${mq.md}{
          max-width: 100%;
      }
      ${mq.lg}{
          max-width: 100%;
      }
      ${mq.xl}{
          max-width: 100%;
      }
      `:null
    };

    ${notFluidLG?`
      ${mq.lg}{
          max-width: ${sizeLG};
          margin: 0 auto;
      }
      ${mq.xl}{
          max-width: ${sizeXL};
          margin: 0 auto;
      }
      `:null
    };

    ${fluidLG?`
      ${mq.lg}{
          max-width: 100%;
      }
      ${mq.xl}{
          max-width: 100%;
      }
      `:null
    };

    ${notFluidXL?`
      ${mq.xl}{
          max-width: ${sizeXL};
          margin: 0 auto;
      }
      `:null
    };

    ${fluidXL?`
      ${mq.xl}{
          max-width: 100%;
      }
      `:null
    };

    // Adds container top and bottom space
    ${ 
      space=="small"?`margin-top: ${spaceSizes.s}; margin-bottom: ${spaceSizes.s};`:
      space=="medium"?`margin-top: ${spaceSizes.m}; margin-bottom: ${spaceSizes.m};`: 
      space=="large"?`margin-top: ${spaceSizes.l}; margin-bottom: ${spaceSizes.l};`:
      ``
    }
    
    // Remove container gutters
    ${noGutters && "padding: 0;" }
  `}
`;