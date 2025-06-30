import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "./../components/ui/provider";
import Navbar from "@/components/navbar";
import MyContainer from "@/components/ui/container";
import SizeIndicator from "@/components/SizeIndicator";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Navbar />
      <MyContainer>
        <Component {...pageProps} />
      </MyContainer>
      <SizeIndicator />
    </Provider>
  );
}
