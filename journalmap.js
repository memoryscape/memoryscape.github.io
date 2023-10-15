function initMap() {
    const mapCenter = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: mapCenter,
    });
  
    const coordinatesArray = [
      { lat: -25.363, lng: 131.044, label: 'Marker 1' },
      { lat: -24.363, lng: 130.044, label: 'Marker 2' },
      // Add more coordinates and labels as needed
    ];
  
    for (const coordinates of coordinatesArray) {
      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: "Click to zoom",
        label: coordinates.label,  // Set the label for the marker
      });
  
      marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });
    }
  
    map.addListener("center_changed", () => {
      // 3 seconds after the center of the map has changed, pan back to the
      // first marker's position.
      window.setTimeout(() => {
        map.panTo(coordinatesArray[0]);
      }, 3000);
    });
  }
  
  window.initMap = initMap;
  