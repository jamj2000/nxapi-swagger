import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function page() {
    return (
        <div>
            <h2 className="p-10 rounded-lg bg-blue-700 text-white text-center text-4xl">API Doc</h2>
            <SwaggerUI url="swagger.json" />
        </div>
    );
};

export default page;