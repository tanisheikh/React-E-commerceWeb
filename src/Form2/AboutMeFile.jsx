import React,{useState} from 'react'
import AboutMe from './AboutMe'
import ButtonCom from './ButtonCom'
const AboutMeFile = () => {
    const [value, setValue] = useState('');

  return (
    <div>
        <AboutMe
        label={'About Me'}
        id={'aboutMe'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
        cols={30}
        maxLength={500}
        />
        <ButtonCom label={'Submit Here...'} />
    </div>
  )
}

export default AboutMeFile