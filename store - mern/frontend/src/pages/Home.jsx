import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

 
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5555/movies')
          .then((response) => {
            setMovies(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
    }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Movies List</h1>
                <Link to='/movies/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-seperate border-spacing-2'>
                    <head>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Title</th>
                            <th className='border border-slate-600 rounded-md:hidden'>Director</th>
                            <th className='border border-slate-600 rounded-md:hidden'>ReleaseYear</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </head>
                    <tbody>
                        {movies.map((movie, index) => (
                           <tr key={book._id} className='h-8'> 
                            <td className='border border-slate-700 rounded-md text-center'>
                                {index + 1}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {movie.title}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {movie.director}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {movie.releaseYear}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={'/movies/details/${movie._id}'}>
                                        <BsInfoCircle className='text-2x1 text-green-800' />
                                    </Link>
                                    <Link to={'/movies/edit/${movie._id}'}>
                                        <BsInfoCircle className='text-2x1 text-yellow-600' />
                                    </Link>
                                    <Link to={'/movies/delete/${movie._id}'}>
                                        <BsInfoCircle className='text-2x1 text-red-600' />
                                    </Link>
                                </div>
                        </td>
                        </tr>   
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Home