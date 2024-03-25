import React from 'react'
import Hello from '../components/Hello'


function Home() {
    
    const name = 'Binar'
    const mobil = ['Avanza','Mobilio', 'Agya','Inova']
    const person = {
        name: 'Budi',
        address: 'Tangerang'
    }

    return (
        <div>
            <Hello />
            <h2>Halaman App js {name}</h2>
            <h2>Halo {person.name}</h2>
            {
                mobil.map((item) => {
                    return(
                        <>
                            <div>
                                <p>{item}</p>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Home