import React from 'react';
import {Li, Ul, Container} from './styles';

const Timeline = props => {
    const listBio = props.names.map((name, index) => (
        <Li 
                key={index}
                data-key={index}
                onClick={e => {
                    props.setIndex(index);
                    e.target.focus({preventScroll: false})
                }}
                tabIndex={index}>
                    {name}
                </Li>
    ));

    return (
        <Container>
            <Ul>{listBio}</Ul>
        </Container>
    )
}

export default Timeline