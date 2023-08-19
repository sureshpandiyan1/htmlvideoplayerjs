# htmlvideoplayerjs

htmlvideoplayerjs is just simple plugin for making your video have some controls.

if you like it, give a star ★


# screenshot
<img width="500" alt="Screenshot 2023-08-19 203417" src="https://github.com/sureshpandiyan1/htmlvideoplayerjs/assets/112636345/7a303edb-7b6a-4f6a-9933-6fd5f0773811">


# first you should read this below
    <format for htmlvideoplayer js>
    htmlvideoplayerjs(folderpath,tid,width,height,videoid,url)

    folderpath => htmlvideoplayer js need a icons, you can download from github repo [folder name: icons ] and copy and paste into your folder ('images') EXAMPLE : ./myiconspath/<just copy all icons into myiconpath>
    you can name your folder whatever you want, but you must pass the full path where icons located on your project'

    tid => target id  ('thevideo')
    width => video width ('400')
    height => video height ('auto')
    videoid => should be unique id ('video')
    url => video source file path ('beautifulcity.mp4')


# how to use it

    // first you need to download icons  from github repo - [foldername: icons]
    // second, you should to download stylesheet for htmlvideoplayerjs from github repo - [foldername: playerstyles]

    // we want to make sure all things loaded properly for htmlvideoplayerjs

    import htmlvideoplayerjs from 'htmlvideoplayerjs'


    const myvideo = htmlvideoplayerjs
    myvideo('images', 'thevideo', '400','auto', 'video', 'beautifulcity.mp4')




# license
Unlicense

# copyright
copyright @ htmlvideoplayerjs
