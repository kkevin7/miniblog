import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { ReactReduxFirebaseProvider, getFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import { createFirestoreInstance, reduxFirestore ,getFirestore } from 'redux-firestore'
import fbConfig from "./config/fbConfig";
import Spinner from './components/layout/Spinner/Spinner';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    // reactReduxFirebase(fbConfig, {
    //   userProfile: "users",
    //   useFirestoreForProfile: true,
    //   attachAuthIsReady: true
    // }),
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true
}

const rrfProps = {
  firebase: fbConfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <Spinner/>;
  return children
}

console.log(store);

// store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
      <App />
      </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
// });
