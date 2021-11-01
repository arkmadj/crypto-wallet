import Header from "../components/Header";
import SideBar from "../components/SideBar";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-mainBackground w-screen overflow-x-hidden overflow-y-hidden font-nunito text-gray-400">
      <Header />
      <main className="flex h-full w-full">
        <SideBar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
