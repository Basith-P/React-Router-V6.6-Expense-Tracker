import { Outlet, useLoaderData } from "react-router-dom";

// Assets
import wave from "../assets/wave.svg";

// Components
import Nav from "../components/Nav";

// Helpers
import { fetchData } from "../helpers";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
