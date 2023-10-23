import { useNavigate, useParams } from 'react-router-dom'
import { problems } from '../problems/data';
import { useEffect } from 'react';

export default function ProblemDetails() {
    const { id } = useParams();
    const navigate = useNavigate()
    const problem = problems.find(problem => problem.id === Number(id))

    useEffect(()=>{
        if(!problem) navigate("/notfound")
    },[])
    
 
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