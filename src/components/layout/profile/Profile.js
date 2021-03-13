import React from 'react'
import './styles/Profile.css'
import ProfileHeader from './ProfileHeader'

function Profile() {
    return (
        <div className='profile'>
            <div className="profile__body">
                <ProfileHeader />

                <div className="profile__main">
                    <h1>profile main</h1>
                </div>
                {/* ProfileMain 
                
                    Summary
                    Teams, Top Highlights
                    Reviews
                    
                */}
            </div>
        </div>
    )
}

export default Profile
