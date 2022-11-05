import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { toast } from 'react-toastify'
import useCourse from '../../hooks/useCourse'
import learnersService from '../../services/LearnersService'
import { Button } from '../Auth-Components/Button'

const StudentQuiz = () => {

  const {getMyCourse} = useCourse()
  const router = useRouter()

  const [quizState, setQuizState] = useState(true) // Controls rendering of quiz questions to be answered or quiz questions with answers and results
  // State for storing the values of the answers for each question
  const [answers, setAnswers] = useState({question1: "", question2: "", question3: "", question4: "", question5: "", question6: "", question7: "", question8: "", question9: "", question10: "", })

  const [courseData, setCourseData ] = useState()
  const [courseQuiz, setCourseQuiz] = useState()

  // final store for question and answer
  const finalAns = []
  const {id, weekId} = router.query
  console.log(id, weekId)

   const fetchForQuiz = async (Id) => {
    const res = await learnersService.getMyCourse(Id.queryKey[1])
    return res.data
  }

  // Fetch the data for the quiz here
  const {data, isLoading} = useQuery(['student_quiz', id ], fetchForQuiz, {
    onSuccess: (data) => {
      for (const el of data.course.course_weeks) {
        if (el.week_number == weekId) {
          setCourseData(el)
          setCourseQuiz(el?.week_test)
      }
      }
    }
  })
  // console.log(data?.course?.course_weeks)
  console.log('courseData -->', courseData)
  console.log( "courseQuiz -->", courseQuiz)
  /**Note: In the course_weeks array, i used the (weekId - 1) as the index of the element in the array that i will take as the actual course data for that the week.
   * A better way is to run the onSuccess fucntion after every successsful query and get the required course data and corresponding course quiz for that week and store them in state. This was done to reduce length object chaining.
   */

  /**
   * Just in case react query causes rerenders and state changes switch back to useEffect for the api call.
   * Also in certain cases i didnt use the id for some data because the one coming in from the api is random. Instead i used hard numbers or index of elements in an array
   */


  return (
    <div className='relative w-full h-full bg-[#FDFDFD] flex flex-col pt-[90px] md:pt-[120px] md:justify-start items-center md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 lg:px-10  pb-10'>
  
      <div className='w-full  mt-10'>
        <div className='w-full text-darkText mb-10'> {data?.course?.name} / Week {weekId} / {data?.course?.course_weeks[weekId-1].title}</div>

       {quizState ?

        <QuizForSubmission quizState = {quizState} setQuizState = {setQuizState} answers = {answers} setAnswers = {setAnswers} finalAns = {finalAns} courseQuiz = {courseQuiz}/> :
        
        <QuizAnsReview courseQuiz = {courseQuiz}/>
        // null
        
        }


      </div>
            
    </div>
  )
}

export default StudentQuiz



const QuizAnsReview = ( {courseQuiz, quizState, setQuizState, answers, setAnswers, finalAns}) => {

  const router = useRouter()

  const handleButton = () => {
    router.push(`/students/quiz/${router.query.id}`)
  }



  return (
    <div className='w-full flex flex-col gap-y-16'>
    {/* Questions */}
    {
      courseQuiz?.map((el, index) => (
        <QuestionCard key={index} el={el} proxyIndex = {index + 1} quizState={quizState} answers = {answers} setAnswers = {setAnswers} returnedData = {returnedData} />
      ))
    }

    <div className='w-full flex justify-end lg:px-20'>
        <Button onClick={handleButton} size = "w-[150px]" name = "Continue"/>
    </div>

    </div>
  )


} 


const QuizForSubmission = ({quizState, setQuizState, answers, setAnswers, finalAns, courseQuiz}) => {

  const handleButton = () => {
    console.log(answers)

    // Check if all the questions were answered
    for (const [key, value] of Object.entries(answers)) {
      if (value == "" && Number(key.split("question")[1]) <= courseQuiz.length ) {
        toast.error(`Please ${key} was not answered`)
        return
      }
    }

    for (const[key, value] of Object.entries(answers)) {
      let question_id = Number(key.split("question")[1])
      finalAns.push({question_id: question_id, answer_id: value})
    }
    console.log(finalAns)
    setQuizState(false)  //switch from QuizForSubmission to QuizAnsReview
  } 

  return (
    
    <div className='w-full flex flex-col gap-y-16'>
    {/* Questions */}
    {
    courseQuiz?.map((el, index) => (
        <QuestionCard key={index} el={el} proxyIndex = {index + 1} quizState={quizState} answers = {answers} setAnswers = {setAnswers}  />
      ))
    }

    <div className='w-full flex justify-end lg:px-20'>
        <Button onClick={handleButton} size = "w-[150px]" name = "Save Changes"/>
    </div>

    </div>

  )
}


const QuestionCard = ({el, proxyIndex, quizState, answers, setAnswers, returnedData, }) => {
  // console.log(el)
  const [option, setOption] = useState(null)
  const [localAns, setLocalAns] = useState() //for answers stored in local storage

  const handleClick = (optionId) => {
    if(quizState) {
      setOption(optionId)
      setAnswers(prev => ({...prev, [`question${proxyIndex}`]: optionId }))
    }
    else {
      // .....
    }
  }

  console.log(localAns)
  // console.log(courseQuiz)

  return (
    <div className = "">
        {/* Question title */}
        <div className='flex items-center gap-x-2 font-bold'>
            <p>Q{proxyIndex}.</p>
            <p>{el?.title}</p>
        </div>

        {/* Question Options */}
        <div className='flex flex-col gap-y-3 mt-4'>
          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
              <p className='break-words'>{el?.answers?.[0]?.title}</p>
              {quizState ?
                <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == 1 ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(1)} />
                : 
                (returnedData ? <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${returnedData.results[proxyIndex - 1].answer_id == 1  ? "bg-darkBlue" : "bg-white" } `}/> : null)
              }
            </div>
            {/* This is for controlling the good mark or bad mark sign is shown for the option */}
            {
              !quizState ? (
                returnedData.results[proxyIndex - 1].correct_id == 1 ? <FcCheckmark /> : <p className='text-[14px] text-red-500 font-bold'>X</p>
                ) : null
              }
          </div>


          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
            <p className='break-words'>{el?.answers?.[1]?.title}</p>
              {quizState ? 
              <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == 2 ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(2)} />
                : 
                (returnedData ? <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${returnedData.results[proxyIndex - 1].answer_id == 2  ? "bg-darkBlue" : "bg-white" } `}/> : null)
              }
            </div>
            {/* This is for controlling the good mark or bad mark sign is shown for the option */}
            {
              !quizState ? (
                returnedData.results[proxyIndex - 1].correct_id == 2 ? <FcCheckmark /> : <p className='text-[14px] text-red-500 font-bold'>X</p>
                ) : null
              }
          </div>



          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
            <p className='break-words'>{el?.answers?.[2]?.title}</p>
              {quizState ? 
                <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == 3 ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(3)} />
                : 
                (returnedData ? <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${returnedData.results[proxyIndex - 1].answer_id == 3  ? "bg-darkBlue" : "bg-white" } `}/> : null)
              }
            </div>
            {/* This is for controlling the good mark or bad mark sign is shown for the option */}
            {
              !quizState ? (
                returnedData.results[proxyIndex - 1].correct_id == 3 ? <FcCheckmark /> : <p className='text-[14px] text-red-500 font-bold'>X</p>
                ) : null
              }
          </div>



          <div className='flex items-center gap-x-3'>
            <div className='w-full sm:w-[400px] lg:w-[550px] text-[14px] lg:text-base h-[55px] bg-[#F3F3F3] flex items-center justify-between px-3 rounded-md' >
            <p className='break-words'>{el?.answers?.[3]?.title}</p>
              {quizState ? 
                <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${option == 4 ? "bg-darkBlue" : "bg-white" } `} onClick={() => handleClick(4)} />
              : 
              (returnedData ? <div className={`w-[20px] h-[20px] rounded-full cursor-pointer ${returnedData.results[proxyIndex - 1].answer_id == 4  ? "bg-darkBlue" : "bg-white" } `}/> : null)
              }
            </div>
            {/* This is for controlling the good mark or bad mark sign is shown for the option */}
            {
              !quizState ? (
                returnedData.results[proxyIndex - 1].correct_id == 4 ? <FcCheckmark /> : <p className='text-[14px] text-red-500 font-bold'>X</p>
                ) : null
              }
          </div>


        </div>
    </div>

  )
}




const returnedData = {
  total: 10,
  results: [ 
    {
    question_id: 1,
    answer_id: 1,
    correct_id: 2
    },
    {
      question_id: 2,
      answer_id: 2,
      correct_id: 1
    },
    {
      question_id: 3,
      answer_id: 3,
      correct_id: 4
    },
    {
      question_id: 4,
      answer_id: 4,
      correct_id: 3
    },
    {
      question_id: 5,
      answer_id: 3,
      correct_id: 1
    },
    {
      question_id: 6,
      answer_id: 2,
      correct_id: 1
    }
]
}


const quizData = [
  {
    question: {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      test_answer: [
        {
          id: 1,
          title: " Quisque a congue "
        },
        {
          id: 2,
          title: " Quisque a congue "
        },
        {
          id: 3,
          title: " Quisque a congue "
        },
        {
          id: 4,
          title: " Quisque a congue "
        }

      ]
    }
  },

  {
    question: {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      test_answer: [
        {
          id: 1,
          title: " Quisque a congue "
        },
        {
          id: 2,
          title: " Quisque a congue "
        },
        {
          id: 3,
          title: " Quisque a congue "
        },
        {
          id: 4,
          title: " Quisque a congue "
        }

      ]
    }
  },

    {
      question: {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        test_answer: [
          {
            id: 1,
            title: " Quisque a congue "
          },
          {
            id: 2,
            title: " Quisque a congue "
          },
          {
            id: 3,
            title: " Quisque a congue "
          },
          {
            id: 4,
            title: " Quisque a congue "
          }
  
        ]
      }
    },

    {
      question: {
        id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        test_answer: [
          {
            id: 1,
            title: " Quisque a congue "
          },
          {
            id: 2,
            title: " Quisque a congue "
          },
          {
            id: 3,
            title: " Quisque a congue "
          },
          {
            id: 4,
            title: " Quisque a congue "
          }
  
        ]
      }
    },

    {
      question: {
        id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        test_answer: [
          {
            id: 1,
            title: " Quisque a congue "
          },
          {
            id: 2,
            title: " Quisque a congue "
          },
          {
            id: 3,
            title: " Quisque a congue "
          },
          {
            id: 4,
            title: " Quisque a congue "
          }
  
        ]
      }
    },


    {
      question: {
        id: 6,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        test_answer: [
          {
            id: 1,
            title: " Quisque a congue "
          },
          {
            id: 2,
            title: " Quisque a congue "
          },
          {
            id: 3,
            title: " Quisque a congue "
          },
          {
            id: 4,
            title: " Quisque a congue "
          }
  
        ]
      }
    }
  

]



