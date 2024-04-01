import { Link } from "react-router-dom";

export function NavBar() {
  const routes = [
    {
      name: "Home",
      href: "/",
    },
  ];
  return (
    <nav className="flex flex-row">
      <ul className="flex flex-row py-2 justify-start flex-1">
        {routes.map((route) => {
          return (
            <li className="list-none bg-gray-300 dark:bg-gray-700 px-2">
              <Link to={route.href}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
