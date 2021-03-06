import * as React from 'react';

import { TransitionCallbacks } from './helpers';

type ComponentOrElement = React.ReactInstance | Node;
export type Placement =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start';

export interface OverlayInjectedProps {
  show: boolean;
  arrowProps: Record<string, any>;
  popper: {
    state: any;
    outOfBoundaries: boolean;
    placement: Placement;
    scheduleUpdate: () => void;
  };
  [prop: string]: any;
}

export type OverlayChildren =
  | React.ReactElement<OverlayInjectedProps>
  | ((injected: OverlayInjectedProps) => React.ReactNode);

export interface OverlayProps extends TransitionCallbacks {
  children: OverlayChildren;
  container?: ComponentOrElement | ((props: object) => ComponentOrElement);
  target?: ComponentOrElement | ((props: object) => ComponentOrElement);
  show?: boolean;
  popperConfig?: object;
  rootClose?: boolean;
  rootCloseEvent?: 'click' | 'mousedown';
  onHide?: (event: React.SyntheticEvent) => void;
  transition?: boolean | React.ElementType;
  placement?: Placement;
}

declare class Overlay extends React.Component<OverlayProps> {}

export default Overlay;
