import React from "react";

type HeaderProp = {
    children: string;
}

const Headers: React.FC<HeaderProp> = ({ children}: HeaderProp) => {
    return (
        <div>
            <h1>{children}</h1>
        </div>
    );
}

export default Headers;