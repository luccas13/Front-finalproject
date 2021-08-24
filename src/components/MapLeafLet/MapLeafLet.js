import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapLeafLet = ({place}) => {

    const [position, setPosition] = useState([-29.43312678276487, -66.86011716493444]);

    useEffect(() => {
        setPosition([place.lat || -29.43312678276487, place.lon || -66.86011716493444]);
    }, [place]);

    return (
        <MapContainer style={{ width: '80vw', height: '80vh'}} center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {place?.name}. <br /> {place?.address}.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
 
export default MapLeafLet;