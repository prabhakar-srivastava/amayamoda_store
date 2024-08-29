import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const newsData = [
    {
        img: 'https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png',
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        publishDate: "22 august, 2024",
        link: 'https://www.google.com/'
    },
    {
        img: 'https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png',
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        publishDate: "22 august, 2024",
        link: 'https://www.google.com/'
    },
    {
        img: 'https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png',
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        publishDate: "22 august, 2024",
        link: 'https://www.google.com/'
    },
    
  


]

function BrandNews() {
    return (
        <div className=' lg:max-w-[600px] m-auto '>
            <h1 className='mb-5 mt-16 text-center text-heading1-light font-serif'><br /> Blogs<br/><small className='text-heading3-bold font-extralight'>New Designs</small> </h1>
            <div className=''>
                {
                    newsData.map((res, index, arr) => {
                        return <div key={index}>
                            <a href={res.link} target='_blank' className='p-2 flex gap-3 bg-[#ebedf0] mb-2 justify-between rounded-sm hover:text-blue-500'>
                                <div className='flex gap-5'>
                                    <div className=''>
                                        <Image
                                            src={res.img}
                                            alt="product"
                                            width={100}
                                            height={70}
                                            className="  object-cover"
                                        />
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <div className=''>
                                            <h1 className=''>{res.title.substring(0, 30)}...</h1>
                                            <h1 className='text-small-light'>{res.description.substring(0, 60)}...</h1>
                                        </div>
                                        <div className='text-small-medium'>
                                            <h1>{res.publishDate}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <ArrowRight />
                                </div>
                            </a>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BrandNews