import { create } from  "zustand";

interface InfoStore{
    activeTab: string;
    theme: string;
    update(newTab?:string, newTheme?:string): void,
}

export const infoStore = create<InfoStore>((set) => ({
    activeTab: "",
    theme: "",

    update: (newTab?:string, newTheme?:string) => {
        newTab ? set({activeTab: newTab,}) : null;
        newTheme ? set({theme: newTheme,}) : null;
    }
}));