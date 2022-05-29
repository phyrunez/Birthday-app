import React, { useState } from 'react'
import './MainItems.css'
import img_1 from '../../assets/person-1_aufeoq.jpg'
import img_2 from '../../assets/person-1_rfzshl.jpg'
import img_3 from '../../assets/person-2_ipcjws.jpg'
import img_4 from '../../assets/person-3_ipa0mj.jpg'
import img_5 from '../../assets/person-1_aufeoq.jpg'

const DUMMY_BIRTH = [
    {
        id: 1,
        img: img_1,
        name: 'Bertie Yates',
        year: '29 years'
    },
    {
        id: 2,
        img: img_2,
        name: 'Hester Hogan',
        year: '32 years'
    },
    {
        id: 3,
        img: img_3,
        name: 'Larry Little',
        year: '36 years'
    },
    {
        id: 4,
        img: img_4,
        name: 'Sean Walsh',
        year: '34 years'
    },
    {
        id: 5,
        img: img_5,
        name: 'Lola Gadner',
        year: '29 years'
    }
]

const MainItems = () => {
  const [showBirthdays, setShowBirthdays] = useState(DUMMY_BIRTH)
  const [birthdayNumbers, setBirthdayNumbers] = useState(5)
  const [isActive, setIsActive] = useState(true)
  const [changeBtnTxt, setChangeBtnTxt] = useState('Clear All')

  const determineItems = () => {
      if(isActive) {
          clearAllHandler()
      }else {
          restoreHandler()
      }
  }

  const restoreHandler = () => {
      setShowBirthdays(DUMMY_BIRTH)
      setIsActive(true)
      setBirthdayNumbers(5)
  }

  const clearAllHandler = () => {
    setBirthdayNumbers(0)
    setShowBirthdays(prevState => prevState.filter(({id}) => id === 0))
    if(setShowBirthdays) {
        setIsActive(false)
    }
  }
    
  return (
    <div className={isActive ? 'main' : !isActive ? 'main-two' : 'main'}>
        <div className='main-items'>
            <h3>{birthdayNumbers} Birthdays today</h3>
            {showBirthdays.map(item => (
                <div className="main-item">
                    <img src={item.img} alt="" width="60px" height="60px" />
                    <div className='main-item_text'>
                        <h2>{item.name}</h2>
                        <p>{item.year}</p>
                    </div>
                </div>
            ))}
            <button onClick={determineItems}>
                {isActive ? 'Clear All' : 'Restore Birthdays'}
            </button>
        </div>
    </div>
  )
}

export default MainItems