import "./App.css";
// import HookForm from "./components/HookForm/HookForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up data : ", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("update profile : ", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign UP"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up </h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        {/* eta children props hisebe pathano hobe */}
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
