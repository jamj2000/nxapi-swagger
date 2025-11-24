import SwaggerDocs from "./SwaggerDocs";

export default function page() {
    return (
        <div>
            <div className="h-20 grid place-content-center rounded-lg bg-blue-700 text-white text-4xl">
                API Doc
            </div>
            <SwaggerDocs />
        </div>
    );
}


