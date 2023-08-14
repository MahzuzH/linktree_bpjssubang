import React from "react";
import Fullcalendar from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/daygrid";
import InteractionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="bg-blue-500 p-4 md:w-1/2 lg:w-1/3">Kolom 1</div>
            <div className="bg-green-500 p-4 md:w-1/2 lg:w-1/3">Kolom 2</div>
            <div className="bg-red-500 p-4 md:w-1/2 lg:w-1/3">Kolom 3</div>
        </div>
    );
}
