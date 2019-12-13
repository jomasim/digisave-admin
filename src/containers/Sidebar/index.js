import React from 'react'
import { Image, Menu, Segment, Sidebar, Icon, } from 'semantic-ui-react'
import NavHeader from '../../components/NavHeader';
import Placeholder from '../../components/Placeholder';
import './sidebar.css';
import logo from './logo.svg';

const SidebarExampleVisible = () => (
    <Sidebar.Pushable className='dashboard-container' as={Segment} style={{ minHeight: '100vh' }}>
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
        >
            <div>
                <Image src={logo} className='sidebar-logo' size='small' verticalAlign='top' />
            </div>
            <div className="dashboard-header">
                <Icon name="home" />
                Dashboard
            </div>
            <div className="menu-items">
                <Menu.Item className="menu-subgroup">
                    <Menu.Header className="menu-header">Products</Menu.Header>
                    <Menu.Item as='a'>
                        <Icon name='deskpro' />
                        Enterprise
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='deskpro' />
                        Enterprise
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header className="menu-header" >CMS Solutions</Menu.Header>
                    <Menu.Item as='a'>
                        <Icon name='deskpro' />
                        Enterprise
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='deskpro' />
                        Enterprise
                    </Menu.Item>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header className="menu-header">Hosting</Menu.Header>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='deskpro' />
                        Enterprise
                    </Menu.Item>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header className="menu-header">Support</Menu.Header>
                    <Menu.Item as='a'>
                        <Icon name='deskpro' />
                        Enterprise
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                </Menu.Item>
            </div>
        </Sidebar>

        <Sidebar.Pusher className="dashaboard-content">
            <Segment basic>
                <NavHeader/>
                <div className="content-header" >
                    <h2>Good morning John Doe!</h2>
                    <div className="content-secondary-title">Dashboard</div>
                </div>
                <Placeholder className="placeholder-segment"/>
            </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
)

export default SidebarExampleVisible