import React from "react"

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen">
      <aside className="w-64 overflow-y-auto py-4 px-3 pb-0 bg-gray-50 rounded">
        <ul>
          <li>Criar quiz</li>
          <li>Meus quizes</li>
          <li>Sair</li>
        </ul>
      </aside>

      <main className="w-full h-full flex flex-col">
        <header className="border-gray-200 px-5 sm:px-4 flex-none">
          <div className="container h-16 flex flex-wrap justify-between items-center mx-auto border-b border-gray-50">
            <div>asd</div>
            <span>LG</span>
          </div>
        </header>

        <div className="flex justify-center items-center flex-1">
          Alguma coisa
        </div>
      </main>
    </div>
  )
}

export default Dashboard