import React, { type ReactNode } from "react"
import logo from "@/assets/vite.svg"

export const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <div className="p-8 rounded-2xl flex flex-col items-center gap-4">
        <img src={logo} alt="logo" className="w-16 h-16 animate-pulse drop-shadow-lg" />
        <p className="text-gray-700 text-base font-medium tracking-wide">Yuklanmoqda...</p>
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>

  )
}

type Props = {
  children: ReactNode;
};

export const Suspense = ({ children }: Props) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
}
