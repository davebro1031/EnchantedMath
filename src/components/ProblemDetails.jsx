import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { problems } from '../problems/data';

export default function ProblemDetails() {
    const { id } = useParams();
    const problem = problems.find(problem => problem.id === Number(id))
    // const [problem, setProblem] = useState(null)
    // useEffect(()=>{
    //     // console.log(id, problems)
    //     console.log(problems.find(problem => problem.id === Number(id)))
    //     // console.log(problem, id)
    // }, [id])
 
    return (
        <div>
            <div>
                {problem?.title}
            </div>
            <div>
                {problem?.text}
            </div>
        </div>
    )
}