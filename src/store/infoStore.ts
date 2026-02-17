import { create } from  "zustand";
import { persist } from "zustand/middleware";

interface InfoStore{
    activeTab: string;
    theme: string;
    update(newTab?:string, newTheme?:string): void,
}

export const infoStore = create<InfoStore>()(
    persist(
        (set) => ({
            activeTab: "Home",
            theme: "",

            update: (newTab?:string, newTheme?:string) => {
                newTab ? set({activeTab: newTab,}) : null;
                newTheme ? set({theme: newTheme,}) : null;
            }
        }),
        {
            name: "info-storage", // name of the item in storage (must be unique)
        }
    )
);