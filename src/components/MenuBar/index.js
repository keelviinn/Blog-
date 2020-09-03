import React from 'react';

import { HomeSmile } from '@styled-icons/boxicons-regular/HomeSmile';
import { Search } from '@styled-icons/boxicons-regular/Search';
import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt';
import { Bulb as BulbOff } from '@styled-icons/boxicons-regular/Bulb';
// import { Bulb as BulbOn } from '@styled-icons/boxicons-solid/Bulb';
import { GridAlt } from '@styled-icons/boxicons-regular/GridAlt';

import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem
} from './styles';

export default function MenuBar() {
  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink to="/" title="Voltar para Home">
          <MenuBarItem><HomeSmile /></MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="/search" title="Pesquisar">
          <MenuBarItem><Search /></MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>
      <MenuBarGroup>
        <MenuBarItem title="Mudar o Tema"><BulbOff /></MenuBarItem>
        <MenuBarItem title="Mudar Visualização"><GridAlt /></MenuBarItem>
        <MenuBarItem title="Ir para o Topo"><UpArrowAlt /></MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  )  
}
