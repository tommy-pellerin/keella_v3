import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";
// import { getData, postData } from "../../services/data-fetch";
//atom
// import { useAtom } from "jotai";
// import { userAtom } from "../../store/user";
// import ImageCarrousel from "./ImageCarrousel";
// import { formatDate, formatTime, formatDuration } from '../../services/time-fixes';
// //security
// import checkTokenAndLocalStorage from "../../services/checkTokenAndLocalStorage";
// //rating
// import WorkoutRating from "../rating/WorkoutRating";
// import WorkoutAverageRating from "../rating/WorkoutAverageRating";

const WorkoutShow = () => {
  const [quantity,setQuantity] = useState(1)
  const [workout, setWorkout] = useState({});
  const { workout_id } = useParams();
  const [workout_images, setWorkout_images] = useState([])
  const [workoutCategory, setWorkoutCategory] = useState(null)
  const [workoutCategoryLoading, setWorkoutCategoryLoading] = useState(false)
  const navigate = useNavigate();

  //use atom
  const [user, setUser] = useAtom(userAtom);

  //loading data to show
  useEffect(() => {
    // setWorkoutCategoryLoading(true)
    const getWorkouts = async () => {
      try {
        const data = await getData(`/workouts/${workout_id}`);
        setWorkout(data);
        if(data.image_urls){
          setWorkout_images(data.image_urls)
        } else if(data.category.category_image){
          setWorkoutCategory(data.category)
          // setWorkoutCategoryLoading(false)
        }
      } catch (error) {
        console.error(error);
      }
    };
    getWorkouts();

  }, [workout_id]);

  //manage quantity
  const increaseQuantity = () => {
    if(quantity >= workout.available_places){
      return
    }
    setQuantity(quantity + 1)
  }
  const decreaseQuantity = () => {
    if(quantity <= 1){
      return
    }
    setQuantity(quantity - 1)
  }

  //handle booking
  const handleReservation = (e) => {
    e.preventDefault();

    //check authentication
    if (!user.isLogged){
      toast.error("Vous devez etre connecté pour pouvoir réserver");
      navigate("/sign-in");
      return
    }
    //check token expiration
    const tokenStatus = checkTokenAndLocalStorage(user, setUser, navigate);
    //if tokenStatus = true means token is not expired or invalid
    if (!tokenStatus) {
      return;
    }
    
    const body = 
    {
      "reservation":{
        "workout_id": workout.id,
        "quantity": quantity,
      }
    };
    const bookPlaces = async () => {
      if(window.confirm("Vous allez etre débité du montant indiqué, etes vous sure de vouloir continuer ?")) {
        try {
          const data = await postData(`/reservations`, body);
          if(data){
            toast.success("Votre demande a bien été envoyée !");
            setWorkout(prevWorkout => ({
              ...prevWorkout,
              available_places: prevWorkout.available_places - quantity
            }));
            setQuantity(1) //reset quantity to 1 in the browser
          }
        } catch (error) {
          // console.error('Error caught in calling function:', error);
          if (error.response) {
            error.response.json().then((body) => {
              // console.error('Erreur du serveur:', body.error);
              toast.error(`${body.error}`);
            });
          }
          
        }
      }
    };
    bookPlaces();
  }

  return(
    <>
      <Helmet>
          <title>Keella | {workout.title || "Detail d'un workout"}</title>
          <meta name="description" content="page de détails du workout avec des boutons pour choisir la quantité et réserver le workout" />
      </Helmet>

      <div className="border-y border-black bg-gray-200 my-10 h-2/5">
      {workout_images && workout_images.length > 0 ? 
        <ImageCarrousel images={workout_images}/>
        : 
        (workoutCategoryLoading ?
          <div>is loading...</div>
          :
          (workout.category&& workout.category.category_image ?
            <ImageCarrousel images={[workout.category.category_image]}/>
            :
            <p className="text-center">No image attached and no category image</p>
          )
        )
      }
      </div>

      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 my-5">
        

          <div className="lg:col-span-2 px-5">
            <div className="flex justify-between my-3 border-b-2">
              <div>
                <h1>{workout.title}</h1>
                {workout.category ?
                <p>Catégorie : <strong>{workout.category.name}</strong></p>
                :
                "Loading..."
                }
                <div className="my-5 flex justify-start">
                     <WorkoutAverageRating averageRating={workout.average_rating} totalRatings={workout.ratings_received ? workout.ratings_received.length : 0} />
                </div>
                
              </div>
              <div>
                {workout.host ?
                  
                  <Link to={`/profile/${workout.host.id}`} className="flex gap-2 items-center">
                    <p>Hôte : {workout.host.username}</p>
                    {workout.host && 
                          <div className="h-8 w-8 border rounded-full flex justify-center items-center overflow-hidden">
                            {workout.host_avatar ? <img src={workout.host_avatar} className="w-full h-full object-cover" alt="User avatar"/>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            }
                          </div>
                    }
                  </Link>
                :
                  "Loading..."
                }
              </div>
            </div>
            <div className="my-3 border-b-2">
              <p>Description :</p>
              <p>{workout.description}</p>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col bg-slate border shadow-lg rounded-xl p-4 md:p-5">
            <h2>Prix de la séance : {workout.price} €</h2>
            <p>Début de la séance : {formatDate(workout.start_date)} à {formatTime(workout.start_date)}</p>
            <p>Fin de la séance : {formatDate(workout.end_date)} à {formatTime(workout.end_date)}</p>
            <p>Durée de la séance : {formatDuration(workout.duration)}</p>
            
            <div>
              <p>Nombre de place max : {workout.max_participants}</p>
              <p>Nombre de place disponible : {workout.available_places}</p>              
              <h3>Total à payer : {workout.price*quantity} €</h3>
              <div className="flex justify-between items-center">
                <h3>Nombre de place : </h3>
                {/* Buttons are disabled when on conditions */}
                <div className="flex justify-around items-center my-3">
                  <button className="button-red-small" onClick={decreaseQuantity} disabled={quantity <= 1} aria-label="minus one place">-</button>
                  <h3 className="mx-3">{quantity}</h3>
                  <button className="button-green-small" onClick={increaseQuantity} disabled={quantity >= workout.available_places} aria-label="add one place">+</button>
                </div>
              </div>
            </div>
            
            {/* Check condition to active reservation button */}
            {/* if places available */}
            {quantity > workout.available_places ?
              <button className="button-primary-large" disabled={quantity > workout.available_places}>Il n&apos;y a plus de place</button>
            :
              // if user is host
              (workout.host && workout.host.id === user.id ?
                <button className="button-primary-large" disabled={true}>Vous êtes hôte de ce workout</button>
              :
                <button className="button-primary-large" onClick={handleReservation} disabled={quantity > workout.available_places}>Envoyer une demande de réservation</button>
              )
            }

          </div>
          <div className="lg:col-span-1 flex items-start">
            <WorkoutRating workoutId={workout.id} ratingsReceivedUserAvatars={workout.ratings_received_user_avatars}/>
          </div>
        </div>

        
      </div>

      
    </>
  )
}

export default WorkoutShow