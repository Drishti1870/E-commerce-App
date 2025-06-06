import React from 'react'

const NewsletterBox = () => {

 const onSubmitHandler =(event) => {
     event.preventDefault();
 }

  return (
    <div className='text-center'>
<p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% off</p>
<p className='text-gray-400 mt-3'>
Join our exclusive community and enjoy instant savings on your first purchase! Be the first to access special discounts, new arrivals, and limited-time offers—all delivered straight to your inbox.
</p>

<form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
    <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required/>
    <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE NOW</button>
</form>
    </div>
  )
}

export default NewsletterBox