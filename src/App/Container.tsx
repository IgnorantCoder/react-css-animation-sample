import * as React from 'react';
import Presentation from './Presentation';
import {
    StateHandler,
    StateHandlerMap,
    StateUpdaters,
    withStateHandlers,
} from 'recompose';

type Outter = {
    animationSeconds: number;
};

type State = {
    inAnimation: boolean;
};

interface Updaters extends StateHandlerMap<State> {
    begin: StateHandler<State>;
    end: StateHandler<State>;
}

type Props
    = Outter
    & State
    & Updaters;

const component: React.SFC<Props> = (props: Props) => {
    const doAnimation = () => {
        props.begin();
        setTimeout(
            () => { props.end(); },
            props.animationSeconds * 1000);
    };

    return (
        <Presentation
            animationSeconds={props.animationSeconds}
            inAnimation={props.inAnimation}
            onClick={doAnimation}
        />
    );
};

const initialState: State = ({ inAnimation: false });

const stateUpdaters: StateUpdaters<Outter, State, Updaters> = {
    begin: (_: State): StateHandler<State> => ((): Partial<State> => ({ inAnimation: true })),
    end: (_: State): StateHandler<State> => ((): Partial<State> => ({ inAnimation: false })),
};

export default withStateHandlers<State, Updaters, Outter>(
    initialState,
    stateUpdaters,
)(component);
