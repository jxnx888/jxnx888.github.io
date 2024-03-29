var mouseX=0;
var mouseY=0;
$(document).bind("contextmenu",function(e){
    return false;
});
if(IEVersion()!=-1){
    $(".ie_notice").show();
}
function IEVersion() {
    var userAgent = navigator.userAgent; //get the userAgent info of browser
    var isIE = userAgent.indexOf( "compatible" ) > - 1 && userAgent.indexOf( "MSIE" ) > - 1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf( "Edge" ) > - 1 && ! isIE; //判断是否IE的Edge浏览器 check if it is Edge
    var isIE11 = userAgent.indexOf( 'Trident' ) > - 1 && userAgent.indexOf( "rv:11.0" ) > - 1;
    if (isIE) {
        var reIE = new RegExp( "MSIE (\\d+\\.\\d+);" );
        reIE.test( userAgent );
        var fIEVersion = parseFloat( RegExp["$1"] );
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';//edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return - 1;//不是ie浏览器
    }
}

$(".show_more").click(function (  ) {
    $("#decals").toggleClass("close");
    $(".show_more").toggleClass("show_more_close");
    $(".map").toggleClass("map_btn_close");
    $(".map").trigger("click");
    onWindowResize(); //canvas floats to right side,in case the show_more close, there were dark side
});
//decal map menu click
$(".map").click(function(){
    $("#decals .top_nav div").removeClass("active");
    $("#decals .top_nav .map").addClass("active");
    $("#map_decals #map_wrapper").show();
    $("#map_decals #recently_wrapper").hide();
    $("#decal_upload").show(); //上传显示
});
//decal map menu click end
//decal recently used menu click
$(".recent").click(function(){
    $("#decals .top_nav div").removeClass("active");
    $("#decals .top_nav .recent").addClass("active");
    $("#map_decals #map_wrapper").hide();
    $("#decal_upload").hide(); //上传隐藏
    $("#map_decals #recently_wrapper").show();
});
//decal recently used menu click end
//always update the mouse position
$('#container').mousemove(function (e) {
    mouseX = e.originalEvent.x || e.originalEvent.layerX || 0;
    mouseY = e.originalEvent.y || e.originalEvent.layerY || 0;
});
//always update the mouse position end
//hide the right click menu
$(".right_menu_bg").click(function(){
    showNhideMenu(0)
})
var container = document.getElementById( 'container' ); //
var exporter; //文件导出
var decalMap={}; //decal list map obj
getDecalMap();
/**
 * list decals
 * **/
function getDecalMap(){
    var imgPath = '/image/decals/';
    var totalNum = 52;
    for(var i=1;i<totalNum; i++){
        decalMap[i] = imgPath+i+'.png'
    }
    createMap("map_wrapper",decalMap);
}

var renderer, scene, camera, stats;
var mesh;
var raycaster;
var line;
var intersection = {
    intersects: false,
    point: new THREE.Vector3(),
    normal: new THREE.Vector3()
};
var mouse = new THREE.Vector2();
var intersects = [];
var defaultSTL = '../models/stl/ascii/luggage.stl';
var textureLoader = new THREE.TextureLoader();
var currentDecal=decalMap[1]; // set first decal as default decal
var decalDiffuse = textureLoader.load( decalMap[1] );  // set decal decalMaterial map
var decalNormal = textureLoader.load( decalMap[1] ); // set decal decalMaterial normalMap
var decalMaterial = new THREE.MeshPhongMaterial( {
    // ambient:0x444444,//环境光颜色）
    specular: 0x444444, //（镜面反射光颜色）
    // shininess:30, //（镜面反射光强度）此属性指定 specular 镜面反射光部分的亮度。默认值是 30
    // emissive:0x444444, //（自发光颜色）
    map: decalDiffuse,
    normalMap: decalNormal,
    normalScale: new THREE.Vector2( 1, 1 ),
    name:"decalMaterial",
    shininess: 30,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: - 4,
    wireframe: false,
    color:0xC3C3C3,
} );
var lastShootPostion; //the last shot decal position
var lastShootrotation;//the last shot decal rotation or orientation
var decals = []; // to save all shot decals
var removedDecals = [];// removed decals after clicked back button
var decalsPRobj={};// all shot decals' position and rotation
var recentlyUsedDecal= new Array();//to save all recently used decals
var mouseHelper;
var mouseOrientation;//the orientation of mouse decal
var position = new THREE.Vector3();  // shot postion
var orientation = new THREE.Euler(); // shot orientation
var size = new THREE.Vector3( 10, 10, 10 );  // decal size
var currentSize = new THREE.Vector3( 10, 10, 10 ); //current mouse decal size
var currentPosition = new THREE.Vector3(0,0,0);//current mouse decal position (for mouseHelper)
var currentmaterial;//current mouse decal material (for mouseHelper,and current decal)
var dirLight, dirLightHeper, hemiLight, hemiLightHelper;
var params = {  //params for GUI
    SUBMIT:function (){
        exportASCII();
    },
    /*minScale: 10,*/
    maxScale: 30,
    maxScaleHide: 30,
    Size: 30,
    rotation: Math.PI /180, // positive is counter-clockwise   Math.PI = 3.14 = 180°
    rotationHide: Math.PI /180, // positive is counter-clockwise   Math.PI = 3.14 = 180°
    back: function () {
        removeLastDecals();
    },
    forward: function () {
        returnLastDecals();
    },
    clear: function () {
        removeDecals();
    },
    remove:function(){
        removeSelectedDecal();
    }
};
var leftClick =false; //是否左键点击/ mouse left clicked or not
var shotFlag =false; //是否已经shot/  if shot decal
var focusedDecals=[];//鼠标位置的decal集合  all decals of mouse position
var focusedDecalFlag;//鼠标位置的decal Flag
var focusedDecalUUID;//鼠标位置的decal uuid    top decal uuid of mouse position/focused decal uuid
var menuShowFlag = false; //current menu status flag
var controlRotate = true; // the controls enableRotate
var controls; // project controller
var clickedLeftMouse = false;//mouse left click
window.addEventListener( 'load', init );

/**
 * initial project
 * */
function init( file ) {
    $("#loading_data").show();
    renderer = new THREE.WebGLRenderer( { antialias: true } );  //new a three renderer
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight);
    container.appendChild( renderer.domElement ); //append renderer to container

    /*stats = new Stats(); //网络帧数
    container.appendChild( stats.dom );*/

    scene = new THREE.Scene();
    scene.name = "scene"; //give the name of scene
    // sky + ground
    //sky
    scene.background = new THREE.Color( 0xcce0ff );
    scene.fog = new THREE.Fog( 0xcce0ff, 50, 1000 );
    // ground
    var loaderText = new THREE.TextureLoader();
    var groundTexture = loaderText.load( '/image/grasslight-big.jpg' );
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set( 25, 25 );
    groundTexture.anisotropy = 1;
    groundTexture.encoding = THREE.sRGBEncoding;
    var groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );
    var meshGround = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), groundMaterial );
    meshGround.position.y = - 50;
    meshGround.rotation.x = - Math.PI / 2;
    meshGround.receiveShadow = true;
    scene.add( meshGround );
    // sky + ground end

    // scene.add( new THREE.AxesHelper( 50 ) ); //坐标位置辅助线 Coordinate system

    // 相机位置距离 camera position
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 120;
    camera.target = new THREE.Vector3();

    var lights = new THREE.PointLight( 0xffffff, 0.2 ); //camera light， You do not need any other lights in your scene if you use this pattern.
    camera.add( lights );
    scene.add( camera );
    controls = new THREE.OrbitControls( camera, renderer.domElement ); // project controller
    controls.minDistance = 50; //设置相机距离原点的最近距离 min distance of camera to coordinate origin
    controls.maxDistance = 200;//设置相机距离原点的最远距离 max distance of camera to coordinate origin

    exporter = new THREE.STLExporter(); //导出工具  exporter tool

    // LIGHTS
    scene.add( new THREE.AmbientLight( 0xFFFFFFF,1.2) );//（环境光） environment light

    /*dirLight = new THREE.DirectionalLight( 0xffffff, .08 ); //正面上
    dirLight.position.set( 0,75, 100 );
    // dirLightHeper = new THREE.DirectionalLightHelper( dirLight, 5 );//光源辅助线
    // scene.add( dirLightHeper );
    scene.add( dirLight );*/

    // 鼠标红线 mouse helper line
    var geometry = new THREE.BufferGeometry();
    geometry.setFromPoints( [new THREE.Vector3(), new THREE.Vector3()] );

    var lineMaterial = new THREE.LineBasicMaterial( {
        color: 0xFF0000,
        linewidth: 100,
        linecap: 'round',
        linejoin: 'round'
    } );
    line = new THREE.Line( geometry, lineMaterial );
    line.visible = false; //hide the line
    scene.add( line ); //鼠标辅助线

    loadSTL(defaultSTL,decals);
    raycaster = new THREE.Raycaster();
    initGUI();//all the control GUI

    window.addEventListener( 'resize', onWindowResize, false );

    var moved = false;

    controls.addEventListener( 'change', function () {
        moved = true;
    } );

    window.addEventListener( 'mousedown', function (e) {

        moved = false;
        if (e.button == 0) { //mouse left button
            if(focusedDecalFlag&&shotFlag){
                controls.enableRotate = false; //disable the controls'Rotate
                controlRotate = false;
            }
            else{
                controls.enableRotate = true; //enable the controls'Rotate
                controlRotate = true;
            }
            clickedLeftMouse = true;
        }

    }, false );

    window.addEventListener( 'mouseup', function (e) {
        if (e.button == 0) { //mouse left button
            // menuShowFlag = true;
            clickedLeftMouse = false;
            if(!focusedDecalFlag){
                controls.enableRotate = true; //enable the controls'Rotate
                controlRotate = true;
            }
            // console.log("鼠标左键!")
            var menuStatus = $(".right_click_menu").css("display"); //check the right clicked menu show or not
            if (menuStatus != 'block') {
                checkIntersection();
                if (! moved && intersection.intersects && !shotFlag) {
                    shoot(0);
                    // 做点shoot后，取消鼠标decal，remove decal after shoot
                    leftClick = true;
                    shotFlag = true;
                    clearCache( mouseHelper );
                    scene.remove( mouseHelper ); //after shot, remove the mouseHelper
                    $( ".activeDecal" ).removeClass( 'activeDecal' ); //after shot, remove the active decal style
                }
            }
        }else if (e.button == 2){ //mouse right button
            // console.log("鼠标右键!");
            if(focusedDecalFlag){ //if focused decal, then right click to show the menu for this decal
                if(focusedDecalUUID){
                    showNhideMenu(1);
                }
            }
        }
    } );

    window.addEventListener( 'mousemove', onTouchMove );
    window.addEventListener( 'touchmove', onTouchMove );

    onWindowResize();
    animate(); //render and so on

}
function onTouchMove( event ) {

    var x, y;

    if (event.changedTouches) {

        x = event.changedTouches[0].pageX;
        y = event.changedTouches[0].pageY;

    } else {

        x = event.clientX;
        y = event.clientY;

    }
    var leftDecalWidth = $("#decals").width(); //left decal side width
    mouse.x = ( x / (window.innerWidth+leftDecalWidth) ) * 2 - 1;
    // mouse.x = ( x / window.innerWidth ) * 2 - 1;
    mouse.y = - ( y / window.innerHeight ) * 2 + 1;
    if(!menuShowFlag){
        checkIntersection();
    }
    if(!controlRotate && clickedLeftMouse){ // https://github.com/spite/THREE.DecalGeometry/issues/9
        if(focusedDecalUUID){
            for(var i in decals){
                var currentDecal = decals[i];
                if(currentDecal.uuid == focusedDecalUUID){
                    for(var j in decalsPRobj){
                        if(focusedDecalUUID == decalsPRobj[j].uuid){
                            var thisShootPostion = decalsPRobj[j].position;
                            var thisShootrotation =decalsPRobj[j].orientation;
                            var this_size = decalsPRobj[j].size;
                            thisShootPostion.copy(mouseHelper.position);
                            params.Size = this_size;
                            break;
                        }
                    }
                    decalMaterial = currentDecal.material;
                    clearCache( currentDecal );
                    scene.remove(currentDecal);
                    decals.splice(i,1); //remove element that index is i in array decals
                    shoot(5,thisShootrotation,thisShootPostion);
                    break;
                }
            }
        }
    }
}
function checkIntersection() {

    if (! mesh) return;

    raycaster.setFromCamera( mouse, camera );
    raycaster.intersectObject( mesh, false, intersects );

    if (intersects.length > 0) {

        var p = intersects[0].point;
        mouseHelper.position.set( 0, 0, 0 );
        mouseHelper.position.copy( p );  //copy intersection position to mouseHelper
        intersection.point.copy( p );
        /*1.克隆旧的法线 2.旧法线乘以模型的世界矩阵得到归一化后的法线 3.和一个标量相乘，放大10倍。 4.加上点击点的坐标，进行平移。*/
        var n = intersects[0].face.normal.clone();
        n.transformDirection( mesh.matrixWorld );
        n.multiplyScalar( 10 );
        n.add( intersects[0].point );

        intersection.normal.copy( intersects[0].face.normal );
        mouseHelper.lookAt( n );

        var positions = line.geometry.attributes.position;
        positions.setXYZ( 0, p.x, p.y, p.z );
        positions.setXYZ( 1, n.x, n.y, n.z );
        positions.needsUpdate = true;


        if(shotFlag){ //if shot, we can pick decal

            // var sceneChilds = scene.children;
            var sceneChilds = raycaster.intersectObjects( scene.children ); //get all objects in the current position of your mouse;
            for(var i in sceneChilds){
                if(sceneChilds[i]["object"]){
                    var currentObj =  sceneChilds[i]["object"];
                    if(currentObj["name"] == "decal"){ //get all objects whose name is decal in the current position of your mouse;
                        focusedDecals.push(currentObj);
                    }
                }
            }
            if(focusedDecals.length>0){
                var topDecal = focusedDecals[focusedDecals.length-1]; //get last shot decal object in the current position of your mouse;
                if(focusedDecalUUID){
                    for(var i in decals){
                        if(decals[i].uuid == focusedDecalUUID){ //reset the last focused decal object color
                            decals[i].material.color.set("#C3C3C3");
                            break;
                        }
                        else{
                            decals[i].material.color.set("#C3C3C3");
                        }
                    }
                }
                focusedDecalUUID = topDecal.uuid; //reset the current focused decal object uuid
                focusedDecalFlag = true;
                topDecal.material.color.set( '#f00' ); //set the current focused decal object color
            }
            else{
                showNhideMenu(0);
                if(focusedDecalUUID){ //if current position of your mouse do not have decal, reset all decal color;
                    for(var i in decals){
                        if(decals[i].uuid == focusedDecalUUID){//reset the last focused decal object color
                            decals[i].material.color.set("#C3C3C3");
                            break;
                        }
                        else{
                            decals[i].material.color.set("#C3C3C3");
                        }
                    }
                }
                focusedDecalFlag = false;
            }
        }
        focusedDecals = []; //reset decals array
        intersection.intersects = true;
        intersects.length = 0;

    } else {
        intersection.intersects = false;
        line.visible = false;
        showNhideMenu(0);
        for(var i in decals){ //if do not have intersects, clean the select status and clean the focusedDecalUUID
            if(decals[i].uuid == focusedDecalUUID){//if current position of your mouse do not have decal, reset all decal color;
                decals[i].material.color.set("#C3C3C3");//reset the last focused decal object color
                break;
            }
        }
        focusedDecals = [];
        focusedDecalFlag =false;
        focusedDecalUUID = "";
        controls.enableRotate = true; //enable the controls'Rotate
        controlRotate = true;
    }
}

function loadSTL( file,decalMapArr ) {
    // ASCII file
    if (file) {
        file = file;
    } else {
        file = './models/stl/ascii/luggage.stl';
    }
    // file = '';
    var loader = new THREE.STLLoader();
    loader.load( file, function ( geometry ) {
        var material = new THREE.MeshPhongMaterial( { color: 0x9B9EA1 } );
        mesh = new THREE.Mesh( geometry, material );
        //position
        mesh.position.set( 0, 0, 0 );
        mesh.rotation.set( 1.6, 0, 0);
        mesh.scale.set( .08, .08, .08 );
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add( mesh );
        if(decalMapArr.length>0){
            for (var i in decalMapArr){
                scene.add( decalMapArr[i] );
            }
        }
        $("#loading_data").fadeOut(500);
        var currentscale = params.maxScale;
        currentSize.set( currentscale, currentscale, currentscale );
        var currentmaterial = decalMaterial.clone();
        mouseHelper= new THREE.Mesh( new THREE.DecalGeometry(mesh, position, orientation, currentSize ), currentmaterial );
        scene.add( mouseHelper );
        setTimeout(function () {
            $(".activeDecal").trigger("click"); //激活鼠标首次decal显示
        },200)
    },function(xhr){
        console.log("xgr::"+xhr)
        $(".processingbar .barwidth").css("width",( xhr.loaded / xhr.total * 100 )+"%")
    } );
}

function shoot(type,lastRotation,lastPosition) { //type:0 第一次点击 1，旋转贴图 3: 选中贴图的旋转 4, 选中贴图改变大小尺寸

    // 当前选择贴图替换
    var sameImgNum=0;
    for(var i in recentlyUsedDecal){
        if(recentlyUsedDecal[i] == currentDecal){
            sameImgNum++;
        }
    }
    if(sameImgNum == 0){
        recentlyUsedDecal.push(currentDecal);
    }

    // 当前选择贴图替换end
    if(type==1 || type == 3|| type == 4|| type == 5){
        position.copy( lastPosition );
        orientation.copy( lastRotation);
    }
    else{
        position.copy( intersection.point );
        orientation.copy( mouseHelper.rotation );
        if(orientation._z == 0 && params.rotation !=0){ //default orientation z is 0, if
            orientation._z = params.rotation / 60;
        }
        lastShootPostion = position;
        lastShootrotation =orientation;
    }
    // if ( params.rotate ) orientation.z = Math.random() * 2 * Math.PI;
    var scale = params.maxScale;
    if(type == 3 || type == 4|| type == 5){ //type 3，4 is change selected decal, so using other size attr
        scale = params.Size;
    }
    size.set( scale, scale, scale );
    var material = decalMaterial.clone();
    var m = new THREE.Mesh( new THREE.DecalGeometry( mesh, position, orientation, size ), material );
    m.name = 'decal';
    decals.push( m );
    scene.add( m );
    var prObj = {};
    prObj["position"]=position.clone();
    prObj["orientation"]=orientation.clone();
    prObj["size"]=scale;
    prObj["uuid"]=m.uuid;
    decalsPRobj[m.uuid] = prObj;
    if(type == 3 || type == 4){ //each time reshoot, the decalGeometry is the new one, so the uuid changed
        focusedDecalUUID = m.uuid;
    }
    if(decals.length>0){
        if(decals.length>0){
            $(".back_btn").addClass("active_back")
        }
    }
    createMap("recently_wrapper",recentlyUsedDecal);
}

function animate() {

    requestAnimationFrame( animate );

    renderer.render( scene, camera );

    // stats.update();

}
function onWindowResize() {
    var leftDecalWidth = $("#decals").width(); //left decal side width
    camera.aspect = (window.innerWidth-leftDecalWidth) / window.innerHeight;
    renderer.setSize( window.innerWidth-leftDecalWidth, window.innerHeight );
    // camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // renderer.setSize( window.innerWidth, window.innerHeight );
}

function removeDecals() {

    decals.forEach( function ( d ) {
        clearCache(d);
        scene.remove( d );

    } );

    decals = [];
    removedDecals = [];
    $(".back_btn").removeClass("active_back");
    $(".forward_btn").removeClass("active_forward");
}

function removeLastDecals(type) { //type 0; default back btn 1: selected decal back
    if (decals[decals.length - 1]) {
        clearCache(decals[decals.length - 1]);
        scene.remove( decals[decals.length - 1] );
        removedDecals.push( decals[decals.length - 1] );
        decals.pop();
    }
    if(decals.length>0){
        $(".back_btn").removeClass("active_back").addClass("active_back"); //目前decals数组不为空
    }
    else{
        $(".back_btn").removeClass("active_back"); //目前decals数组为空
    }
    if(removedDecals.length>0){ //已撤回的数组是否为空
        $(".forward_btn").removeClass("active_forward").addClass("active_forward"); //目前decals数组不为空
    }
    else{
        $(".forward_btn").removeClass("active_forward"); //目前decals数组为空
    }
}

function returnLastDecals() {
    if (removedDecals[removedDecals.length-1]) {
        decals.push( removedDecals[removedDecals.length-1] );
        scene.add( removedDecals[removedDecals.length-1] );
        removedDecals.pop();
    }
    if(decals.length>0){
        $(".back_btn").removeClass("active_back").addClass("active_back"); //目前decals数组不为空
    }
    else{
        $(".back_btn").removeClass("active_back"); //目前decals数组为空
    }
    if(removedDecals.length>0){
        $(".forward_btn").removeClass("active_forward").addClass("active_forward"); //目前decals数组不为空
    }
    else{
        $(".forward_btn").removeClass("active_forward"); //目前decals数组为空
    }
}
// 导出相关
function exportASCII() {
    var result = exporter.parse( mesh );
    var date= Date.parse(new Date());
    saveString( result, date+'.stl' );
}

function exportBinary() {
    var result = exporter.parse( mesh, { binary: true } );
    var date= new Date();
    saveArrayBuffer( result,  date+'.stl' );

}
var link = document.createElement( 'a' );
link.style.display = 'none';
document.body.appendChild( link );

function save( blob, filename ) {

    link.href = URL.createObjectURL( blob );
    link.download = filename;
    link.click();

}
function saveString( text, filename ) {

    save( new Blob( [ text ], { type: 'text/plain' } ), filename );

}

function saveArrayBuffer( buffer, filename ) {

    save( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename );

}
// 导出相关 end
function changeCurrentDecal(obj){
    // return function(obj){
    // console.log(img);
    $(".each_decal").removeClass("activeDecal");
    // $(obj).siblings().removeClass("activeDecal");
    $(obj).addClass("activeDecal");
    var img = $(obj).find("img").attr("src");

    currentDecal = img;
    decalDiffuse = textureLoader.load( currentDecal );
    decalNormal =  textureLoader.load( currentDecal );
    decalMaterial = new THREE.MeshPhongMaterial( {
        specular: 0x444444,
        map: decalDiffuse,
        normalMap: decalNormal,
        normalScale: new THREE.Vector2( 1, 1 ),
        shininess: 30,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: - 4,
        wireframe: false,
        color:0xC3C3C3,
    } );
    changeMouseDecal();
    shotFlag = false; //恢复可点击shoot
}

function createMap(id,arr) {  //展示贴图，并赋予点击事件
    var reveseHTML =''
    var reverseArr =[];
    if(id=="recently_wrapper"){
        if(arr.length > 0){
            $(".no_recently").remove();
            for(var i in arr){
                reverseArr.push(arr[i])
            }
            reverseArr=reverseArr.reverse();
            for (var j in reverseArr){
                reveseHTML += '<div class="each_decal" onclick="changeCurrentDecal(this)"><img src="' + reverseArr[j] + '" alt=""></div>';
            }
        }
    }
    else{
        reverseArr = arr;
        reveseHTML+=""
    }
    if (id == "map_wrapper") {
        for (var m in reverseArr) {
            if(m==1){
                reveseHTML += '<div class="each_decal activeDecal" onclick="changeCurrentDecal(this)"><img src="' + reverseArr[m] + '" alt=""></div>';
            }
            else{
                reveseHTML += '<div class="each_decal" onclick="changeCurrentDecal(this)"><img src="' + reverseArr[m] + '" alt=""></div>';
            }
        }
    }
    $("#"+id).html(reveseHTML)
}
function uploadMap(file){ //上传图片
    if(file.length>1){
        alert('Please drag only one image.');
        document.getElementById('upload_input').value = null;
        return false;
    }
    if(file[0].type.indexOf("png")>-1){}else{
        alert('File ' + file[0].name + ' is not a image(only support png).');
        document.getElementById('upload_input').value = null;
        return false;
    }
    if ((file[0].size)/1024 > 8192) {
        alert('File size need less than 8M');
        document.getElementById('upload_input').value = null;
        return false;
    }
    else{

        var imgsrc; //上传图片，并创建url
        if(window.webkitURL){
            imgsrc=window.webkitURL.createObjectURL(file[0]);
        }
        else if(window.URL){
            imgsrc=window.URL.createObjectURL(file[0])
        }
        else{
            var reader = new FileReader();
            reader.onload = function(e) {
                imgsrc=e.target.result;
            }
            reader.readAsDataURL(file[0]);
        }
        var uploadHTML = '<div class="each_decal" onclick="changeCurrentDecal(this)"><img src="'+imgsrc+'" alt=""></div>';
        $("#map_wrapper").prepend(uploadHTML);
        $("#map_wrapper .each_decal:eq(0)").trigger("click");//默认选中
    }
}
function getCanvasBase64(img) {
    var image = new Image();
    //至关重要
    image.crossOrigin = '';
    image.src = img;
    //至关重要
    var deferred = $.Deferred();
    if (img) {
        image.onload = function () {
            deferred.resolve(getBase64Image(image));//将base64传给done上传处理
            // document.getElementById("CanvasImg").appendChild(image);
        }
        return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
    }
}
//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
function getBase64Image(img, width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL();
    return dataURL;
}
//End：

function updateDecalTransform() { //旋转decal  移除原有的，改变角度，再shoot到原位置
    /*var lastDecal = decals[decals.length - 1];
    clearCache(lastDecal);
    scene.remove(lastDecal);
    decals.pop(); //remove last element in array decals
    lastShootrotation.z = params.rotation / 60;
    shoot( 1, lastShootrotation, lastShootPostion );*/
    if (!shotFlag) { //only rerote before shoot the decal
        // 改变鼠标decal
        var currentscale = params.maxScale;
        currentSize.set( currentscale, currentscale, 30 );
        currentmaterial = decalMaterial.clone();
        orientation._z = params.rotation / 60;
        mouseOrientation = params.rotation / 60;
        clearCache( mouseHelper );
        scene.remove( mouseHelper );
        mouseHelper = new THREE.Mesh( new THREE.DecalGeometry( mesh, currentPosition, orientation, currentSize ), currentmaterial );
        scene.add( mouseHelper );
        // 改变鼠标decal end
    }
}

function updateDecalSize() { //改变decal大小
    if (!shotFlag) { //only resize after picked the decal
        // 改变鼠标decal
        var currentscale = params.maxScale;
        currentSize.set( currentscale, currentscale, 30 );
        currentmaterial = decalMaterial.clone();
        clearCache( mouseHelper );
        scene.remove( mouseHelper );
        mouseHelper = new THREE.Mesh( new THREE.DecalGeometry( mesh, currentPosition, orientation, currentSize ), currentmaterial );
        scene.add( mouseHelper );
        // 改变鼠标decal end
    }
}
/**
 * rotate the selected decal
 * */
function updateDecalTransformMenu() { //旋转decal  移除原有的，改变角度，再shoot到原位置   type: do not need to rote
    if(focusedDecalUUID){
        for(var i in decals){
            var currentDecal = decals[i];
            if(currentDecal.uuid == focusedDecalUUID){
                for(var j in decalsPRobj){
                    if(focusedDecalUUID == decalsPRobj[j].uuid){
                        var thisShootPostion = decalsPRobj[j].position;
                        var thisShootrotation =decalsPRobj[j].orientation;
                        thisShootrotation.z = params.rotationHide / 60;
                        delete decalsPRobj[j];
                        break;
                    }
                }
                decalMaterial = currentDecal.material;
                clearCache( currentDecal );
                scene.remove(currentDecal);
                decals.splice(i,1); //remove element that index is i in array decals
                shoot(3,thisShootrotation,thisShootPostion);
                break;
            }
        }
    }
}
/**
 * resize the selected decal
 * */
function updateDecalSizeMenu() { //改变decal大小
    if(focusedDecalUUID){
        for(var i in decals){
            var currentDecal = decals[i];
            if(currentDecal.uuid == focusedDecalUUID){
                for(var j in decalsPRobj){
                    if(focusedDecalUUID == decalsPRobj[j].uuid){
                        var thisShootPostion = decalsPRobj[j].position;
                        var thisShootrotation =decalsPRobj[j].orientation;
                        delete decalsPRobj[j];
                        break;
                    }
                }
                lastShootrotation._z = params.rotationHide / 60;
                decalMaterial = currentDecal.material;
                clearCache(currentDecal);
                scene.remove(currentDecal);
                decals.splice(i,1); //remove element that index is i in array decals
                shoot(3,thisShootrotation,thisShootPostion);
                break;
            }
        }

    }
}

function initGUI(){
    var gui = new dat.GUI();
    gui.add( params, 'SUBMIT' );
    // gui.add( params, 'minScale', 1, 30 );
    gui.add( params, 'maxScale', 1, 30 ).name( 'Mouse Decal Size' ).onChange( updateDecalSize );
    gui.add( params, 'rotation', -180, 180).name( 'Mouse Decal Rotation' ).onChange( updateDecalTransform ); //.name( 'rotation' ).onChange( updateDecalTransform )
    gui.add( params, 'back' ).name("Remove last Decal");
    gui.add( params, 'forward' ).name("Restore last Decal");
    gui.add( params, 'clear' ).name("Clear All");
    gui.open();
    $(".dg ul li:nth-of-type(1)").addClass("exportSTL");
    $(".dg ul li:nth-of-type(2)").addClass("decal_size");
    $(".dg ul li:nth-of-type(3)").addClass("rotation");
    $(".dg ul li:nth-of-type(4)").addClass("back_btn");
    $(".dg ul li:nth-of-type(5)").addClass("forward_btn");
    // 首次禁止操作rotation，否则报错
    // $(".rotation").find(".property-name").text("rotation( -180°- 180° )");
    // $(".rotation").addClass("rotation_cover");
    // $(".rotation div:eq(0)").addClass("rotation_no");
    // $(".rotation").find("input").addClass("input_no");
    // 首次禁止操作rotation，否则报错 end
    $(".dg.ac .dg.main.a:eq(0)").addClass("main_menu");

    var rightMenuGUI = new dat.GUI();
    rightMenuGUI.add( params, 'Size', 1, 30 ).name( 'Size' ).onChange( updateDecalSizeMenu);
    rightMenuGUI.add( params, 'rotationHide', -180, 180).name( 'Rotation' ).onChange( updateDecalTransformMenu); //.name( 'rotation' ).onChange( updateDecalTransform )
    rightMenuGUI.add( params, 'remove').name( 'Delete' ); //
    rightMenuGUI.open();
    $(".dg.ac .dg.main.a:eq(1)").addClass("right_click_menu");
    $(".right_click_menu .close-button").addClass("needHide");
    $(".right_click_menu ul li:nth-of-type(1)").addClass("menu_decal_size");
    $(".right_click_menu ul li:nth-of-type(2)").addClass("menu_rotation");
    $(".right_click_menu ul li:nth-of-type(3)").addClass("delect_current");
}
/**
 * 清空当前obj对象的缓存
 * @param mesh  mesh对象
 * */
function clearCache(currentMesh) {
    currentMesh.geometry.dispose();
    currentMesh.material.dispose();
}

/**
 * 清空渲染器缓存，该demo中无需使用
 * 在Vue+threejs的项目中，使用了组件切换，页面并没有刷新，但是每次都会重载一次场景，致使场景异常的卡顿，
 * 所以在每次切换组件后，调用了下列方法来清空上一个组件中的缓存，使得项目大幅度优化
 */
function clearRenderer(){
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.context = null;
    renderer.domElement = null;
    renderer = null;
}

function changeMouseDecal(){
    // 改变鼠标decal
    var currentscale = params.maxScale;
    currentSize.set( currentscale, currentscale, 30 );
    currentmaterial = decalMaterial.clone();
    position.set(0, 0, 0); //reset position
    orientation.set(0,0,0);//reset orientation
    clearCache(mouseHelper);
    scene.remove(mouseHelper);
    mouseHelper= new THREE.Mesh( new THREE.DecalGeometry( mesh, currentPosition, orientation, currentSize ), currentmaterial );
    scene.add(mouseHelper)
    // 改变鼠标decal end
}
/**
 * show or hide the right click menu of selected decal
 * */
function showNhideMenu(type){ //type 1: show 0:hide
    if(type == 0){
        menuShowFlag = false;
        focusedDecalFlag = false; //mouse focus or not
        $(".right_click_menu,.right_menu_bg").hide(); //if flag == false, hide menu
        $(".main_menu").show();
    }
    else {
        var this_size;
        var this_rotation;
        if(focusedDecalUUID){
            for(var j in decalsPRobj){
                if(focusedDecalUUID == decalsPRobj[j].uuid){
                    this_size = decalsPRobj[j].size;
                    this_rotation =decalsPRobj[j].orientation;
                    params.Size = this_size;
                    $(".right_click_menu").find(".menu_decal_size input").val(this_size); //reset menu size number
                    var this_size_width = 100/30*this_size;
                    $(".right_click_menu").find(".menu_decal_size .slider-fg").css({"width": this_size_width+'%'});//reset menu size slider length
                    updateDecalSizeMenu();

                    if(this_rotation.z == 0){
                        var this_rotation_input = 0
                    }
                    else{
                        var this_rotation_input = this_rotation.z * 60;
                    }
                    $(".right_click_menu").find(".menu_rotation input").val(this_rotation_input); //reset menu size number
                    var this_rotation_width;
                    if(this_rotation_input>=0){
                        if(this_rotation_input == 0 ){
                            this_rotation_width = 50;
                        }
                        else{
                            this_rotation_width = (this_rotation_input/180)*50+50;
                        }
                    }
                    else{
                        if(this_rotation_input == -180){
                            this_rotation_width = 0;
                        }
                        else{
                            this_rotation_width = (-this_rotation_input/180)*50;
                        }
                    }

                    $(".right_click_menu").find(".menu_rotation .slider-fg").css({"width": this_rotation_width+'%'});//reset menu size slider length

                    break;
                }
            }
        }

        $( ".right_click_menu,.right_menu_bg" ).show(); //show menu
        $( ".right_click_menu" ).css( { "left": mouseX, "top": mouseY } );
        $(".main_menu").hide();
        setTimeout(function(){
            menuShowFlag = true;
        },500)
    }
}

/**
 * remove the selected decal
 * */
function removeSelectedDecal(){
    if(focusedDecalUUID){
        for(var i in decals){
            var currentDecal = decals[i];
            if(currentDecal.uuid == focusedDecalUUID){
                removedDecals.push( currentDecal );
                clearCache(currentDecal);
                scene.remove(currentDecal);
                decals.splice(i,1); //remove element that index is i in array decals
                $(".forward_btn").removeClass("active_forward").addClass("active_forward"); //目前decals数组不为空
                showNhideMenu(0);
                break;
            }
        }

    }
}
