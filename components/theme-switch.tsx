"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { useIsSSR } from "@react-aria/ssr";
import { cn } from "@nextui-org/theme";
import { MoonFilledIcon, SunFilledIcon } from "./icons";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkMode, DarkModeOutlined, DarkModeRounded, DarkModeTwoTone, LightModeOutlined, LightModeRounded, LightModeTwoTone} from "@mui/icons-material";
export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  // State to track if dark mode is enabled
  const [isDark, setIsDark] = useState(false);

  // Sync the internal state with the theme from next-themes
  useEffect(() => {
    if (!isSSR) {
      setIsDark(theme === "dark");
    }
  }, [theme, isSSR]);

  // Handle theme change
  const onChange = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <Switch
      classNames={{
        base: cn(
          "inline-flex flex-row-reverse h-8 w-full max-w-md items-center justify-between",
          "bg-[#cacaca53] hover:bg-content2 cursor-pointer rounded-lg gap-2 p-2 border-transparent",
          className, // Allow for custom classes
        ),
        wrapper: cn(
          "p-0 h-3 overflow-visible bg-[black]",
          "group-data-[selected=true]:bg-success",
        ),
        thumb: cn(
          "w-6 h-6 shadow-lg text-[black]",
          "group-data-[hover=true]:text-success",
          "group-data-[selected=true]:ml-6",
          "group-data-[selected=true]:text-warn",
          "group-data-[pressed=true]:w-7 group-data-[selected]:group-data-[pressed]:ml-5", // Pressed state with slight expansion
        ),
      }}
      isSelected={isDark}
      onChange={onChange}
      thumbIcon={
        isDark ? (
          <LightModeRounded fontSize="small" />
        ) : (
          <DarkModeRounded fontSize="small" />
        )
      }
    />
  );
};
