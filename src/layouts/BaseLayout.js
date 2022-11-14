import React from "react"
import { Link } from "react-router-dom";
import SidebarItem from "../components/SidebarItem";

const BaseLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-row h-screen">
      <aside className="w-64 overflow-y-auto py-4 px-3 pb-0 bg-gray-50 rounded">
        <div className="flex flex-col justify-center items-center h-32 border border-black mb-5">
          <label>logotipo</label>
        </div>
        <ul className="flex flex-col">
          <SidebarItem to="/">Home</SidebarItem>
          <SidebarItem to="/create-quiz">Criar quiz</SidebarItem>
          <SidebarItem to="/my-quizzes">Meus quizes</SidebarItem>
          <SidebarItem to="/my-profile">Meu perfil</SidebarItem>
        </ul>
      </aside>

      <main className="w-full h-full flex flex-col">
        <header className="border-gray-200 px-5 sm:px-4 flex-none">
          <div className="container h-16 flex flex-wrap justify-between items-center mx-auto border-b border-black">
            <div>Olá professor Luiz!</div>
            <span>Sair</span>
          </div>
        </header>

        <div className="flex justify-center items-center flex-1">
          {{ ...children }}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout;