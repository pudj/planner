import socialProfiles from '../data/social-profile-mock.json'
import BirthdayCard from './BirthdayCard'

const ListItem = () => {
    
    const birthdayCards = socialProfiles.map((item) => 
        <BirthdayCard key={ item.email } profile_pic={item.profile_pic}
        userName={item.first_name + " " + item.last_name} />
    )

    console.log(birthdayCards)
    
    return (
    <>
        {birthdayCards}
    </>
    )
}

export default ListItem