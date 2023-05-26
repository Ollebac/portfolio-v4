const About = () => {
  return (
    <div className='about_section_container split_screen' id='about'>
      <div className='about_content_container'>
        <h3 className='section_title'>ABOUT ME</h3>
        <p className='about_content'>
          Here will be a reasonably sized description about me. Include things about me other than coding.{' '}
        </p>
      </div>
      <img src='images/my_animals.png' alt='My pets' className='about_img' height={600} />
    </div>
  );
};

export default About;
