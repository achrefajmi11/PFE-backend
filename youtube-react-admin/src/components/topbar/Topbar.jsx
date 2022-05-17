import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DURAVIT</span>
        </div>
        <div className="topLeft">
        <Link to="/" className="link">
          <span className="logo">Accueil</span>
          </Link>
        </div>
        <div className="topLeft">
        <Link to="/cordonee" className="link">
          <span className="logo">Mon compte</span>
          </Link>
        </div>
        <div className="topRight">
          <span className="logo">Déconnection</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">4</span>
          </div>
    
        </div>
      </div>
    </div>
  );
}