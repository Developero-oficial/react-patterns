import {CustomHookPage} from './custom-hook';
import {HocPage} from './hoc';
import {ExtensibleStylesPage} from './extensible-styles';
import {CompoundComponentPage} from './compound-component';
import {RenderPropsPage} from './render-props';
import {ControlPropsPage} from './control-props';
import {PropsGettersPage} from './props-getters';
import {StateInitializerPage} from './state-initializer';
import {StateReducerPage} from './state-reducer';
import {WelcomePage} from './components/welcome-page';

export const routes = [
  {
    path: '/',
    label: 'Bienvenida',
    Component: WelcomePage,
    exact: true,
  },
  {
    path: '/custom-hook',
    label: 'Custom Hooks',
    Component: CustomHookPage,
  },
  {
    path: '/hoc',
    label: 'HOC',
    Component: HocPage,
  },
  {
    path: '/extensible-styles',
    label: 'Extensible Styles',
    Component: ExtensibleStylesPage,
  },
  {
    path: '/compound-components',
    label: 'Compound Components',
    Component: CompoundComponentPage,
  },
  {
    path: '/render-props',
    label: 'Render Props',
    Component: RenderPropsPage,
  },
  {
    path: '/control-props',
    label: 'Control Props',
    Component: ControlPropsPage,
  },
  {
    path: '/props-getters',
    label: 'Props Getters',
    Component: PropsGettersPage,
  },
  {
    path: '/state-initializer',
    label: 'State Initializer',
    Component: StateInitializerPage,
  },
  {
    path: '/state-reducer',
    label: 'State Reducer',
    Component: StateReducerPage,
  },
];
