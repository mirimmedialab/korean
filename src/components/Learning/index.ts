import dynamic from "next/dynamic";

export const LearningList = dynamic(()=>import('./LearningList') , {ssr:false})