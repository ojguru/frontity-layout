import {css} from "frontity";

export const mqVal = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

const mq = {
    xsv: mqVal.xs,
    smv: mqVal.sm,
    mdv: mqVal.md,
    lgv: mqVal.lg,
    xlv: mqVal.xl,
    xs:css`@media (min-width: ${mqVal.xs}px)`, 
    sm:css`@media (min-width: ${mqVal.sm}px)`, 
    md:css`@media (min-width: ${mqVal.md}px)`, 
    lg:css`@media (min-width: ${mqVal.lg}px)`, 
    xl:css`@media (min-width: ${mqVal.xl}px)`, 
}

export default mq;