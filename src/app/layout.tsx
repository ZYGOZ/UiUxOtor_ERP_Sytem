"use client";
import Link from "next/link";
import styles from "./layout.module.css";
import { Nunito } from "next/font/google";
import Logo from "../../public/icons/Logo";
import Iconer from "./components/Iconer/Iconer";
import { usePathname } from "next/navigation";
import SideBarActivity from "../../public/icons/SideBarActivity";
import { useEffect, useState } from "react";
import NotificationsIcon from "../../public/icons/NotificationsIcon";
import ProfileIcon from "../../public/icons/ProfileIcon";
import ArrowDown from "../../public/icons/ArrowDown";
import HappyEmoji from "../../public/icons/HappyEmoji";

const nunito = Nunito({ subsets: ["latin"] });

const paths = [
  { name: "Home", path: "/" },
  { name: "Users", path: "/users" },
  { name: "Products", path: "/products" },
  { name: "Dashboard", path: "/dashboard" },
];

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "DashboardIcon",
    isActive: false,
  },
  { title: "Staff", href: "/staff", icon: "StaffIcon", isActive: false },
  {
    title: "Payment Voucher",
    href: "/paymentVoucher",
    icon: "StaffIcon",
    isActive: false,
  },
  {
    title: "Payroll",
    href: "/payroll",
    icon: "PayrollIcon",
    isActive: false,
  },
  {
    title: "Memo",
    href: "/memo",
    icon: "MemoIcon",
    isActive: false,
  },
  {
    title: "Circulars",
    href: "/circulars",
    icon: "CircularsIcon",
    isActive: false,
  },
  {
    title: "Maintenance",
    href: "/maintenance",
    icon: "MaintenanceIcon",
    isActive: false,
  },
  {
    title: "Logistics",
    href: "/logistics",
    icon: "LogisticsIcon",
    isActive: false,
  },
  {
    title: "Office Budget",
    href: "/officeBudget",
    icon: "OfficeBudgetIcon",
    isActive: false,
  },
  {
    title: "Stocks and Inventory",
    href: "/stocksAndInventory",
    icon: "StocksIcon",
    isActive: false,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: "NotificationsIcon",
    isActive: false,
  },
  {
    title: "Capacity Building",
    href: "/capacityBuilding",
    icon: "CapacityBuildingIcon",
    isActive: false,
  },
  {
    title: "Procurements",
    href: "/procurements",
    icon: "ProcurementsIcon",
    isActive: false,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeLinks, setActiveLinks] = useState(links);
  const pathname = usePathname();

  useEffect(() => {
    setActiveLinks(
      activeLinks.map((link) => ({
        ...link,
        isActive: link.href === pathname,
      }))
    );
    console.log(pathname);
  }, [pathname]);

  return (
    <html lang="en" className={nunito.className}>
      <body style={{ margin: 0 }}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.logo_container}>
              <Logo />
            </div>
            <div>
              <ul className={styles.links}>
                {activeLinks.map((link, index) => (
                  <li key={index}>
                    {link.isActive && (
                      <SideBarActivity className={styles.sidebar_activity} />
                    )}
                    <Link href={link.href}>
                      <div className={styles.sidebar_elems}>
                        <Iconer iconName={link.icon} isActive={link.isActive} />
                        <a
                          style={{ marginLeft: "5px" }}
                          className={`${styles.sidebar_link_text} ${
                            link.isActive && styles.active_elem
                          }`}
                        >
                          {link.title}
                        </a>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.page_container}>
            <div className={styles.header_container}>
              <div className={styles.header_text}>
                <a className={styles.header_text_bold}>
                  Welcome, Mr. Otor John
                  <HappyEmoji />
                </a>
                <a className={styles.header_text_small}>
                  Today is Saturday, 11th November 2022
                </a>
              </div>
              <div className={styles.header_icons}>
                <NotificationsIcon />
                <ProfileIcon className={styles.profile_icon} />
                <div className={styles.profile_details}>
                  <a className={styles.profile_name}>Otor John</a>
                  <a className={styles.profile_role}>HR Office</a>
                </div>
                <ArrowDown className={styles.arrow_down} />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
