import React from 'react';
import {Segment, Header, Input, Icon} from 'semantic-ui-react';

const MessageHeader = (props) => {
    return <Segment clearing>
        <Header floated = "left" as = "h2">
            <span>
                {props.channelName} 
                <Icon
                    onClick={props.starChange}
                    name={props.starred ? "star" : "star outline"}
                    color={props.starred ? "yellow" : "black"} />
            </span>
        </Header>
        <Header floated = "right">
            <Input
            name = "search"
            icon = "search"
            placeholder = "Search Messages"
            size = "mini"
            onChange = {props.searchTermChange} 
            />
        </Header>
    </Segment>
}

export default MessageHeader;