import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
  // Reference :  (উল্লেখ) . mane tumi kono kichu ullekh kore diccho erokom ekta bisoy.
  // useRef : tomare ekta object dibe jar moddhe current nam a ekta property thakbe.se current property er moddhe current value ta thake.
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // ekhane useEffect use kora hoyeche karon nameRef eta ekta side effect mane eta ei file er noy.eta k bairer kono jayga theke niye asa hoiche jeta side effect . ar side effect hole amra useEffect ta use korbo.
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          defaultValue={"rojoni@sojoni.com"}
          id=""
        />
        <br />
        <input ref={passwordRef} type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
