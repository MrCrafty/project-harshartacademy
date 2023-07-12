import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-Poppins">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
