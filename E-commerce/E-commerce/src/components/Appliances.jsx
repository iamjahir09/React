import React from 'react'

const Appliances = () => {
  return (
    <div className='bg-white mx-5 my-3 h-90  whitespace-nowrap overflow-x-auto scrollbar-hide'>
      <div className='p-5'>
        <h2 className='text-2xl font-medium'>Top deals on appliances</h2>
      </div>
      <div className='flex'>
        <div className='px-18 py-10 items-center'>
            <img src="https://rukminim2.flixcart.com/image/110/110/xif0q/television/t/w/t/-original-imahfugqyvv6ktc6.jpeg?q=90" alt="" className='w-40'/>
            <div className='p-8'>
                <h2>Premium TVs</h2>
                <h2 className='font-bold'>From ₹15,499*</h2>
            </div>
        </div>

        <div className='px-18 items-center'>
            <img src="https://rukminim2.flixcart.com/image/110/110/xif0q/refrigerator-new/t/4/w/-original-imahg4zjv4sbyxdh.jpeg?q=90" alt="" className='w-15'/>
            <div className='py-3'>
                <h2>Best-selling R...</h2>
                <h2 className='font-bold'>From ₹9,990*</h2>
            </div>
        </div>

        <div className='px-18 py-4 items-center'>
            <img src="https://rukminim2.flixcart.com/image/110/110/xif0q/washing-machine-new/r/b/m/-original-imah2tx7cyakc7p8.jpeg?q=90" alt="" className='w-25'/>
            <div className='py-3'>
                <h2>Trending deals</h2>
                <h2 className='font-bold'>Shop now</h2>
            </div>
        </div>

        <div className='py-10 px-18 items-center'>
            <img src="https://rukminim2.flixcart.com/image/110/110/xif0q/mixer-grinder-juicer/i/0/m/-original-imaghy69gbrjwkvz.jpeg?q=90" alt="" className='w-35'/>
            <div className='py-3'>
                <h2>Kitchen Essen...</h2>
                <h2 className='font-bold'>From ₹1249</h2>
            </div>
        </div>

        <div className='px-18 py-5 items-center'>
            <img src="https://rukminim2.flixcart.com/image/110/110/xif0q/water-purifier/q/d/w/m2-needs-no-service-for-2-years-10-stage-filtration-native-by-original-imah2usukstmh2ru.jpeg?q=90" alt="" className='w-25'/>
            <div className='py-3'>
                <h2>Home Essen...</h2>
                <h2 className='font-bold'>Shop Now!</h2>
            </div>
        </div>

        <div className='px-20 py-5 items-center'>
            <img src="https://rukminim2.flixcart.com/image/110/110/xif0q/water-geyser/j/x/y/-original-imagrty2vtc9gruj.jpeg?q=90" alt="" className='w-18'/>
            <div className='py-3'>
                <h2>Fans & Geyser</h2>
                <h2 className='font-bold'>From ₹799</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Appliances
