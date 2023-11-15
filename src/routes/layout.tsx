import { Nprogress } from "@/components/navigation/nprogress/Nprogress";
import {
  ClientSuspense,
  Head,
  LayoutProps,
  PageContext,
  useLocation,
  usePageContext,
} from "rakkasjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "cherry-markdown/dist/cherry-markdown.css";
import "./index.css";
import React from "react";
import { Toolbar } from "@/components/navigation/Toolbar";


function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const page_ctx = usePageContext();
  // console.log(" page ctx ==== ",page_ctx.locals.pb)
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center ">
      {/* <Head description={"Resume building assistant"} /> */}
      <ClientSuspense fallback={<div></div>}>
        <Nprogress isAnimating={location && location?.pending ? true : false} />
      </ClientSuspense>
      <Toolbar />
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {import.meta.env.DEV && <ReactQueryDevtoolsProduction />}
    </div>
  );
}
Layout.preload = (ctx: PageContext) => {
  return {
    head: {
      title: "Scribble",
      keywords:
        "rich text editor, markdown, cherry, markdown based rich text editor,AI editor",
      description: "cherry markdown based rich text editor ",
    },
  };
};

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
);

export default Layout;
