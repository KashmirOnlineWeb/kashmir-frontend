import { ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/router";

type ScrollRestorationProps = {
  children: ReactNode;
};

const ScrollRestoration = ({ children }: ScrollRestorationProps) => {
  const router = useRouter();
  const scrollY = useRef<number>(0);

  useEffect(() => {
    const handleRouteChange = () => {
      scrollY.current = window.scrollY;
    };

    const handleRouteComplete = () => {
      window.scrollTo(0, scrollY.current);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

  return <>{children}</>;
};

export default ScrollRestoration;
