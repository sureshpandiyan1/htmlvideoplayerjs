function playpauseN(video, playnpause, play, pause, folderpath) {
  const VIDEO = document.getElementById(video)
  VIDEO.controls = false;
  const PLAYANDPAUSE = document.getElementById(playnpause)

  let playeitherpause = 0;

  PLAYANDPAUSE.onclick = function(){
    playeitherpause++
    if (playeitherpause % 2) {
      VIDEO.play()
      PLAYANDPAUSE.setAttribute('data-video',play)
      PLAYANDPAUSE.children[0].src = `${folderpath}/pause.svg`
    } else {
      VIDEO.pause()
      PLAYANDPAUSE.setAttribute('data-video',pause)
      PLAYANDPAUSE.children[0].src = `${folderpath}/play.svg`
    }
  }
}

function forwardstepN(startfrombegin, video, vbar) {
  const sfb = document.getElementById(startfrombegin)
  const VIDEO = document.getElementById(video)

  sfb.addEventListener('click', function() {
    VIDEO.currentTime = Math.floor(VIDEO.duration) / Math.floor(VIDEO.duration)
    document.getElementById(vbar).value = 0
  }, false)
}

function volumeriserN(changevolume,video,cvolume,volumechange,vbar,folderpath) {

  const VOLUMECHANGER = document.getElementById(changevolume)
  const VIDEO = document.getElementById(video)
  VOLUMECHANGER.setAttribute('data-video',volumechange)
  let taponce = 0;


  if (document.getElementById(video).ended != true) {
    setInterval(function() {
     document.getElementById(vbar).max = Math.floor(VIDEO.duration)
     document.getElementById(vbar).value = Math.floor(VIDEO.currentTime)
      }, 1000)
  }

  const CVOLU = document.getElementById(cvolume)
  CVOLU.onclick = function() {
    taponce++
    if (taponce % 2) {
      VIDEO.muted = true;
      CVOLU.src = `${folderpath}/muted.svg`
    } else {
      VIDEO.muted = false;
      CVOLU.src = `${folderpath}/volume.svg`
    }

  }

  VOLUMECHANGER.addEventListener('input', function() {
    VIDEO.volume = VOLUMECHANGER.value / 100
  }, false)

}



function videobarN(video,vbar,videocontrols,targetid) {
  const VIDEOBARLENGTH = document.getElementById(vbar)
  const VIDEO = document.getElementById(video)
  
  VIDEO.addEventListener('timeupdate', function() {
    const mnn = Math.floor(Math.floor(VIDEOBARLENGTH.value % 3600) / 60)
    const timer = VIDEOBARLENGTH.value
    var seconds = Math.floor(timer % 60) % 60

    var hrs = Math.floor(VIDEOBARLENGTH.value) / 60 / 60
    var hh;
    hh = Math.floor(VIDEOBARLENGTH.value < 3600) ? mnn+":"+seconds :  Math.floor(hrs)+":"+mnn+":"+seconds
    document.getElementById(videocontrols+targetid+vbar).innerHTML = hh
  })

  VIDEOBARLENGTH.addEventListener('input', function() {
    VIDEO.play()
    VIDEO.currentTime = VIDEOBARLENGTH.value
  
  }, false)
}


function playspdzN(playbackspd,setz,video) {

    if (document.getElementById(playbackspd) != null) {
      const SFIRST = document.getElementById(playbackspd)
      document.getElementById(setz).style.display = 'block'
      const INDEXER = SFIRST.selectedIndex
      console.log(INDEXER)

      const VIDEO = document.getElementById(video)

      SFIRST.addEventListener('change', function(event) {
        VIDEO.playbackRate = event.target.value
      }, false)

    }
}


function allsettN(video,vsettings,setz,playbackspd,videoplayback,folderpath) {
  
  const SETTINGS = document.getElementById(vsettings)
  const TCONTROLS = document.createElement('div')
  const CLOSE = document.createElement('div')
  CLOSE.style.cssText = 'cursor: pointer; position: absolute; top: 3px; right: 7px; font-size: 13px; color: white;'
  CLOSE.setAttribute('id',playbackspd+videoplayback+'_close')
  CLOSE.textContent = '✖'
  TCONTROLS.setAttribute('id',setz+"_1")

  TCONTROLS.style.cssText = 'display: none; background: rgb(60, 60, 60);width: 100px;height: 46px;position: absolute;/* top: -130px; */border-radius: 10px;padding: 14px;bottom: 32px;left: 7px;'
  const SPLAYBACK = document.createElement('div')
  SPLAYBACK.setAttribute('id',videoplayback)
  const tx = document.createElement('img')
  tx.setAttribute('class','icon')
  tx.src = `${folderpath}/forward.svg`
  SPLAYBACK.appendChild(tx)
  SPLAYBACK.style.cssText = 'margin-top: 7px; display: flex; font-family: sans-serif; color: #444444; background: #ffffff00; padding: 6px; gap: 10px;'
  const SFIRST = document.createElement('select')

  SFIRST.style.cssText = 'width: 57px; border: 1px solid gray; border-radius: 6px; padding: 3px; margin-top: -2px; background: #3c3c3c; color: white;/* border: none; */font-size: 15px;'
  SFIRST.setAttribute('id',playbackspd)
  var pyspeed = [0.4,0.6,0.8,1,1.2,1.4,1.6]
  for (let x of pyspeed) {
    const opt = document.createElement('option')
    opt.value = x
    opt.textContent = x
    SFIRST.appendChild(opt)
  }

  SETTINGS.appendChild(TCONTROLS)
  SPLAYBACK.appendChild(SFIRST)
  SPLAYBACK.appendChild(CLOSE)
  SETTINGS.addEventListener('mouseenter', function() {
    TCONTROLS.appendChild(SPLAYBACK)
    TCONTROLS.style.display = 'block'
    playspdzN(playbackspd,setz+"_1",video)
  },false)

  CLOSE.addEventListener('click', function() {
    TCONTROLS.style.display = 'none'
},false)

}


function htmlVideoplayer(folderpath,targetid,width,height,video,sourceurl,
                        videocontrols,volumecontrols,volumechange,vd1,playbackspd,playnpause,startfrombegin,videoplayback,
                        volume,vd2,videolength,vsettings,setz,vbar,pause,play,cvolume,changevolume) {
        document.getElementById(targetid).innerHTML = `<video width='${width}' height='${height}' id='${video}' style='border-radius: 8px'>` +
        `<source src='${sourceurl}' type='video/mp4' codecs='avc1.42E01E, mp4a.40.2'>` +
        `<p>your browser doesnt support that</p>` +
        `</video>` +
        `<div id='${videocontrols}'` +  `style='flex-direction: column; width: ${width.indexOf('%') > -1 ? width.split('%')[0] - 2+'%' : width - 20+'px'}; display: flex; gap: 10px; margin-top: -73px; padding: 9px; position: absolute;'>` +
        `<div id='${vd1}'`+ `style='display: flex; flex-grow: 1;'>` +
        `<input type='range' min='0' value='0' class='lranger' id='${vbar}' style='-webkit-appearance: none; appearance: none; width: 99%; height: 9px; background: #fff; border-radius: 10px; outline: none; opacity: 0.7; -webkit-transition: .2s;  transition: opacity .2s;'>` +
        `</div>` +
        `<div id='${vd2}' + ' style='display: flex; align-items: center; justify-content: flex-start; gap: 12px;'>` +

        `<div id='${playnpause}'` + `style='display: flex; width: 30px; height: 24px; text-align: center; justify-content: center; align-items: center;'>` +
        `<img src='${folderpath}/play.svg' class='icon min' alt='${play}' style='margin-left: 10px;'>` +
        `</div>` +
        `<div id='${startfrombegin}'` + `style='align-items: center; display: flex;'>` +
        `<img src='${folderpath}/fs.svg' class='icon min' alt='begin'>` +
        `</div>` +
        `<div id='${volume}'>` +
        `<div id='${volumecontrols}'` + `gap: 12px; style='display: flex; align-items: center; margin-bottom: 1px; gap: 8px'>` +
        `<img src='${folderpath}/volume.svg' class='icon min' alt='volume' id='${cvolume}'>` +
        `<input type='range' min='5' max='100' class='vranger' id='${changevolume}' data-video='volumechange' style='-webkit-appearance: none;  appearance: none; width: 80px; height: 5px; background: #fff; border-radius: 10px; outline: none; opacity: 0.7; -webkit-transition: .2s; transition: opacity .2s;'>` +
        `</div>` +
        `</div>` +
        `<div id='${videocontrols+targetid+vbar}' style='color: snow; font-family: sans-serif;'>0:0</div>` +
        `<div id='${videolength}'></div>` +
        `<div id='${vsettings}' style='position: relative; display: flex; margin-left: auto; width: 0%; justify-content: end; padding-right: 10px;'>` +
        `<img src='${folderpath}/settings.svg' class='icon'>` +
        `<div id='${setz}' style='display: none; background: rgb(60, 60, 60); width: 100px; height: 100px; position: absolute; top: -130px; border-radius: 10px; padding: 10px;'></div>` +
        `</div>` +
        `</div>`


        playpauseN(video, playnpause, play, pause,folderpath)
        forwardstepN(startfrombegin, video, vbar)
        videobarN(video,vbar,videocontrols,targetid)
        playspdzN(playbackspd,setz,video)
        volumeriserN(changevolume,video,cvolume,volumechange, vbar, folderpath)
        allsettN(video,vsettings,setz,playbackspd,videoplayback,folderpath)
        
}



function ttid(tid) {
  
var rnds = ['ubgyuctuikvghu','zcgyugvucyzccx','mvgvuoubhkjjmz','xxkvligllfdsm','zcmwlkbvuh86rdf','asdf798y0bbrcasfd','asdhjjhvhcr9gfasdfewr','iukljonndsg67bbex7fufd',
'sfiunjgviughbosadf','dsfinojluccgkhasdf','zcdfegvvpjnjnuhjggr12','i8u0gi97fohupgiu','if796fhknjbhkig8lfj','asd87fyuvv8yfasdfijkml',
'asdy9hjictciyfas','jmkbjfyuvkb7gy9ibmi','adf8yg08y07iytasdfsadf','asdfsadf']
var z = []
for (let x of rnds) {
  z.push(x+'_'+ new Date().getTime()+'_'+tid)
}
return z
}


function htmlVideoPlayerjs(folderpath,tid,width,height,videoid,url) {
    htmlVideoplayer(folderpath,tid,width,height,videoid,url,...ttid(tid))
}

  

export default htmlVideoPlayerjs;
