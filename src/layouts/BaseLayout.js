import React from "react"
import { useNavigate } from "react-router-dom";
import SidebarItem from "../components/SidebarItem";
import { UserService } from "../services/UserService";

const BaseLayout = (props) => {
  const { children } = props;
  const user = UserService.user;
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    document.cookie = "";
    navigate("/");
  }

  return (
    <div className="flex flex-row h-screen">
      <aside className="flex flex-col w-64 overflow-y-auto py-4 px-3 pb-0 bg-gray-50 rounded">
        <div className="flex flex-col justify-center items-center h-32 border border-black mb-5">
          <label>logotipo</label>
        </div>
        <ul className="flex flex-col">
          <SidebarItem to="/my-quizzes">Meus quizes</SidebarItem>
          <SidebarItem to="/create-quiz">Criar quiz</SidebarItem>
          <SidebarItem to="/my-profile">Meu perfil</SidebarItem>
        </ul>
        <small className="mt-auto self-center">© 2022 luizdebem</small>
      </aside>

      <main className="w-full h-full flex flex-col">
        <header className="border-gray-200 px-5 sm:px-4 flex-none mb-5">
          <div className="mb-5 h-16 flex flex-wrap justify-between items-center border-b border-black">
            <div>Olá professor {user.fullName}!</div>
            <span onClick={logout}>Sair</span>
          </div>
        </header>

        <div className="flex flex-col flex-1 px-3">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout;