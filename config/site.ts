export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Pizza Delivery",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/dashboard",
    },
    {
      label: "Menu",
      href: "/dashboard/menu",
    },
    {
      label: "Custom",
      href: "/dashboard/custom",
    },
    {
      label: "Orders",
      href: "/dashboard/orders",
    },    
    {
      label: "Logout",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/dashboard",
    },
    {
      label: "Menu",
      href: "/dashboard/menu",
    },
    {
      label: "Custom",
      href: "/dashboard/custom",
    },
    {
      label: "Orders",
      href: "/dashboard/orders",
    },    
    {
      label: "Logout",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
