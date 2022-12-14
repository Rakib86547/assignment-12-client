import { Link } from 'react-router-dom';

const Categories = ({ category }) => {
    const { name, car_id, about } = category;
    return (
        <div>
            <div className="card shadow-xl text-center">
                <div className="card-body">
                    <h2 className="text-4xl text-primary">{name}</h2>
                    <p className='text-secondary'>{about}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary text-white"><Link to={`/cars_details/${car_id}`}>See All</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;