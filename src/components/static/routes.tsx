// Import
import { Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import Home from "../home/Home";
import PageNotFound from "./pageNotFound";

import MyAccount from "../user/myAccount";

import TermsOfUse from "./termsOfUse";
import LegalNotices from "./legalNotices";
import PrivacyPolicy from "./privacyPolicy";
import Help from "./help";

// Atom
// import { useAtom } from "jotai";
// import { userAtom } from "../../store/user";


export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/my-account" element={<MyAccount />} />

      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/legal-notices" element={<LegalNotices />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<Help />} />

      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}
