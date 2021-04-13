import { useEffect, useState } from 'react';
import api from '../../services/api';

interface Cars {
  _id: number;
  thumbnail: string;
  model: string;
  category: string;
  brand: string;
  price: number;
  options: [string];
}

export default function Dashboard() {
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    async function loadCars() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id },
      });

      setCars(response.data);
    }
    loadCars();
  }, []);
  return (
    <>
      <ul>
        {cars.map(car => (
          <li key={car._id}>
            <header />
            <strong>{car.category}</strong>
            <span>{car.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
