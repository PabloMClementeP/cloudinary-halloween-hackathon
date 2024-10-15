"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Ghost, Menu, X } from 'lucide-react';
import { CloseButton, HeaderContainer, LogoLink, Nav, Sidebar, SidebarButton, SidebarNav, SidebarOverlay } from './style';


export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <HeaderContainer>
      <LogoLink href="/">
        <Ghost width={24} height={24} />
        <span>Scary Letter</span>
      </LogoLink>
      <Nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/start">Crear</Link>
          </li>
          <li>
            <Link href="/about">Acerca de</Link>
          </li>
        </ul>
      </Nav>
      <SidebarButton onClick={toggleSidebar}>
        <Menu width={24} height={24} />
      </SidebarButton>
      {isSidebarOpen && (
        <>
          <SidebarOverlay />
          <Sidebar ref={sidebarRef}>
            <CloseButton onClick={toggleSidebar}>
              <X width={24} height={24} />
            </CloseButton>
            <SidebarNav>
              <ul>
                <li>
                  <Link href="/" onClick={toggleSidebar}>Home</Link>
                </li>
                <li>
                  <Link href="/start" onClick={toggleSidebar}>Crear</Link>
                </li>
                <li>
                  <Link href="/about" onClick={toggleSidebar}>Acerca de</Link>
                </li>
              </ul>
            </SidebarNav>
          </Sidebar>
        </>
      )}
    </HeaderContainer>
  );
}
