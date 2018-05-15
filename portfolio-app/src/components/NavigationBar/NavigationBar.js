import React, { Component } from 'react'
import {NavigationContainer, NavItem} from './NavigationBar.style';

export default class NavigationBar extends Component {
    render() {
        return (
            <NavigationContainer>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/projects">Projetos</NavItem>
                <NavItem to="/aboutMe">Sobre mim</NavItem>
            </NavigationContainer>
        )
    }
}
