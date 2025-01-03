import React from "react";

interface CommandBlockProps {
    commands: string[];
}

const CommandBlock: React.FC<CommandBlockProps> = ({ commands }) => {
    return (
        <div
            style={{
                backgroundColor: "#18181A",
                borderRadius: "15px",
                padding: 10,
                marginTop: 20,
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                color: "#d4d4d6",
                overflow: "hidden",
            }}
        >
            {commands.map((command, index) => (
                <div
                    key={index}
                    style={{
                        color: "#00ff7f",
                        padding: "10px 15px",
                        borderRadius: index === 0 ? "15px 15px 0 0" : index === commands.length - 1 ? "0 0 15px 15px" : "0",
                        fontFamily: "'Source Code Pro', monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                    }}
                >
                    <code>{command}</code>
                </div>
            ))}
        </div>
    );
};

export default CommandBlock;
