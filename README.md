# LECTURE

- [(L) Component](lecture/Component)

  - [React](lecture/Component/1.%20React.md)
    - component, rendering(Mounted), reconciliation, Virtual DOM
  - [JSX](lecture/Component/2.%20JSX.md)
    - JSX, Fragment, JS expresstion, if-statement, &&-conditional-rendering, inline-styling, className
  - [Component](lecture/Component/3.%20Component.md)
    - function-Component, class-Component
    - props, props-rendering&value(props)-setting, defaultProps, propTypes, propTypes-Required
    - state, state-setting-constructor(), setState(), immutable, state-classField-setting
  - [Element](lecture/Component/4.%20Element.md)
    - element-structure
  - [EventHandling](lecture/Component/5.%20EventHandling.md)
    - Event Menual, bind-Function, Property-Initializer-Syntax-allowFunction, event of component trigger
  - [ComponentKey](lecture/Component/6.%20ComponentKey.md)
    - key-setting, use not index, concat, slice, filter
  - [ComponentLifeCycle](lecture/Component/7.%20ComponentLifeCycle.md)
    - Mount, Update, UnMount, Exception
    - constructor, static-getDerivedStateFromProps, shouldComponentUpdate, render
    - getSnapshotBeforeUpdate, componentDidMount, componentDidUpdate, componentWillUnmount
  - [ContextAPI](lecture/Component/8.%20ContextAPI.md)
  - [ref](lecture/Component/9.%20ref.md)
    - createRef, function-component, ref-callback, forwardRef
  - [module](lecture/Component/모듈시스템.md)

- [(L) ComponentStyle](lecture/ComponentStyle)

  - [CodeStyle](lecture/ComponentStyle/1.%20CodeStyle.md)
  - [dataset](lecture/ComponentStyle/2.%20dataset.md)
  - [liftingStateUp](lecture/ComponentStyle/3.%20liftingStateUp.md)
  - [higher order component](lecture/ComponentStyle/4.%20higher%20order%20component.md)
  - [render props](lecture/ComponentStyle/5.%20render%20props.md)
  - [render optimization](lecture/ComponentStyle/6.%20render%20optimization.md)

- [(L) Hook](lecture/Hook)

  - [Hooks](lecture/Hook/Hooks.md)
    - useState, useEffect, rules, useContext, useRef, useMemo, useCallback, useReducer, useImperativeHandle, useLayoutEffect
    - useOnFirstRender like constructor (customHook), usePrevious, useOnUpdate (customHook), forceUpdate (customHook), useHasMounted (customHook), useDebounce (customHook)

- [(L) Babel](lecture/Babel)

  - [Babel](lecture/Babel/1.%20Babel.md)
    - @babel/cli, babel.config.js, webpack (babel-loader), @babel/core, Babel-compile
  - [BabelConfig](lecture/Babel/2.%20BabelConfig.md)
    - extends, env, overrides
  - [BabelConfigFile](lecture/Babel/3.%20BabelConfigFile.md)
  - [BabelPolyfillEnv](lecture/Babel/4.%20BabelPolyfillEnv.md)
    - polyfill, core-js, @babel/preset-env
  - [BabelCustomPlugin](lecture/Babel/5.%20BabelCustomPlugin.md)
    - AST, console.log-remove-plugin, console.log-add-plugin

- [(L) Webpack](lecture/Webpack)

  - [Webpack](lecture/Webpack/1.%20Webpack.md)
  - [TreeShaking](lecture/Webpack/2.%20TreeShaking.md)
  - [CodeSplit](lecture/Webpack/3.%20CodeSplit.md)
  - [CustomLoader](lecture/Webpack/6.%20CustomLoader.md)
  - [CustomPlugin](lecture/Webpack/7.%20CustomPlugin.md)

# PRACTICE

- [(P) reactComponent-without-webpack](practice/reactComponent.html)

  - react Element
  - react JSX
  - babel -> JSX -> Element

- [(P) class Component LifeCycle](practice/LifeCycle)

  - each life method parameter
    - prevState, prevProps value check
    - this.state, this.props value check
  - if return {}(object) in getDerivedStateFromProps(), no re-cycle to init step!!
    - just keep going currenet cycle, and nextState change.
  - if just parent update state, children component work?
    - children component call cycle. => rendering(Virtual DOM), but don't work real DOM.

- [(P) GuGuDan-without-webpack](practice/GuGuDan)

  - [GuGuDan](practice/GuGuDan/GuGuDan.html)
    - bind `this`
      - allow function
      - class field
  - [GuGuDan](practice/GuGuDan/GuGuDan_hooks.html)
    - hook
      - pure fuction + useState function

- [(P) WordRelay](practice/WordRelay)

  - webpack.config
  - ref
    - function
    - useRef

- [(P) NumberBaseBall](practice/NumberBaseBall)

  - component separate
  - pureComponent
  - ref
    - createRef
  - `state` only insert values **immutable**
  - state batch
    - if change many state using setState, you don't have that you want it result always
    - first parameter of setState function knows **previous State**
  - mount update manage like shouldComponentUpdate
    - PureComponent
    - memo
  - useMemo

- [(P) RSP](practice/RSP)

  - async method setInterval
  - life cycle (class, hook)
  - Higher-Order-Component

- [(P) ResponseCheck](practice/ResponseCheck)

  - async method like setTimeout
    - why always use clearTimeout?
      - MountUpdate!! -> if don't use the clearTimeout, queue the async WEB API method
      - so, you don't have that you want it result

- [(P) Higer order Component](practice/Higher%20order%20Component)

  - inner Component has props that Higher order Component return value

- [(P) Lotto](practice/Lotto)

  - useEffect look up dependency props or state

- [(P) TicTacToe](practice/TicTacToe)

  - reducer => async call, if sync call, use useEffect call
  - useMemo => can know component

- [(P) MineSearch](practice/MineSearch)

  - ContextAPI
