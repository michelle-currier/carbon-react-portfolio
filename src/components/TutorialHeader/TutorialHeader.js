'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar, Light } from '@carbon/icons-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const TutorialHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Nav">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix="IBM"> | m. currier</HeaderName>
          </Link>
          <HeaderNavigation aria-label="Nav">
            <Link href="/repos" passHref legacyBehavior>
              <HeaderMenuItem>Repositories</HeaderMenuItem>
            </Link>
          </HeaderNavigation>
          <HeaderNavigation aria-label="Carbon Tutorial">
            <Link href="/portfolio" passHref legacyBehavior>
              <HeaderMenuItem>Portfolio</HeaderMenuItem>
            </Link>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <Link href="/repos" passHref legacyBehavior>
                  <HeaderMenuItem>Repositories</HeaderMenuItem>
                </Link>
                <Link href="/portfolio" passHref legacyBehavior>
                  <HeaderMenuItem>Portfolio</HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Toggle light and dark theme"
              tooltipAlignment="center"
              onClick={toggleTheme}
            >
              <Light size={20} />
            </HeaderGlobalAction>
            {/* <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction> */}
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default TutorialHeader;
