import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import avatar from "../assets/avatar.png"
export default function Navbar() {
  const { authUser, logout } = useAuthStore();
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Chat App{" "}
          </Link>
        </div>
        {authUser ? (
          <div className="flex gap-2 items-center">
            <div>
              <h2  className="font-bold">{authUser.fullName.toUpperCase()}</h2>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={authUser.profilePic||avatar}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <button type="button" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/login">Login </Link>
              </li>
              <li>
                <Link to="/signup">Register </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
