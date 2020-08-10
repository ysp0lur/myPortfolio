import React from 'react'

export default (props)=>{
    const course = props.element;
    return(
        <div className="shadow bg-white mr-4 rounded flex-shrink-0" style={{ width:"250px" }}>
            <div className="p-8">
            <h4 className="font-bold h-20 overflow-y-hidden">
                <a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a>
            </h4>
            <div className="text-center mt-8">
                <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">Progreso: {parseInt(course.progress)}%</span>
            </div>
            </div>
        </div>
    );
}