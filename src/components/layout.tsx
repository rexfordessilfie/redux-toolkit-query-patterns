import { NavBar } from "./navbar";

type LayoutProps = unknown;
export function Layout({ children }: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className="flex flex-1 items-center flex-col">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
