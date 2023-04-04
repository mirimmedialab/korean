import dynamic from "next/dynamic";

export const Test = dynamic(() => import("./Test"), { ssr: false });
