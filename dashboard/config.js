// CUT START
var topBarCenterText = `VA3HDL - FN04ga`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
    ["2196F3", "CAT", "../CAThtml/CAT_Frequencies.html", "1"],
    ["2196F3", "HAMCLOCK", "http://192.168.0.111:8081/live.html", "1"],
    ["2196F3", "HC Clone", "../hamclock/hamclock.html", "1"],
    ["2196F3", "PISTAR", "http://pi-star.local/", "1"],
    ["2196F3", "ROTATOR", "../map/rotator.html", "1"],

    ["FF3300", "APRS", "https://aprs.to/?center=43.9982,-79.4625&zoom=11", "1"],
    // ["FF3300", "Arg Link", "https://hose.brandmeister.network/?subscribe=7227", "1"],
    ["FF3300", "BM", "https://brandmeister.network/", "1"],
    ["FF3300", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
    [
        "FF3300",
        "CONTEST",
        "https://www.contestcalendar.com/fivewkcal.html",
        "1",
    ],
    ["FF3300", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
    ["FF3300", "HamDXmap", "https://dxmap.f5uii.net/", "1"],
    ["FF3300", "PSKREPORTER", "https://pskreporter.info/pskmap.html?preset&callsign=VA3HDL&txrx=tx&timerange=86400&distunit=km&hidenight=1", "1"],
    ["FF3300", "WINLINK", "https://cms.winlink.org:444/maps/propagation.aspx", "1"],

    [
        "2196F3",
        "ADSB",
        "https://globe.adsbexchange.com/?SiteLat=44.0157&SiteLon=-79.4591&zoom=9",
        "1",
        "R",
    ],
    [
        "2196F3",
        "LIGHTNING",
        "https://map.blitzortung.org/#3.87/36.5/-89.41",
        "1",
        "R",
    ],
    [
        "2196F3",
        "RADAR",
        "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
        "1",
        "R",
    ],
    ["2196F3", "Stuff In Space", "https://stuffin.space/", "1", "R"],
    ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
    [
        "2196F3",
        "WEATHER",
        "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
        "1",
        "R",
    ],
    [
        "2196F3",
        "WINDS",
        "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
        "1",
        "R",
    ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var currentDate = new Date();
var aIMG = [
    // 1
    ["Radar NA", "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
    // 2
    [
        "Radar Local",
        "https://s.w-x.co/staticmaps/wu/wxtype/county_loc/bgm/animate.png",
    ],
    // 3
    [
        "ISS & RS-44 Position",
        "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
        "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
    ],
    // 4
    [
        "",
        "iframe|https://globe.adsbexchange.com/?SiteLat=44.0157&SiteLon=-79.4591&zoom=9",
        // "http://158.58.130.148:80/mjpg/video.mjpg",
        // "http://130.237.58.178:80/mjpg/video.mjpg",
    ],
    // 5
    [
        "Satellite NA",
        "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/can/GEOCOLOR/GOES16-CAN-GEOCOLOR-1125x560.gif",
    ],
    // 6
    [
        "Satellite Local",
        // "iframe||https://wttr.in/",
        // "iframe||http://pi-star.local/",
        // "iframe||https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4",
        // "iframe||http://192.168.0.111:8081/live.html",
        // "iframe||http://localhost:8073/version",
        "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif",
    ],
    // 7
    [
        "",
        // "iframe||https://www.youtube.com/embed/Jm8wRjD3xVA?autoplay=1",
        "iframe|https://www.ventusky.com/?p=44.01;-79.45;8&l=wind-10m",
        // "https://www.timeanddate.com/scripts/sunmap.php?iso=now",
        // "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        // "https://himawari8.nict.go.jp/movie/720/" + currentDate.toISOString().slice(0, 10).replace(/-/g, '') + "_pifd.mp4",
        // "https://ncthmwrwbtst.cr.chiba-u.ac.jp/movie/720/coastline/" + currentDate.toISOString().slice(0, 10).replace(/-/g, '') + "_pifd.mp4",
    ],
    // 8
    [
        "World Maps",
        "https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
        // "https://c.tadst.com/gfx/tzmap/map.1714082400.png?1652",
        // "http://192.168.0.111/hamclock/last_map.bmp",
    ],
    // 9
    [
        "Lightning NA",
        // "http://localhost:8073/version",
        "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
    ],
    // 10
    [
        "Lightning Local",
        // "http://192.168.0.111:8080/get_de.txt",
        "https://www.blitzortung.org/en/Images/image_b_ny.png",
    ],
    // 11
    [
        "Traffic Cams",
        "https://ww5.yorkmaps.ca/webtrafficimages/loc230.jpg",
        "https://ww5.yorkmaps.ca/webtrafficimages/loc86.jpg",
        "https://ww5.yorkmaps.ca/webtrafficimages/loc136.jpg",
        "https://ww5.yorkmaps.ca/webtrafficimages/loc283.jpg",
    ],
    // 12
    [
        "",
        "https://www.hamqsl.com/solar101vhf.php",
        "https://www.hamqsl.com/solar100sc.php",
        "https://www.hamqsl.com/solarpich.php",
        "https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png",
    ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay =
    [60100, 60200, 30300, 99999,
        300500, 300600, 99999, 15000,
        30800, 30900, 5000, 20000];
// var tileDelay = [0,0,0,0,0,0,0,0,0,0,0,0];

// CUT END
