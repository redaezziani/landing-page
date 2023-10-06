import imgage from '../assets/pexels-tembela-bohle-1884583.jpg'
import img from '../assets/img1.jpg'
import imgv from '../assets/img2.webp'
import imgvv from '../assets/pexels-cottonbro-studio-4100422.jpg'
import { BsArrowUpRight } from 'react-icons/bs'
import svgOne from '../assets/svg/AliExpress-Logo.wine.svg'
import svgTwo from '../assets/svg/Amazon_(company)-Logo.wine.svg' 
import svgThree from '../assets/svg/Apple_Pay-Logo.wine.svg'
import svgFour from '../assets/svg/PayPal-Logo.wine.svg'
import svgFive from '../assets/svg/Shopify-Logo.wine.svg'
const Hero = () => {
  const data = [
    {
      id: 1,
      img: svgOne
    },
    {
      id: 2,
      img: svgTwo
    },
    {
      id: 3,
      img: svgThree
    },
    {
      id: 4,
      img: svgFour
    },
    {
      id: 5,
      img: svgFive
    },
  ]
  const Collection = [
    {
      id: 1,
      name: 'T-shite',
    },
    {
      id: 2,
      name: 'Jeans',
    },
    {
      id: 3,
      name: 'Hoodies',
    },
    {
      id: 4,
      name: 'T-shite',
    },
    {
      id: 5,
      name: 'Jeans',
    },
    {
      id: 6,
      name: 'Hoodies',
    },

  ]
  return (
    <div
    className=' w-[80%] px-36 mt-32 flex flex-col  justify-center items-center sm:px-0 '
    >
      <section
      className=" w-full px-[3.7rem] dark:text-white sm:w-[90%]  text-6xl font-semibold uppercase  flex flex-col justify-center items-center gap-3"
      >
        <div
        className="w-full flex flex-col  justify-start items-start"
        >
          <h1>
            Perfect fashion style
          </h1>
          <div className="flex px-1 py-2 gap-2 justify-center items-start">
          <h1>
            for
          </h1>
          <img src={imgage} alt="fashion" 
          className=" h-11 w-20 mt-3 rounded-full  " />
          <h1>
            your self
          </h1>
          <span
          className='max-w-[6rem] text-[.7rem] lowercase mt-4 font-medium text-gray-500'
          >
            Enabling you to find the best fashion 
          </span>
          </div>
        </div>
      </section>
      <section
      className='w-full flex justify-center gap-3 items-center sm:w-[90%] mt-7'
      >
        <div className="img-group w-[23rem] p-3 h-[24rem] flex items-end justify-center overflow-hidden relative rounded-sm">
          <img src={img} alt="fashion" className=' w-full  absolute h-full object-cover left-0 top-0 z-10' />
          <div className="flex  w-full justify-between items-center px-3 ">
            <div className="group z-10 flex flex-col gap-1">
              <span className="text-white font-semibold text-xl">
                T-shite
              </span>
              <span className="text-white text-sm font-medium">Collection</span>
            </div>
            <button

            className="bg-white dark:bg-slate-800 dark:text-white flex justify-center items-center gap-1  text-black px-3 py-2 rounded-full z-10"
            >
              View All  <BsArrowUpRight />
            </button>
          </div>
        </div>
        <div className="img-group w-[12rem] p-3 h-[24rem] flex items-end justify-center overflow-hidden relative rounded-sm">
          <img src={imgv} alt="fashion" className=' w-full  transform rotate-180  absolute h-full object-cover left-0 top-0 z-10' />
          <div className="flex  w-full justify-between items-center px-3 ">
            <div className="group z-10 flex flex-col gap-1">
              <span className="text-white font-semibold text-xl">
                Jeans 
              </span>
            </div>
          </div>
        </div>
        <div className="img-group w-[12rem] p-3 h-[24rem] flex items-end justify-center overflow-hidden relative rounded-sm">
          <img src={imgvv} alt="fashion" className=' w-full absolute h-full object-cover left-0 top-0 z-10' />
          <div className="flex  w-full justify-between items-center px-3 ">
            <div className="group z-10 flex flex-col gap-1">
              <span className="text-white font-semibold text-xl">
                Hoodies 
              </span>
              
            </div>
          </div>
        </div>
      </section>
      <section
      className='w-full flex px-20 justify-center gap-3 items-center sm:w-[90%] mt-7'
      >
        {
          data.map((item) => {
            return (
              <div className="img-group   w-32 filter saturate-0 dark:saturate-100 p-6 flex items-end justify-center overflow-hidden relative rounded-sm">
                <img src={item.img} alt="fashion" className=' w-full absolute h-full object-cover left-0 top-0 z-10' />
              </div>
            )
          })
        }
      </section>
      <main
      className=' w-full flex flex-col justify-center items-center mt-7'
      >
        <button
        className=' bg-indigo-600 min-w-[8rem] text-white px-3 py-2.5 rounded-full font-semibold text-sm'
        >
          Collections 
        </button>

        <div className="flex w-full gap-6 mt-6   justify-start px-20 sm:w-[90%] items-start">
          {
            Collection.map((item) => {
              return (
                  <span className=" font-medium dark:text-white">
                    {item.name}
                  </span>
              )
            })
          }
        </div>
        <div className="w-full gap-6 mt-10 cursor-pointer filter saturate-0 hover:saturate-100 transition-all ease-in duration-300  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-20 sm:w-[90%] ">
          <img
          className='w-full h-[20rem] object-cover rounded-sm'
           src={img}
            alt=""  />
        </div>
      </main>
    </div>
  )
}

export default Hero