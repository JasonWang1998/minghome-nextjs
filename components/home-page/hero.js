import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ming.png'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ming</h1>
      <p>
      理性是超越的，本质在于追求无限.
      </p>
    </section>
  );
}

export default Hero;
