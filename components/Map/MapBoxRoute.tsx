import React from 'react'
import { Source, Layer } from 'react-map-gl/mapbox'

function MapBoxRoute(props:any) {
  return (
    <Source type='geojson'
        data={{
        type: 'Feature',
        geometry: {
            type: 'LineString', coordinates: props.coordinates },
        properties: {}
        }}>
        <Layer
            type='line'
            layout={{'line-cap': 'round', 'line-join': 'round'}}
            paint={{'line-color': '#3887be', 'line-width': 5}}
        />
    </Source>
  )
}

export default MapBoxRoute