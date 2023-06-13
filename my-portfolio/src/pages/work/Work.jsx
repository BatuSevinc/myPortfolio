import { jobs } from "../../helpers/Data"
import {Link} from 'react-router-dom'
import './work.scss'
const Work = () => {
  return (
    <div className="work d-flex flex-wrap gap-5 justify-content-center my-auto container">
      {
        jobs.map((job,i)=>(
          <div>
            <Link to={job.link} target="_blank" className="d-flex flex-column align-items-center text-decoration-none">
            <img className="" src={job.img}/>
            <h5 className="text-white text-center pt-3">{job.title}</h5>
            <p className="text-center">{job.desc}</p>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Work