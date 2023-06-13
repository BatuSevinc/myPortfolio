import Jobs from '../../context/Jobs/Jobs';
import Posts from '../../context/Posts/Posts';
import './home.scss';

const Home = () => {

  const handleClick = () =>{
    window.location.href = '/contact';
  }
  return (
    <div className='homepage text-white bg-dark w-100 d-flex justify-content-between align-items-center ps-5'>
      <div className='homepage-left d-flex flex-column justify-content-center'>
      <h1 className='fw-bold'>Hi, <p data-text={`I'm Batuhan,`}>I'm Batuhan, </p> web developer</h1>
      <p className='pt-2'>Front-end Developer</p>
    <button className='p-2' onClick={handleClick}>Contact me!</button>
    </div>
    <div className='homepage-right w-50 gap-5'>
    <h5 className='mt-5 fst-italic fw-lighter text-decoration-underline'>Güncel Projelerim</h5>
      <Jobs/>
      <h5 className='mt-5 fst-italic fw-lighter text-decoration-underline'>Güncel Medium Yazılarım</h5>
      <Posts/>
    </div>
    </div>
  )
}

export default Home