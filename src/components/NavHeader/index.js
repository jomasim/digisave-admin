import React from 'react';
import { Menu, Icon, Input, Image, Dropdown, Label } from 'semantic-ui-react'
import profile from './avatar.svg';
import './navheader.css';
import { getCurrenUser } from '../../utils/profile';

const NavHeader = ({ handleSignOut }) => (
    <div>
        <Menu pointing secondary className="menu-left">
            <Menu.Item as='a'>
                <Icon name='bell outline' size='large' />
                <Label className="badge" size="tiny" circular > 2 </Label>
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='setting' size='large' />
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' className="search-box" />
                </Menu.Item>
                <Menu.Item className="profile-menu">
                    <Image src={profile} avatar />
                    <span className="hello">Hello,</span>
                    <span className="profile-name">{getCurrenUser()}</span>
                    <Dropdown pointing='top'   >
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                My profile
                                        <Icon name="user outline" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Inbox
                                        <Icon name="inbox" />
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleSignOut}>
                                Logout
                                        <Icon name="power off" />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
);
export default NavHeader;