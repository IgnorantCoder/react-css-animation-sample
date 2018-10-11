import * as React from 'react';
import styledComponents from 'styled-components';

type Props = {
    className?: string;
    inAnimation: boolean;
    animationSeconds: number;
    onClick: () => void;
};

const component: React.SFC<Props> = (props: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        props.onClick();
    };
    return (
        <div className={props.className} onClick={handleClick}>
            Click Me.
        </div>
    );
};

export default styledComponents(component)`
    animation-name: ${(props: Props) => (`${props.inAnimation ? 'shake' : 'none'};`)};
    @keyframes shake {
        from,
        to { transform: translate3d(0, 0, 0); }
        10%,
        30%,
        50%,
        70%,
        90% { transform: translate3d(-10px, 0, 0); }
        20%,
        40%,
        60%,
        80% { transform: translate3d(10px, 0, 0); }
    };

    animation-duration : ${(props: Props) => (`${props.animationSeconds.toString()}s`)};
`;
