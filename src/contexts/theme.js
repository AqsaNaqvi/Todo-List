import { createContext, useContext } from "react";

// useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each level
export const ThemeContext = createContext({themeMode: "light",
darkTheme: () => {},
lightTheme: () => {},
})

export const TheameProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}