import { Provider } from "react-redux";
import { store } from "../../../../store/store";
import Sidebar from "./Sidebar";
import Header from "./Header";
import OrderNotification from "./../notifications/OrderNotification";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Provider store={store}>
      <div className="flex h-screen bg-gray-50 ">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto p-4 pb-30">{children}</main>
        </div>
        <OrderNotification />
      </div>
    </Provider>
  );
};

export default Layout;
