import Layout from "@/pages/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export const isLogin = createContext<{
  IsLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  IsLogin: false,
  setIsLogin: () => {},
});
export default function App({ Component, pageProps }: AppProps) {
  const [IsLogin, setIsLogin] = useState(false);

  return (
    <isLogin.Provider value={{ IsLogin, setIsLogin }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </isLogin.Provider>
  );
}
