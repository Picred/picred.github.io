import { create } from  "zustand";

interface InfoStore{
    active: string;
    theme: string;
    update(newTab?:string, newTheme?:string): void,
}

export const infoStore = create<InfoStore>((set, get) => ({
    active: "",
    theme: "",

    update: (newTab?:string, newTheme?:string) => {
        newTab ? set({active: newTab,}) : null;
        newTheme ? set({theme: newTheme,}) : null;
    }
}));