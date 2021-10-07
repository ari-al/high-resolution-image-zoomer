import './App.css';
import React, { useEffect, useState } from "react";
import OpenSeaDragon from "openseadragon";

const HighImageZoom = ({ image }) => {

    const [viewer, setViewer] = useState(null);
    useEffect(() => {
      if (image && viewer) {
        viewer.open(image.source);
      }
    }, [image]);
    
    const InitOpenseadragon = () => {
        viewer && viewer.destroy();
        setViewer(
            OpenSeaDragon({
                id: "openSeaDragon",
                prefixUrl: "/openseadragon/images/",
                //animationTime: 0.5,
                //blendTime: 0.1,
                //constrainDuringPan: true,
                showNavigator:  true,
                navigatorPosition:   "BOTTOM_LEFT",
                navigatorBorderColor: '#000000',
                navigatorDisplayRegionColor: '#ff0000',
                navigatorOpacity: 1.0, // default 0.8 
                showNavigationControl: false, // default true
                minZoomImageRatio: 1.0, // default 0.9
                maxZoomPixelRatio: 1.5, // default 1.1
                visibilityRatio: 1 // default 0.5
            })
        );

    };

    useEffect(() => {
        InitOpenseadragon();
        return () => {
            viewer && viewer.destroy();
        };
    }, []);

    return (
        <div 
        id="openSeaDragon" 
        style={{
        height: "800px",
        width: "1200px",
        marginTop: "40px"
        }}
        >
        </div>
    );
};

export { HighImageZoom };