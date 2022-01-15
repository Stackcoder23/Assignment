import React from 'react';
import { useNavigate } from 'react-router-dom';

const movies = [
    {
        id: '1',
        name: "Avengers: Endgame",
        director: "Russo Brothers",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
    },
    {
        id: '2',
        name: "The Dark Knight",
        director: "Christopher Nolan",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
        id: '3',
        name: "Spiderman: No way home",
        director: "Jon Watts",
        image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg"
    },
    {
        id: '4',
        name: "Aquaman",
        director: "James Wan",
        image: "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg"
    },
    { 
        id: '5', 
        name: "Iron man 3", 
        director: "Shane Black", 
        image: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg" 
    },
    { 
        id: '6', 
        name: "Justice League", 
        director: "Zack Snyder", 
        image: "https://musicart.xboxlive.com/7/e8a15100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" 
    },
    { 
        id: '7', 
        name: "Thor: Ragnarok", 
        director: "Taika Waititi", 
        image: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg" 
    },
    { 
        id: '8', 
        name: "Wonder Woman", 
        director: "Patty Jenkins", 
        image: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" 
    },
    { 
        id: '9', 
        name: "The Amazing Spiderman", 
        director: "Marc Webb", 
        image: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_FMjpg_UX1000_.jpg" 
    },
    { 
        id: '10', 
        name: "Spiderman 3", 
        director: "Sam Raimi", 
        image: "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg" 
    }
]

const Home = () => {
    const navigate = useNavigate();
    const detailpage = (data) => {
        navigate('/details', { state: { data } });
    }
    return (
        <>
            <ul>
                {movies.map(movie => (
                    <li
                        key={movie.id}
                        onClick={() => detailpage(movie)}
                    >
                        {movie.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home;