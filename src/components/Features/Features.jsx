

import Header from '../../util/SectioonHeader/Header';
import { ContainerWrapper, ContainerBox } from "./FeaturesStyle";

const Features = () => {
  return (
    <section className='features' id='features'>
      <Header subText="Our" text=" features" />
      <ContainerWrapper>
        <ContainerBox>
          <img src="../../assets/feature-img-1.png" alt="" />
          <h3>fresh and organic</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!
          </p>
          <a href="#" class="btn">
            read more
          </a>
        </ContainerBox>

        <ContainerBox>
          <img src="../../assets/feature-img-2.png" alt="" />
          <h3>free delivery</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!
          </p>
          <a href="#" class="btn">
            read more
          </a>
        </ContainerBox>

        <ContainerBox>
          <img src="../../assets/feature-img-3.png" alt="" />
          <h3>easy payments</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!
          </p>
          <a href="#" class="btn">
            read more
          </a>
        </ContainerBox>
      </ContainerWrapper>
    </section>
  );
}

export default Features