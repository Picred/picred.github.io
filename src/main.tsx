import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./components/Root";
import "./index.css";
import { Snowfall } from "react-snowfall";

const currentMonth = new Date().getMonth();
const isWinterSeason = currentMonth === 11 || currentMonth === 0;
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {isWinterSeason && <Snowfall color="#dee4fd" />}
        <Root />
    </StrictMode>
);
