"use client"

import { ArrowBendUpLeft } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { useRouter } from "next/navigation";

const GoBackButton: React.FC = () => {
  const Router = useRouter();

  const goBack = () => {
    Router.back();
  };

  return (
    <div className="p-6 top-0 absolute left-0">
      <button
        className="flex items-center bg-white/10 border border-white/10 rounded-3xl justify-center py-2 px-4 gap-3"
        onClick={goBack}
      >
        <ArrowBendUpLeft />
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;
