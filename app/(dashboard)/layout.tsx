import { Header } from "@/components/header";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
function layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
}

export default layout;
