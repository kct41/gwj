import {Map, MapMarker} from "react-kakao-maps-sdk";
function Kamap(){
    return(
        <div>
            <Map
                center={{ lat: 37.391466258478026, lng: 126.63768200689616 }}
                style={{
                    width: '100%',
                    height: '400px',
                }}
            >

                <MapMarker
                    position={{ lat: 37.391466258478026, lng: 126.63768200689616 }}
                >
                </MapMarker>
            </Map>
        </div>
    )
}

export default Kamap;