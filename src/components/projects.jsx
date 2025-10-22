import React, { useEffect, useState } from "react"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../javascripts/firebase"

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"))
        const projectsData = querySnapshot.docs.map((doc) => doc.data())
        setProjects(projectsData)
      } catch (error) {
        console.error("Error fetching projects:", error)
      }
    }

    fetchProjects()
  }, [])

  if (!projects.length) return <p className="text-center text-white">Loading projects...</p>

  return (
    <>
      {projects.map((project, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card shadow h-100">
            <img src={project.image} className="card-img-top" alt={project.title} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.link} target="_blank" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
