// Import
import { Routes, Route, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import Home from "../home/Home";
import PageNotFound from "../static/pageNotFound";
import SignUp from "../authentication/signUp";
import SignIn from "../authentication/signIn";
import ForgetPassword from "../authentication/forgetPassword";

// user - settings
import AccountSettings from "../user/accountSettings";
import PersonalInfos from "../user/personalInfos";
import PaymentMethods from "../user/paymentMethods";
import ChangePassword from "../user/changePassword";
import Privacy from "../user/privacy";
// import Profile from "../user/profile";
// import EditProfile from "../user/editProfile";

// workouts
// import WorkoutIndex from "../workout/index";
// import WorkoutShow from "../workout/show";
import WorkoutForm from "../workout/workoutForm";

// statics
import TermsOfUse from "../static/termsOfUse";
import LegalNotices from "../static/legalNotices";
import PrivacyPolicy from "../static/privacyPolicy";
import Host from "../static/host";

// help
import Help from "../help/help";

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

      {/* <Route path="/profile/:user_id" element={<Profile/>} /> */}
      {/* <Route path="/profile/:user_id/edit" element={<EditProfile/>} /> */}
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/account-settings/personal-infos" element={<PersonalInfos />} />
      <Route path="/account-settings/security" element={<ChangePassword />} />
      <Route path="/account-settings/privacy" element={<Privacy/>} />
      <Route path="/account-settings/payment-methods" element={<PaymentMethods/>} />
      {/* <Route path="/account-settings/:user_id/my-reservation" element={<ProfileReservation />} />
      <Route path="/account-settings/:user_id/hosted_workouts" element={<HostedWorkoutHistory/>} /> */}


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
