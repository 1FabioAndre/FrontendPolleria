import { useAuth } from "../../GENERALCOMPONENTS/AuthContext";
import HomeAdmin from "./HomeAdmin";
import HomeClient from "./HomeClient";
import HomeWorker from "./HomeWorker";


const Home = () => {
  const { user } = useAuth(); 
  console.log("user", user);

  if (!user) {
    console.log("usuario no encontrado");
    return <div>Cargando...</div>; 
  }
  const userRole = user.role;

  return (
    <>
    { userRole === "admin" && (
      <HomeAdmin></HomeAdmin>
    )}
    {
      userRole === "worker" && (
        <HomeWorker></HomeWorker>
    )}
    {
      userRole === "client" && (
        <HomeClient></HomeClient>
    )}
    </>
  )
}

export default Home
