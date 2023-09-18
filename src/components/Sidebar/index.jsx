import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import "./style.css";
import {
  CaretLeftFill,
  CaretRightFill,
  CloudMoonFill,
  House,
  People,
} from "react-bootstrap-icons";
import { ContentContext } from "../../context";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const SidebarApp = () => {
  const { theme, setTheme } = useContext(ContentContext);
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);
  const [userRols, setUserRols] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("USERLOGGER"));
    console.log(
      "🚀 ~ file: privateRoutes.js:14 ~ useEffect ~ userData:",
      userData
    );
    setUserRols(userData.roles);
  }, []);

  const toCollapse = () => {
    setCollapsed(!collapsed);
    collapseSidebar();
  };

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const menuItemStyles = {
    root: {
      fontSize: "18px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, 1)
          : "transparent",
    }),
    button: {
      "&:hover": {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <>
      <Sidebar
        style={{ height: "100vh" }}
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
        className="position-relative"
      >
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem
            icon={
              collapsed ? (
                <>
                  <CaretRightFill />
                  <CaretRightFill />
                </>
              ) : (
                <>
                  <CaretLeftFill />
                  <CaretLeftFill />
                </>
              )
            }
            onClick={() => {
              toCollapse();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Menú</h2>
          </MenuItem>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? theme === "light"
                  ? "active-light"
                  : "active-dark"
                : "text-decoration-none text-reset"
            }
          >
            <MenuItem icon={<House />}>Home</MenuItem>
          </NavLink>
          {userRols.some((rol) => rol === "Administrador") ? (
            <>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? theme === "light"
                      ? "active-light"
                      : "active-dark"
                    : "text-decoration-none text-reset"
                }
              >
                <MenuItem icon={<People />}>Usuarios</MenuItem>
              </NavLink>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  isActive
                    ? theme === "light"
                      ? "active-light"
                      : "active-dark"
                    : "text-decoration-none text-reset"
                }
              >
                <MenuItem icon={<People />}>Marcas</MenuItem>
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? theme === "light"
                      ? "active-light"
                      : "active-dark"
                    : "text-decoration-none text-reset"
                }
              >
                <MenuItem icon={<People />}>Productos</MenuItem>
              </NavLink>{" "}
            </>
          ) : (
            <>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? theme === "light"
                      ? "active-light"
                      : "active-dark"
                    : "text-decoration-none text-reset"
                }
              >
                <MenuItem icon={<People />}>Categorias</MenuItem>
              </NavLink>
            </>
          )}

          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? theme === "light"
                  ? "active-light"
                  : "active-dark"
                : "text-decoration-none text-reset"
            }
          >
            <MenuItem icon={<People />}>Logout</MenuItem>
          </NavLink>
          <MenuItem
            className="d-flex justify-content-center"
            onClick={changeTheme}
            icon={<CloudMoonFill className="fs-5" />}
          ></MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export { SidebarApp };
