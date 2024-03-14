import { useState, useEffect } from "react";
import ApiEndpoint1 from "../../../utlis/axiosConfig.js";
//components
import MovieBoxArea from "../../../components/MovieBoxArea.js";

export default function Main_Contact_Us(props) {
  const global_props = props.global_props;

  useEffect(function () {
    document.title =
      global_props["SiteData"].application_name + " | Contact Us ";
  }, []);

  const [formSubmitState, setFormSubmitState] = useState(0);
  const [formErrorContent, setFormErrorContent] = useState("");

  const [formData, setFormData] = useState({
    contact_name: "",
    contact_email: "",
    contact_message: "",
    created_at: "",
  });

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.contact_name.length < 5 ||
      formData.contact_email.length < 5 ||
      formData.contact_message.length < 20 ||
      !validateEmail(formData.contact_email)
    ) {
      // Show an error message or perform some action for invalid data
      setFormErrorContent(
        <div className="errorZone_style1">
          <ul>
            <li>Name must be at least five characters long</li>
            <li>Email must be at least five characters long</li>
            <li>Message must be at least 20 characters long</li>
            <li>Please enter a valid email address</li>
          </ul>
        </div>
      );
      return;
    } else {
      setFormErrorContent("");
      const newFormData = {
        ...formData,
        created_at: Math.floor(Date.now() / 1000),
      };
      const response = await ApiEndpoint1.post(
        "/api/v1/contact-us/",
        JSON.stringify(newFormData)
      );
      console.log("move");
      console.log("me", response.status);

      if (response.status == 201) {
        setFormSubmitState(1);
      } else {
        console.error("Form submission failed.");
        setFormErrorContent(
          <div className="errorZone_style1">Unfortunately, the submission of the form was not successful. We kindly request you to please attempt the submission once more.</div>
        );
      }
    }
  };

  const FormJsx = (
    <form className="contact_us_form" onSubmit={handleSubmit}>
      <div className="errorZone">{formErrorContent}</div>
      <div className="input_container">
        <label>Your Name (required)</label>
        <input
          type="text"
          name="contact_name"
          value={formData.contact_name}
          onChange={handleChange}
        />
      </div>
      <div className="input_container">
        <label>Your Email (required)</label>
        <input
          type="text"
          name="contact_email"
          value={formData.contact_email}
          onChange={handleChange}
        />
      </div>
      <div className="input_container">
        <label>Your Message (required)</label>
        <textarea
          name="contact_message"
          value={formData.contact_message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="submit_button_area">
        <button>Submit</button>
      </div>
    </form>
  );
  const ContactUsSubmittedJs = (
    <>
      <div className="submitted-message">
        <div className="submitted-title">
          Your message has been successfully submitted!
        </div>
        <span className="submitted-text">
          Thank you for getting in touch with us.
        </span>
      </div>
    </>
  );
  const FormJsxHeader = (
    <>
      <div className="page_name">SEND US AN EMAIL</div>
      <div className="line_divider_2"></div>
    </>
  );

  return (
    <>
      <div className="section_padding1">
        <div className="application_crumbs">Home / Contact Us</div>

        {formSubmitState === 0
          ? FormJsx
          : formSubmitState === 1
          ? ContactUsSubmittedJs
          : null}

        <hr />
        <>
          {/* start movie box */}
          <MovieBoxArea />
          {/* end movie box */}
        </>
      </div>
    </>
  );
}
