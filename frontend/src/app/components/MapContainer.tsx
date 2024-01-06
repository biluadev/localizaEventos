'use client'

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '100vh',
    maxHeight: '100vh',
};

export const MapContainer = () => {
    const [center, setCenter] = useState ({ lat: -3.745, lng: -38.523 })
    const marker = [
        { lat: -19.899613, lng: -43.9364789 },
        { lat: -19.89965, lng: -43.9364789 },
        { lat: -19.89919, lng: -43.937981 },
        { lat: -19.968614, lng: -43.405302 },
    ];

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) throw new Error('API KEY NOT FOUND');
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Aqui oh", position);
                    const { latitude, longitude } = position.coords;
                    setCenter({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.log("Error getting location", error);
                },
            );
        }
    }, []); 

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            {marker.map((marker, index) => (
                <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
            ))}
        </GoogleMap>

    ) : (
        <>
            {' '}
            <p>Carregando...</p>
        </>
    );
};