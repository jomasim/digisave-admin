import React from 'react';
import { Menu, Icon, Input, Image, Dropdown } from 'semantic-ui-react'
import profile from './avatar.svg';
import './navheader.css';

const NavHeader = () => (
    <div>
        <Menu pointing secondary className="menu-left">
            <Menu.Item as='a'>
                <Icon name='bell outline' size='large' />
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='setting' size='large' />
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item className="menu-profile">
                    <div>
                        <Image src={profile} avatar />
                        <span className="hello">Hello, </span>
                        <span>
                            John Doe
                        <Dropdown />
                        </span>
                    </div>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
);
export default NavHeader;