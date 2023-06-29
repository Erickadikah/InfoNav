import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../images/svg-101.svg';
import Icon2 from '../images/svg-102.svg';
import Icon3 from '../images/svg-103.svg';

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>uploading documents to Our Cloud Platform</ServicesH2>
                <ServicesP>We help reduce your Time finding usefull Infomation when its Ungetly needed.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Accross All devices</ServicesH2>
                <ServicesP>You can acces our services anywhere online phone Or Laptop</ServicesP>
            </ServicesCard>
             <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>We Garantee Secure data storage and two level Encryption, You no longer have to waste time Searching through documents when Urgetly </ServicesP>
            </ServicesCard>
            {/*<ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>We Garantee Secure data storage and two level Encryption. </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>We Garantee Secure data storage and two level Encryption. </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>We Garantee Secure data storage and two level Encryption. </ServicesP>
  </ServicesCard>*/}
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;