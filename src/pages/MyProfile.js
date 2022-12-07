import { Button, Input } from "@material-tailwind/react"
import React, { useEffect, useState } from "react"
import BaseLayout from "../layouts/BaseLayout"
import { UserService } from "../services/UserService";

const MyProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(UserService.user);
  }, []);

  return (
    <BaseLayout>
      <form className="w-1/2">
        <div className="mb-4">
          <Input readOnly onChange={(e) => { }} defaultValue={user.fullName} label="Nome completo" size="lg" variant="outline" type="text" />
        </div>
        <div className="mb-4">
          <Input readOnly onChange={(e) => { }} defaultValue={user.email} label="E-mail" size="lg" variant="outline" type="email" />
        </div>
        <div className="mb-4">
          <Input readOnly onChange={(e) => { }} label="Alterar senha" size="lg" variant="outline" type="password" />
        </div>
        <Button className="mb-4 w-full" type="submit">Atualizar</Button>
      </form>
    </BaseLayout>
  )
}

export default MyProfile;