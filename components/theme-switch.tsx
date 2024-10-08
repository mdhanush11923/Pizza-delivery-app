"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { useIsSSR } from "@react-aria/ssr";
import { cn } from "@nextui-org/theme";
import { MoonFilledIcon, SunFilledIcon } from "./icons";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Brightness1, DarkMode, DarkModeOutlined, DarkModeRounded, DarkModeSharp, DarkModeTwoTone, LightModeOutlined, LightModeRounded, LightModeSharp, LightModeTwoTone, ModeNight, NightlightRound, NightsStayTwoTone, ShieldMoon} from "@mui/icons-material";
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
          "inline-flex flex-row-reverse h-8 max-w-md items-center justify-between",
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
          <svg
            aria-hidden="true"
            focusable="false"
            height="18"
            role="presentation"
            viewBox="0 0 24 24"
            width="18"
            className="text-black"
          >
            <g fill="currentColor">
              <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z"></path>
              <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"></path>
            </g>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            focusable="false"
            height="18"
            role="presentation"
            viewBox="0 0 24 24"
            width="18"
            className="text-black"
          >
            <path
              d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
              fill="currentColor"
            ></path>
          </svg>
        )
      }
    />
  );
};
