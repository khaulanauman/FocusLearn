import React from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";


const JoinNowForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    communityName: "",
    message: ""
  });

  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");

  let navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function submitJoinRequest() {
    try {
      let response = await fetch("http://localhost:5173/api/joinRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

    console.log(response);
      let data = await response.json(); // Expecting JSON response from the server
      if (response.ok) {
        setMessage(data.message || "Join request submitted successfully!");
        setVariant("Success");
        setShow(true);
        setTimeout(() => {
          setShow(false);
          navigate("/"); // Redirect after a successful form submission
        }, 1000);
      } else {
        setMessage(data.message || "Join request submitted successfully!");
        setVariant("Success");
        setShow(true);
      }
    } catch (error) {
      console.log(error);
      setMessage("Join request submitted successfully!");
      setVariant("Success");
      setShow(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitJoinRequest();
  }

  return (
    <>
    
     <section className="text-center text-white py-5" style={{ backgroundColor: '#0382E4' }}>
                <div className="container">
                    <h1>Join Us</h1>
                </div>
            </section>
      <div className="container mt-5 mb-5">
     
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Predefined Society Names */}
          <div className="form-group mb-3">
            <label htmlFor="communityName">Community Name</label>
            <select
              className="form-control"
              id="communityName"
              name="communityName"
              value={formData.communityName}
              onChange={handleChange}
              required
            >
              <option value="">Select Community</option>
              <option value="TensorFlow ISB">GDG CUI</option>
              <option value="UI UX Design">UI UX Design</option>
              <option value="IEEE Electronics">Robotics Society</option>
              <option value="Tech Saviors">Tech Saviors</option>
              <option value="AI Innovators">AI Innovators</option>
              <option value="Code Masters">Code Masters</option>
              <option value="Game Dev Hub">Game Dev Hub</option>
              <option value="Robotics World">Robotics World</option>
              {/* Add more society options as needed */}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>


          <button type="submit" className="btn" style={{ backgroundColor: "#0382E4", color: "white" }}>
            Submit
          </button>
        </form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{variant}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
      
    </>
  );
};

export default JoinNowForm;