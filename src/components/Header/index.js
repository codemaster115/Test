import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const _Header = (props) => {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>{props.title}</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
    )
}

export default _Header;