import { UserService } from "../services/UserService";
import React, { useState } from "react"
import { Input, Button } from "@material-tailwind/react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await UserService.signup({ fullName, email, password, role: 1 });
      const { accessToken, user } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (e) {
      if (e instanceof AxiosError) {
        const { error } = e.response.data;
        alert(error);
        return;
      }
      alert("Ocorreu um erro interno. Entre em contato com o suporte")
      return;
    }
  }
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="p-5 bg-white rounded-xl w-full max-w-lg">
        <h1 className="text-center mb-5">Cadastro</h1>
        <form className="flex flex-col" onSubmit={submit}>
          <div className="mb-3">
            <Input onChange={(e) => { setFullname(e.target.value) }} required size="lg" variant="outlined" label="Nome completo" type="text" />
          </div>
          <div className="mb-3">
            <Input onChange={(e) => { setEmail(e.target.value) }} required size="lg" variant="outlined" label="Email" type="email" />
          </div>
          <div className="mb-3">
            <Input onChange={(e) => { setPassword(e.target.value) }} required size="lg" variant="outlined" label="Senha" type="password" />
          </div>
          <Button size="lg" variant="outlined" className="mb-5" type="submit">Criar conta</Button>
        </form>
      </div>
    </main>
  );
}

export default Signup