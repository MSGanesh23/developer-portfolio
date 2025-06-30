"use client";

import dynamic from "next/dynamic";

// Client-only dynamic import for Lottie-based component
const Education = dynamic(() => import("../homepage/education"), { ssr: false });

export default Education;
