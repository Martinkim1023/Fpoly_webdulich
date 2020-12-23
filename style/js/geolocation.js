var map;
function initialize() {
var myLatlng = new google.maps.LatLng(10.790141,106.633301);
var myOptions = {
zoom: 16,
center: myLatlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('div_id'),myOptions);

if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
var pos = new google.maps.LatLng(position.coords.latitude,
position.coords.longitude);
var infowindow = new google.maps.InfoWindow({
map: map,
position: pos,
content: "<b style='color:#00F'>Trần Văn Tiến đang ở đây</b> <br/>" +
"<img src='avatar.jpg' height='70' width='50' />"
});
map.setCenter(pos);
}, function() {
handleNoGeolocation(true);
});
}
else
{
handleNoGeolocation(false);
}
}
function handleNoGeolocation(errorFlag) {
if (errorFlag) {
var content = 'Quá trình tìm kiếm địa điểm củabạn không thể thực hiện.';
} else {
var content = 'Trình duyệt của bạn không hỗ trợ ';
}
var infowindow = new google.maps.InfoWindow(options);
map.setCenter(options.position);
}