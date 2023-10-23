import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProblemDetails() {
    const { id } = useParams();
    return (
        <div>
            This is problem #{id}
        </div>
    )
}