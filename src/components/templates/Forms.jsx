import React from "react";
import DynamicTexts from "../molecules/Texts";
import Button from "../atoms/Button";
import DynamicInputs from "../molecules/Input";

function Forms({ content = [], className = "p-4" }) {
    return (
        <div className={className}>
            {content.map((item, index) => {
                if (item.type === "text") {
                    return <Texts key={index} Texts={item.text} />;
                }

                if(item.type === "button") {
                    return <Button key={index} text={item.text} className={item.className} onClick={item.onClick}  disabled={item.disabled} />;
                }

                if(item.type === "inputs") {
                    return <Inputs key={index} Inputs={item.inputs} className={item.className} />;
                }

                return null;
            })}
        </div>
    );
}

export default Forms;