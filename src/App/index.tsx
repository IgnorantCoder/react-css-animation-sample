import * as React from 'react';
import styledComponents from 'styled-components';
import Container from './Container';

type Props = {
    className?: string;
};

const component: React.SFC<Props> = (props: Props) => {
    return (
        <div className={props.className}>
            <Container animationSeconds={0.5}/>
        </div>
    );
};

export default styledComponents(component)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;
