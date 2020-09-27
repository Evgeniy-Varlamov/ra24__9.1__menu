import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav class="menu">
      <NavLink className="menu__item" activeClassName="menu__item-active" to="/" exact>Главная</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" to="/drift" exact>Дрифт-такси</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" to="/timeattack" exact>Time Attack</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item-active" to="/forza" exact>Forza Karting</NavLink>
    </nav>
  );
}

export default Menu;