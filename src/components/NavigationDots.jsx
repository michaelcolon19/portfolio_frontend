import React from 'react'

const sidebarItems = ['home', 'about', 'work', 'skills', 'testimonial', 'contact'];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {sidebarItems.map((item, index) => (
          <a 
            href={`#${item}`} 
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#313BAC'} : {}}
          />
        ))}
    </div>
  )
}

export default NavigationDots
