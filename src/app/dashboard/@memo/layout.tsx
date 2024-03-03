import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div style={{ width: "100%" }}>{children}</div>;
}
