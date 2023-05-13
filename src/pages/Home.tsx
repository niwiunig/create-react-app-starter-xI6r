import { Button } from '@mui/material';
import React, { useState } from 'react'
//@ts-ignore
import ReactPannellum, { getConfig } from "react-pannellum";



interface IUser {
    id?: number,
    username?: string,
    password?: string
}

interface IHotSpot {
    info: string,
    pitch: number,
    yaw: number,
    text: string,
    handleClick: () => void
}

interface Tour {
    id: number,
    name: string,
    description: string,
    authorId: number
}


const Home = () => {

    const [hotspot, setHotspot] = useState<Array<IHotSpot>>([])

    return (<>
        <div className="App" style={{ height: "100vh", width: "100vw" }}>
            <div>
                <ReactPannellum
                    id="1"
                    sceneId="firstScene"
                    imageSource="https://cdn.discordapp.com/attachments/301267432037941249/1105971319973105755/Haus--43.jpg"
                    autoLoad="true"
                    config={{
                        autoLoad: true
                    }}
                    style={{
                        height: "100%",
                        width: "100%"
                    }}
                    hotSpots={hotspot}

                />

            </div>
            <div>
                <ul>
                    {/*tours.map(tour => (
                        <li onClick={() => {
                            window.open("")
                        }
                        } key={tour.id}>
                            <h2>{tour.name}</h2>
                            <p>{tour.description}</p>
                        </li>
                    ))*/}

                </ul>
                <Button color='info' variant="contained">Increment</Button>
                <Button color='primary' variant='contained'>Bearbeiten</Button>
            </div>
        </div>
    </>)
}

export default Home