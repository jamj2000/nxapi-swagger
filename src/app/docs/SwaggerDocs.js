"use client";

import { useEffect, useRef } from "react";
import SwaggerUI from "swagger-ui-dist/swagger-ui-es-bundle";
import "swagger-ui-dist/swagger-ui.css";

export default function SwaggerDocs() {
    const uiRef = useRef(null);

    useEffect(() => {
        SwaggerUI({
            url: "/swagger.json",
            domNode: uiRef.current,
            layout: "BaseLayout"
        });
    }, []);

    return <div ref={uiRef} />;
}