# LECTURE

- [(L) Component](./lecture/Component)

  - [React](./Component/1.%20React.md)
    - component, rendering(Mounted), reconciliation, Virtual DOM
  - [JSX](./Component/2.%20JSX.md)
    - JSX, Fragment, JS expresstion, if-statement, &&-conditional-rendering, inline-styling, className
  - [Component](./Component/3.%20Component.md)
    - function-Component, class-Component
    - props, props-redering&value-config, defaultProps, propTypes, propTypes-Required
    - state, state-config-constructor(), setState(), immutable, state-classField-config
  - [Element](./Component/4.%20Element.md)
    - element-structure
  - [EventHandling](./Component/5.%20EventHandling.md)
    - Event Menual, bind-Function, Property-Initializer-Syntax-allowFunction, event of component trigger
  - [ComponentKey](./Component/6.%20ComponentKey.md)
    - key-config, use not index, concat, slice, filter
  - [ComponentLifeCycle](./Component/7.%20ComponentLifeCycle.md)
    - Mount, Update, UnMount, Exception
    - constructor, static-getDerivedStateFromProps, shouldComponentUpdate, render
    - getSnapshotBeforeUpdate, componentDidMount, componentDidUpdate, componentWillUnmount
  - [ContextAPI](./Component/8.%20ContextAPI.md)
  - [ref](./Component/9.%20ref.md)
    - createRef, function-component, ref-callback, forwardRef
  - [module](./Component/모듈시스템.md)

- [(L) ComponentStyle](./lecture/ComponentStyle)

  - [CodeStyle](./ComponentStyle/1.%20CodeStyle.md)
  - [dataset](./ComponentStyle/2.%20dataset.md)
  - [liftingStateUp](./ComponentStyle/3.%20liftingStateUp.md)
  - [higher order component](./ComponentStyle/4.%20higher%20order%20component.md)
  - [render props](./ComponentStyle/5.%20render%20props.md)
  - [render optimization](./ComponentStyle/6.%20render%20optimization.md)

- [(L) Hook](./lecture/Hook)

  - [Hooks](./Hook/Hooks.md)
    - useState, useEffect, rules, useContext, useRef, useMemo, useCallback, useReducer, useImperativeHandle, useLayoutEffect
    - useOnFirstRender like constructor (customHook), usePrevious, useOnUpdate (customHook), forceUpdate (customHook), useHasMounted (customHook), useDebounce (customHook)

- [(L) Redux](./lecture/Redux) // \* !!

  - [vanilla-redux](./Redux/vanilla-redux)
    - reducer, actions
    - store
      - subscribe, dispatch
  - [ReduxCustom](./Redux/ReduxCustom)
    - [createItemsLogic](./Redux/ReduxCustom/createItemsLogic)
      - createItemsLogic(custom), createReducer(custom), mergeReducers(custom)
    - [combineReducer](./Redux/ReduxCustom/combineReducer)
      - combineReducer(redux) vs mergeReducers(custom)
  - [react-redux](./Redux/react-redux)
    - [todo](./Redux/react-redux/todo)
      - createAction(toolkit), createReducer(toolkit), configureStore(toolkit)
      - createSlice(toolkit)
    - [without-react-redux](./Redux/react-redux/without-react-redux)
      - subscribe, unsubscribe
    - [with-react-redux](./Redux/react-redux/with-react-redux)
      - connect
        - mapStateToProps, mapDispatchToProps, Defining mapDispatchToProps As An Object
    - [Hooks](./Redux/react-redux/Hooks.md)
      - reudx Hooks
  - [reselect](./Redux/reselect) // \* !!
    - [without-reselect](./Redux/reselect/without-reselect)
    - [with-reselect](./Redux/reselect/with-reselect)
      - when calculate in mapStateToProps, memozation
    - [with-reselect-props](./Redux/reselect/with-reselect-props)
      - when create Instance to common Component for select function occur bug, sol. closure Function(memozation)
  - [redux-thunk](./Redux/redux-thunk)
    - createReduxThunk, loading-Reducer
  - [redux-saga](./Redux/redux-saga)
    - [with-redux-saga](./Redux/redux-saga/with-redux-saga)
    - [with-redux-saga-exception](./Redux/redux-saga/with-redux-saga-exception)

- [(L) Babel](./lecture/Babel)

  - [Babel](./Babel/1.%20Babel.md)
    - @babel/cli, babel.config.js, webpack (babel-loader), @babel/core, Babel-compile
  - [BabelConfig](./Babel/2.%20BabelConfig.md)
    - extends, env, overrides
  - [BabelConfigFile](./Babel/3.%20BabelConfigFile.md)
  - [BabelPolyfillEnv](./Babel/4.%20BabelPolyfillEnv.md)
    - polyfill, core-js, @babel/preset-env
  - [BabelCustomPlugin](./Babel/5.%20BabelCustomPlugin.md)
    - AST, console.log-remove-plugin, console.log-add-plugin

- [(L) Webpack](./lecture/Webpack) // \* !!
  - [Webpack](./Webpack/1.%20Webpack.md)
  - [TreeShaking](./Webpack/2.%20TreeShaking.md)
  - [CodeSplit](./Webpack/3.%20CodeSplit.md)
  - [CustomLoader](./Webpack/6.%20CustomLoader.md)
  - [CustomPlugin](./Webpack/7.%20CustomPlugin.md)

# PRACTICE

- [(P) reactComponent-without-webpack](./practice/reactComponent.html)

  - react Element
  - react JSX
  - babel -> JSX -> Element

- [(P) class Component LifeCycle](./practice/LifeCycle)

  - each life method parameter
    - prevState, prevProps value check
    - this.state, this.props value check

- [(P) GuGuDan-without-webpack](./practice/GuGuDan)

  - [GuGuDan](./GuGuDan/GuGuDan.html)
    - bind `this`
      - allow function
      - class field
  - [GuGuDan](./GuGuDan/GuGuDan_hooks.html)
    - hook
      - pure fuction + useState function

- [(P) WordRelay](./practice/WordRelay)

  - webpack.config
  - ref
    - function
    - useRef

- [(P) NumberBaseBall](./practice/NumberBaseBall)

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

- [(P) RSP](./practice/RSP)

  - async method setInterval
  - life cycle (class, hook)
  - Higher-Order-Component

- [(P) ResponseCheck](./practice/ResponseCheck)

  - async method like setTimeout
    - why always use clearTimeout?
      - MountUpdate!! -> if don't use the clearTimeout, queue the async WEB API method
      - so, you don't have that you want it result

- [(P) Higer order Component](./practice/Higher%20order%20Component)

  - inner Component has props that Higher order Component return value

- [(P) Lotto](./practice/Lotto)

  - useEffect look up dependency props or state
