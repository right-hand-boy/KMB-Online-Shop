import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catagories from "./pages/Catagories";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Help from "./pages/Help";
import Footer from "./components/footer/Footer";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import MerchantUploadPage from "./pages/MerchantUploadPage";
import NotFoundPage from "./pages/NotFoundPage ";
// import PrivacySetting from "./pages/PrivacySetting";
// import Profile from "./pages/Profile";
// import MyWallet from "./pages/MyWallet";
// import Transaction from "./pages/Transaction";
// import Dashboard from "./pages/Dashboard";
import ContactInformation from "./pages/Account Settings/ContactInformation";
import CommunicationPreferences from "./pages/Account Settings/CommunicationPreferences";
import FeedbackPreferences from "./pages/Account Settings/FeedbackPreferences";
import NotificationSetting from "./pages/Account Settings/NotificationSetting";
import OrderSetting from "./pages/Account Settings/OrderSetting";
import Paymentsetting from "./pages/Account Settings/Paymentsetting";
import PrivacySetting from "./pages/Account Settings/PrivacySetting";
import SecuritySetting from "./pages/Account Settings/SecuritySetting";
import SocialMediaIntegration from "./pages/Account Settings/SocialMediaIntegration";
import SubscriptionSettng from "./pages/Account Settings/SubscriptionSettng";
import ProfileInformation from "./pages/Account Settings/ProfileInformation";
import DataManagment from "./pages/Account Settings/DataManagment";
// import ContactInformation  from "./pages/Account Settings/"
function App() {
  const [correct, setCorrect] = useState(false);
  const asres = "12341";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/user">
            <Route index element={<HomePage />} />
            <Route path="accountSetting">
              <Route index element={<ProfileInformation />} />
              <Route
                path="profileinformation"
                element={<ProfileInformation />}
              />
              <Route
                path="communicationpreferences"
                element={<CommunicationPreferences />}
              />
              <Route path="paymentsettings" element={<Paymentsetting />} />
              <Route
                path="contactinformation"
                element={<ContactInformation />}
              />
              <Route path="securitysettings" element={<SecuritySetting />} />
              <Route path="privacysettings" element={<PrivacySetting />} />
              <Route
                path="notificationsettings"
                element={<NotificationSetting />}
              />
              <Route path="ordersettings" element={<OrderSetting />} />
              <Route
                path="subscriptionsettings"
                element={<SubscriptionSettng />}
              />
              <Route
                path="socialmediaintegration"
                element={<SocialMediaIntegration />}
              />
              <Route
                path="feedbackpreference"
                element={<FeedbackPreferences />}
              />
              <Route path="datamanagment" element={<DataManagment />} />

              {/* <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profileInformation" element={<PrivacySetting />} />
              <Route path="mywallet" element={<MyWallet />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="transaction" element={<Transaction />} /> */}
            </Route>
          </Route>
          <Route path="/merchant" element={<MerchantUploadPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
