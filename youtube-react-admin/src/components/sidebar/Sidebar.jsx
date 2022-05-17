import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Mon Compte</h3>
          <ul className="sidebarList">

            <Link to="/cordonee" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Mes cordonnées
              </li>
            </Link>


            <Link to="/HistoriquedemandeList" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Historique des demandes
              </li>
            </Link>

            
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                user
              </li>
            
            </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Gestion des Employés</h3>
          <ul className="sidebarList">
          <Link to="/userList" className="link">
              <li className="sidebarListItem">
                userList
              </li>
            </Link>
           
            <Link to="/user" className="link">
              <li className="sidebarListItem">
              Gestion des employés
              </li>
            </Link>

            <Link to="/cordonee" className="link">
            <li className="sidebarListItem">
            Gestion des employés
            </li>   
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Contact</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="MuiSVIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
