import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CreateCars = ({ addPlayer, onCancel }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");
  const [carImage, setCarImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCarImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const newCar = {
      name,
      position,
      nationality,
      age: Number(age),
      image: carImage,
    };

    addPlayer(newCar);

    // Reset form (optional)
    setName("");
    setPosition("");
    setNationality("");
    setAge("");
    setCarImage(null);
    setImagePreview(null);
    setValidated(false);

    // ✅ Redirect to Read page
    navigate("/read");
  };

  return (
    <>
      <h3 className="text-center mb-4">Create New Cars</h3>

      <Form noValidate validated={validated} onSubmit={handleSubmit} encType="multipart/form-data">
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="name">
            <Form.Label>Car Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Toyota Corolla"
            />
            <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="position">
            <Form.Label>Position</Form.Label>
            <Form.Control
              required
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="e.g. Sedan"
            />
            <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="nationality">
            <Form.Label>Nationality</Form.Label>
            <Form.Control
              required
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder="e.g. Japan"
            />
            <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="age">
            <Form.Label>Year</Form.Label>
            <Form.Control
              required
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 2020"
            />
            <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="carImage">
          <Form.Label>Upload Car Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please upload a car image.
          </Form.Control.Feedback>
        </Form.Group>

        {imagePreview && (
          <div className="mb-3">
            <img src={imagePreview} alt="Preview" style={{ maxWidth: "200px", borderRadius: "8px" }} />
          </div>
        )}

        <div className="d-flex justify-content-between">
          <Button type="submit" variant="dark">Add Car</Button>
          <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        </div>
      </Form>
    </>
  );
};

export default CreateCars;
