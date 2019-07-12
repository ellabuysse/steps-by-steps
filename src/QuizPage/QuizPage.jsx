import React from 'react';
import NavBar from '../NavBar/NavBar';
import BGImage from '../BGImage/BGImage';
import Footer from '../Footer/Footer';



const TipsPage = (props) => {
    return (
        <div>
            <NavBar/>
            <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.pexels.com/photos/1115090/pexels-photo-1115090.jpeg?cs=srgb&dl=beautiful-flowers-bloom-blossom-1115090.jpg&fm=jpg"
                        title="Environemental Impact Quiz"
                        position="bottom"
                        />
                }
        </div>
        <Footer/>
        
</div>
    );
};
export default TipsPage;