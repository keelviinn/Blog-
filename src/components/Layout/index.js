import React from "react";
import PropTypes from "prop-types";

import Sidebar from '../Sidebar';
import Menubar from '../MenuBar';

import GlobalStyles from '../../styles/global';
import { LayoutWrapper, LayoutMain } from './styles' 

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />      
      <Sidebar />      
      <LayoutMain>{children}</LayoutMain>  
      <Menubar /> 
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
