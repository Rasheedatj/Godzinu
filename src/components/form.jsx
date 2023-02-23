import { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.convertkit.com/landing_pages/bfc985ae66/embed";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="ck_form_container" className="ck_form ">
      <div className="ck_form_fields">
        <div id="ck_success_msg" className="ck_success_msg text-[white]">
          <p>Thank you for subscribing!</p>
        </div>
        <form
          className="subscribe flex w-[100%] btn"
          action="https://godzinu.ck.page/bfc985ae66"
          data-remote="true"
        >
          <p className="w-[70%]">
            <input
              type="email"
              name="email_address"
              placeholder="Your email address"
              required
              className="bg-[black] p-[.5rem] lg:p-[1rem] text-[white]  w-[100%]"
            />
          </p>
          <button
            className="btn flex items-center justify-center text-[white] w-[30%] lg:text-[21.39px]"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
