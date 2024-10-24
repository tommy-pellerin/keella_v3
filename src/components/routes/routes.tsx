// Import
import { Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import Home from "../home/Home";
import PageNotFound from "../static/pageNotFound";
import SignUp from "../authentication/signUp";
import SignIn from "../authentication/signIn";
import ForgetPassword from "../authentication/forgetPassword";

import MyAccount from "../user/myAccount";

import WorkoutIndex from "../workout/index";
import WorkoutShow from "../workout/show";
import WorkoutForm from "../workout/workoutForm";

import TermsOfUse from "../static/termsOfUse";
import LegalNotices from "../static/legalNotices";
import PrivacyPolicy from "../static/privacyPolicy";
import Help from "../static/help";
import Host from "../static/host";


// Atom
// import { useAtom } from "jotai";
// import { userAtom } from "../../store/user";


export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forget-password" element={<ForgetPassword />} />

      <Route path="/my-account" element={<MyAccount />} />

      {/* <Route path="/workouts" element={<WorkoutIndex />} /> */}
      {/* <Route path="/workouts/:workout_id" element={<WorkoutShow />} /> */}
      <Route path="/workouts/create" element={<WorkoutForm />} />
      <Route path="/workouts/:workout_id/edit" element={<WorkoutForm />}/>

      <Route path="/host" element={<Host />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/legal-notices" element={<LegalNotices />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<Help />} />

      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
}
