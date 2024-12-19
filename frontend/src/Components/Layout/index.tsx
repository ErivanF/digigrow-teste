import { ReactNode } from "react";
import { Containter } from "./styles";
import { NavLink } from "react-router";
interface IProps {
  children: ReactNode;
}
export default function Layout({ children }: IProps) {
  return (
    <Containter>
      <nav>
        <NavLink to="/">Lista</NavLink>
        <NavLink to="/new">Adicionar</NavLink>
      </nav>
      <main>{children}</main>
    </Containter>
  );
}
