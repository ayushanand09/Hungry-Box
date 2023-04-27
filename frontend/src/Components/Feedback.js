import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../CSS/Feedback.css";
import axios from "axios";

axios.defaults.withCredentials   = true

const Feedback = () => {

  const navigate = useNavigate();

  const [feedback, setFeedback] = useState({
    name: "",
    age: "",
    email: "",
    comment: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFeedback({
        ...feedback,
        [name]: value
    })
  }

  const addFeedback = () => {
    const {name, age, email, comment} = feedback
    if (name && age && email && comment){
        alert("Feedback Provided")
        axios.post("http://localhost:4000/api/v1/feedback/new", feedback)
        .then((res) => {
            alert("Thanks for your valuable feedback :)")
        })
    }
    else {
        alert("Please fill all the fields")
    }
  }

  return (
    <>
    <Navbar />
    <div className="form-structure">
      <form className="form" action="#">
        <div className="insideForm">
          <label htmlFor="Name" target="_blak">
            Name*{" "}
          </label>
          <input
            type="text"
            name="name"
            value = {feedback.name}
            maxLength={20}
            placeholder="Enter full name"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="age" target="_blank">
            Age*{" "}
          </label>
          <input
            type="number"
            name="age"
            value = {feedback.age}
            maxLength={2}
            placeholder="Enter age"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email" target="_blank">
            Mail ID*{" "}
          </label>
          <input
            type="email"
            name="email"
            value = {feedback.email}
            placeholder="Enter mail ID"
            onChange={handleChange}
            required
          />
          <br />
          <label
            htmlFor="satisfaction"
            name="satisfaction"
            id="satisfaction"
            placeholder="Satisfaction"
          >
            Please rate your overall satisfaction from the analysis
          </label>
          <br />
          <div className="txtarea">
            <textarea
              name="comment"
              inputMode="text"
              rows={10}
              cols={30}
              placeholder="Your comment..."
              defaultValue={" "}
              value = {feedback.comment}
              onChange={handleChange}
            />
          </div>
          <div className="btn-pos">
            <button id="btn1" onClick={addFeedback}>Submit</button>
            <button id="btn2">Reset</button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Feedback;