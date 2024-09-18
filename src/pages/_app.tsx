import "@/styles/global.css";
// import store from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "../redux/store";
import Loader from "@/components/loading";
import type { AppProps, AppContext } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { ReactQuery } from "@/provider/react.query.provider";
import { getSeo } from "@/services/seo"
import { DiscoverApi } from "@/services/discoverService"
import WhatsAppButton from "@/components/whatsAppButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthProvider } from "@/components/context/AuthContext";
import { BackgroundMetaTags, LocationMetaTags } from '@/types/metatags.type';
import App from "next/app";

const MyApp = ({ Component, pageProps }: AppProps & { metaTags: any }) => {
  const { metaTags, ...rest } = pageProps;
  const [metatagsKeywords, setMetatagsKeywords] = useState("")
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  
  useEffect(() => {
    const plainText = metaTags?.keywords.replace(/<[^>]*>/g, '');
    // Decode HTML entities
    const decodedString = plainText?.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    setMetatagsKeywords(decodedString)
  }, [metaTags])

  // useEffect(() => {
  //   const handleRouteChangeStart = () => {
  //     setLoading(true);
  //   };

  //   const handleRouteChangeComplete = () => {
  //     setLoading(false);
  //   };

  //   const handleRouteChangeError = () => {
  //     setLoading(false);
  //   };

  //   router.events.on('routeChangeStart', handleRouteChangeStart);
  //   router.events.on('routeChangeComplete', handleRouteChangeComplete);
  //   router.events.on('routeChangeError', handleRouteChangeError);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChangeStart);
  //     router.events.off('routeChangeComplete', handleRouteChangeComplete);
  //     router.events.off('routeChangeError', handleRouteChangeError);
  //   };
  // }, [router]);


  return (
    <ReactQuery>
      {/* <Provider store={store}> */}
      <SessionProvider session={pageProps.session}>
      <AuthProvider>

        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={metaTags?.metaDescription} />
          <meta name="keywords" content={metatagsKeywords} />
          <title>{metaTags?.title}</title>

        </Head>
        <Loader />
        <Component {...rest} />
        <ToastContainer />
        <WhatsAppButton />
        </AuthProvider>

      </SessionProvider>
      {/* </Provider> */}
    </ReactQuery >
  )
};

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { ctx } = appContext;
//   const { city } = ctx.query;
//   const DiscoverApiRes = await DiscoverApi(city);
//   const DiscoverData = await DiscoverApiRes?.data;
//   // Call page-level getInitialProps
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps, DiscoverData };
// };


export default wrapper.withRedux(MyApp);

// export default MyApp;
