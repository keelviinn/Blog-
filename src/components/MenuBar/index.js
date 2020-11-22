import React, { useState, useEffect } from 'react';

import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { Bulb as BulbOff } from '@styled-icons/boxicons-regular/Bulb';
import { Bulb as BulbOn } from '@styled-icons/boxicons-solid/Bulb';
import { GridAlt } from '@styled-icons/boxicons-regular/GridAlt';
import { ListAlt } from '@styled-icons/fa-regular/ListAlt';

import getThemeColor from '../../utils/getThemeColor';
import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem,
} from './styles';

export default function MenuBar() {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/" title="Voltar para Home">
          <MenuBarItem>
            <HomeSmile />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/search" title="Pesquisar">
          <MenuBarItem>
            <Search />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>
      <MenuBarGroup>
        <MenuBarItem
          title="Mudar o Tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          {isDarkMode ? <BulbOff /> : <BulbOn />}
        </MenuBarItem>
        <MenuBarItem
          title="Mudar Visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
          }}
          className="display"
        >
          {isListMode ? <GridAlt /> : <ListAlt />}
        </MenuBarItem>
        <MenuBarItem title="Ir para o Topo">
          <UpArrowAlt />
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  );
}
