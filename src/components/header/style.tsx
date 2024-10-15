import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: #5e2a1d;
  color: #ff6f3c;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  ul {
    display: flex;
    gap: 16px;
  }

  a {
    &:hover {
      color: #ff9a7b;
      transition: color 0.3s ease;
    }
  }
`;

export const SidebarButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
`;

export const Sidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 16rem;
  background-color: #5e2a1d;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const SidebarNav = styled.nav`
  margin-top: 3rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  a {
    &:hover {
      color: #ff9a7b;
      transition: color 0.3s ease;
    }
  }
`;