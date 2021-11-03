import { IoIosSend } from 'react-icons/io'


const BirthdayCard = (props) => {

    const { profile_pic, userName } = props;

    return (
        <div className="personCard">
            <div className="profile_info">
                <img src={profile_pic} alt=""></img>
                <p>{ userName }</p>
            </div>
            <div className="sendMessage">
            <input className="birthdayMessage" type="text" placeholder="Hey, happy birthday!!!"></input>
            <IoIosSend className="sendIcon" size={ 40 }/>
            </div>       
        </div>
    )
}

export default BirthdayCard