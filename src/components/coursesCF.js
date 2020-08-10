import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';
import Course from './course';

export default () => {
    const data = useStaticQuery(graphql`{
        coursesJson {
            data {
                certificates {
                    title
                    score
                    code
                }
                courses {
                    progress
                    title
                    url
                }
            }
  }
    }`); //Hook de Gatsby

    console.log(data);
    return(
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts
                    data={data.coursesJson.data.certificates}
                    card={Certificate}
                    title="Mi Certificados Online en CódigoFacilito"
                    extra="flex mt-8"
                     />
                    <Posts
                    data={data.coursesJson.data.courses}
                    card={Course}
                    title="Mi Cursos Online en CódigoFacilito"
                    extra="flex mt-8 overflow-x-scroll"
                     />
                </div>
            </div>
        </section>
    );
}