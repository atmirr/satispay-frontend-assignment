import React from 'react';
import { Layout } from 'antd';
import PokemonsLogo from '../../assets/images/pokemons-logo.png';

function Header() {
  return (
    <>
      <Layout.Header className="header">
        <img src={PokemonsLogo} alt="Pokemons logo" className="logo" />
      </Layout.Header>
      <div className="gutter" />
    </>
  );
}

export default Header;
