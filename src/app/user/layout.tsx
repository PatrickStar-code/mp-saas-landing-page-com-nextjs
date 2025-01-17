import React from "react";
import Navbar from "../_components/navbar";

export default function Userlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
