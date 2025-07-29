import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Read = ({ players, onDelete }) => {
  const [apiImages, setApiImages] = useState([]);

  useEffect(() => {
    // Fetch car images from Unsplash (or any free API)
    const fetchCarImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: 'cars', per_page: 10 },
          headers: {
            Authorization: 'Client-ID YOUR_UNSPLASH_ACCESS_KEY', // Replace with your Unsplash Access Key
          },
        });
        setApiImages(response.data.results);
      } catch (error) {
        console.error('Error fetching car images:', error);
      }
    };

    fetchCarImages();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">List Of Cars</h2>

      <Link to="/CreateCars">
        <button className="btn btn-success my-3 fw-semibold py-2">Add New Car</button>
      </Link>

      <table className="table table-bordered text-center align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Year</th>
            <th>Position</th>
            <th>Nationality</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>
                {player.image ? (
                  <img
                    src={URL.createObjectURL(player.image)}
                    alt="car"
                    width="100"
                  />
                ) : apiImages[index % apiImages.length] ? (
                  <img
                    src={apiImages[index % apiImages.length].urls.small}
                    alt="car from API"
                    width="100"
                  />
                ) : (
                  'No Image'
                )}
              </td>
              <td>{player.name}</td>
              <td>{player.age}</td>
              <td>{player.position}</td>
              <td>{player.nationality}</td>
              <td>
                <button
                  onClick={() => onDelete(player.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Optional: Display car image gallery from API */}
      <div className="mt-5">
        <h5>Extra Car Images from API</h5>
        <div className="d-flex flex-wrap">
          {apiImages.map((img) => (
            <img
              key={img.id}
              src={img.urls.thumb}
              alt="car"
              className="m-2"
              style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
