import React,{useState} from 'react'
import {BsFillStarFill}from 'react-icons/bs';

const data = [
{
    "id" : "0175d1f0-a8c6-41bf-8d02-df5734d829a4" ,
    "title" : "ocean at dusk" ,
"color" : "#00c4e2" ,

"rating" : "5" ,
},

{
 "id" : "83c7ba2f-7392-4d7d-9e23-35adbe186046" ,
    "title" : "lawn" ,
"color" : "#26ac56" ,

"rating" : "3" ,
},

{
 "id" : "a11e3995-code-4d58-8c48-5e49ae7f7f23" ,
    "title" : "bright green" ,
"color" : "#22ca15" ,

"rating" : "4" ,


},

{
 "id" : "a11e3995-bobd-4d58-8c48-5e49ae7f7f23" ,
    "title" : "bright red" ,
"color" : "#ff0000" ,

"rating" : "0" ,


},


]

const Reviews = () => {
   
    const initialstate = {color: ""}
    const[color,setColor] = useState(initialstate)
   const[reviews,setReviews] = useState(data) 
   const[rating,setRating] = useState(data.rating)
   
   const handleClick = () => {

      setColor( <button style={{color: 'yellow'}} />)
  }

  const handleRemove = (id) => {
    
    const newReview = reviews.filter((review) => review.id !== id)
    console.log('hello')
    setReviews( newReview)
  }

  const stars = [...Array(5)].map((star, index)=>{
                                 const ratingValue = index +1
                                
                                 return (
                                 <label>
                                 <input type = 'radio'   value={ratingValue} onClick={() => setRating(ratingValue)} />
                                 <BsFillStarFill className = 'star' size= {70} color={ratingValue <= rating ? 'yellow':'black'} />
                         </label>
                        )}) 
    return (
        <>
             <h1>Ratings</h1>   
           <div >
            {reviews.map((review) => {
               const {id,title,color,rating} = review
               return (
                <div > 
                    <ul key={id}>
                        <li>
                   <h4>{title}</h4>
                  
                  <div> 
                      <button onClick ={()=>handleRemove(id)}>x</button>
                  </div>
                      
                       <section > 
              <h2 style={{backgroundColor: color}}> . </h2>
                             
                             <section>
                                 
                                {stars }
                                 </section>
                             
                             </section>
                  
            
                   <h4>{rating}</h4>
                   </li>
                       </ul>
                     </div> 
                
                    )
            })}
         </div>
        
        </>
    )
}

export default Reviews