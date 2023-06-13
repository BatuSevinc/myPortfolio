import MePhoto from "../../assets/me.jpg";
import "./aboutMe.scss";
const AboutMe = () => {
  return (
    <div className="aboutMe w-100 d-flex align-items-center justify-content-around text-white">
      <div className="w-25">
        <h1>My, MySelf & I</h1>
        <p className="pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero delectus
          suscipit nobis. Enim voluptates maiores, consequatur nam magni
          cupiditate. Obcaecati delectus ducimus hic quia nulla, necessitatibus,
          laudantium ratione consectetur nihil officia, minima illo dolor
          laborum distinctio? Nostrum, voluptas totam ratione quisquam harum
          ipsa maxime molestias quod eius laudantium deleniti repellat hic sed,
          atque laboriosam, consequuntur officia veniam debitis animi
          perspiciatis tempore enim culpa? Eaque accusamus tempore optio neque
          odit voluptatem quod necessitatibus adipisci consequuntur autem, velit
          ullam voluptatum iure quisquam, fuga, magni expedita excepturi
          perferendis mollitia voluptates repudiandae eius doloribus! Rerum
    
        </p>
      </div>
      <img src={MePhoto} alt="" />
    </div>
  );
};

export default AboutMe;
