import React from 'react';  

const AboutUs = () => {  
    return (
      <div className="p-8 font-urbanist bg-backgroundGreen">  
        <div className="#333 min-h-screen pt-16">  
            <div className="container mx-auto px-4">    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
                    <div className="bg-white p-6 rounded-lg shadow-md">  
                        <h3 className="text-xl font-semibold text-green-600">Mission</h3>  
                        <p>Just like a spaceship embarks on a journey, our Recipe Sharing App aims to take you on a culinary adventure.</p>  
                    </div>  
                    <div className="bg-white p-6 rounded-lg shadow-md">  
                        <h3 className="text-xl font-semibold text-green-600">Vision</h3>  
                        <p>We are constantly seeking new ways to improve your experience.</p>  
                    </div>  
                    <div className="bg-white p-6 rounded-lg shadow-md">  
                        <h3 className="text-xl font-semibold text-green-600">Culture</h3>  
                        <p>We represent a commitment to providing a comprehensive and user-centric platform.</p>  
                    </div>  
                </div>  
                <div className="mt-8 text-center">  
                    <p className="text-lg">Welcome to Taste Tribe.</p>  
                    <p className="text-lg">Whether you’re a seasoned chef or a kitchen newbie, Taste Tribe offers a platform to explore new flavours, share your favourite dishes, and connect with like-minded food lovers.</p>  
                </div>  
            </div>  
        </div>
      </div>  
    );  
};  

export default AboutUs;