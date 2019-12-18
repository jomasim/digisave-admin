import React from 'react'
import { Image, Menu, Segment, Sidebar, Icon, } from 'semantic-ui-react'
import NavHeader from '../NavHeader';
import Placeholder from '../Placeholder';
import './sidebar.css';
import logo from './logo.svg';
import { getCurrenUser } from '../../utils/profile';
import greetingText from '../../utils/greetingText';


const SidebarVisible = ({ handleSignOut }) => (
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
                <span>Dashboard</span>
            </div>
            <div className="menu-items">
                <Menu.Item className="menu-subgroup">
                    <Menu.Header className="menu-header">ORGANIZATIONS</Menu.Header>
                    <Menu.Item as='a'>
                        <Icon name='handshake outline' />
                        <span>Services</span>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='user outline' />
                        <span>Users</span>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='medapps' />
                        <span>Applications</span>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='folder open outline' />
                        <span>Reports</span>
                    </Menu.Item>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header className="menu-header" >CUSTOMERS</Menu.Header>
                    <Menu.Item as='a'>
                        <Icon name='handshake outline' />
                        <span>Enterprise</span>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='folder open outline' />
                        <span>Reports</span>
                    </Menu.Item>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header className="menu-header">PAYMENTS</Menu.Header>
                    <Menu.Item as='a'>
                        <Icon name='square outline' />
                        <span>Transactions</span>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='folder open outline' />
                        <span>Reports</span>
                    </Menu.Item>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header className="menu-header">SUPPORT</Menu.Header>
                    <Menu.Item as='a'>
                        <Icon name='wrench' />
                        <span>Administration</span>
                    </Menu.Item>
                </Menu.Item>
            </div>
        </Sidebar>

        <Sidebar.Pusher className="dashaboard-content">
            <Segment basic>
                <NavHeader handleSignOut={handleSignOut} />
                <div className="content-header" >
                    <h3 className="greeting">{greetingText()} {getCurrenUser()} !</h3>
                    <div className="content-secondary-title">Dashboard</div>
                </div>
                <Placeholder className="placeholder-segment" />
            </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
)

export default SidebarVisible;