import Footer from "./common/Footer";
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  isHomePage?: boolean;
  isMobile: boolean;
}

const Layout = ({ children, isHomePage, isMobile }: LayoutProps) => {
  const location = useLocation();
  const isHome = isHomePage ?? location.pathname === '/';
  const isCreatorainPage = location.pathname.startsWith('/creatorain');

  return (
    <div className={`w-full ${isHome ? '' : 'grid grid-cols-8 md:grid-cols-16'}`}>
      <main className={isHome ? '' : 'col-span-full'}>{children}</main>
      {!isHome && !isCreatorainPage && (
        <div className="col-span-full">
          <Footer isMobile={isMobile} id='contact' theme='light' />
        </div>
      )}
    </div>
  );
};

export default Layout;