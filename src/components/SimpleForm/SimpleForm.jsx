import React from "react";

const SimpleForm = () => {
  // e mane event
  const handleSubmit = (e) => {
    // e.preventDefault() eta deyar karon holo sadharonoto form jokhon submit korte jai tokhon page ta by default reload hoye jay.ar page er ei default behavior bondho korar jonno ei reload ta bondho korar jonno e.preventDefault() eta use kora hoy.
    e.preventDefault();

    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);

    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
