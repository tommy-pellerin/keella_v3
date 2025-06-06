import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';

function WorkoutList() {
    const [workouts, setWorkouts] = useState([]);
    // const [visibleCount, setVisibleCount] = useState(6); // Initial visible count
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    const fetchWorkouts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/workouts`);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            const data = await response.json(); // Convertir la réponse en JSON
            console.log(data);
            setWorkouts(data); // Définir les données converties en JSON comme état
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchWorkouts();
    }, []);


    const loadMore = () => setVisibleCount(prevCount => prevCount + 3);

    if(isLoading){
        return <div><LoadingSpinner /></div>;
    }

    return (
        <div className='max-w-screen-lg mx-auto p-4'>
            {workouts.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                    {workouts.map(workout => (
                        <Link key={workout.id} className="flex flex-col bg-slate border shadow-sm rounded-xl" to={`/workouts/${workout.id}`}>
                            <img className="w-full h-60 rounded-t-xl object-cover" src={workout.image_url || "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D"} alt={workout.title} />
                            <div className="p-4 md:p-5">
                                <h3 className="text-lg font-bold text-gray-800">{workout.title}</h3>
                                <p className="mt-1 text-gray-500 text-description">{workout.description}</p>
                                <ul>
                                    <li className="mt-1 text-gray-500">Prix : {workout.price} €</li>
                                    <li className="mt-1 text-gray-500">Durée : {(workout.duration)}</li>
                                    <li className="mt-1 text-gray-500">Nombre de place total : {workout.max_participants}</li>
                                    <li className="mt-1 text-gray-500">Date : {(workout.start_date)}</li>
                                    <li className="mt-1 text-gray-500">Heure : {(workout.start_date)}</li>
                                </ul>
                                {workout.available_places > 0
                                    ? <button className='button-primary-small mt-3'>{workout.available_places} places disponible</button>
                                    : <button className='button-red-small mt-3'> Plus de places disponible</button>}
                            </div>
                        </Link>
                    ))}
                </div>
                :
                <p className='text center'>
                    Aucun résultat trouvé
                </p>
            }

            {!location.search && (
                <div className="flex justify-center mt-6">
                    <button onClick={loadMore} className="button-primary-small">
                        Voir +
                    </button>
                </div>
            )}
            
        </div>
    );
};

export default WorkoutList;
