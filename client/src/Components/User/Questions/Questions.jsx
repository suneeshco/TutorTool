import React from 'react'
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div>
                <h1>Practice Questions</h1>
                <form action="">
                    <div className='grid-container'>
                        <div className='questions'>
                            <div className='innerquestion'>
                            <label className='ques'>1.What is the sum of 130+125+191?</label>
                            <br />
                            <label className='option'><input  type="radio" name='q1' value="a" />335</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />456</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />446</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />426</label>
                            <br />
                            </div>
                            
                        </div>
                        <div className='questions'>
                        <div className='innerquestion'>
                            <label className='ques'> 2.If we minus 712 from 1500, how much do we get?</label>
                            <br />
                            <label className='option'><input  type="radio" name='q1' value="a" />788</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />778</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />768</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />758</label>
                            <br />
                            </div>
                        </div>
                        <div className='questions'>
                            <div className='innerquestion'>
                            <label className='ques'>1.What is the sum of 130+125+191?</label>
                            <br />
                            <label className='option'><input  type="radio" name='q1' value="a" />335</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />456</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />446</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />426</label>
                            <br />
                            </div>
                            
                        </div>
                        <div className='questions'>
                        <div className='innerquestion'>
                            <label className='ques'> 2.If we minus 712 from 1500, how much do we get?</label>
                            <br />
                            <label className='option'><input  type="radio" name='q1' value="a" />788</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />778</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />768</label>
                            <br />
                            <label className='option'><input type="radio" name='q1' value="a" />758</label>
                            <br />
                            </div>
                        </div>
                    </div>
                    <button class="submit">Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Questions
