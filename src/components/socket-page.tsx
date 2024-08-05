"use client"
import { useEffect } from "react";
import { socket } from "../socket";

interface SocketPageProps {
    keyValue: string;
}

export default function SocketPage({ keyValue }: SocketPageProps) {
    useEffect(() => {

        const intervalId = setInterval(() => {
            socket.emit("keyMessage", `value: ${keyValue}`);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p>Sending key: {keyValue} every 5 seconds...</p>
        </div>
    );
}