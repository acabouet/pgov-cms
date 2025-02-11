import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from "next/image";
import { Header, PrimaryNav, Search, NavMenuButton, Title } from "@trussworks/react-uswds";
import PGovLogo from '../assets/pgov-logo.svg';
import USAGoalLogo from '../assets/usa-goals-logo.svg';

export function USAHeader() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);

  const menuItems = [
    <Link key={1} href="/" className={`usa-nav__link ${pathname === "/" ? "usa-current" : ""}`}>
      <span>Goals</span>
    </Link>,
    <Link key={2} href="/agencies" className={`usa-nav__link ${pathname.includes("/agencies") ? "usa-current" : ""}`}>
      <span>Agencies</span>
    </Link>,
  ];

  return(
    <header className="site-header dark-blue-bg grid-row padding-x-3">
      <Image
        src={USAGoalLogo}
        width={166}
        height={60}
        alt={"Performance.gov logo"}
        priority
        className="margin-right-6"
      />
      <nav className="grid-row flex-align-center">
        <Link href="/" className={`usa-nav__link ${pathname === "/" ? "usa-current" : ""}`}>
          <span>Explore</span>
        </Link>
      </nav>
    </header>
  );
}
