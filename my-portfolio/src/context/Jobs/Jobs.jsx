import { Link } from 'react-router-dom';
import {jobs} from '../../helpers/Data'
import './jobs.scss'
const Jobs = () => {
  const firstThreeItems = jobs.slice(-3);
  return (
    <div className='d-md-flex gap-5'>
      { 
      firstThreeItems.map((job,i)=>(
        <div className='jobs' key={i}>
            <img src={job.img} alt="" />
            <h4 className='pt-3'>{job.title}</h4>
            <p>{job.desc}</p>
            <Link className='p-1 text-decoration-none d-flex justify-content-center' to={job.link} target="_blank">Review</Link>
        </div>
      ))
        }
    </div>
  );
};

export default Jobs;
