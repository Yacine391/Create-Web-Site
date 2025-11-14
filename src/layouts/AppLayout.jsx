import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';

const AppLayout = () => (
  <>
    <a href="#main-content" className="skip-link">
      Passer au contenu
    </a>
    <div className="app-shell">
      <Sidebar />
      <main id="main-content" className="app-content" role="main" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  </>
);

export default AppLayout;

