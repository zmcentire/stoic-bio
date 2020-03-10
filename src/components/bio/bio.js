import React from 'react';
import {Container, Title, Index, ContentContainer, Content} from './styles';

const Bio = props => {
    return (
        <Container>
            <Title>{props.names[props.index]}</Title>
            <Index>({props.index+1})</Index>
            <ContentContainer>
                <Content>
                    {props.bios[props.index]}
                    <br/>
                    {props.quotes[props.index]}
                    <br/>
                    <Title>Recommended Readings</Title>
                    {props.readings[props.index]}
                </Content>
            </ContentContainer>
        </Container>
    )
}

export default Bio