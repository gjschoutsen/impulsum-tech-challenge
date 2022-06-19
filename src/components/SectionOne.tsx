import React from 'react'
import { Box} from '@cmpsr/components';
import Business from "../images/Business.svg"
import Marketing from "../images/Marketing.svg"
import {FeaturedItemsOne} from './FeaturedItemsOne';

export default function SectionOne() {

  return (
    <Box
      w= '80%'
      h='1524px'
      padding={['0','112px 20px 112px']}
    >
      <FeaturedItemsOne 
      business={Business}
      flexDir={'row'}
      title={'For Startups & Business Owners'}
      subTitle={'We support the way you run your Business'}
      paragraph={"With our drag-and-drop web editor and customizable professional templates that fit your brand, you'll be online in no time."}
      />
      <FeaturedItemsOne 
      business={Marketing}
      flexDir={"row-reverse"}
      title={'For Marketing Experts'}
      subTitle={'Get better conversion rates'}
      paragraph={"We help you create high-converting landing pages, engaging popups, integrated SEO, and social media integrations to reach a wider audience and optimize conversion rates using precise and customized A/B testing, and analytical insights."}
      />` `      
    </Box>
  )
}
