import React from 'react'
import { useParams } from 'react-router-dom'
import { problems } from '../problems/data';

export default function ProblemDetails() {
    const { id } = useParams();
    const problem = problems.find(problem => problem.id = id)

    return (
        <div>
            <div>
                {problem.title}
            </div>
            <div>
                {problem.text}
            </div>
        </div>
    )
}