import "antd/dist/antd.css";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import "../locales/i18n";
import { persistor, store } from "../redux/store";
import "../sass/index.scss";
import "../styles/globals.scss";

import { AuthProvider } from "../contexts/JWTContext";
import AOS from 'aos'; // eslint-disable-line
import 'aos/dist/aos.css'; // eslint-disable-line
import { useEffect } from "react";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1500,
      once: true,
    });
   },[]);
  return (
    <AuthProvider>
    
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="source-app">
            <ToastContainer />
            {getLayout(<Component {...pageProps} />)}
          </div>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
