import { useState } from 'react'
import './App.css'
import starIcon from '../images/icon-star.svg'
import { HotKeys } from 'react-hotkeys'
import { AnimatePresence, motion } from 'motion/react'
import thankYouImg from '../images/illustration-thank-you.svg'

const keyMap = {
  rateOne: '1',
  rateTwo: '2',
  rateThree: '3',
  rateFour: '4',
  rateFive: '5',
  submit: 's',
  back: ["esc", "backspace", "del"]
}

const RatingComponent = ({ selected, setSelected, setSubmitted }) => {
  return (
    <motion.div className='bg-radial-[at_50%_0%] from-[#222a35] to-[#171e27] flex flex-col items-start gap-6 p-6 rounded-2xl max-w-[350px] lg:max-w-[450px] lg:rounded-4xl lg:p-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='p-3 bg-[#252d37] rounded-full'>
        <img src={starIcon} alt="star-icon" />
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        <h1 className='text-white text-[1.35rem] font-bold lg:text-[1.8rem]'>
          How did we do?
        </h1>
        <p className='text-[#959eac] text-[0.8rem] lg:text-base'>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
      </div>
      <div className='flex flex-row w-full justify-between'>
        <button className={`${selected == 1 ? 'bg-white text-black' : 'bg-[#252d37] text-[#959eac] hover:bg-[#fb7413] hover:cursor-pointer hover:text-black focus:text-black focus:bg-[#fb7413]'} w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full transition`} onClick={() => setSelected(1)}>
          <p className='mt-0.5 text-sm lg:text-base font-bold'>1</p>
        </button>
        <button className={`${selected == 2 ? 'bg-white text-black' : 'bg-[#252d37] text-[#959eac] hover:bg-[#fb7413] hover:cursor-pointer hover:text-black focus:text-black focus:bg-[#fb7413]'} w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full transition`} onClick={() => setSelected(2)}>
          <p className='mt-0.5 text-sm lg:text-base font-bold'>2</p>
        </button>
        <button className={`${selected == 3 ? 'bg-white text-black' : 'bg-[#252d37] text-[#959eac] hover:bg-[#fb7413] hover:cursor-pointer hover:text-black focus:text-black focus:bg-[#fb7413]'} w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full transition`} onClick={() => setSelected(3)}>
          <p className='mt-0.5 text-sm lg:text-base font-bold'>3</p>
        </button>
        <button className={`${selected == 4 ? 'bg-white text-black' : 'bg-[#252d37] text-[#959eac] hover:bg-[#fb7413] hover:cursor-pointer hover:text-black focus:text-black focus:bg-[#fb7413]'} w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full transition`} onClick={() => setSelected(4)}>
          <p className='mt-0.5 text-sm lg:text-base font-bold'>4</p>
        </button>
        <button className={`${selected == 5 ? 'bg-white text-black' : 'bg-[#252d37] text-[#959eac] hover:bg-[#fb7413] hover:cursor-pointer hover:text-black focus:text-black focus:bg-[#fb7413]'} w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full transition`} onClick={() => setSelected(5)}>
          <p className='mt-0.5 text-sm lg:text-base font-bold'>5</p>
        </button>
      </div> 
      <div className='flex w-full mt-2'>
        <button className='bg-[#fb7413] w-full focus:bg-white py-2.5 font-bold rounded-4xl tracking-[0.15rem] text-[0.9rem] lg:text-[1.1rem] hover:cursor-pointer hover:bg-white transition' onClick={() => setSubmitted(1)}>SUBMIT</button>
      </div>
    </motion.div>
  )
}

const SubmittedComponent = ({ selected }) => {
  return (
    <motion.div className='bg-radial-[at_50%_0%] from-[#222a35] to-[#171e27] flex flex-col items-center text-center gap-6 p-8 lg:p-10 rounded-2xl lg:max-w-[450px]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex flex-col gap-6 w-full items-center'>
        <div>
          <img src={thankYouImg} alt="thank-you-illustration" />
        </div>
        <div className='py-1 px-3 bg-[#252d37] rounded-full'>
          <p className='text-[#fb7413] mt-0.5 lg:text-[1.1rem]'>You selected {selected} out of 5</p>
        </div>
      </div>
      <div className='flex flex-col items-center text-center gap-3 mt-2'>
        <div>
          <h1 className='text-white text-2xl lg:text-3xl font-bold'>Thank You!</h1>
        </div>
        <div>
          <p className='text-[#959eac] text-[0.8rem] lg:text-[1.02rem]'>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/*
  <!-- Rating state start -->

  How did we do?

  Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!

  1 2 3 4 5

  Submit

  <!-- Rating state end -->

  <!-- Thank you state start -->

  You selected <!-- Add rating here --> out of 5

  Thank you!

  
 */

function App() {
  const [selected, setSelected] = useState(0)
  const [submitted, setSubmitted] = useState(0)

  const handlers = {
    rateOne: () => {
      setSelected(1)
    },
    rateTwo: () => {
      setSelected(2)
    },
    rateThree: () => {
      setSelected(3)
    },
    rateFour: () => {
      setSelected(4)
    },
    rateFive: () => {
      setSelected(5)
    },
    submit: () => {
      setSubmitted(1)
    },
    back: () => {
      setSubmitted(0)
      setSelected(0)
    }
  }

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div className='font-[Overpass] w-full h-[100vh] bg-[#121417] min-w-[375px] p-8 flex items-center justify-center'>
        <AnimatePresence mode='wait'>
          {!submitted && (
            <RatingComponent key={submitted} selected={selected} setSelected={setSelected} setSubmitted={setSubmitted}/>
          )}
          {submitted && (
            <SubmittedComponent key={submitted} selected={selected} />
          )}
        </AnimatePresence>
      </div>
    </HotKeys>
  )
}

export default App
