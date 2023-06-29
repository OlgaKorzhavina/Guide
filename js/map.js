new WOW().init();

  ymaps.ready(init);
    function init() {   
      var myMap = new ymaps.Map("map", {    
        center: [59.936544351818696,30.313484274447248],  
        zoom: 11,    
      });    
      myGeoObject = new ymaps.GeoObject({   
        geometry: {
          type: "Point",
          coordinates: [59.936544351818696,30.313484274447248],
        }, 
        
        
      });
    
    
      var myPlacemark = new ymaps.Placemark( 
        [59.936544351818696,30.313484274447248],  
        {},    
        {   
          iconLayout: "default#image",    
          iconImageHref: "./img/marker.svg",    
          iconImageSize: [48, 48],    
          iconImageOffset: [0, 0],    
        },   

      );    
      myMap.geoObjects.add(myPlacemark);    
      
    }


    
    
  
  
  
  
  