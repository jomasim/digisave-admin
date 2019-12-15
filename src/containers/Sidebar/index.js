import React from 'react'
import { Header,Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SidebarExampleVisible = () => (
    <Sidebar.Pushable as={Segment} style={{ minHeight: '100vh' }}>
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
        >
                <Menu.Item>
                    <Menu.Header>Products</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='enterprise'
                        />
                        <Menu.Item
                            name='consumer'
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>CMS Solutions</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='rails'
                        />
                        <Menu.Item
                            name='python'
                        />
                        <Menu.Item
                            name='php'
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Hosting</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='shared'
                        />
                        <Menu.Item
                            name='dedicated'
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Support</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='email'
                        >
                            E-mail Support
            </Menu.Item>

                        <Menu.Item
                            name='faq'
                        >
                            FAQs
            </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
            <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='/images/wireframe/paragraph.png' />
            </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
)

export default SidebarExampleVisible