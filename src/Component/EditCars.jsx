import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const EditCars = ({ player, editPlayer, onCancel }) => {
  const [name, setName] = useState(player.name || '');
  const [position, setPosition] = useState(player.position || '');
  const [nationality, setNationality] = useState(player.nationality || '');
  const [age, setAge] = useState(player.age || '');
  const [carImage, setCarImage] = useState(null); // new image file
  const [imagePreview, setImagePreview] = useState(
    typeof player.image === 'string' ? player.image : null
  );
  const [validated, setValidated] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCarImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const updatedPlayer = {
      ...player, // keep any other properties untouched
      name,
      position,
      nationality,
      age: Number(age),
      image: carImage || player.image, // preserve old image if new one not chosen
    };

    editPlayer(updatedPlayer);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} encType="multipart/form-data">
      <h2 className="mb-4">Edit Car</h2>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="editName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="editPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            required
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="editNationality">
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            required
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="editAge">
          <Form.Label>Year</Form.Label>
          <Form.Control
            required
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="editImage">
        <Form.Label>Upload New Image (Optional)</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
      </Form.Group>

      {imagePreview && (
        <div className="mb-3">
          <img
            src={imagePreview}
            alt="Car preview"
            style={{ maxWidth: "200px", borderRadius: "8px" }}
          />
        </div>
      )}

      <div className="d-flex justify-content-between">
        <Button type="submit" variant="primary">Save Changes</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
      </div>
    </Form>
  );
};

export default EditCars;
