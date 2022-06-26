import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Contract from "./pages/Contract";
import "./App.scss";
// import { TatumPolSDK } from '@tatumio/polygon'
// import { EmbedSDK } from "@epnsproject/frontend-sdk-staging";

const BASE_URL = "https://backend-kovan.epns.io/apis";

// EPNS Channel
const CHANNEL_ADDRESS = "0x266067057613Cb64B79967A00Aa2059687aF86ba";

// useEffect(() => {
//   if (account) { // 'your connected wallet address'
//     EmbedSDK.init({
//       headerText: 'Hello DeFi', // optional
//       targetID: 'sdk-trigger-id', // mandatory
//       appName: 'consumerApp', // mandatory
//       user: account, // mandatory
//       viewOptions: {
//           type: 'sidebar', // optional [default: 'sidebar', 'modal']
//           showUnreadIndicator: true, // optional
//           unreadIndicatorColor: '#cc1919',
//           unreadIndicatorPosition: 'bottom-right',
//       },
//       theme: 'light',
//       onOpen: () => {
//         console.log('-> client dApp onOpen callback');
//       },
//       onClose: () => {
//         console.log('-> client dApp onClose callback');
//       }
//     });
//   }

//   return () => {
//     EmbedSDK.cleanup();
//   };
// }, []);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/contract" element={<Contract />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
