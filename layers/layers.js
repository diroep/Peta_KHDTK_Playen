var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasKHDTKPlayen_2 = new ol.format.GeoJSON();
var features_BatasKHDTKPlayen_2 = format_BatasKHDTKPlayen_2.readFeatures(json_BatasKHDTKPlayen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKHDTKPlayen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKHDTKPlayen_2.addFeatures(features_BatasKHDTKPlayen_2);
var lyr_BatasKHDTKPlayen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKHDTKPlayen_2, 
                style: style_BatasKHDTKPlayen_2,
                popuplayertitle: 'Batas KHDTK Playen',
                interactive: true,
                title: '<img src="styles/legend/BatasKHDTKPlayen_2.png" /> Batas KHDTK Playen'
            });
var format_Tanaman_Eks_Penelitian_rev_3 = new ol.format.GeoJSON();
var features_Tanaman_Eks_Penelitian_rev_3 = format_Tanaman_Eks_Penelitian_rev_3.readFeatures(json_Tanaman_Eks_Penelitian_rev_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanaman_Eks_Penelitian_rev_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanaman_Eks_Penelitian_rev_3.addFeatures(features_Tanaman_Eks_Penelitian_rev_3);
var lyr_Tanaman_Eks_Penelitian_rev_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tanaman_Eks_Penelitian_rev_3, 
                style: style_Tanaman_Eks_Penelitian_rev_3,
                popuplayertitle: 'Tanaman_Eks_Penelitian_rev',
                interactive: true,
                title: '<img src="styles/legend/Tanaman_Eks_Penelitian_rev_3.png" /> Tanaman_Eks_Penelitian_rev'
            });
var format_RHL_Lahan_Kosong_4 = new ol.format.GeoJSON();
var features_RHL_Lahan_Kosong_4 = format_RHL_Lahan_Kosong_4.readFeatures(json_RHL_Lahan_Kosong_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHL_Lahan_Kosong_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHL_Lahan_Kosong_4.addFeatures(features_RHL_Lahan_Kosong_4);
var lyr_RHL_Lahan_Kosong_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHL_Lahan_Kosong_4, 
                style: style_RHL_Lahan_Kosong_4,
                popuplayertitle: 'RHL_Lahan_Kosong',
                interactive: true,
                title: '<img src="styles/legend/RHL_Lahan_Kosong_4.png" /> RHL_Lahan_Kosong'
            });
var format_RHL_Sawah_Tadah_Hujan_5 = new ol.format.GeoJSON();
var features_RHL_Sawah_Tadah_Hujan_5 = format_RHL_Sawah_Tadah_Hujan_5.readFeatures(json_RHL_Sawah_Tadah_Hujan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHL_Sawah_Tadah_Hujan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHL_Sawah_Tadah_Hujan_5.addFeatures(features_RHL_Sawah_Tadah_Hujan_5);
var lyr_RHL_Sawah_Tadah_Hujan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHL_Sawah_Tadah_Hujan_5, 
                style: style_RHL_Sawah_Tadah_Hujan_5,
                popuplayertitle: 'RHL_Sawah_Tadah_Hujan',
                interactive: true,
                title: '<img src="styles/legend/RHL_Sawah_Tadah_Hujan_5.png" /> RHL_Sawah_Tadah_Hujan'
            });
var format_KHDTK_Gabung1_6 = new ol.format.GeoJSON();
var features_KHDTK_Gabung1_6 = format_KHDTK_Gabung1_6.readFeatures(json_KHDTK_Gabung1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTK_Gabung1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTK_Gabung1_6.addFeatures(features_KHDTK_Gabung1_6);
var lyr_KHDTK_Gabung1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTK_Gabung1_6, 
                style: style_KHDTK_Gabung1_6,
                popuplayertitle: 'KHDTK_Gabung1',
                interactive: true,
                title: 'KHDTK_Gabung1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_BatasKHDTKPlayen_2.setVisible(true);lyr_Tanaman_Eks_Penelitian_rev_3.setVisible(true);lyr_RHL_Lahan_Kosong_4.setVisible(true);lyr_RHL_Sawah_Tadah_Hujan_5.setVisible(true);lyr_KHDTK_Gabung1_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_WorldImagery_1,lyr_BatasKHDTKPlayen_2,lyr_Tanaman_Eks_Penelitian_rev_3,lyr_RHL_Lahan_Kosong_4,lyr_RHL_Sawah_Tadah_Hujan_5,lyr_KHDTK_Gabung1_6];
lyr_BatasKHDTKPlayen_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'luas__ha_': 'luas__ha_', });
lyr_Tanaman_Eks_Penelitian_rev_3.set('fieldAliases', {'Luas': 'Luas', 'Jenis_tnm': 'Tutupan Lahan', 'Tuplah': 'Tuplah', });
lyr_RHL_Lahan_Kosong_4.set('fieldAliases', {'Luas__Ha1_': 'Luas__Ha1_', 'Calon_RHL': 'Tutupan Lahan', 'Luas_Ha': 'Luas_Ha', });
lyr_RHL_Sawah_Tadah_Hujan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas__ha_': 'Luas__ha_', 'Tuplah': 'Tutupan Lahan', });
lyr_KHDTK_Gabung1_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'Nama': 'Nama', 'OBJECTID': 'OBJECTID', 'Lokasi_1': 'Letak', 'LokasiKawa': 'Kawasan', 'Koordina_1': 'Koordinat', 'Luas': 'Luas', 'SK_1': 'SK', 'Foto': 'Foto', 'Peta': 'Peta', 'Nama_KHDTK': 'Alamat GMaps', 'auxiliary_storage_labeling_predefinedpositionorder': 'auxiliary_storage_labeling_predefinedpositionorder', 'auxiliary_storage_labeling_offsetquad': 'auxiliary_storage_labeling_offsetquad', });
lyr_BatasKHDTKPlayen_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas__ha_': 'TextEdit', });
lyr_Tanaman_Eks_Penelitian_rev_3.set('fieldImages', {'Luas': 'Hidden', 'Jenis_tnm': 'TextEdit', 'Tuplah': 'Hidden', });
lyr_RHL_Lahan_Kosong_4.set('fieldImages', {'Luas__Ha1_': 'TextEdit', 'Calon_RHL': 'Hidden', 'Luas_Ha': 'Hidden', });
lyr_RHL_Sawah_Tadah_Hujan_5.set('fieldImages', {'OBJECTID': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Luas__ha_': 'Hidden', 'Tuplah': 'TextEdit', });
lyr_KHDTK_Gabung1_6.set('fieldImages', {'OBJECTID_1': 'Hidden', 'Id': 'Hidden', 'Nama': 'TextEdit', 'OBJECTID': 'Hidden', 'Lokasi_1': 'TextEdit', 'LokasiKawa': 'Hidden', 'Koordina_1': 'Hidden', 'Luas': 'TextEdit', 'SK_1': 'Hidden', 'Foto': 'ExternalResource', 'Peta': 'Hidden', 'Nama_KHDTK': 'TextEdit', 'auxiliary_storage_labeling_predefinedpositionorder': 'TextEdit', 'auxiliary_storage_labeling_offsetquad': 'TextEdit', });
lyr_BatasKHDTKPlayen_2.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'luas__ha_': 'no label', });
lyr_Tanaman_Eks_Penelitian_rev_3.set('fieldLabels', {'Jenis_tnm': 'no label', });
lyr_RHL_Lahan_Kosong_4.set('fieldLabels', {'Luas__Ha1_': 'no label', });
lyr_RHL_Sawah_Tadah_Hujan_5.set('fieldLabels', {'Tuplah': 'no label', });
lyr_KHDTK_Gabung1_6.set('fieldLabels', {'Nama': 'inline label - always visible', 'Lokasi_1': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Foto': 'inline label - always visible', 'Nama_KHDTK': 'inline label - visible with data', 'auxiliary_storage_labeling_predefinedpositionorder': 'no label', 'auxiliary_storage_labeling_offsetquad': 'no label', });
lyr_KHDTK_Gabung1_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});