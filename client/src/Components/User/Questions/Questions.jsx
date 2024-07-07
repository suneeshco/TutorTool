import React, { useEffect, useState } from 'react'
import './Questions.css'
import { studentapiRequest } from '../../../api/axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Questions = () => {
    const {id} = useParams();
    const [question,setQuestion] = useState([]);
    const [sub,setSub] = useState(false)
    const fetchQuestions = async () => {
        try {
          const response = await studentapiRequest({
            method: 'get',
            url: '/getAllQuestions'
          });
          console.log(response);
          if (response.questions) {
            setQuestion(response.questions)
          }
    
        } catch (error) {
          console.error("Failed to fetch questions:", error);
        }
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const answers = [];
    
        for (let [name, value] of formData.entries()) {
          answers.push({ questionIndex: name, answer: value });
        }
        console.log(answers);
        const response = await studentapiRequest({
            method: 'post',
            url: '/submission',
            data:{
                answers:answers,
                courseId:id,
                userId:'123' 
            }
          });
          if(response.success){
            
            toast.success("Submission Recieved")
            event.target.reset();
          }
    }
    useEffect(()=>{
        fetchQuestions()
    },[sub])
    return (
        <div>
            <div>
                <h1>Practice Questions</h1>
                <form onSubmit={handleSubmit}>
                    <div className='grid-container'>
                        {question.length>0 ? (
                            <>
                            {question.map((ele,i)=>(
                                <div className='questions'>
                            <div className='innerquestion'>
                            <label className='ques'>{i+1}.{ele.question}?</label>
                            <br />
                            <label className='option'><input  type="radio" name={ele._id} value={ele.option1} />{ele.option1}</label>
                            <br />
                            <label className='option'><input type="radio" name={ele._id} value={ele.option2} />{ele.option2}</label>
                            <br />
                            <label className='option'><input type="radio" name={ele._id} value={ele.option3} />{ele.option3}</label>
                            <br />
                            <label className='option'><input type="radio" name={ele._id} value={ele.option4} />{ele.option4}</label>
                            <br />
                            </div>
                            
                        </div>
                            ))}
                            
                            </>
                            
                        ):(
                            <h1>No questions</h1>
                        )}
                        
                        
                    </div>
                    <button class="submit">Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Questions
