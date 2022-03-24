import React from 'react'
import { FroumRow } from '../../styled'

const OptionTitles = ({optionTitles}) => {
return (
<>
  <FroumRow>

    {
    optionTitles.map(ot => (
    <p className='optionTitle' key={ot.id}>{ot.text}</p>
    ))

    }

  </FroumRow>
</>
)
}

export default OptionTitles