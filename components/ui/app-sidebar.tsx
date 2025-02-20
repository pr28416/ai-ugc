"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  GlobeIcon,
  LibraryBig,
  // Users,
} from "lucide-react";
import { GiSpikyExplosion } from "react-icons/gi";
import { NavMain } from "@/components/nav-main";
// import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
// import { useAuth } from "@/lib/auth-context"
import { Instrument_Serif } from "next/font/google";
import { usePathname } from "next/navigation";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: GlobeIcon,
    },
    {
      title: "Gallery",
      url: "/gallery",
      icon: LibraryBig,
    },
    // {
    //   title: "Influencers",
    //   url: "/influencers",
    //   icon: Users,
    // },
    // {
    //   title: "Market",
    //   url: "/market",
    //   icon: GlobeIcon
    // },
    // {
    //   title: "Simulations",
    //   url: "/simulations",
    //   icon: SquareTerminal
    // },
    // {
    //   title: "Chat",
    //   url: "/chat",
    //   icon: AudioLines
    // },
    // {
    //   title: "Creative",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     // {
    //     //   title: "Assets",
    //     //   url: "/assets",
    //     // },
    //     {
    //       title: "Evaluate",
    //       url: "/evaluate",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const { user } = useAuth()
  const pathname = usePathname();

  // console.log('Current pathname:', pathname)
  const items = data.navMain.map((item) => ({
    ...item,
    isActive: pathname === item.url,
  }));
  // console.log('Nav items with active state:', items)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="pb-2">
        <div className="flex items-center gap-1 px-0 pt-2 pb-2 transition-all duration-300 ease-in-out group-data-[state=collapsed]:px-0">
          <div className="flex items-center justify-center w-8 h-8 transition-all duration-300 ease-in-out">
            <GiSpikyExplosion className="h-6 w-6 bg-fuchsia-500 text-white p-1 rounded-md transition-all duration-300 ease-in-out" />
          </div>
          <span
            className={`${instrumentSerif.className} font-light mb-1 text-2xl text-fuchsia-400 opacity-100 transition-all duration-300 ease-in-out group-data-[state=collapsed]:hidden tracking-[0.015em]`}
          >
            supernova
          </span>
        </div>
        <Separator className="mt-2 opacity-50" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items} />
      </SidebarContent>
      <SidebarFooter>
        <div className="mt-auto px-3 py-1 group-data-[state=collapsed]:hidden">
          <div className="inline-flex items-center gap-1.5 rounded-sm border border-border/30 bg-muted/20 px-1.5 py-0.5 text-[10px] text-muted-foreground/70">
            <Command className="h-2.5 w-2.5" />
            <span className="font-medium">E to Collapse</span>
          </div>
        </div>
        {/* {user && (
          <NavUser
            user={{
              name: _.startCase(_.toLower(user.email?.split('@')[0] ?? 'User')),
              email: user.email ?? '',
              avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`,
            }}
          />
        )} */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
