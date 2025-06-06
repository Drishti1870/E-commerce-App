import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={' US'}/> 

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>A prominent fashion retailer known for its trendy apparel and accessories. Founded in 1984, it has a significant online presence and operates numerous physical stores worldwide. In January 2020, Forever 21 relaunched its online store in 30 countries through the e-commerce company Global-e, targeting consumers in Canada, Asia Pacific, and Latin America</p>
        <p>Forever.com: A digital archive and internet storage company founded in 2012 by Glen Meakem. It offers permanent storage solutions for photographs, documents, videos, and audio files, aiming to preserve personal memories for generations.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to create a seamless, customer-centric e-commerce platform that provides high-quality products at competitive prices. We strive to enhance the online shopping experience through innovation, reliability, and exceptional customer service. Our goal is to empower businesses, connect customers with trusted brands, and build a sustainable, technology-driven marketplace that caters to diverse consumer needs.</p>
    </div>
      </div>
      <div className='text-4xl py-4'>
      <Title text1={'WHY'} text2={'  CHOOSE US'}/>
      </div>
<div className='flex flex-col md:flex-row text-sm mb-20'>
 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600' >"At Forever E-Commerce, quality assurance is our promise. Every product is carefully selected and tested to ensure you receive only the best—because you deserve nothing less!" ✅🛍️</p>
 </div>
 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-gray-600' >"At Forever E-Commerce, we prioritize your convenience—seamless shopping, fast delivery, and hassle-free service, all at your fingertips!" 🚀🛍️</p>
 </div>
 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional customer service:</b>
    <p className='text-gray-600' >"At Forever E-Commerce, we are committed to providing exceptional customer service—fast responses, hassle-free returns, and a seamless shopping experience, because your satisfaction is our priority!" 🚀🛍️</p>
 </div>
</div>
<NewsletterBox/>
    </div>
  )
}

export default About