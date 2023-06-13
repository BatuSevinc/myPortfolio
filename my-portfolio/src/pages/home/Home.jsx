import homepagee from './homepage.jpg';
import './home.scss';

const Home = () => {

  const handleClick = () =>{
    window.location.href = '/contact';
  }
  return (
    <div className='homepage text-white flex-column bg-dark w-100 d-flex justify-content-center ps-5'>
      <div>
      <h1 className='fw-bold'>Hi, <p data-text={`I'm Batuhan,`}>I'm Batuhan, </p> web developer</h1>
      <p className='pt-2'>Front-end Developer</p>
    <button className='p-2' onClick={handleClick}>Contact me!</button>
    </div>
    </div>
  )
}

export default Home