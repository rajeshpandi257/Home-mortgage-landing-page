import "./Modal.css";
import closeIcon from "../assets/close.jpg";
import emailjs from "@emailjs/browser";
import { Card, Input, Button } from "@material-tailwind/react";
import "react-phone-input-2/lib/style.css";
import { useState, useRef } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  const form = useRef();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Ensure event object and its properties are valid
  };
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value); // Ensure event object and its properties are valid
  };
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_kks9myc",
        "template_rr42qp7",
        form.current,

        "cet_Vgm2x-YOSgDhg"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    event.target.reset();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal ">
          <div className="modal-close-overlay " onClick={closeModal}></div>

          <div className="modal-content   ">
            <button className="modal-close-btn" onClick={closeModal}>
              <img src={closeIcon} alt="Close" />
            </button>

            <div className="h-50 place-items-center   bg-gray-50">
              <Card color="transparent" shadow={true} className="p-7 bg-white">
                <br />
                <form className="mb-4 form" ref={form} onSubmit={sendEmail}>
                  <div>
                    <Input
                      name="from_name"
                      size="lg"
                      type="text"
                      label="FullName"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="from_email"
                      type="email"
                      size="lg"
                      label="Email ID"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="mobile_number"
                      size="lg"
                      type="tel"
                      label="Mobile Number"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="zip_code"
                      size="lg"
                      type="text"
                      label="Zip Code"
                      required
                    />
                  </div>

                  <div>
                    <select
                      name="preferred_time"
                      label="Prefer Timing to Calling"
                      value={selectedOption}
                      onChange={handleChange}
                      id="option"
                      required
                    >
                      {/* <Option value="morning">morning</Option>
                      <Option value="afternoon">Afternoon</Option>
                      <Option value="evening">Evening</Option> */}
                      <option value="">Select</option>

                      <option value="morning">morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>

                  <div>
                    <select
                      name="credit_score"
                      label="Credit Score"
                      id="option"
                      value={selectedOption1}
                      onChange={handleChange1}
                      required
                    >
                      <option value="">Select</option>

                      <option value="580-680">580-680</option>
                      <option value="680">680+</option>
                    </select>
                  </div>

                  <div className="col-span-2  grid grid-cols-2 gap-3">
                    <Button type="submit" value="send">
                      submit
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
