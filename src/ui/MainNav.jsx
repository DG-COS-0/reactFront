import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { LuUser2, LuWalletCards, LuPen, LuSettings } from "react-icons/lu";
import Logo from "./Logo";
const NavList = styled.ul`
  display: flex;
  gap: 2.6rem;
  background-color: var(--color-grey-200);
  align-items: center;
  justify-content: center;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    width: 15rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 3.4rem;
    height: 3.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-emerald-600);
  }
`;

export default function MainNav() {
  return (
    <div>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/logs">
              <LuPen />
              LOGS{" "}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/settings">
              <LuSettings />
              PARAMETRES{" "}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dashboard">
              <Logo />
              DASHBOARD
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/consultations">
              <LuWalletCards />
              CONSULTATIONS
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/users">
              <LuUser2 />
              UTILISATEURS
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </div>
  );
}
