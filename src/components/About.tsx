import '../scss/about.scss';

const About = () => {
  return (
    <div className='about_section_container' id='about'>
      <div className='about_content_outer_container'>
        <h2 className='section_title'>ABOUT ME</h2>
        <div className='about_content_inner_container'>
          <p className='about_content'>
            When I'm not spending time dev'ing, you can often find me indulging in my love for animals. I have three
            cats and a dog, and spending quality time with them brings me immense joy. In addition, I dedicate my time
            as a volunteer at the local animal shelter, assisting in caring for and finding loving homes for abandoned
            or stray animals. Being able to make a positive impact on the lives of these creatures is incredibly
            rewarding to me.
          </p>
          <p className='about_content'>
            Beyond my involvement with animals, I am a passionate volunteer firefighter. I believe in serving my
            community in any way I can and ensuring the safety of others. It is both a challenging and fulfilling role.
            In my leisure time, I enjoy physical activities and sports, going to the local gym regularly to stay fit and
            active. At the end of the day, I enjoy unwinding by playing video games with my friends, allowing us to bond
            and have fun together, even after moving hundreds of miles away from each other after college.
          </p>
        </div>
      </div>
      <div className='about_img_container'>
        <img src='images/my_animals_circle.png' alt='My pets' className='about_img' height={600} />
      </div>
    </div>
  );
};

export default About;
