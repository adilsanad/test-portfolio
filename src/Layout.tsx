import Footer from "./common/Footer";
import pageendmarker from './assets/pageender.svg'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-8 md:grid-cols-16 w-full bg-[#151515]">
      <main className="col-span-full">{children}</main>
        <div className="col-span-full flex justify-center py-32"><img src={pageendmarker}></img></div>
      <Footer/>
    </div>
  );
};

export default Layout;
