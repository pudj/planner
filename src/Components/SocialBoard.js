import React from 'react'
import BirthdayCard from './BirthdayCard'

import socialMock from '../data/social-profile-mock.json'


const SocialBoard = () => {

    const birthdayCards = socialMock.map((item) => 
        <BirthdayCard key={ item.email } profile_pic={item.profile_pic}
        userName={item.first_name + " " + item.last_name} />
    )

    return (
        <div>
            {birthdayCards}
        </div>
    )
}

export default SocialBoard
