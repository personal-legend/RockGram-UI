import './components/home.css'
import logo from '../../assets/img/logo2.png'
import  {React, useState} from 'react';
import Personal from './components/Personal';
import Group from './components/Group';


const Home = () => {

    const [isPersonal,setPresonal ] = useState(true)
    
    

    return (
        <div className='container-fluid'>

            <nav class="navbar navbar-light fixed-top" style={{padding:'30px',}} >
                <div class="container-fluid" style={{ marginTop: '0px'}}>
                    <img src={logo} alt='RockGram Logo' className='header-logo'/>
                    {/* <form class="d-flex search-form">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-secondery" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </button>
                    </form> */}
                </div>
            </nav>













            
            <div className='row'>
                {/* ============== CHAT =============== */}
                <div className='col-4'>
                    <div className=' chat-seaction'>
                        <div className='chat-type-link home-com home-com-chat1'>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" className={`btn ${isPersonal? 'active': ''}`} onClick={()=> setPresonal(true)}>Presonal</button>
                                        
                                    </div>
                                    <div className='col'>
                                        <button type="button" className={`btn ${!isPersonal? 'active': ''}`} onClick={()=> setPresonal(false)}>Group</button>
                                    </div>
                                </div>
                        </div>
                        <div className='chat-conyent home-com home-com-chat2'>
                        <div className='chat-load'>
                            { isPersonal ? <Personal/>:  <Group/>}
                        </div>
                     
                            <div className='add-chat-btn-secation'>
                                <div class="col-2 message-text-send">
                                    <button type="submit" class="btn btn-danger" style={{padding:'8px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                                            <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ============== MESSAGE =============== */}
                <div className='col-6'>
                    <div className='home-com message-seaction'>
                        <div className='message-contant'>
                            <div className='row message-container recevier'>
                                <div className='col-1'>
                                    <div className='user-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <div className='message-dialoge'>
                                        <strong className='user-name'>Mustafa Aswadi</strong>
                                        <p className='user-text'>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>    
                                        <small className='message-time'>3:43 Pm</small>
                                    </div>    
                                </div>
                            </div>
                        
                            <div className='row message-container recevier'>
                                <div className='col-1'>
                                    <div className='user-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <div className='message-dialoge'>
                                        <strong className='user-name'>Mustafa Aswadi</strong>
                                        <p className='user-text'>Hi</p>  
                                        <small className='message-time'>3:43 Pm</small>  
                                    </div>    
                                </div>
                            </div>


                            <div className='row message-container sender '>
                                <div className='col-8 message-dialoge2'>
                                    <div className='message-dialoge'>
                                        <p className='user-text'>Hi</p>  
                                        <small className='message-time'>3:43 Pm</small>  
                                    </div>    
                                </div>
                            </div>
                            <div className='row message-container sender '>
                                <div className='col-6 message-dialoge2'>
                                    <div className='message-dialoge'>
                                        <p className='user-text'>Hi img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>    
                                        <small className='message-time'>3:43 Pm</small>
                                    </div>    
                                </div>
                            </div>
                            <div className='row message-container sender '>
                                <div className='col-6 message-dialoge2'>
                                    <div className='message-dialoge'>
                                        <p className='user-text'>Hi img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>    
                                        <small className='message-time'>3:43 Pm</small>
                                    </div>    
                                </div>
                            </div>


                        
                        
                        </div>

                        
                        <div className='message-sender'>
                        <form class="row">
                            <div class="col-10 message-text-input">
                                <textarea className='form-control' rows='1'placeholder='Type a message'></textarea>
                            </div>
                            <div class="col-2 message-text-send">
                                <button type="submit" class="btn btn-danger ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                </svg>
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>


                {/* ============== PROFILE =============== */}
                <div className='col-2'>
                    <div className='home-com profile-seaction'>
                        Profile
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
