import React from 'react';

export const Nav = () => {
  return (
    <div style={{backgroundColor: 'black', fontSize: '1.1em', marginBottom: '-1em', marginTop: '-1em', padding: '0.5em'}}>
           <div class="container">      
            <nav>
                <ul style={{display: 'flex', justifyContent: 'space-around', width: '20%', listStyle: 'none', textDecoration: 'none', textTransform: 'uppercase'}}>
                    <li class=""><a style={{ textDecoration: 'none', color: 'white'}} href="index.html">home </a></li>
                    <li><a style={{ textDecoration: 'none', color: 'white'}} href="https://princessluxuryhotels.com/about-i/">about</a></li>
                    
                    <li><a style={{ textDecoration: 'none', color: 'white'}} href="https://princessluxuryhotels.com/contact-i/" target="_blank" rel="noreferrer">contact us</a></li>
                    
                </ul>
            </nav>            
        </div>
    </div>
  )
}
