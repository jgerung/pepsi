/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'false',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'seven7Comp',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'scene6Comp',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'scene5Comp',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'scene4Comp',
                display: 'none',
                type: 'rect',
                rect: ['-20', '-2','auto','auto','auto', 'auto']
            },
            {
                id: 'scene3Comp',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'scene2Comp',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'scene1Comp',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'preComp',
                display: 'block',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'preLoader3',
                display: 'block',
                type: 'image',
                rect: ['0', '0','1020px','635px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"preLoader.jpg",'0px','0px']
            },
            {
                id: 'navComp',
                display: 'none',
                type: 'rect',
                rect: ['336', '549','auto','auto','auto', 'auto']
            },
            {
                id: 'progressComp',
                display: 'none',
                type: 'group',
                rect: ['-7', '591','1027','46','auto', 'auto'],
                c: [
                {
                    id: 'navStusBar',
                    type: 'image',
                    rect: ['22px', '13px','0px','17px','auto', 'auto'],
                    opacity: 1,
                    fill: ["rgba(0,0,0,0)",im+"navStusBar.png",'0px','0px']
                },
                {
                    id: 'navProgBar',
                    type: 'image',
                    rect: ['0px', '0px','1027px','46px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"navProgBar.png",'0px','0px']
                }]
            },
            {
                id: 'nav',
                display: 'none',
                type: 'group',
                rect: ['76px', '589px','553px','46px','auto', 'auto'],
                opacity: 1,
                c: [
                {
                    id: 'nav1Comp',
                    type: 'rect',
                    rect: ['-1px', '-3px','auto','auto','auto', 'auto'],
                    transform: [[],[],[],['0.93385','0.93385']]
                },
                {
                    id: 'nav2Comp',
                    type: 'rect',
                    rect: ['177px', '-3px','auto','auto','auto', 'auto'],
                    transform: [[],[],[],['0.93385','0.93385']]
                },
                {
                    id: 'nav3Comp',
                    type: 'rect',
                    rect: ['333px', '-3px','auto','auto','auto', 'auto'],
                    transform: [[],[],[],['0.93385','0.93385']]
                },
                {
                    id: 'nav4Comp',
                    type: 'rect',
                    rect: ['505px', '-3px','auto','auto','auto', 'auto'],
                    transform: [[],[],[],['0.93385','0.93385']]
                },
                {
                    id: 'nav5Comp',
                    type: 'rect',
                    rect: ['654px', '-3px','auto','auto','auto', 'auto'],
                    transform: [[],[],[],['0.93385','0.93385']]
                },
                {
                    id: 'nav6Comp',
                    type: 'rect',
                    rect: ['332px', '-1px','auto','auto','auto', 'auto']
                }]
            }],
            symbolInstances: [
            {
                id: 'scene2Comp',
                symbolName: 'scene2Comp',
                autoPlay: {

                }
            },
            {
                id: 'nav6Comp',
                symbolName: 'nav6Comp',
                autoPlay: {

                }
            },
            {
                id: 'nav5Comp',
                symbolName: 'nav5Comp',
                autoPlay: {

                }
            },
            {
                id: 'nav1Comp',
                symbolName: 'nav1Comp',
                autoPlay: {

                }
            },
            {
                id: 'scene1Comp',
                symbolName: 'scene1Comp',
                autoPlay: {

                }
            },
            {
                id: 'scene5Comp',
                symbolName: 'scene5Comp',
                autoPlay: {

                }
            },
            {
                id: 'nav4Comp',
                symbolName: 'nav4Comp',
                autoPlay: {

                }
            },
            {
                id: 'preComp',
                symbolName: 'preComp',
                autoPlay: {

                }
            },
            {
                id: 'seven7Comp',
                symbolName: 'seven7Comp',
                autoPlay: {

                }
            },
            {
                id: 'nav3Comp',
                symbolName: 'nav3Comp',
                autoPlay: {

                }
            },
            {
                id: 'nav2Comp',
                symbolName: 'nav2Comp',
                autoPlay: {

                }
            },
            {
                id: 'scene4Comp',
                symbolName: 'scene4Comp',
                autoPlay: {

                }
            },
            {
                id: 'scene3Comp',
                symbolName: 'scene3Comp',
                autoPlay: {

                }
            },
            {
                id: 'scene6Comp',
                symbolName: 'scene6Comp',
                autoPlay: {

                }
            },
            {
                id: 'navComp',
                symbolName: 'navComp',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_navComp}": [
                ["style", "display", 'none']
            ],
            "${_nav6Comp}": [
                ["style", "top", '-3px'],
                ["transform", "scaleX", '0.93385'],
                ["transform", "scaleY", '0.93385'],
                ["style", "left", '825px']
            ],
            "${_scene3Comp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_scene2Comp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_nav2Comp}": [
                ["style", "top", '-3px'],
                ["transform", "scaleX", '0.93385'],
                ["transform", "scaleY", '0.93385'],
                ["style", "left", '177px']
            ],
            "${_scene4Comp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_scene6Comp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_preLoader3}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1']
            ],
            "${_nav3Comp}": [
                ["style", "top", '-3px'],
                ["transform", "scaleX", '0.93385'],
                ["transform", "scaleY", '0.93385'],
                ["style", "left", '333px']
            ],
            "${_preComp}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1']
            ],
            "${_progressComp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_nav4Comp}": [
                ["style", "top", '-3px'],
                ["transform", "scaleX", '0.93385'],
                ["transform", "scaleY", '0.93385'],
                ["style", "left", '505px']
            ],
            "${_nav1Comp}": [
                ["style", "top", '-3px'],
                ["transform", "scaleX", '0.93385'],
                ["transform", "scaleY", '0.93385'],
                ["style", "left", '-1px']
            ],
            "${_seven7Comp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_navStusBar}": [
                ["style", "top", '13px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '22px'],
                ["style", "width", '14px']
            ],
            "${_scene5Comp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_nav}": [
                ["style", "top", '589px'],
                ["style", "display", 'none'],
                ["style", "height", '46px'],
                ["style", "opacity", '1'],
                ["style", "left", '76px'],
                ["style", "width", '553px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '400px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '635px'],
                ["style", "max-width", '1020px'],
                ["style", "width", '1020px']
            ],
            "${_nav5Comp}": [
                ["style", "top", '-3px'],
                ["transform", "scaleX", '0.93385'],
                ["transform", "scaleY", '0.93385'],
                ["style", "left", '654px']
            ],
            "${_scene1Comp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_navProgBar}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 37000,
            autoPlay: true,
            labels: {
                "Pre": 0,
                "One": 1000,
                "OneStop": 1500,
                "Two": 2000,
                "TwoStop": 2500,
                "Three": 3000,
                "ThreeStop": 3500,
                "Four": 4000,
                "FourStop": 4500,
                "Five": 5000,
                "FiveStop": 5500,
                "Six": 6000,
                "SixStop": 6500,
                "Seven": 7000,
                "SevenStop": 7500
            },
            timeline: [
                { id: "eid1266", tween: [ "style", "${_scene2Comp}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid10996", tween: [ "transform", "${_nav6Comp}", "scaleX", '0.93385', { fromValue: '0.93385'}], position: 2803, duration: 0 },
                { id: "eid6408", tween: [ "style", "${_scene6Comp}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500 },
                { id: "eid6419", tween: [ "style", "${_scene6Comp}", "opacity", '0.019880589430894', { fromValue: '0.019880589430894'}], position: 8000, duration: 0 },
                { id: "eid6366", tween: [ "style", "${_scene6Comp}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid11334", tween: [ "style", "${_nav}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5678", tween: [ "style", "${_navStusBar}", "width", '158px', { fromValue: '14px'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid5688", tween: [ "style", "${_navStusBar}", "width", '324px', { fromValue: '158px'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid5690", tween: [ "style", "${_navStusBar}", "width", '492px', { fromValue: '324px'}], position: 3000, duration: 500, easing: "easeOutBack" },
                { id: "eid5692", tween: [ "style", "${_navStusBar}", "width", '655px', { fromValue: '492px'}], position: 4000, duration: 500, easing: "easeOutBack" },
                { id: "eid5694", tween: [ "style", "${_navStusBar}", "width", '823px', { fromValue: '655px'}], position: 5000, duration: 500, easing: "easeOutBack" },
                { id: "eid5696", tween: [ "style", "${_navStusBar}", "width", '986px', { fromValue: '823px'}], position: 6000, duration: 500, easing: "easeOutBack" },
                { id: "eid1268", tween: [ "style", "${_scene3Comp}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutBounce" },
                { id: "eid3230", tween: [ "style", "${_scene3Comp}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid10998", tween: [ "style", "${_nav6Comp}", "left", '825px', { fromValue: '825px'}], position: 2803, duration: 0 },
                { id: "eid131", tween: [ "style", "${_preLoader3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid5766", tween: [ "style", "${_scene5Comp}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500 },
                { id: "eid6406", tween: [ "style", "${_scene5Comp}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 500 },
                { id: "eid5746", tween: [ "style", "${_scene3Comp}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 500 },
                { id: "eid3229", tween: [ "style", "${_scene3Comp}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 320 },
                { id: "eid6417", tween: [ "style", "${_seven7Comp}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
                { id: "eid10997", tween: [ "transform", "${_nav6Comp}", "scaleY", '0.93385', { fromValue: '0.93385'}], position: 2803, duration: 0 },
                { id: "eid5672", tween: [ "style", "${_progressComp}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid631", tween: [ "style", "${_scene1Comp}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid6418", tween: [ "style", "${_seven7Comp}", "opacity", '1', { fromValue: '1'}], position: 8000, duration: 0 },
                { id: "eid127", tween: [ "style", "${_preComp}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid5669", tween: [ "style", "${_progressComp}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBack" },
                { id: "eid132", tween: [ "style", "${_preLoader3}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid5764", tween: [ "style", "${_scene5Comp}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid6365", tween: [ "style", "${_scene5Comp}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
                { id: "eid135", tween: [ "style", "${_scene1Comp}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid623", tween: [ "style", "${_scene1Comp}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0, easing: "easeOutBounce" },
                { id: "eid3218", tween: [ "style", "${_scene4Comp}", "opacity", '1', { fromValue: '1'}], position: 4000, duration: 0 },
                { id: "eid5776", tween: [ "style", "${_scene4Comp}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500 },
                { id: "eid624", tween: [ "style", "${_scene2Comp}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid1267", tween: [ "style", "${_scene2Comp}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0, easing: "easeOutBounce" },
                { id: "eid136", tween: [ "style", "${_preComp}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid3217", tween: [ "style", "${_scene4Comp}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid5777", tween: [ "style", "${_scene4Comp}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid10999", tween: [ "style", "${_nav6Comp}", "top", '-3px', { fromValue: '-3px'}], position: 2803, duration: 0 },
                { id: "eid625", tween: [ "style", "${_navComp}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 }            ]
        }
    }
},
"preArrowBttn": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'preCover',
                    opacity: 1,
                    rect: ['-98px', '-50px', '310px', '221px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/preCover.png', '0px', '0px']
                },
                {
                    id: 'preGlowArrowComp',
                    type: 'rect',
                    rect: ['-30', '-30', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'block',
                    type: 'rect',
                    id: 'navCircleGlowCompCopy',
                    rect: ['-7px', '-8px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'preArrow',
                    type: 'image',
                    rect: ['1px', '0px', '103px', '108px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/preArrow.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['1px', '0px', '103px', '108px', 'auto', 'auto'],
                    id: 'preArrowOver',
                    fill: ['rgba(0,0,0,0)', 'images/preArrowOver.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '103px', '108px', 'auto', 'auto'],
                    id: 'preBttn',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'navCircleGlowCompCopy',
                symbolName: 'navCircleGlowComp'
            },
            {
                id: 'preGlowArrowComp',
                symbolName: 'preGlowArrowComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_preCover}": [
                ["style", "top", '-50px'],
                ["style", "opacity", '1'],
                ["style", "left", '-98px']
            ],
            "${symbolSelector}": [
                ["style", "height", '108px'],
                ["style", "width", '103px']
            ],
            "${_preBttn}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "display", 'none']
            ],
            "${_preArrowOver}": [
                ["style", "top", '0px'],
                ["style", "left", '1px'],
                ["style", "display", 'none']
            ],
            "${_preArrow}": [
                ["style", "left", '1px'],
                ["style", "top", '0px']
            ],
            "${_navCircleGlowCompCopy}": [
                ["style", "top", '18px'],
                ["transform", "scaleY", '2.90164'],
                ["transform", "rotateZ", '-32deg'],
                ["style", "display", 'block'],
                ["style", "left", '22px'],
                ["transform", "scaleX", '2.37236']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "preOff": 0,
                "preOn": 1000
            },
            timeline: [
                { id: "eid48", tween: [ "style", "${_preArrowOver}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_preArrowOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid10736", tween: [ "style", "${_preBttn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid10888", tween: [ "style", "${_navCircleGlowCompCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid10916", tween: [ "style", "${_navCircleGlowCompCopy}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0 },
                { id: "eid10912", tween: [ "transform", "${_navCircleGlowCompCopy}", "scaleY", '2.90164', { fromValue: '2.90164'}], position: 0, duration: 0 },
                { id: "eid10902", tween: [ "transform", "${_navCircleGlowCompCopy}", "rotateZ", '-32deg', { fromValue: '-32deg'}], position: 0, duration: 0 },
                { id: "eid10915", tween: [ "style", "${_navCircleGlowCompCopy}", "left", '22px', { fromValue: '22px'}], position: 0, duration: 0 },
                { id: "eid10911", tween: [ "transform", "${_navCircleGlowCompCopy}", "scaleX", '2.37236', { fromValue: '2.37236'}], position: 0, duration: 0 }            ]
        }
    }
},
"preComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'group',
                    id: 'precompFade',
                    opacity: 1,
                    rect: ['0px', '0px', '1576', '930', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'preBack',
                        opacity: 1,
                        rect: ['0px', '0px', '1020px', '635px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/preBack.jpg', '0px', '0px']
                    },
                    {
                        id: 'preDeckHead',
                        type: 'image',
                        rect: ['718px', '228px', '286px', '203px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/preDeckHead.png', '0px', '0px']
                    },
                    {
                        type: 'group',
                        id: 'preTruckDiv',
                        opacity: 1,
                        rect: ['165px', '188px', '545', '437', 'auto', 'auto'],
                        c: [
                        {
                            type: 'image',
                            id: 'preShadow',
                            opacity: 1,
                            rect: ['0px', '186px', '545px', '251px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/preShadow.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'preUnderCarriage',
                            opacity: 1,
                            rect: ['58px', '216px', '396px', '184px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/preUnderCarriage.png', '0px', '0px']
                        },
                        {
                            id: 'preTruckChasisComp',
                            type: 'rect',
                            rect: ['-216px', '33px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1
                        },
                        {
                            type: 'image',
                            id: 'preTruckLights',
                            opacity: 1,
                            rect: ['458px', '281px', '328px', '275px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/preTruckLights.png', '0px', '0px']
                        },
                        {
                            id: 'preRim1',
                            type: 'image',
                            rect: ['385px', '352px', '30px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/preRim1.png', '0px', '0px']
                        },
                        {
                            rect: ['147px', '285px', '30px', '30px', 'auto', 'auto'],
                            id: 'preRim2',
                            transform: [[0, 0], [], [], ['0.95', '0.95']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/preRim1.png', '0px', '0px']
                        },
                        {
                            rect: ['88px', '266px', '30px', '30px', 'auto', 'auto'],
                            id: 'preRim3',
                            transform: [[0, 0], [], [], ['0.92', '0.92']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/preRim1.png', '0px', '0px']
                        },
                        {
                            id: 'preArrowBttn',
                            type: 'rect',
                            cursor: ['pointer'],
                            rect: ['137', '146px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['820px', '678px', '132px', '98px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            {
                id: 'preArrowBttn',
                symbolName: 'preArrowBttn',
                autoPlay: {

               }
            },
            {
                id: 'preTruckChasisComp',
                symbolName: 'preTruckChasisComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_preTruckChasisComp}": [
                ["style", "top", '33px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "skewX", '0deg'],
                ["transform", "scaleX", '1'],
                ["transform", "skewY", '0deg'],
                ["style", "left", '-216px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_preRim1}": [
                ["style", "top", '352px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_preShadow}": [
                ["style", "top", '186px'],
                ["style", "left", '0px']
            ],
            "${_preTruckLights}": [
                ["style", "top", '281px'],
                ["style", "opacity", '0'],
                ["style", "left", '458px']
            ],
            "${_preTruckDiv}": [
                ["style", "top", '171px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '100px'],
                ["style", "width", '545px']
            ],
            "${_preBack}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_preUnderCarriage}": [
                ["style", "top", '216px'],
                ["style", "left", '58px']
            ],
            "${_preDeckHead}": [
                ["style", "top", '228px'],
                ["style", "opacity", '1'],
                ["style", "left", '649px']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1020px']
            ],
            "${_preRim2}": [
                ["style", "top", '285px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.95'],
                ["style", "left", '147px']
            ],
            "${_Rectangle}": [
                ["style", "left", '820px'],
                ["style", "top", '678px']
            ],
            "${_preRim3}": [
                ["style", "top", '266px'],
                ["transform", "scaleY", '0.92'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.92'],
                ["style", "left", '88px']
            ],
            "${_preArrowBttn}": [
                ["style", "top", '146px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid129", tween: [ "style", "${_preDeckHead}", "left", '649px', { fromValue: '649px'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "transform", "${_preRim3}", "rotateZ", '-180deg', { fromValue: '0deg'}], position: 0, duration: 939 },
                { id: "eid72", tween: [ "transform", "${_preRim3}", "rotateZ", '360deg', { fromValue: '-180deg'}], position: 939, duration: 1061 },
                { id: "eid71", tween: [ "transform", "${_preRim1}", "rotateZ", '-180deg', { fromValue: '0deg'}], position: 0, duration: 939 },
                { id: "eid74", tween: [ "transform", "${_preRim1}", "rotateZ", '360deg', { fromValue: '-180deg'}], position: 939, duration: 1061 },
                { id: "eid76", tween: [ "transform", "${_preTruckChasisComp}", "rotateZ", '-2deg', { fromValue: '0deg'}], position: 0, duration: 939 },
                { id: "eid77", tween: [ "transform", "${_preTruckChasisComp}", "rotateZ", '2deg', { fromValue: '-2deg'}], position: 939, duration: 517 },
                { id: "eid70", tween: [ "transform", "${_preRim2}", "rotateZ", '-180deg', { fromValue: '0deg'}], position: 0, duration: 939 },
                { id: "eid73", tween: [ "transform", "${_preRim2}", "rotateZ", '360deg', { fromValue: '-180deg'}], position: 939, duration: 1061 },
                { id: "eid118", tween: [ "style", "${_preTruckChasisComp}", "top", '47px', { fromValue: '33px'}], position: 0, duration: 939 },
                { id: "eid119", tween: [ "style", "${_preTruckChasisComp}", "top", '33px', { fromValue: '47px'}], position: 939, duration: 1061 },
                { id: "eid7936", tween: [ "style", "${_preTruckLights}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid124", tween: [ "style", "${_preTruckChasisComp}", "left", '-221px', { fromValue: '-216px'}], position: 0, duration: 939 },
                { id: "eid125", tween: [ "style", "${_preTruckChasisComp}", "left", '-216px', { fromValue: '-221px'}], position: 939, duration: 1061 },
                { id: "eid80", tween: [ "style", "${_preDeckHead}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 939 },
                { id: "eid62", tween: [ "style", "${_preTruckDiv}", "top", '493px', { fromValue: '171px'}], position: 0, duration: 2000, easing: "easeInBack" },
                { id: "eid134", tween: [ "style", "${_preArrowBttn}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 939 },
                { id: "eid61", tween: [ "style", "${_preTruckDiv}", "left", '1031px', { fromValue: '100px'}], position: 0, duration: 2000, easing: "easeInBack" }            ]
        }
    }
},
"preTruckChasisComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'preTruckChasis',
                    type: 'image',
                    rect: ['246px', '-31px', '502px', '387px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/preTruckChasis.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_preTruckChasis}": [
                ["style", "left", '246px'],
                ["style", "top", '-31px']
            ],
            "${symbolSelector}": [
                ["style", "height", '387px'],
                ["style", "width", '502px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scene1Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene1Back',
                    type: 'image',
                    rect: ['0', '-36px', '1020px', '800px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene1Back.jpg', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'clouds',
                    rect: ['10px', '0px', '1012', '305', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        rect: ['0px', '14px', '217px', '143px', 'auto', 'auto'],
                        id: 'scene1CloudPower',
                        opacity: 1,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene1CloudPower.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        rect: ['240px', '14px', '249px', '156px', 'auto', 'auto'],
                        id: 'scene1CloudHealth',
                        opacity: 1,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene1CloudHealth.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        rect: ['496px', '14px', '230px', '138px', 'auto', 'auto'],
                        id: 'scene1CloudChanging2',
                        opacity: 1,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene1CloudChanging.png', '0px', '0px']
                    },
                    {
                        display: 'none',
                        type: 'rect',
                        id: 'scene1CloudsLight',
                        rect: ['829px', '75', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    id: 'signal',
                    type: 'group',
                    rect: ['-12px', '237px', '311', '428', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['12px', '-23px', '143px', '173px', 'auto', 'auto'],
                        id: 'scene1SignalChanging2',
                        fill: ['rgba(0,0,0,0)', 'images/scene1SignalChanging.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['0px', '66px', '184px', '175px', 'auto', 'auto'],
                        id: 'scene1SignalWar',
                        fill: ['rgba(0,0,0,0)', 'images/scene1SignalWar.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['144px', '30px', '143px', '197px', 'auto', 'auto'],
                        id: 'scene1SignalCommodity',
                        fill: ['rgba(0,0,0,0)', 'images/scene1SignalCommodity.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['12px', '193px', '143px', '184px', 'auto', 'auto'],
                        id: 'scene1TextDrive',
                        fill: ['rgba(0,0,0,0)', 'images/scene1TextDrive.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['192px', '128px', '143px', '171px', 'auto', 'auto'],
                        id: 'scene1SignalIncreasing2',
                        fill: ['rgba(0,0,0,0)', 'images/scene1SignalIncreasing.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['116px', '239px', '143px', '175px', 'auto', 'auto'],
                        id: 'scene1SignalLegislation',
                        fill: ['rgba(0,0,0,0)', 'images/scene1SignalLegislation.png', '0px', '0px']
                    }]
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'scene1Begin',
                    rect: ['161px', '166px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'scene1Truck',
                    rect: ['197px', '141px', '202', '173', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene1TruckShadow',
                        type: 'image',
                        rect: ['0px', '81px', '202px', '92px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TruckShadow.png', '0px', '0px']
                    },
                    {
                        id: 'scene1TruckUnder',
                        type: 'image',
                        rect: ['6px', '81px', '173px', '68px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TruckUnder.png', '0px', '0px']
                    },
                    {
                        id: 'scene1TruckChasis',
                        type: 'image',
                        rect: ['4px', '3px', '198px', '140px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TruckChasis.png', '0px', '0px']
                    },
                    {
                        id: 'scene1TruckRim1',
                        type: 'image',
                        rect: ['147px', '130px', '12px', '12px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TruckRim.png', '0px', '0px']
                    },
                    {
                        id: 'scene1TruckRim2',
                        type: 'image',
                        rect: ['49px', '110px', '12px', '12px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TruckRim.png', '0px', '0px']
                    },
                    {
                        id: 'scene1TruckRim3',
                        type: 'image',
                        rect: ['26px', '104px', '12px', '12px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TruckRim.png', '0px', '0px']
                    },
                    {
                        id: 'preTruckLights',
                        type: 'image',
                        rect: ['174px', '110px', '328px', '91px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/preTruckLights.png', '0px', '0px']
                    }]
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['302px', '117px', '191px', '157px', 'auto', 'auto'],
                    id: 'scene1Truck02',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck02.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['410px', '166px', '165px', '175px', 'auto', 'auto'],
                    id: 'scene1Truck03',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck03.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['483px', '242px', '131px', '193px', 'auto', 'auto'],
                    id: 'scene1Truck04',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck04.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['520px', '291px', '98px', '200px', 'auto', 'auto'],
                    id: 'scene1Truck05',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck05.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['501px', '348px', '119px', '209px', 'auto', 'auto'],
                    id: 'scene1Truck06',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck06.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['459px', '393px', '145px', '211px', 'auto', 'auto'],
                    id: 'scene1Truck07',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck07.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['410px', '437px', '163px', '211px', 'auto', 'auto'],
                    id: 'scene1Truck08',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck08.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['366px', '477px', '169px', '211px', 'auto', 'auto'],
                    id: 'scene1Truck09',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck09.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['315px', '518px', '175px', '210px', 'auto', 'auto'],
                    id: 'scene1Truck10',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck10.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['249px', '561px', '190px', '209px', 'auto', 'auto'],
                    id: 'scene1Truck11',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck11.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['167px', '605px', '212px', '205px', 'auto', 'auto'],
                    id: 'scene1Truck12',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Truck12.png', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'sceneText1Comp',
                    rect: ['308px', '258px', '329px', '189px', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene1TextBox1',
                        type: 'image',
                        rect: ['0px', '0px', '329px', '253px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TextBox1.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp',
                        type: 'rect',
                        rect: ['195px', '129px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'sceneText2Comp',
                    rect: ['307px', '316px', '428', '248', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['0', '1', '329px', '171px', 'auto', 'auto'],
                        id: 'scene1TextBox2',
                        fill: ['rgba(0,0,0,0)', 'images/scene1TextBox2.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp2',
                        type: 'rect',
                        rect: ['196px', '206px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackCompCopy2',
                        type: 'rect',
                        rect: ['-242px', '-109px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'sceneText3Comp',
                    rect: ['307px', '316px', '428', '248', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene1TextBox3',
                        type: 'image',
                        rect: ['0px', '1px', '329px', '173px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TextBox3.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp3',
                        type: 'rect',
                        rect: ['196px', '206px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackCompCopy3',
                        type: 'rect',
                        rect: ['104px', '130px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'sceneText4Comp',
                    rect: ['306px', '314px', '428', '248', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'scene1TextBox4',
                        opacity: 1,
                        rect: ['27px', '3px', '274px', '171px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene1TextBox4.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp3Copy',
                        type: 'rect',
                        rect: ['196px', '206px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackCompCopy',
                        type: 'rect',
                        rect: ['106px', '131px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'navForwardComp2',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'scene1CloudsLight',
                symbolName: 'scene1CloudsLight',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp3Copy',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy3',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy2',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp3',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'scene1Begin',
                symbolName: 'scene1Begin',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_navBackCompCopy}": [
                ["style", "top", '131px'],
                ["style", "left", '106px']
            ],
            "${_scene1Truck09}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '366px'],
                ["style", "top", '477px']
            ],
            "${_scene1Truck02}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '302px'],
                ["style", "top", '179px']
            ],
            "${_scene1SignalWar}": [
                ["style", "top", '121px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene1Truck10}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '315px'],
                ["style", "top", '518px']
            ],
            "${_scene1Truck03}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '398px'],
                ["style", "top", '188px']
            ],
            "${_scene1CloudHealth}": [
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '240px'],
                ["style", "display", 'none']
            ],
            "${_scene1TruckRim1}": [
                ["style", "left", '147px'],
                ["style", "top", '130px']
            ],
            "${_sceneText2Comp}": [
                ["style", "top", '316px'],
                ["style", "height", '189px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '307px'],
                ["style", "width", '329px']
            ],
            "${_scene1SignalChanging2}": [
                ["style", "top", '32px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '12px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene1Truck}": [
                ["style", "top", '90px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '-202px'],
                ["transform", "scaleX", '1']
            ],
            "${_navForwardComp3}": [
                ["style", "left", '184px'],
                ["style", "top", '130px']
            ],
            "${_navBackCompCopy3}": [
                ["style", "top", '130px'],
                ["style", "left", '104px']
            ],
            "${_scene1Begin}": [
                ["style", "top", '155px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '65px'],
                ["style", "display", 'none']
            ],
            "${_navForwardComp}": [
                ["style", "left", '144px'],
                ["style", "top", '207px']
            ],
            "${_signal}": [
                ["style", "top", '237px'],
                ["style", "opacity", '1']
            ],
            "${_sceneText3Comp}": [
                ["style", "top", '316px'],
                ["style", "height", '189px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '307px'],
                ["style", "width", '329px']
            ],
            "${_scene1TruckUnder}": [
                ["style", "left", '6px'],
                ["style", "top", '81px']
            ],
            "${_scene1Back}": [
                ["style", "height", '800px'],
                ["style", "top", '-36px']
            ],
            "${_scene1Truck05}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '520px'],
                ["style", "top", '291px']
            ],
            "${_scene1Truck04}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '483px'],
                ["style", "top", '242px']
            ],
            "${_scene1CloudsLight}": [
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '829px'],
                ["transform", "scaleX", '1']
            ],
            "${_scene1Truck12}": [
                ["style", "display", 'none'],
                ["style", "left", '167px'],
                ["style", "top", '605px']
            ],
            "${_scene1TextBox4}": [
                ["style", "top", '3px'],
                ["style", "height", '171px'],
                ["style", "opacity", '1'],
                ["style", "left", '27px'],
                ["style", "width", '274px']
            ],
            "${_clouds}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '10px'],
                ["style", "top", '0px']
            ],
            "${_scene1CloudChanging2}": [
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '496px'],
                ["style", "display", 'none']
            ],
            "${_scene1SignalCommodity}": [
                ["style", "top", '85px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '144px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_navBackCompCopy2}": [
                ["style", "top", '208px'],
                ["style", "left", '100px']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1020px']
            ],
            "${_scene1TextBox1}": [
                ["style", "top", '0px'],
                ["style", "height", '253px'],
                ["style", "left", '0px'],
                ["style", "width", '329px']
            ],
            "${_scene1Truck08}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '410px'],
                ["style", "top", '437px']
            ],
            "${_scene1Truck11}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '249px'],
                ["style", "top", '561px']
            ],
            "${_scene1TruckRim3}": [
                ["style", "left", '26px'],
                ["style", "top", '104px']
            ],
            "${_scene1Truck07}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '459px'],
                ["style", "top", '393px']
            ],
            "${_preTruckLights}": [
                ["style", "top", '110px'],
                ["style", "height", '91px'],
                ["style", "opacity", '1'],
                ["style", "left", '174px'],
                ["style", "width", '120px']
            ],
            "${_navForwardComp2}": [
                ["style", "left", '181px'],
                ["style", "top", '208px']
            ],
            "${_scene1TextBox2}": [
                ["style", "display", 'none'],
                ["style", "height", '253px'],
                ["style", "width", '329px']
            ],
            "${_scene1Truck06}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '501px'],
                ["style", "top", '348px']
            ],
            "${_scene1CloudPower}": [
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_sceneText4Comp}": [
                ["style", "top", '314px'],
                ["style", "height", '189px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '306px'],
                ["style", "width", '329px']
            ],
            "${_scene1SignalIncreasing2}": [
                ["style", "top", '183px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '192px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene1TruckShadow}": [
                ["style", "left", '0px'],
                ["style", "top", '81px']
            ],
            "${_scene1TextDrive}": [
                ["style", "top", '248px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '12px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene1TruckRim2}": [
                ["style", "left", '49px'],
                ["style", "top", '110px']
            ],
            "${_sceneText1Comp}": [
                ["style", "top", '317px'],
                ["style", "height", '189px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '306px'],
                ["style", "width", '329px']
            ],
            "${_scene1TextBox3}": [
                ["style", "top", '1px'],
                ["style", "height", '173px'],
                ["style", "left", '0px'],
                ["style", "width", '329px']
            ],
            "${_scene1SignalLegislation}": [
                ["style", "top", '294px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '116px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene1TruckChasis}": [
                ["style", "top", '3px'],
                ["style", "left", '4px'],
                ["transform", "rotateZ", '4deg']
            ],
            "${_navForwardComp3Copy}": [
                ["style", "top", '131px'],
                ["style", "left", '187px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15750,
            autoPlay: true,
            labels: {
                "scene1Start": 0,
                "s11": 2000,
                "scene2Text": 3053,
                "s12": 5553,
                "scene3Text": 8000,
                "s13": 11500,
                "sceneOneArrow": 12000,
                "scene1Run": 13500
            },
            timeline: [
                { id: "eid540", tween: [ "style", "${_scene1Truck07}", "display", 'block', { fromValue: 'none'}], position: 14821, duration: 0 },
                { id: "eid551", tween: [ "style", "${_scene1Truck07}", "display", 'none', { fromValue: 'block'}], position: 14949, duration: 0 },
                { id: "eid615", tween: [ "style", "${_scene1Truck}", "opacity", '0', { fromValue: '1'}], position: 14500, duration: 113 },
                { id: "eid281", tween: [ "style", "${_scene1SignalWar}", "top", '66px', { fromValue: '121px'}], position: 3553, duration: 1000, easing: "easeOutBounce" },
                { id: "eid1654", tween: [ "style", "${_navForwardComp2}", "left", '181px', { fromValue: '181px'}], position: 3707, duration: 0, easing: "easeOutBack" },
                { id: "eid11007", tween: [ "style", "${_navForwardComp2}", "left", '181px', { fromValue: '181px'}], position: 5094, duration: 0 },
                { id: "eid537", tween: [ "style", "${_scene1Truck10}", "display", 'block', { fromValue: 'none'}], position: 15012, duration: 0 },
                { id: "eid548", tween: [ "style", "${_scene1Truck10}", "display", 'none', { fromValue: 'block'}], position: 15140, duration: 0 },
                { id: "eid270", tween: [ "transform", "${_scene1SignalIncreasing2}", "scaleY", '1', { fromValue: '0.05'}], position: 5053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid4945", tween: [ "style", "${_sceneText4Comp}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid5028", tween: [ "style", "${_scene1CloudChanging2}", "display", 'block', { fromValue: 'none'}], position: 1630, duration: 0, easing: "easeOutBounce" },
                { id: "eid278", tween: [ "style", "${_scene1SignalCommodity}", "top", '44px', { fromValue: '85px'}], position: 4053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid213", tween: [ "style", "${_scene1SignalCommodity}", "display", 'block', { fromValue: 'none'}], position: 4053, duration: 0 },
                { id: "eid544", tween: [ "style", "${_scene1Truck03}", "display", 'block', { fromValue: 'none'}], position: 14565, duration: 0 },
                { id: "eid555", tween: [ "style", "${_scene1Truck03}", "display", 'none', { fromValue: 'block'}], position: 14693, duration: 0 },
                { id: "eid10063", tween: [ "style", "${_scene1CloudChanging2}", "opacity", '1', { fromValue: '0'}], position: 1630, duration: 500 },
                { id: "eid8321", tween: [ "style", "${_scene1CloudsLight}", "display", 'block', { fromValue: 'none'}], position: 2130, duration: 0, easing: "easeOutBounce" },
                { id: "eid149", tween: [ "style", "${_sceneText3Comp}", "opacity", '1', { fromValue: '0.000000'}], position: 6558, duration: 500 },
                { id: "eid474", tween: [ "transform", "${_scene1Truck}", "scaleY", '0.97', { fromValue: '1'}], position: 13988, duration: 144 },
                { id: "eid475", tween: [ "transform", "${_scene1Truck}", "scaleY", '1', { fromValue: '0.97'}], position: 14132, duration: 91 },
                { id: "eid189", tween: [ "style", "${_scene1Truck}", "left", '154px', { fromValue: '-202px'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid468", tween: [ "style", "${_scene1Truck}", "left", '79px', { fromValue: '154px'}], position: 13988, duration: 144 },
                { id: "eid603", tween: [ "style", "${_scene1Truck}", "left", '252px', { fromValue: '79px'}], position: 14132, duration: 368 },
                { id: "eid1643", tween: [ "style", "${_scene1Truck}", "left", '303px', { fromValue: '252px'}], position: 14500, duration: 113 },
                { id: "eid613", tween: [ "style", "${_scene1Truck}", "left", '233px', { fromValue: '303px'}], position: 14613, duration: 15 },
                { id: "eid372", tween: [ "transform", "${_scene1Begin}", "scaleX", '1', { fromValue: '0.05'}], position: 12000, duration: 500, easing: "easeOutBounce" },
                { id: "eid391", tween: [ "transform", "${_scene1Begin}", "scaleX", '0.05', { fromValue: '1'}], position: 13500, duration: 500, easing: "easeOutBounce" },
                { id: "eid569", tween: [ "style", "${_scene1Truck03}", "opacity", '0', { fromValue: '1'}], position: 14628, duration: 65 },
                { id: "eid3457", tween: [ "style", "${_sceneText3Comp}", "height", '189px', { fromValue: '189px'}], position: 7367, duration: 0, easing: "easeOutBounce" },
                { id: "eid279", tween: [ "style", "${_scene1SignalIncreasing2}", "top", '141px', { fromValue: '183px'}], position: 5053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid1648", tween: [ "style", "${_scene1Truck}", "top", '145px', { fromValue: '90px'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid1649", tween: [ "style", "${_scene1Truck}", "top", '141px', { fromValue: '145px'}], position: 1500, duration: 12488, easing: "easeOutBack" },
                { id: "eid1644", tween: [ "style", "${_scene1Truck}", "top", '131px', { fromValue: '141px'}], position: 13988, duration: 144 },
                { id: "eid1650", tween: [ "style", "${_scene1Truck}", "top", '161px', { fromValue: '131px'}], position: 14132, duration: 481 },
                { id: "eid581", tween: [ "style", "${_scene1Truck04}", "opacity", '0', { fromValue: '1'}], position: 14693, duration: 63 },
                { id: "eid146", tween: [ "style", "${_sceneText2Comp}", "opacity", '1', { fromValue: '0.000000'}], position: 3053, duration: 500 },
                { id: "eid157", tween: [ "style", "${_sceneText2Comp}", "opacity", '1', { fromValue: '1'}], position: 6558, duration: 0 },
                { id: "eid158", tween: [ "style", "${_sceneText2Comp}", "opacity", '1', { fromValue: '1'}], position: 7058, duration: 0 },
                { id: "eid8500", tween: [ "style", "${_preTruckLights}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500, easing: "easeInOutBounce" },
                { id: "eid143", tween: [ "style", "${_sceneText1Comp}", "opacity", '1', { fromValue: '0.000000'}], position: 1058, duration: 127 },
                { id: "eid156", tween: [ "style", "${_sceneText1Comp}", "opacity", '1', { fromValue: '1'}], position: 3553, duration: 0 },
                { id: "eid339", tween: [ "transform", "${_sceneText3Comp}", "scaleY", '1', { fromValue: '1'}], position: 12004, duration: 0, easing: "easeOutBounce" },
                { id: "eid215", tween: [ "style", "${_scene1SignalIncreasing2}", "display", 'block', { fromValue: 'none'}], position: 5053, duration: 0 },
                { id: "eid602", tween: [ "style", "${_scene1Truck11}", "opacity", '0', { fromValue: '1'}], position: 15140, duration: 65 },
                { id: "eid535", tween: [ "style", "${_scene1Truck12}", "display", 'block', { fromValue: 'none'}], position: 15140, duration: 0 },
                { id: "eid546", tween: [ "style", "${_scene1Truck12}", "display", 'none', { fromValue: 'block'}], position: 15268, duration: 0 },
                { id: "eid610", tween: [ "style", "${_scene1Truck02}", "left", '353px', { fromValue: '302px'}], position: 14500, duration: 128, easing: "easeOutBack" },
                { id: "eid1665", tween: [ "style", "${_navForwardComp3}", "left", '184px', { fromValue: '184px'}], position: 7338, duration: 0, easing: "easeOutBack" },
                { id: "eid538", tween: [ "style", "${_scene1Truck09}", "display", 'block', { fromValue: 'none'}], position: 14949, duration: 0 },
                { id: "eid549", tween: [ "style", "${_scene1Truck09}", "display", 'none', { fromValue: 'block'}], position: 15077, duration: 0 },
                { id: "eid536", tween: [ "style", "${_scene1Truck11}", "display", 'block', { fromValue: 'none'}], position: 15077, duration: 0 },
                { id: "eid547", tween: [ "style", "${_scene1Truck11}", "display", 'none', { fromValue: 'block'}], position: 15205, duration: 0 },
                { id: "eid1653", tween: [ "style", "${_navForwardComp}", "left", '144px', { fromValue: '144px'}], position: 2250, duration: 0, easing: "easeOutBack" },
                { id: "eid280", tween: [ "style", "${_scene1SignalChanging2}", "top", '-23px', { fromValue: '32px'}], position: 3053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid3455", tween: [ "style", "${_sceneText2Comp}", "height", '189px', { fromValue: '189px'}], position: 3775, duration: 0, easing: "easeOutBounce" },
                { id: "eid3454", tween: [ "style", "${_sceneText2Comp}", "width", '329px', { fromValue: '329px'}], position: 3775, duration: 0, easing: "easeOutBounce" },
                { id: "eid7304", tween: [ "style", "${_scene1Begin}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid376", tween: [ "style", "${_scene1Begin}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutBounce" },
                { id: "eid393", tween: [ "style", "${_scene1Begin}", "display", 'none', { fromValue: 'none'}], position: 14000, duration: 0, easing: "easeOutBounce" },
                { id: "eid4915", tween: [ "style", "${_sceneText4Comp}", "width", '329px', { fromValue: '329px'}], position: 7367, duration: 0, easing: "easeOutBounce" },
                { id: "eid377", tween: [ "style", "${_scene1Begin}", "left", '175px', { fromValue: '65px'}], position: 12000, duration: 500, easing: "easeOutBounce" },
                { id: "eid390", tween: [ "style", "${_scene1Begin}", "left", '172px', { fromValue: '172px'}], position: 14000, duration: 0, easing: "easeOutBounce" },
                { id: "eid138", tween: [ "style", "${_scene1TextBox2}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid266", tween: [ "transform", "${_scene1SignalLegislation}", "scaleY", '1', { fromValue: '0.05'}], position: 5524, duration: 1000, easing: "easeOutBounce" },
                { id: "eid590", tween: [ "style", "${_scene1Truck07}", "opacity", '0', { fromValue: '1'}], position: 14884, duration: 65 },
                { id: "eid209", tween: [ "transform", "${_scene1Truck}", "scaleX", '0.95', { fromValue: '1'}], position: 500, duration: 414 },
                { id: "eid210", tween: [ "transform", "${_scene1Truck}", "scaleX", '1', { fromValue: '0.95'}], position: 914, duration: 586 },
                { id: "eid472", tween: [ "transform", "${_scene1Truck}", "scaleX", '0.87', { fromValue: '1'}], position: 13988, duration: 144 },
                { id: "eid473", tween: [ "transform", "${_scene1Truck}", "scaleX", '1', { fromValue: '0.87'}], position: 14132, duration: 91 },
                { id: "eid282", tween: [ "style", "${_scene1TextDrive}", "top", '193px', { fromValue: '248px'}], position: 4553, duration: 1000, easing: "easeOutBounce" },
                { id: "eid212", tween: [ "style", "${_scene1SignalWar}", "display", 'block', { fromValue: 'none'}], position: 3553, duration: 0 },
                { id: "eid164", tween: [ "style", "${_clouds}", "opacity", '1', { fromValue: '1'}], position: 630, duration: 0 },
                { id: "eid274", tween: [ "transform", "${_scene1SignalWar}", "scaleY", '1', { fromValue: '0.05'}], position: 3553, duration: 1000, easing: "easeOutBounce" },
                { id: "eid596", tween: [ "style", "${_scene1Truck09}", "opacity", '0', { fromValue: '1'}], position: 15012, duration: 65 },
                { id: "eid587", tween: [ "style", "${_scene1Truck06}", "opacity", '0', { fromValue: '1'}], position: 14821, duration: 63 },
                { id: "eid216", tween: [ "style", "${_scene1SignalLegislation}", "display", 'block', { fromValue: 'none'}], position: 5524, duration: 0 },
                { id: "eid153", tween: [ "style", "${_sceneText2Comp}", "display", 'block', { fromValue: 'none'}], position: 3053, duration: 0 },
                { id: "eid151", tween: [ "style", "${_sceneText2Comp}", "display", 'none', { fromValue: 'block'}], position: 7058, duration: 0 },
                { id: "eid10061", tween: [ "style", "${_scene1CloudsLight}", "opacity", '1', { fromValue: '0'}], position: 2130, duration: 370 },
                { id: "eid4913", tween: [ "style", "${_sceneText4Comp}", "opacity", '1', { fromValue: '0.000000'}], position: 6558, duration: 500 },
                { id: "eid4946", tween: [ "style", "${_sceneText4Comp}", "opacity", '0', { fromValue: '1'}], position: 7058, duration: 4942 },
                { id: "eid4947", tween: [ "style", "${_sceneText4Comp}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 500 },
                { id: "eid4957", tween: [ "style", "${_sceneText4Comp}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 488 },
                { id: "eid271", tween: [ "transform", "${_scene1SignalChanging2}", "scaleX", '1', { fromValue: '0.05'}], position: 3053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid154", tween: [ "style", "${_sceneText3Comp}", "display", 'block', { fromValue: 'none'}], position: 6558, duration: 0 },
                { id: "eid353", tween: [ "style", "${_sceneText3Comp}", "display", 'none', { fromValue: 'block'}], position: 12500, duration: 0, easing: "easeOutBounce" },
                { id: "eid338", tween: [ "transform", "${_sceneText3Comp}", "scaleX", '1', { fromValue: '1'}], position: 12004, duration: 0, easing: "easeOutBounce" },
                { id: "eid186", tween: [ "style", "${_scene1Truck}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid480", tween: [ "style", "${_scene1Truck}", "display", 'none', { fromValue: 'block'}], position: 14628, duration: 0, easing: "easeInBack" },
                { id: "eid268", tween: [ "transform", "${_scene1SignalCommodity}", "scaleY", '1', { fromValue: '0.05'}], position: 4053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid373", tween: [ "transform", "${_scene1Begin}", "scaleY", '1', { fromValue: '0.05'}], position: 12000, duration: 500, easing: "easeOutBounce" },
                { id: "eid392", tween: [ "transform", "${_scene1Begin}", "scaleY", '0.05', { fromValue: '1'}], position: 13500, duration: 500, easing: "easeOutBounce" },
                { id: "eid4917", tween: [ "style", "${_navForwardComp3Copy}", "top", '131px', { fromValue: '131px'}], position: 7338, duration: 0, easing: "easeOutBack" },
                { id: "eid11008", tween: [ "style", "${_navBackCompCopy2}", "top", '209px', { fromValue: '208px'}], position: 5094, duration: 0 },
                { id: "eid267", tween: [ "transform", "${_scene1SignalCommodity}", "scaleX", '1', { fromValue: '0.05'}], position: 4053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid277", tween: [ "style", "${_scene1SignalLegislation}", "top", '239px', { fromValue: '294px'}], position: 5524, duration: 1000, easing: "easeOutBounce" },
                { id: "eid545", tween: [ "style", "${_scene1Truck02}", "display", 'block', { fromValue: 'none'}], position: 14500, duration: 0 },
                { id: "eid556", tween: [ "style", "${_scene1Truck02}", "display", 'none', { fromValue: 'block'}], position: 14628, duration: 0 },
                { id: "eid543", tween: [ "style", "${_scene1Truck04}", "display", 'block', { fromValue: 'none'}], position: 14628, duration: 0 },
                { id: "eid554", tween: [ "style", "${_scene1Truck04}", "display", 'none', { fromValue: 'block'}], position: 14756, duration: 0 },
                { id: "eid214", tween: [ "style", "${_scene1TextDrive}", "display", 'block', { fromValue: 'none'}], position: 4553, duration: 0 },
                { id: "eid265", tween: [ "transform", "${_scene1SignalLegislation}", "scaleX", '1', { fromValue: '0.05'}], position: 5524, duration: 1000, easing: "easeOutBounce" },
                { id: "eid272", tween: [ "transform", "${_scene1SignalChanging2}", "scaleY", '1', { fromValue: '0.05'}], position: 3053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid539", tween: [ "style", "${_scene1Truck08}", "display", 'block', { fromValue: 'none'}], position: 14884, duration: 0 },
                { id: "eid550", tween: [ "style", "${_scene1Truck08}", "display", 'none', { fromValue: 'block'}], position: 15012, duration: 0 },
                { id: "eid10058", tween: [ "style", "${_scene1CloudHealth}", "opacity", '1', { fromValue: '0'}], position: 1130, duration: 500 },
                { id: "eid542", tween: [ "style", "${_scene1Truck05}", "display", 'block', { fromValue: 'none'}], position: 14693, duration: 0 },
                { id: "eid553", tween: [ "style", "${_scene1Truck05}", "display", 'none', { fromValue: 'block'}], position: 14821, duration: 0 },
                { id: "eid4916", tween: [ "style", "${_navForwardComp3Copy}", "left", '187px', { fromValue: '187px'}], position: 7338, duration: 0, easing: "easeOutBack" },
                { id: "eid1664", tween: [ "style", "${_navForwardComp3}", "top", '130px', { fromValue: '130px'}], position: 7338, duration: 0, easing: "easeOutBack" },
                { id: "eid10055", tween: [ "style", "${_scene1CloudPower}", "opacity", '1', { fromValue: '0'}], position: 630, duration: 500 },
                { id: "eid5027", tween: [ "style", "${_scene1CloudHealth}", "display", 'block', { fromValue: 'none'}], position: 1130, duration: 0, easing: "easeOutBounce" },
                { id: "eid152", tween: [ "style", "${_sceneText1Comp}", "display", 'none', { fromValue: 'block'}], position: 3553, duration: 0 },
                { id: "eid197", tween: [ "transform", "${_scene1TruckChasis}", "rotateZ", '-1deg', { fromValue: '4deg'}], position: 914, duration: 586, easing: "easeOutBack" },
                { id: "eid477", tween: [ "transform", "${_scene1TruckChasis}", "rotateZ", '-3deg', { fromValue: '-1deg'}], position: 13500, duration: 250, easing: "easeInBack" },
                { id: "eid269", tween: [ "transform", "${_scene1SignalIncreasing2}", "scaleX", '1', { fromValue: '0.05'}], position: 5053, duration: 1000, easing: "easeOutBounce" },
                { id: "eid273", tween: [ "transform", "${_scene1SignalWar}", "scaleX", '1', { fromValue: '0.05'}], position: 3553, duration: 1000, easing: "easeOutBounce" },
                { id: "eid276", tween: [ "transform", "${_scene1TextDrive}", "scaleY", '1', { fromValue: '0.05'}], position: 4553, duration: 1000, easing: "easeOutBounce" },
                { id: "eid1655", tween: [ "style", "${_navForwardComp2}", "top", '208px', { fromValue: '208px'}], position: 3707, duration: 0, easing: "easeOutBack" },
                { id: "eid11006", tween: [ "style", "${_navForwardComp2}", "top", '209px', { fromValue: '208px'}], position: 5094, duration: 0 },
                { id: "eid584", tween: [ "style", "${_scene1Truck05}", "opacity", '0', { fromValue: '1'}], position: 14756, duration: 65 },
                { id: "eid4910", tween: [ "style", "${_sceneText4Comp}", "height", '189px', { fromValue: '189px'}], position: 7367, duration: 0, easing: "easeOutBounce" },
                { id: "eid275", tween: [ "transform", "${_scene1TextDrive}", "scaleX", '1', { fromValue: '0.05'}], position: 4553, duration: 1000, easing: "easeOutBounce" },
                { id: "eid479", tween: [ "style", "${_scene1TruckChasis}", "top", '3px', { fromValue: '3px'}], position: 14500, duration: 0, easing: "easeInBack" },
                { id: "eid253", tween: [ "style", "${_scene1SignalChanging2}", "left", '12px', { fromValue: '12px'}], position: 3053, duration: 0 },
                { id: "eid229", tween: [ "style", "${_scene1SignalChanging2}", "left", '12px', { fromValue: '12px'}], position: 4053, duration: 0 },
                { id: "eid599", tween: [ "style", "${_scene1Truck10}", "opacity", '0', { fromValue: '1'}], position: 15077, duration: 63 },
                { id: "eid541", tween: [ "style", "${_scene1Truck06}", "display", 'block', { fromValue: 'none'}], position: 14756, duration: 0 },
                { id: "eid552", tween: [ "style", "${_scene1Truck06}", "display", 'none', { fromValue: 'block'}], position: 14884, duration: 0 },
                { id: "eid378", tween: [ "style", "${_scene1Begin}", "top", '221px', { fromValue: '155px'}], position: 12000, duration: 500, easing: "easeOutBounce" },
                { id: "eid389", tween: [ "style", "${_scene1Begin}", "top", '166px', { fromValue: '160px'}], position: 14000, duration: 0, easing: "easeOutBounce" },
                { id: "eid593", tween: [ "style", "${_scene1Truck08}", "opacity", '0', { fromValue: '1'}], position: 14949, duration: 63 },
                { id: "eid163", tween: [ "style", "${_clouds}", "display", 'block', { fromValue: 'none'}], position: 630, duration: 0 },
                { id: "eid211", tween: [ "style", "${_scene1SignalChanging2}", "display", 'block', { fromValue: 'none'}], position: 3053, duration: 0 },
                { id: "eid3456", tween: [ "style", "${_sceneText3Comp}", "width", '329px', { fromValue: '329px'}], position: 7367, duration: 0, easing: "easeOutBounce" },
                { id: "eid4918", tween: [ "style", "${_scene1TextBox4}", "opacity", '1', { fromValue: '1'}], position: 12000, duration: 0 },
                { id: "eid5026", tween: [ "style", "${_scene1CloudPower}", "display", 'block', { fromValue: 'none'}], position: 630, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"navForwardComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    id: 'navArrowForward',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/navArrowForward.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '49px', '49px', 'auto', 'auto'],
                    id: 'navArrowForwardOver',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/navArrowForwardOver.png', '0px', '0px']
                },
                {
                    rect: ['0px', '-23px', '75px', '98px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hitArea',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_navArrowForward}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_navArrowForwardOver}": [
                ["style", "display", 'none']
            ],
            "${_hitArea}": [
                ["style", "top", '-23px'],
                ["style", "height", '98px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '75px'],
                ["style", "width", '75px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "forwardUp": 15,
                "forwardOver": 1000
            },
            timeline: [
                { id: "eid137", tween: [ "style", "${_navArrowForwardOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
},
"navBackComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    id: 'navArrowBack',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/navArrowBack.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '50px', '49px', 'auto', 'auto'],
                    id: 'navArrowBackOver',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/navArrowBackOver.png', '0px', '0px']
                },
                {
                    rect: ['-27px', '-27px', '77px', '111px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hitArea',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '50px']
            ],
            "${_navArrowBackOver}": [
                ["style", "display", 'none']
            ],
            "${_hitArea}": [
                ["style", "top", '-27px'],
                ["style", "height", '111px'],
                ["style", "left", '-27px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '77px']
            ],
            "${_navArrowBack}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "backUp": 0,
                "backOver": 1000
            },
            timeline: [
                { id: "eid139", tween: [ "style", "${_navArrowBackOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
},
"scene1ThunderComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'scene1Thunder',
                    opacity: 0,
                    rect: ['0px', '0px', '354px', '305px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene1Thunder.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene1Thunder}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '305px'],
                ["style", "width", '354px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scene1Begin": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene1TruckAroowGlowComp',
                    type: 'rect',
                    rect: ['59px', '-98px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'scene1TruckArrow',
                    type: 'image',
                    rect: ['20px', '8px', '317px', '119px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene1TruckArrow.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '317px', '119px', 'auto', 'auto'],
                    id: 'scene1TruckArrowOver',
                    fill: ['rgba(0,0,0,0)', 'images/scene1TruckArrowOver.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'mouserBegin',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '317px', '119px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'scene1TruckAroowGlowComp',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene1TruckArrow}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '0px']
            ],
            "${_scene1TruckArrowOver}": [
                ["style", "display", 'none']
            ],
            "${_scene1TruckAroowGlowComp}": [
                ["style", "left", '59px'],
                ["style", "top", '-98px']
            ],
            "${symbolSelector}": [
                ["style", "height", '119px'],
                ["style", "width", '317px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "beginUp": 0,
                "beginOver": 1000
            },
            timeline: [
                { id: "eid365", tween: [ "style", "${_scene1TruckArrowOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"scene1TruckAroowGlowComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene1TruckArrowGlow',
                    type: 'image',
                    rect: ['0px', '0px', '317px', '317px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene1TruckArrowGlow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '317px'],
                ["style", "width", '317px']
            ],
            "${_scene1TruckArrowGlow}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid381", tween: [ "style", "${_scene1TruckArrowGlow}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2500, easing: "easeOutBounce" },
                { id: "eid382", tween: [ "style", "${_scene1TruckArrowGlow}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 2500, easing: "easeOutBounce" }            ]
        }
    }
},
"preGlowArrowComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'preArrowglow',
                    opacity: 0,
                    rect: ['0px', '0px', '164px', '168px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/preArrowglow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '168px'],
                ["style", "width", '164px']
            ],
            "${_preArrowglow}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid395", tween: [ "style", "${_preArrowglow}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2500 },
                { id: "eid397", tween: [ "style", "${_preArrowglow}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 2500 }            ]
        }
    }
},
"nav1Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'nav1Button01',
                    type: 'image',
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button01.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '50px', '49px', 'auto', 'auto'],
                    id: 'nav1Button01Over',
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button01Over.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['-8px', '-11px', '66px', '73px', 'auto', 'auto'],
                    id: 'nav1Mouser',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,246,246,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_nav1Button01}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_nav1Mouser}": [
                ["color", "background-color", 'rgba(255,246,246,0.00)'],
                ["style", "display", 'none']
            ],
            "${_nav1Button01Over}": [
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "nav1Up": 0,
                "nav1Over": 500
            },
            timeline: [
                { id: "eid398", tween: [ "style", "${_nav1Button01Over}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid10784", tween: [ "style", "${_nav1Mouser}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"nav2Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'nav1Button02',
                    type: 'image',
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button02.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '49px', '49px', 'auto', 'auto'],
                    id: 'nav1Button02Over',
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button02Over.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['-8px', '-11px', '66px', '73px', 'auto', 'auto'],
                    id: 'nav2Mouser',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,246,246,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_nav1Button02}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_nav2Mouser}": [
                ["color", "background-color", 'rgba(255,246,246,0.00)'],
                ["style", "display", 'none']
            ],
            "${_nav1Button02Over}": [
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "nav2Up": 0,
                "nav2Over": 500
            },
            timeline: [
                { id: "eid399", tween: [ "style", "${_nav1Button02Over}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid10785", tween: [ "style", "${_nav2Mouser}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"nav3Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'nav1Button03',
                    type: 'image',
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button03.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '49px', '49px', 'auto', 'auto'],
                    id: 'nav1Button03Over',
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button03Over.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['-8px', '-11px', '66px', '73px', 'auto', 'auto'],
                    id: 'nav3Mouser',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,246,246,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ],
            "${_nav3Mouser}": [
                ["color", "background-color", 'rgba(255,246,246,0.00)'],
                ["style", "display", 'none']
            ],
            "${_nav1Button03}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_nav1Button03Over}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "nav3Up": 0,
                "nav3Over": 500
            },
            timeline: [
                { id: "eid400", tween: [ "style", "${_nav1Button03Over}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid10786", tween: [ "style", "${_nav3Mouser}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"nav4Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'nav1Button04',
                    type: 'image',
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button04.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '50px', '49px', 'auto', 'auto'],
                    id: 'nav1Button04Over',
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button04Over.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['-8px', '-11px', '66px', '73px', 'auto', 'auto'],
                    id: 'nav4Mouser',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,246,246,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_nav4Mouser}": [
                ["color", "background-color", 'rgba(255,246,246,0.00)'],
                ["style", "display", 'none']
            ],
            "${_nav1Button04Over}": [
                ["style", "display", 'none']
            ],
            "${_nav1Button04}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "nav4Up": 0,
                "nav4Over": 500
            },
            timeline: [
                { id: "eid402", tween: [ "style", "${_nav1Button04Over}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid401", tween: [ "style", "${_nav1Button04Over}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid10787", tween: [ "style", "${_nav4Mouser}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"nav5Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'nav1Button05',
                    type: 'image',
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button05.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '50px', '49px', 'auto', 'auto'],
                    id: 'nav1Button05Over',
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button05Over.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['-8px', '-11px', '66px', '73px', 'auto', 'auto'],
                    id: 'nav5Mouser',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,246,246,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_nav1Button05}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_nav1Button05Over}": [
                ["style", "display", 'none']
            ],
            "${_nav5Mouser}": [
                ["color", "background-color", 'rgba(255,246,246,0.00)'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "nav5Up": 0,
                "nav5Over": 500
            },
            timeline: [
                { id: "eid403", tween: [ "style", "${_nav1Button05Over}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid10788", tween: [ "style", "${_nav5Mouser}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
},
"nav6Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'nav1Button06',
                    type: 'image',
                    rect: ['0px', '0px', '49px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button06.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '50px', '49px', 'auto', 'auto'],
                    id: 'nav1Button06Over',
                    fill: ['rgba(0,0,0,0)', 'images/nav1Button06Over.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    rect: ['-8px', '-11px', '66px', '73px', 'auto', 'auto'],
                    id: 'nav6Mouser',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(255,246,246,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '49px'],
                ["style", "width", '49px']
            ],
            "${_nav6Mouser}": [
                ["color", "background-color", 'rgba(255,246,246,0.00)'],
                ["style", "display", 'none']
            ],
            "${_nav1Button06}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_nav1Button06Over}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            labels: {
                "nav6Up": 0,
                "nav6Over": 500
            },
            timeline: [
                { id: "eid10789", tween: [ "style", "${_nav6Mouser}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid404", tween: [ "style", "${_nav1Button06Over}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"scene2Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene2Backer',
                    type: 'image',
                    rect: ['0', '0', '1020px', '635px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene2Back.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['469px', '5px', '51px', '80px', 'auto', 'auto'],
                    id: 'scene2Text2007',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Text2007.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['729px', '5px', '258px', '156px', 'auto', 'auto'],
                    id: 'scene2Factory1',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Factory1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['301px', '10px', '139px', '130px', 'auto', 'auto'],
                    id: 'scene2SignPerformance',
                    fill: ['rgba(0,0,0,0)', 'images/scene2SignPerformance.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['666px', '5px', '73px', '122px', 'auto', 'auto'],
                    id: 'scene1Text2010',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Text2010.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['565px', '83px', '327px', '196px', 'auto', 'auto'],
                    id: 'scene2Factory2',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Factory2.png', '0px', '0px']
                },
                {
                    id: 'cows',
                    type: 'group',
                    rect: ['893', '262', '40', '92', 'auto', 'auto'],
                    c: [
                    {
                        transform: [[0, 0], [], [], ['0.63', '0.63']],
                        display: 'none',
                        type: 'rect',
                        id: 'cowOneComp',
                        rect: ['29px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.63', '0.63']],
                        display: 'none',
                        type: 'rect',
                        id: 'cowThreeComp',
                        rect: ['35px', '88px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.63', '0.63']],
                        display: 'none',
                        type: 'rect',
                        id: 'cowTwoComp',
                        rect: ['-1px', '54px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        type: 'audio',
                        source: ['media/cowMoo.mp3', 'media/cowMoo.ogg'],
                        id: 'cowMoo',
                        rect: ['278', '206', '320px', '45px', 'auto', 'auto'],
                        tag: 'audio'
                    }]
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['324px', '230px', '93px', '156px', 'auto', 'auto'],
                    id: 'scene1Text2011',
                    fill: ['rgba(0,0,0,0)', 'images/scene1Text2011.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['377px', '199px', '362px', '217px', 'auto', 'auto'],
                    id: 'scene2Factory3',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Factory3.png', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'factoryTruck',
                    rect: ['632px', '337px', '169', '132', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene2FactRoller',
                        type: 'image',
                        rect: ['0px', '0px', '169px', '79px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2FactRoller.png', '0px', '0px']
                    },
                    {
                        display: 'block',
                        type: 'rect',
                        id: 'scene2BottlesLoop2',
                        rect: ['128px', '28px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'scene2FactTruckUnder',
                        type: 'image',
                        rect: ['64px', '69px', '95px', '62px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2FactTruckUnder.png', '0px', '0px']
                    },
                    {
                        id: 'scene2FactTruckChasis',
                        type: 'image',
                        rect: ['52px', '36px', '112px', '96px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2FactTruckChasis.png', '0px', '0px']
                    },
                    {
                        id: 'scene2FactTruckRim',
                        type: 'image',
                        rect: ['143px', '97px', '6px', '6px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2FactTruckRim.png', '0px', '0px']
                    },
                    {
                        id: 'scene2FactTruckRimCopy',
                        type: 'image',
                        rect: ['132px', '103px', '6px', '6px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2FactTruckRim.png', '0px', '0px']
                    },
                    {
                        id: 'scene2FactTruckRim3',
                        type: 'image',
                        rect: ['91px', '123px', '6px', '6px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2FactTruckRim.png', '0px', '0px']
                    }]
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['371px', '176px', '375px', '252px', 'auto', 'auto'],
                    id: 'scene2Factory3Up',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Factory3Up.png', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'scene2Truck1',
                    rect: ['757', '-190', '206', '195', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene2Truck1Under',
                        type: 'image',
                        rect: ['0px', '73px', '206px', '122px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck1Under.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck1Chasis',
                        type: 'image',
                        rect: ['1px', '0px', '188px', '182px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck1Chasis.png', '0px', '0px']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'scene2TruckTurn',
                    rect: ['151', '140', '345', '410', 'auto', 'auto'],
                    c: [
                    {
                        transform: [[0, 0], [], [], ['0.7', '0.7']],
                        type: 'image',
                        id: 'scene2Truck2',
                        display: 'none',
                        rect: ['62px', '-49px', '221px', '244px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck2.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.75', '0.75']],
                        type: 'image',
                        id: 'scene2Truck3',
                        display: 'none',
                        rect: ['28px', '-12px', '198px', '251px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck3.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.8', '0.8']],
                        type: 'image',
                        id: 'scene2Truck4',
                        display: 'none',
                        rect: ['2px', '31px', '160px', '247px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck4.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.85', '0.85']],
                        type: 'image',
                        id: 'scene2Truck5',
                        display: 'none',
                        rect: ['2px', '85px', '152px', '241px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck5.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.9', '0.9']],
                        type: 'image',
                        id: 'scene2Truck6',
                        display: 'none',
                        rect: ['-2px', '135px', '183px', '238px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck6.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], [], [], ['0.95', '0.95']],
                        type: 'image',
                        id: 'scene2Truck7',
                        display: 'none',
                        rect: ['31px', '175px', '228px', '212px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck7.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['105px', '215px', '267px', '214px', 'auto', 'auto'],
                        id: 'scene2Truck8',
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck8.png', '0px', '0px']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'scene2Truck9',
                    rect: ['565', '366', '363', '246', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene2Truck9Under',
                        type: 'image',
                        rect: ['1px', '96px', '359px', '150px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Under.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Chasis',
                        type: 'image',
                        rect: ['0px', '0px', '363px', '214px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Chasis.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim1',
                        type: 'image',
                        rect: ['279px', '196px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim2',
                        type: 'image',
                        rect: ['92px', '183px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim3',
                        type: 'image',
                        rect: ['44px', '177px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    }]
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'scene2LogoTruck',
                    rect: ['535px', '366px', '363', '246', 'auto', 'auto'],
                    c: [
                    {
                        id: 'sceneTruckLogoUnder',
                        type: 'image',
                        rect: ['18px', '-3px', '377px', '262px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/sceneTruckLogoUnder.png', '0px', '0px']
                    },
                    {
                        id: 'sceneTruckLogoChasis',
                        type: 'image',
                        rect: ['0px', '0px', '363px', '214px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/sceneTruckLogoChasis.png', '0px', '0px']
                    }]
                },
                {
                    type: 'image',
                    rect: ['573px', '505px', '89px', '90px', 'auto', 'auto'],
                    id: 'sceneTruckLogo3',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sceneTruckLogo3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['652px', '511px', '95px', '92px', 'auto', 'auto'],
                    id: 'sceneTruckLogoTire2',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sceneTruckLogoTire2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['820px', '527px', '92px', '85px', 'auto', 'auto'],
                    id: 'sceneTruckLogoTire1',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/sceneTruckLogoTire1.png', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'navver1',
                    rect: ['14', '31', '263', '566', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['0px', '0px', '263px', '458px', 'auto', 'auto'],
                        id: 'scene2TextBox1',
                        fill: ['rgba(0,0,0,0)', 'images/scene2TextBox1.png', '0px', '0px']
                    },
                    {
                        type: 'group',
                        display: 'none',
                        id: 'navScene2Part1',
                        rect: ['73px', '417px', '113', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navForwardComp',
                            type: 'rect',
                            rect: ['64px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navBackComp',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'navver2',
                    rect: ['-9', '-59', '263px', '644px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['25px', '90px', '263px', '503px', 'auto', 'auto'],
                        id: 'scene2TextBox2',
                        fill: ['rgba(0,0,0,0)', 'images/scene2TextBox2.png', '0px', '0px']
                    },
                    {
                        type: 'group',
                        display: 'none',
                        id: 'navScene2Part2',
                        rect: ['96px', '548px', '113', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navForwardComp2',
                            type: 'rect',
                            rect: ['64px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navBackComp2',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'navver3',
                    rect: ['-9', '-59', '288', '644', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['25px', '90px', '263px', '494px', 'auto', 'auto'],
                        id: 'scene2TextBox3',
                        fill: ['rgba(0,0,0,0)', 'images/scene2TextBox3.png', '0px', '0px']
                    },
                    {
                        type: 'group',
                        display: 'none',
                        id: 'navScene2Part3',
                        rect: ['96px', '541px', '113', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navForwardComp3',
                            type: 'rect',
                            rect: ['64px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navBackComp3',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'navver35',
                    rect: ['-9', '-59', '288', '644', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene2TextBox4',
                        type: 'image',
                        rect: ['24px', '90px', '263px', '548px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2TextBox4.png', '0px', '0px']
                    },
                    {
                        id: 'navScene2Part3Copy',
                        type: 'group',
                        rect: ['97px', '595px', '113', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navForwardComp3Copy',
                            type: 'rect',
                            rect: ['64px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navBackComp3Copy',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'navver4',
                    rect: ['16', '31', '263', '565', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene2TextBox5',
                        type: 'image',
                        rect: ['-1px', '0px', '263px', '419px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2TextBox5.png', '0px', '0px']
                    },
                    {
                        type: 'group',
                        display: 'none',
                        id: 'navScene2Part4',
                        rect: ['71px', '517px', '113', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navForwardComp4',
                            type: 'rect',
                            rect: ['64px', '-139px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navBackComp4',
                            type: 'rect',
                            rect: ['0px', '-139px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'navver5',
                    rect: ['16', '31', '263', '565', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene2TextBox6',
                        type: 'image',
                        rect: ['-1px', '0px', '263px', '209px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2TextBox6.png', '0px', '0px']
                    },
                    {
                        type: 'group',
                        display: 'none',
                        id: 'navScene2Part4Copy2',
                        rect: ['75px', '162px', '113', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navForwardComp4Copy2',
                            type: 'rect',
                            rect: ['64px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navBackComp4Copy2',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'navForwardComp2',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp4Copy2',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp2',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'cowOneComp',
                symbolName: 'cowOneComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp3',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp3Copy',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp4',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp4Copy2',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'scene2BottlesLoop2',
                symbolName: 'scene2BottlesLoop',
                autoPlay: {

               }
            },
            {
                id: 'cowTwoComp',
                symbolName: 'cowTwoComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp4',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp3Copy',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp3',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'cowThreeComp',
                symbolName: 'cowThreeComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene2TruckTurn}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none']
            ],
            "${_scene2Truck8}": [
                ["style", "top", '215px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '105px'],
                ["style", "display", 'none']
            ],
            "${_navBackComp}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_scene2Truck9Under}": [
                ["style", "top", '96px'],
                ["style", "left", '1px']
            ],
            "${_navForwardComp4}": [
                ["style", "top", '-139px'],
                ["style", "left", '64px']
            ],
            "${_scene2Factory1}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '729px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene2TextBox5}": [
                ["style", "top", '0px'],
                ["style", "left", '-1px'],
                ["style", "height", '419px']
            ],
            "${_scene2Truck1Under}": [
                ["style", "left", '0px'],
                ["style", "top", '73px']
            ],
            "${_scene2Factory3Up}": [
                ["style", "top", '176px'],
                ["style", "left", '371px'],
                ["style", "display", 'none']
            ],
            "${_scene2Truck4}": [
                ["style", "top", '31px'],
                ["transform", "scaleY", '0.8'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '2px'],
                ["transform", "scaleX", '0.8']
            ],
            "${_scene2Truck3}": [
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0.75'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '28px'],
                ["transform", "scaleX", '0.75']
            ],
            "${_scene1Text2010}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "height", '122px'],
                ["style", "display", 'none'],
                ["style", "left", '666px'],
                ["style", "width", '73px']
            ],
            "${_scene2TextBox1}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "height", '458px']
            ],
            "${_scene2SignPerformance}": [
                ["style", "top", '10px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '301px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_sceneTruckLogo3}": [
                ["style", "top", '507px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '546px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_navver2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "width", '263px']
            ],
            "${_scene2Truck1}": [
                ["style", "top", '-149px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '724px'],
                ["style", "display", 'block']
            ],
            "${_navBackComp4Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_navScene2Part3Copy}": [
                ["style", "top", '595px'],
                ["style", "left", '97px']
            ],
            "${_navBackComp4}": [
                ["style", "top", '-139px'],
                ["style", "left", '0px']
            ],
            "${_sceneTruckLogoChasis}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_factoryTruck}": [
                ["style", "top", '337px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '632px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene2FactTruckRim3}": [
                ["style", "left", '91px'],
                ["style", "top", '123px']
            ],
            "${_scene2Truck7}": [
                ["style", "top", '175px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '1'],
                ["style", "left", '31px'],
                ["style", "display", 'none']
            ],
            "${_sceneTruckLogoUnder}": [
                ["style", "left", '18px'],
                ["style", "top", '-3px']
            ],
            "${_scene2TextBox6}": [
                ["style", "left", '-1px'],
                ["style", "top", '0px']
            ],
            "${_navver4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_navForwardComp3Copy}": [
                ["style", "left", '64px'],
                ["style", "top", '0px']
            ],
            "${_scene2Truck9Rim2}": [
                ["style", "top", '183px'],
                ["style", "left", '92px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_cowThreeComp}": [
                ["style", "top", '88px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '35px'],
                ["style", "display", 'none']
            ],
            "${_navScene2Part1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '73px'],
                ["style", "top", '417px']
            ],
            "${_navver35}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_sceneTruckLogoTire2}": [
                ["style", "top", '511px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '591px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_scene2LogoTruck}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '534px'],
                ["style", "top", '366px']
            ],
            "${_scene2TextBox3}": [
                ["style", "top", '90px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '25px'],
                ["style", "height", '494px']
            ],
            "${_navForwardComp3}": [
                ["style", "left", '64px'],
                ["style", "top", '0px']
            ],
            "${_scene1Text2011}": [
                ["style", "top", '129px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "height", '156px'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '487px'],
                ["style", "width", '93px']
            ],
            "${_navForwardComp}": [
                ["style", "left", '64px'],
                ["style", "top", '0px']
            ],
            "${_scene2Truck9}": [
                ["style", "top", '357px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '1'],
                ["style", "left", '354px'],
                ["style", "display", 'none']
            ],
            "${_cowTwoComp}": [
                ["style", "top", '54px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '-1px'],
                ["style", "display", 'none']
            ],
            "${_navver1}": [
                ["style", "display", 'block']
            ],
            "${_scene2FactTruckRim}": [
                ["style", "left", '143px'],
                ["style", "top", '97px']
            ],
            "${_scene2Truck6}": [
                ["style", "top", '135px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '1'],
                ["style", "left", '-2px'],
                ["style", "display", 'none']
            ],
            "${_scene2Factory3}": [
                ["style", "top", '199px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '377px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_navScene2Part3}": [
                ["style", "top", '541px'],
                ["style", "left", '96px'],
                ["style", "display", 'none']
            ],
            "${_scene2TextBox4}": [
                ["style", "top", '90px'],
                ["style", "left", '24px'],
                ["style", "height", '548px']
            ],
            "${_scene2FactTruckRimCopy}": [
                ["style", "left", '132px'],
                ["style", "top", '103px']
            ],
            "${_scene2Truck5}": [
                ["style", "top", '85px'],
                ["transform", "scaleY", '0.85'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '1'],
                ["style", "left", '2px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1020px']
            ],
            "${_scene2Factory2}": [
                ["style", "top", '83px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '565px'],
                ["style", "display", 'none']
            ],
            "${_sceneTruckLogoTire1}": [
                ["style", "top", '529px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '780px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_scene2Truck2}": [
                ["style", "top", '-49px'],
                ["transform", "scaleY", '0.7'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '62px'],
                ["transform", "scaleX", '0.7']
            ],
            "${_scene2Text2007}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '469px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_navForwardComp4Copy2}": [
                ["style", "top", '0px'],
                ["style", "left", '64px']
            ],
            "${_navScene2Part4}": [
                ["style", "top", '517px'],
                ["style", "left", '71px'],
                ["style", "display", 'none']
            ],
            "${_cowOneComp}": [
                ["style", "top", '-1px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '29px'],
                ["style", "display", 'none']
            ],
            "${_scene2Truck9Rim1}": [
                ["style", "top", '196px'],
                ["style", "left", '279px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_scene2Truck9Rim3}": [
                ["style", "top", '177px'],
                ["style", "left", '44px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_scene2FactRoller}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_scene2TextBox2}": [
                ["style", "top", '90px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '25px'],
                ["style", "height", '503px']
            ],
            "${_scene2FactTruckUnder}": [
                ["style", "left", '64px'],
                ["style", "top", '69px']
            ],
            "${_navScene2Part4Copy2}": [
                ["style", "top", '162px'],
                ["style", "left", '75px'],
                ["style", "display", 'none']
            ],
            "${_scene2Truck9Chasis}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_navBackComp2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_navver3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_navForwardComp2}": [
                ["style", "left", '64px'],
                ["style", "top", '0px']
            ],
            "${_navver5}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_navBackComp3Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_scene2FactTruckChasis}": [
                ["style", "left", '52px'],
                ["style", "top", '36px']
            ],
            "${_scene2Truck1Chasis}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '9px']
            ],
            "${_scene2BottlesLoop2}": [
                ["style", "top", '28px'],
                ["style", "left", '128px'],
                ["style", "display", 'block']
            ],
            "${_navScene2Part2}": [
                ["style", "top", '548px'],
                ["style", "left", '96px'],
                ["style", "display", 'none']
            ],
            "${_navBackComp3}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 22000,
            autoPlay: true,
            labels: {
                "scene2Play1": 0,
                "s21": 2000,
                "scene2Play2": 5000,
                "s22": 7000,
                "scene3Play": 10000,
                "s23": 10994,
                "scene35Play": 12000,
                "s35": 13000,
                "scene4Play": 14750,
                "s24": 17500,
                "scene4Wait": 18471,
                "scene5Play": 20000
            },
            timeline: [
                { id: "eid1343", tween: [ "style", "${_scene2Truck6}", "display", 'block', { fromValue: 'none'}], position: 15512, duration: 0 },
                { id: "eid1350", tween: [ "style", "${_scene2Truck6}", "display", 'none', { fromValue: 'block'}], position: 15768, duration: 0 },
                { id: "eid1603", tween: [ "style", "${_navScene2Part1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInBack" },
                { id: "eid1607", tween: [ "style", "${_navScene2Part1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1238", tween: [ "style", "${_navScene2Part1}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1344", tween: [ "style", "${_scene2Truck7}", "display", 'block', { fromValue: 'none'}], position: 15640, duration: 0 },
                { id: "eid1351", tween: [ "style", "${_scene2Truck7}", "display", 'none', { fromValue: 'block'}], position: 15877, duration: 0 },
                { id: "eid1340", tween: [ "style", "${_scene2Truck2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid1347", tween: [ "style", "${_scene2Truck2}", "display", 'none', { fromValue: 'block'}], position: 15256, duration: 0 },
                { id: "eid1467", tween: [ "style", "${_scene2LogoTruck}", "left", '534px', { fromValue: '534px'}], position: 17000, duration: 0, easing: "easeOutBack" },
                { id: "eid11476", tween: [ "style", "${_scene2LogoTruck}", "left", '534px', { fromValue: '534px'}], position: 20500, duration: 0 },
                { id: "eid5074", tween: [ "style", "${_navScene2Part4Copy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid5075", tween: [ "style", "${_navScene2Part4Copy2}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutBounce" },
                { id: "eid1506", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 1000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid1507", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 2000, duration: 250, easing: "easeInOutBack" },
                { id: "eid1509", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 10000, duration: 90, easing: "easeInBack" },
                { id: "eid1516", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '-2deg', { fromValue: '2deg'}], position: 10090, duration: 974, easing: "easeOutBack" },
                { id: "eid1511", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 11064, duration: 186, easing: "easeInOutBack" },
                { id: "eid1513", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 11500, duration: 189, easing: "easeInOutBack" },
                { id: "eid1514", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '-2deg', { fromValue: '2deg'}], position: 12189, duration: 805, easing: "easeInOutBack" },
                { id: "eid1515", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '0deg', { fromValue: '-2deg'}], position: 12994, duration: 256, easing: "easeInOutBack" },
                { id: "eid1519", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 14750, duration: 89 },
                { id: "eid1520", tween: [ "transform", "${_scene2Truck1Chasis}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 14839, duration: 161 },
                { id: "eid1395", tween: [ "style", "${_sceneTruckLogoTire2}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid1570", tween: [ "style", "${_sceneTruckLogoTire2}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid1201", tween: [ "transform", "${_cowTwoComp}", "scaleX", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1280", tween: [ "style", "${_scene2Truck1}", "top", '-41px', { fromValue: '-149px'}], position: 1000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid1313", tween: [ "style", "${_scene2Truck1}", "top", '-4px', { fromValue: '-41px'}], position: 10007, duration: 1037, easing: "easeInOutBack" },
                { id: "eid1315", tween: [ "style", "${_scene2Truck1}", "top", '84px', { fromValue: '-4px'}], position: 12000, duration: 1010, easing: "easeInOutBack" },
                { id: "eid1527", tween: [ "style", "${_scene2Truck1}", "top", '96px', { fromValue: '84px'}], position: 14839, duration: 289 },
                { id: "eid1446", tween: [ "style", "${_scene2Truck9Chasis}", "left", '0px', { fromValue: '0px'}], position: 17000, duration: 0, easing: "easeOutBounce" },
                { id: "eid5080", tween: [ "style", "${_navver5}", "opacity", '1', { fromValue: '0'}], position: 18471, duration: 499 },
                { id: "eid11095", tween: [ "style", "${_navver4}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 378 },
                { id: "eid5082", tween: [ "style", "${_navver4}", "opacity", '1', { fromValue: '1'}], position: 15128, duration: 0 },
                { id: "eid1202", tween: [ "transform", "${_cowTwoComp}", "scaleY", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1339", tween: [ "style", "${_scene2Truck3}", "display", 'block', { fromValue: 'none'}], position: 15128, duration: 0 },
                { id: "eid1346", tween: [ "style", "${_scene2Truck3}", "display", 'none', { fromValue: 'block'}], position: 15384, duration: 0 },
                { id: "eid1345", tween: [ "style", "${_scene2Truck8}", "display", 'block', { fromValue: 'none'}], position: 15768, duration: 0 },
                { id: "eid1352", tween: [ "style", "${_scene2Truck8}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0 },
                { id: "eid1439", tween: [ "transform", "${_sceneTruckLogoTire1}", "scaleY", '1', { fromValue: '0.5'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1544", tween: [ "transform", "${_sceneTruckLogoTire1}", "scaleY", '0.5', { fromValue: '1'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1216", tween: [ "transform", "${_scene1Text2011}", "scaleX", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1455", tween: [ "style", "${_sceneTruckLogoChasis}", "left", '0px', { fromValue: '0px'}], position: 17000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1454", tween: [ "style", "${_sceneTruckLogoChasis}", "left", '0px', { fromValue: '0px'}], position: 17500, duration: 0, easing: "easeOutBounce" },
                { id: "eid11483", tween: [ "style", "${_sceneTruckLogoChasis}", "left", '0px', { fromValue: '0px'}], position: 20000, duration: 0 },
                { id: "eid1580", tween: [ "style", "${_scene2Truck9}", "opacity", '1', { fromValue: '1'}], position: 20500, duration: 0 },
                { id: "eid1613", tween: [ "style", "${_scene2TextBox3}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid1168", tween: [ "style", "${_scene1Text2010}", "display", 'block', { fromValue: 'none'}], position: 4913, duration: 0, easing: "easeOutBounce" },
                { id: "eid1205", tween: [ "transform", "${_cowOneComp}", "scaleX", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1261", tween: [ "transform", "${_scene2SignPerformance}", "scaleY", '1', { fromValue: '0.05'}], position: 1500, duration: 500, easing: "easeOutBounce" },
                { id: "eid1572", tween: [ "style", "${_scene2LogoTruck}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid1143", tween: [ "transform", "${_scene2Text2007}", "scaleY", '1', { fromValue: '0.05'}], position: 1007, duration: 500, easing: "easeOutBounce" },
                { id: "eid1182", tween: [ "style", "${_cowOneComp}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1210", tween: [ "style", "${_scene2TextBox2}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500 },
                { id: "eid1360", tween: [ "style", "${_scene2Truck2}", "opacity", '0', { fromValue: '1'}], position: 15128, duration: 128 },
                { id: "eid1371", tween: [ "style", "${_scene2Truck7}", "opacity", '0', { fromValue: '1'}], position: 15768, duration: 109 },
                { id: "eid1252", tween: [ "style", "${_navScene2Part2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid1253", tween: [ "style", "${_navScene2Part2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1251", tween: [ "style", "${_navScene2Part2}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1142", tween: [ "transform", "${_scene2Text2007}", "scaleX", '1', { fromValue: '0.05'}], position: 1007, duration: 500, easing: "easeOutBounce" },
                { id: "eid5096", tween: [ "style", "${_navver3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5100", tween: [ "style", "${_navver3}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid5086", tween: [ "style", "${_navver3}", "display", 'none', { fromValue: 'block'}], position: 13250, duration: 0 },
                { id: "eid1626", tween: [ "transform", "${_scene2Truck9Rim2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 15877, duration: 76 },
                { id: "eid1632", tween: [ "transform", "${_scene2Truck9Rim2}", "rotateZ", '250deg', { fromValue: '360deg'}], position: 21000, duration: 369 },
                { id: "eid1635", tween: [ "transform", "${_scene2Truck9Rim2}", "rotateZ", '700deg', { fromValue: '250deg'}], position: 21369, duration: 631 },
                { id: "eid1171", tween: [ "transform", "${_scene1Text2010}", "scaleX", '1', { fromValue: '0.05'}], position: 4913, duration: 500, easing: "easeOutBounce" },
                { id: "eid1180", tween: [ "style", "${_cowTwoComp}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1206", tween: [ "transform", "${_cowOneComp}", "scaleY", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1437", tween: [ "transform", "${_sceneTruckLogo3}", "scaleY", '1', { fromValue: '0.5'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1545", tween: [ "transform", "${_sceneTruckLogo3}", "scaleY", '0.5', { fromValue: '1'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1221", tween: [ "style", "${_factoryTruck}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0, easing: "easeOutBounce" },
                { id: "eid1385", tween: [ "style", "${_scene2Truck9}", "top", '366px', { fromValue: '357px'}], position: 15877, duration: 123, easing: "easeOutBack" },
                { id: "eid1595", tween: [ "style", "${_scene2Truck9}", "top", '366px', { fromValue: '366px'}], position: 20500, duration: 0, easing: "easeOutBack" },
                { id: "eid1597", tween: [ "style", "${_scene2Truck9}", "top", '416px', { fromValue: '366px'}], position: 21000, duration: 1000, easing: "easeInBack" },
                { id: "eid1137", tween: [ "style", "${_scene2Text2007}", "display", 'block', { fromValue: 'none'}], position: 1007, duration: 0 },
                { id: "eid1458", tween: [ "transform", "${_sceneTruckLogoChasis}", "scaleY", '1', { fromValue: '1'}], position: 17000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1452", tween: [ "transform", "${_sceneTruckLogoChasis}", "scaleY", '1', { fromValue: '1'}], position: 17500, duration: 0, easing: "easeOutBounce" },
                { id: "eid1473", tween: [ "style", "${_scene2Truck1}", "display", 'none', { fromValue: 'block'}], position: 15128, duration: 0 },
                { id: "eid1236", tween: [ "style", "${_scene2Factory3Up}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0, easing: "easeOutBounce" },
                { id: "eid1460", tween: [ "style", "${_sceneTruckLogoTire1}", "top", '519px', { fromValue: '529px'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1553", tween: [ "style", "${_sceneTruckLogoTire1}", "top", '528px', { fromValue: '519px'}], position: 20000, duration: 500 },
                { id: "eid1181", tween: [ "style", "${_cowThreeComp}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1257", tween: [ "style", "${_navScene2Part4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid1258", tween: [ "style", "${_navScene2Part4}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutBounce" },
                { id: "eid1443", tween: [ "style", "${_sceneTruckLogoTire2}", "left", '616px', { fromValue: '591px'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1555", tween: [ "style", "${_sceneTruckLogoTire2}", "left", '590px', { fromValue: '616px'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1150", tween: [ "transform", "${_scene2Factory1}", "scaleY", '1', { fromValue: '0.05'}], position: 5000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1612", tween: [ "style", "${_scene2TextBox3}", "opacity", '0.000000', { fromValue: '1'}], position: 1250, duration: 8750, easing: "easeOutBounce" },
                { id: "eid1220", tween: [ "style", "${_scene2TextBox3}", "opacity", '1', { fromValue: '0.000000'}], position: 10000, duration: 500 },
                { id: "eid1364", tween: [ "style", "${_scene2Truck4}", "opacity", '0', { fromValue: '1'}], position: 15384, duration: 128 },
                { id: "eid1226", tween: [ "transform", "${_factoryTruck}", "scaleX", '1', { fromValue: '0.05'}], position: 12500, duration: 500, easing: "easeOutBounce" },
                { id: "eid1523", tween: [ "style", "${_scene2Truck1}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 128 },
                { id: "eid1215", tween: [ "style", "${_scene1Text2011}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1151", tween: [ "style", "${_scene2SignPerformance}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutBounce" },
                { id: "eid8033", tween: [ "style", "${_navver35}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 500, easing: "easeInBounce" },
                { id: "eid8032", tween: [ "style", "${_navver35}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 378, easing: "easeInOutBounce" },
                { id: "eid1235", tween: [ "transform", "${_scene2Factory3}", "scaleY", '1', { fromValue: '0.05'}], position: 12000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1175", tween: [ "style", "${_scene2Factory2}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1322", tween: [ "transform", "${_scene2Truck1}", "scaleX", '0.51455', { fromValue: '0.5'}], position: 1000, duration: 1000 },
                { id: "eid1328", tween: [ "transform", "${_scene2Truck1}", "scaleX", '0.51', { fromValue: '0.51455'}], position: 2000, duration: 3007 },
                { id: "eid1330", tween: [ "transform", "${_scene2Truck1}", "scaleX", '0.66', { fromValue: '0.51'}], position: 10007, duration: 1037 },
                { id: "eid1324", tween: [ "transform", "${_scene2Truck1}", "scaleX", '0.8', { fromValue: '0.66'}], position: 12000, duration: 1010 },
                { id: "eid1172", tween: [ "transform", "${_scene1Text2010}", "scaleY", '1', { fromValue: '0.05'}], position: 4913, duration: 500, easing: "easeOutBounce" },
                { id: "eid1444", tween: [ "style", "${_sceneTruckLogo3}", "left", '542px', { fromValue: '546px'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1382", tween: [ "transform", "${_scene2Truck9}", "scaleX", '1', { fromValue: '0.8'}], position: 15877, duration: 123 },
                { id: "eid1588", tween: [ "transform", "${_scene2Truck9}", "scaleX", '1', { fromValue: '1'}], position: 20500, duration: 0, easing: "easeOutBack" },
                { id: "eid1581", tween: [ "transform", "${_scene2Truck9}", "scaleX", '1', { fromValue: '1'}], position: 21000, duration: 0 },
                { id: "eid1227", tween: [ "transform", "${_factoryTruck}", "scaleY", '1', { fromValue: '0.05'}], position: 12500, duration: 500, easing: "easeOutBounce" },
                { id: "eid1567", tween: [ "style", "${_sceneTruckLogoTire2}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 500 },
                { id: "eid1449", tween: [ "transform", "${_scene2Truck9Chasis}", "scaleY", '1', { fromValue: '1'}], position: 17000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1565", tween: [ "style", "${_sceneTruckLogo3}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 500 },
                { id: "eid1396", tween: [ "style", "${_sceneTruckLogo3}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid1571", tween: [ "style", "${_sceneTruckLogo3}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid1179", tween: [ "transform", "${_scene2Factory2}", "scaleY", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1459", tween: [ "style", "${_sceneTruckLogoChasis}", "top", '-28px', { fromValue: '0px'}], position: 17000, duration: 500, easing: "easeOutBounce" },
                { id: "eid11485", tween: [ "style", "${_sceneTruckLogoChasis}", "top", '1px', { fromValue: '-28px'}], position: 20000, duration: 500 },
                { id: "eid1217", tween: [ "transform", "${_scene1Text2011}", "scaleY", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1442", tween: [ "style", "${_sceneTruckLogoTire2}", "top", '502px', { fromValue: '511px'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1552", tween: [ "style", "${_sceneTruckLogoTire2}", "top", '511px', { fromValue: '502px'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1457", tween: [ "transform", "${_sceneTruckLogoChasis}", "scaleX", '1', { fromValue: '1'}], position: 17000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1451", tween: [ "transform", "${_sceneTruckLogoChasis}", "scaleX", '1', { fromValue: '1'}], position: 17500, duration: 0, easing: "easeOutBounce" },
                { id: "eid1445", tween: [ "style", "${_sceneTruckLogoTire1}", "left", '786px', { fromValue: '780px'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1556", tween: [ "style", "${_sceneTruckLogoTire1}", "left", '779px', { fromValue: '786px'}], position: 20000, duration: 500 },
                { id: "eid1436", tween: [ "transform", "${_sceneTruckLogo3}", "scaleX", '1', { fromValue: '0.5'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1542", tween: [ "transform", "${_sceneTruckLogo3}", "scaleX", '0.5', { fromValue: '1'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1373", tween: [ "style", "${_scene2Truck8}", "opacity", '0', { fromValue: '1'}], position: 15877, duration: 123 },
                { id: "eid1384", tween: [ "style", "${_scene2Truck9}", "left", '534px', { fromValue: '354px'}], position: 15877, duration: 123, easing: "easeOutBack" },
                { id: "eid1590", tween: [ "style", "${_scene2Truck9}", "left", '534px', { fromValue: '534px'}], position: 20500, duration: 0, easing: "easeOutBack" },
                { id: "eid1596", tween: [ "style", "${_scene2Truck9}", "left", '1027px', { fromValue: '534px'}], position: 21000, duration: 1000, easing: "easeInBack" },
                { id: "eid1610", tween: [ "style", "${_navScene2Part1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeOutBounce" },
                { id: "eid1154", tween: [ "transform", "${_scene2SignPerformance}", "scaleX", '1', { fromValue: '0.05'}], position: 1500, duration: 500, easing: "easeOutBounce" },
                { id: "eid1448", tween: [ "transform", "${_scene2Truck9Chasis}", "scaleX", '1', { fromValue: '1'}], position: 17000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1178", tween: [ "transform", "${_scene2Factory2}", "scaleX", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1204", tween: [ "transform", "${_cowThreeComp}", "scaleY", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1369", tween: [ "style", "${_scene2Truck6}", "opacity", '0', { fromValue: '1'}], position: 15640, duration: 128 },
                { id: "eid1167", tween: [ "style", "${_scene2TextBox1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1383", tween: [ "transform", "${_scene2Truck9}", "scaleY", '1', { fromValue: '0.8'}], position: 15877, duration: 123 },
                { id: "eid1589", tween: [ "transform", "${_scene2Truck9}", "scaleY", '1', { fromValue: '1'}], position: 20500, duration: 0, easing: "easeOutBack" },
                { id: "eid1582", tween: [ "transform", "${_scene2Truck9}", "scaleY", '1', { fromValue: '1'}], position: 21000, duration: 0 },
                { id: "eid1362", tween: [ "style", "${_scene2Truck3}", "opacity", '0', { fromValue: '1'}], position: 15256, duration: 128 },
                { id: "eid1149", tween: [ "transform", "${_scene2Factory1}", "scaleX", '1', { fromValue: '0.05'}], position: 5000, duration: 500, easing: "easeOutBounce" },
                { id: "eid5098", tween: [ "style", "${_navver5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5077", tween: [ "style", "${_navver5}", "display", 'block', { fromValue: 'none'}], position: 18471, duration: 0 },
                { id: "eid1341", tween: [ "style", "${_scene2Truck4}", "display", 'block', { fromValue: 'none'}], position: 15256, duration: 0 },
                { id: "eid1348", tween: [ "style", "${_scene2Truck4}", "display", 'none', { fromValue: 'block'}], position: 15512, duration: 0 },
                { id: "eid1388", tween: [ "style", "${_scene2Truck9}", "display", 'block', { fromValue: 'none'}], position: 15877, duration: 0 },
                { id: "eid1574", tween: [ "style", "${_scene2Truck9}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid1577", tween: [ "style", "${_scene2Truck9}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0 },
                { id: "eid1279", tween: [ "style", "${_scene2Truck1}", "left", '487px', { fromValue: '724px'}], position: 1000, duration: 1000, easing: "easeInOutBack" },
                { id: "eid1312", tween: [ "style", "${_scene2Truck1}", "left", '395px', { fromValue: '487px'}], position: 10007, duration: 1037, easing: "easeInOutBack" },
                { id: "eid1314", tween: [ "style", "${_scene2Truck1}", "left", '258px', { fromValue: '395px'}], position: 12000, duration: 1010, easing: "easeInOutBack" },
                { id: "eid1526", tween: [ "style", "${_scene2Truck1}", "left", '241px', { fromValue: '258px'}], position: 14839, duration: 289 },
                { id: "eid11084", tween: [ "style", "${_navver2}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 500 },
                { id: "eid1447", tween: [ "style", "${_scene2Truck9Chasis}", "top", '0px', { fromValue: '0px'}], position: 17000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1333", tween: [ "style", "${_scene2TruckTurn}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid1627", tween: [ "transform", "${_scene2Truck9Rim1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 15877, duration: 76 },
                { id: "eid1633", tween: [ "transform", "${_scene2Truck9Rim1}", "rotateZ", '250deg', { fromValue: '360deg'}], position: 21000, duration: 369 },
                { id: "eid1636", tween: [ "transform", "${_scene2Truck9Rim1}", "rotateZ", '700deg', { fromValue: '250deg'}], position: 21369, duration: 631 },
                { id: "eid1323", tween: [ "transform", "${_scene2Truck1}", "scaleY", '0.51455', { fromValue: '0.5'}], position: 1000, duration: 1000 },
                { id: "eid1329", tween: [ "transform", "${_scene2Truck1}", "scaleY", '0.51', { fromValue: '0.51455'}], position: 2000, duration: 3007 },
                { id: "eid1331", tween: [ "transform", "${_scene2Truck1}", "scaleY", '0.66', { fromValue: '0.51'}], position: 10007, duration: 1037 },
                { id: "eid1325", tween: [ "transform", "${_scene2Truck1}", "scaleY", '0.8', { fromValue: '0.66'}], position: 12000, duration: 1010 },
                { id: "eid1366", tween: [ "style", "${_scene2Truck5}", "opacity", '0', { fromValue: '1'}], position: 15512, duration: 128 },
                { id: "eid1234", tween: [ "transform", "${_scene2Factory3}", "scaleX", '1', { fromValue: '0.05'}], position: 12000, duration: 500, easing: "easeOutBounce" },
                { id: "eid8021", tween: [ "style", "${_navver35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8022", tween: [ "style", "${_navver35}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid8023", tween: [ "style", "${_navver35}", "display", 'none', { fromValue: 'block'}], position: 15128, duration: 0 },
                { id: "eid5084", tween: [ "style", "${_navver1}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid1229", tween: [ "style", "${_scene2Factory3}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1461", tween: [ "style", "${_sceneTruckLogo3}", "top", '497px', { fromValue: '507px'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1554", tween: [ "style", "${_sceneTruckLogo3}", "top", '506px', { fromValue: '497px'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1203", tween: [ "transform", "${_cowThreeComp}", "scaleX", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1566", tween: [ "style", "${_sceneTruckLogoTire1}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 500 },
                { id: "eid1161", tween: [ "style", "${_scene2TextBox1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1342", tween: [ "style", "${_scene2Truck5}", "display", 'block', { fromValue: 'none'}], position: 15384, duration: 0 },
                { id: "eid1349", tween: [ "style", "${_scene2Truck5}", "display", 'none', { fromValue: 'block'}], position: 15640, duration: 0 },
                { id: "eid5097", tween: [ "style", "${_navver4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5101", tween: [ "style", "${_navver4}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0 },
                { id: "eid5083", tween: [ "style", "${_navver4}", "display", 'none', { fromValue: 'block'}], position: 17625, duration: 0 },
                { id: "eid1440", tween: [ "transform", "${_sceneTruckLogoTire2}", "scaleX", '1', { fromValue: '0.5'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1540", tween: [ "transform", "${_sceneTruckLogoTire2}", "scaleX", '0.5', { fromValue: '1'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1615", tween: [ "style", "${_scene1Text2011}", "top", '129px', { fromValue: '129px'}], position: 14905, duration: 0 },
                { id: "eid1441", tween: [ "transform", "${_sceneTruckLogoTire2}", "scaleY", '1', { fromValue: '0.5'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1543", tween: [ "transform", "${_sceneTruckLogoTire2}", "scaleY", '0.5', { fromValue: '1'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1144", tween: [ "style", "${_scene2Factory1}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid1254", tween: [ "style", "${_navScene2Part3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid1255", tween: [ "style", "${_navScene2Part3}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1256", tween: [ "style", "${_navScene2Part3}", "display", 'none', { fromValue: 'block'}], position: 12994, duration: 0, easing: "easeOutBounce" },
                { id: "eid1207", tween: [ "style", "${_scene2TextBox2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0, easing: "easeOutBounce" },
                { id: "eid11477", tween: [ "style", "${_scene2LogoTruck}", "top", '366px', { fromValue: '366px'}], position: 20500, duration: 0 },
                { id: "eid5095", tween: [ "style", "${_navver2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5099", tween: [ "style", "${_navver2}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid5085", tween: [ "style", "${_navver2}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid11090", tween: [ "style", "${_navver3}", "opacity", '0', { fromValue: '1'}], position: 12994, duration: 256 },
                { id: "eid1628", tween: [ "transform", "${_scene2Truck9Rim3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 15877, duration: 76 },
                { id: "eid1634", tween: [ "transform", "${_scene2Truck9Rim3}", "rotateZ", '250deg', { fromValue: '360deg'}], position: 21000, duration: 369 },
                { id: "eid1637", tween: [ "transform", "${_scene2Truck9Rim3}", "rotateZ", '700deg', { fromValue: '250deg'}], position: 21369, duration: 631 },
                { id: "eid1616", tween: [ "style", "${_scene2BottlesLoop2}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid1438", tween: [ "transform", "${_sceneTruckLogoTire1}", "scaleX", '1', { fromValue: '0.5'}], position: 17000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid1541", tween: [ "transform", "${_sceneTruckLogoTire1}", "scaleX", '0.5', { fromValue: '1'}], position: 20000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1393", tween: [ "style", "${_scene2LogoTruck}", "opacity", '1', { fromValue: '0.000000'}], position: 16000, duration: 1000 },
                { id: "eid11480", tween: [ "style", "${_scene2LogoTruck}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 500 },
                { id: "eid1394", tween: [ "style", "${_sceneTruckLogoTire1}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
                { id: "eid1569", tween: [ "style", "${_sceneTruckLogoTire1}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
                { id: "eid1614", tween: [ "style", "${_scene1Text2011}", "left", '487px', { fromValue: '487px'}], position: 14905, duration: 0 }            ]
        }
    }
},
"navComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '34px', '380', '49', 'auto', 'auto'],
                    id: 'nav',
                    opacity: 1,
                    type: 'group',
                    c: [
                    {
                        id: 'nav1Comp',
                        type: 'rect',
                        rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'nav2Comp',
                        type: 'rect',
                        rect: ['66', '0', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'nav3Comp',
                        type: 'rect',
                        rect: ['132', '0', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'nav4Comp',
                        type: 'rect',
                        rect: ['199', '0', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'nav5Comp',
                        type: 'rect',
                        rect: ['265', '0', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'nav6Comp',
                        type: 'rect',
                        rect: ['331', '0', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        type: 'text',
                        rect: ['63px', '-34px', '268px', '27px', 'auto', 'auto'],
                        id: 'review',
                        text: 'Review sections:',
                        align: 'center',
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '700', 'none', '']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'nav2Comp',
                symbolName: 'nav2Comp',
                autoPlay: {

               }
            },
            {
                id: 'nav3Comp',
                symbolName: 'nav3Comp',
                autoPlay: {

               }
            },
            {
                id: 'nav1Comp',
                symbolName: 'nav1Comp',
                autoPlay: {

               }
            },
            {
                id: 'nav6Comp',
                symbolName: 'nav6Comp',
                autoPlay: {

               }
            },
            {
                id: 'nav5Comp',
                symbolName: 'nav5Comp',
                autoPlay: {

               }
            },
            {
                id: 'nav4Comp',
                symbolName: 'nav4Comp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_nav1Comp}": [
                ["transform", "scaleX", '0.05'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.05'],
                ["style", "left", '0px']
            ],
            "${_nav2Comp}": [
                ["transform", "scaleX", '0.05'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.05'],
                ["style", "left", '66px']
            ],
            "${_nav5Comp}": [
                ["transform", "scaleX", '0.05'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.05'],
                ["style", "left", '265px']
            ],
            "${_nav6Comp}": [
                ["transform", "scaleX", '0.05'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.05'],
                ["style", "left", '331px']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '380px']
            ],
            "${_nav3Comp}": [
                ["transform", "scaleX", '0.05'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.05'],
                ["style", "left", '132px']
            ],
            "${_review}": [
                ["style", "top", '-34px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "left", '63px'],
                ["style", "width", '268px']
            ],
            "${_nav}": [
                ["style", "top", '34px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_nav4Comp}": [
                ["transform", "scaleX", '0.05'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.05'],
                ["style", "left", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"cowOneComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-59px', '-51px', '125px', '107px', 'auto', 'auto'],
                    id: 'scene2Cow1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Cow1.png', '0px', '0px']
                },
                {
                    rect: ['-57px', '-53px', '125px', '111px', 'auto', 'auto'],
                    id: 'scene2Cow1Moo',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Cow1Moo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene2Cow1Moo}": [
                ["style", "top", '-53px'],
                ["style", "left", '-57px'],
                ["style", "display", 'none']
            ],
            "${_scene2Cow1}": [
                ["style", "top", '-51px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-59px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid1051", tween: [ "style", "${_scene2Cow1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1054", tween: [ "style", "${_scene2Cow1}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1052", tween: [ "style", "${_scene2Cow1Moo}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1053", tween: [ "style", "${_scene2Cow1Moo}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"cowTwoComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['-58px', '-36px', '122px', '75px', 'auto', 'auto'],
                    id: 'scene2Cow2',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Cow2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-129px', '-67px', '122px', '85px', 'auto', 'auto'],
                    id: 'scene2Cow2Moo2',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Cow2Moo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene2Cow2}": [
                ["style", "top", '-57px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-129px'],
                ["style", "display", 'block']
            ],
            "${_scene2Cow2Moo2}": [
                ["style", "top", '-67px'],
                ["style", "left", '-129px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '4px'],
                ["style", "width", '6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid1061", tween: [ "style", "${_scene2Cow2Moo2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1064", tween: [ "style", "${_scene2Cow2Moo2}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1062", tween: [ "style", "${_scene2Cow2}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1063", tween: [ "style", "${_scene2Cow2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"cowThreeComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['-61px', '-51px', '129px', '108px', 'auto', 'auto'],
                    id: 'scene2Cow3',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Cow3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-65px', '-51px', '129px', '108px', 'auto', 'auto'],
                    id: 'scene2Cow3Moo3',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Cow3Moo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene2Cow3}": [
                ["style", "top", '-51px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-61px'],
                ["style", "display", 'block']
            ],
            "${_scene2Cow3Moo3}": [
                ["style", "top", '-51px'],
                ["style", "left", '-65px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '5px'],
                ["style", "width", '6px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid1065", tween: [ "style", "${_scene2Cow3Moo3}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1067", tween: [ "style", "${_scene2Cow3Moo3}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1066", tween: [ "style", "${_scene2Cow3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1068", tween: [ "style", "${_scene2Cow3}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"scene2BottlesLoop": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-100px', '-54px', '46px', '44px', 'auto', 'auto'],
                    id: 'scene2Bottles4c',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Bottles2.png', '0px', '0px']
                },
                {
                    rect: ['-54px', '-52px', '46px', '44px', 'auto', 'auto'],
                    id: 'scene2Bottles3b',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Bottles2.png', '0px', '0px']
                },
                {
                    rect: ['-9px', '-32px', '45px', '51px', 'auto', 'auto'],
                    id: 'scene2Bottles2a',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Bottles3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '36px', '48px', 'auto', 'auto'],
                    id: 'scene2Bottles1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/scene2Bottles1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene2Bottles3b}": [
                ["style", "top", '-52px'],
                ["style", "opacity", '1'],
                ["style", "left", '-54px'],
                ["style", "display", 'none']
            ],
            "${_scene2Bottles2a}": [
                ["style", "top", '-32px'],
                ["style", "opacity", '1'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${_scene2Bottles4c}": [
                ["style", "top", '-54px'],
                ["style", "opacity", '1'],
                ["style", "left", '-100px'],
                ["style", "display", 'none']
            ],
            "${_scene2Bottles1}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '36px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid1106", tween: [ "style", "${_scene2Bottles2a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid1110", tween: [ "style", "${_scene2Bottles2a}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBounce" },
                { id: "eid1111", tween: [ "style", "${_scene2Bottles2a}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0, easing: "easeOutBounce" },
                { id: "eid1117", tween: [ "style", "${_scene2Bottles1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250, easing: "easeInBack" },
                { id: "eid1109", tween: [ "style", "${_scene2Bottles1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeOutBounce" },
                { id: "eid1132", tween: [ "style", "${_scene2Bottles4c}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250, easing: "easeInBack" },
                { id: "eid1130", tween: [ "style", "${_scene2Bottles3b}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250, easing: "easeInBack" },
                { id: "eid1108", tween: [ "style", "${_scene2Bottles4c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid1114", tween: [ "style", "${_scene2Bottles4c}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutBounce" },
                { id: "eid1107", tween: [ "style", "${_scene2Bottles3b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid1112", tween: [ "style", "${_scene2Bottles3b}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBounce" },
                { id: "eid1113", tween: [ "style", "${_scene2Bottles3b}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0, easing: "easeOutBounce" },
                { id: "eid1128", tween: [ "style", "${_scene2Bottles2a}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250, easing: "easeInBack" }            ]
        }
    }
},
"scene3Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene3Back',
                    type: 'image',
                    rect: ['0px', '0px', '1020px', '689px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3Back.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'scene3WaterCompleteScene33',
                    opacity: 1,
                    rect: ['235px', '480px', '259px', '154px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3WaterCompleteScene3.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    type: 'image',
                    id: 'scene3RoadRed',
                    display: 'none',
                    rect: ['118px', '330px', '413px', '413px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3RoadRed.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'scene3DebrisMain',
                    rect: ['365px', '642px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'scene3DebrisMain2',
                    rect: ['365px', '642px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'scene3DebrisMain3',
                    rect: ['365px', '642px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'scene3DebrisMain4',
                    rect: ['365px', '642px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'scene3CrackRoad20',
                    type: 'image',
                    rect: ['430px', '486px', '39px', '28px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad20.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad19',
                    type: 'image',
                    rect: ['409px', '484px', '45px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad19.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad18',
                    type: 'image',
                    rect: ['391px', '479px', '33px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad18.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad17',
                    type: 'image',
                    rect: ['307px', '469px', '34px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad17.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad10',
                    type: 'image',
                    rect: ['266px', '479px', '52px', '52px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad10.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad16',
                    type: 'image',
                    rect: ['372px', '486px', '50px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad16.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad15',
                    type: 'image',
                    rect: ['347px', '485px', '36px', '35px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad15.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad14',
                    type: 'image',
                    rect: ['373px', '491px', '34px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad14.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad13',
                    type: 'image',
                    rect: ['397px', '503px', '41px', '43px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad13.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad11',
                    type: 'image',
                    rect: ['307px', '486px', '43px', '49px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad11.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMain2',
                    rect: ['273px', '576px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMain2Copy',
                    rect: ['352px', '536px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMain2Copy2',
                    rect: ['390px', '504px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMain2Copy3',
                    rect: ['390px', '504px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMain2Copy4',
                    rect: ['390px', '504px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'scene3CrackRoad7',
                    type: 'image',
                    rect: ['278px', '506px', '60px', '47px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad7.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad9',
                    type: 'image',
                    rect: ['328px', '506px', '47px', '61px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad9.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMain',
                    rect: ['299px', '584px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMainCopy',
                    rect: ['299px', '584px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMainCopy3',
                    rect: ['299px', '584px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'splashMainCopy2',
                    rect: ['299px', '584px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'scene3CrackRoad12',
                    type: 'image',
                    rect: ['354px', '511px', '58px', '51px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad12.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad8',
                    type: 'image',
                    rect: ['325px', '541px', '62px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad8.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad6',
                    type: 'image',
                    rect: ['240px', '497px', '41px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad6.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad5',
                    type: 'image',
                    rect: ['259px', '528px', '39px', '24px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad5.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad4',
                    type: 'image',
                    rect: ['295px', '545px', '35px', '21px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad4.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad3',
                    type: 'image',
                    rect: ['310px', '477px', '31px', '29px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad3.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad1',
                    type: 'image',
                    rect: ['203px', '506px', '45px', '33px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad1.png', '0px', '0px']
                },
                {
                    id: 'scene3CrackRoad2',
                    type: 'image',
                    rect: ['231px', '526px', '31px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CrackRoad2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['107px', '418px', '378px', '203px', 'auto', 'auto'],
                    id: 'scene3RoadCrackMain',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene3RoadCrackMain.png', '0px', '0px']
                },
                {
                    id: 'scene3RoadTops',
                    type: 'image',
                    rect: ['188px', '512px', '154px', '80px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3RoadTops.png', '0px', '0px']
                },
                {
                    id: 'scene3CompleteConcretescene32',
                    type: 'image',
                    rect: ['214px', '462px', '265px', '119px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3CompleteConcretescene3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['385px', '318px', '91px', '153px', 'auto', 'auto'],
                    id: 'scene3BadRoadArrow',
                    fill: ['rgba(0,0,0,0)', 'images/scene3BadRoadArrow.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['360px', '409px', '94px', '83px', 'auto', 'auto'],
                    id: 'scene3Warning',
                    fill: ['rgba(0,0,0,0)', 'images/scene3Warning.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['87px', '416px', '90px', '128px', 'auto', 'auto'],
                    id: 'scene3SignRoadToNowhere',
                    fill: ['rgba(0,0,0,0)', 'images/scene3SignRoadToNowhere.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['534px', '120px', '56px', '94px', 'auto', 'auto'],
                    id: 'scene3SignYear',
                    fill: ['rgba(0,0,0,0)', 'images/scene3SignYear.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['678', '67px', '173px', '123px', 'auto', 'auto'],
                    id: 'scene3SignWayAhead',
                    fill: ['rgba(0,0,0,0)', 'images/scene3SignWayAhead.png', '0px', '0px']
                },
                {
                    id: 'scene3PoleBehindDetourSign3',
                    type: 'image',
                    rect: ['425', '0px', '24px', '178px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3PoleBehindDetourSign.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['574px', '218px', '197px', '101px', 'auto', 'auto'],
                    id: 'scene3Better',
                    fill: ['rgba(0,0,0,0)', 'images/scene3Better.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'scene3TruckBttn',
                    rect: ['709px', '240px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['840px', '124px', '188px', '164px', 'auto', 'auto'],
                    id: 'scene3Sign21stCent',
                    fill: ['rgba(0,0,0,0)', 'images/scene3Sign21stCent.png', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'scene3Truck',
                    rect: ['-416px', '15px', '363', '248', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene2Truck9Under',
                        type: 'image',
                        rect: ['-7px', '94px', '359px', '150px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Under.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim1',
                        type: 'image',
                        rect: ['36px', '174px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim2',
                        type: 'image',
                        rect: ['83px', '180px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim3',
                        type: 'image',
                        rect: ['272px', '192px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    },
                    {
                        id: 'sceneTruckLogoChasis',
                        type: 'image',
                        rect: ['6px', '0px', '363px', '214px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/sceneTruckLogoChasis.png', '0px', '0px']
                    }]
                },
                {
                    id: 'scene3TruckMorion',
                    type: 'group',
                    rect: ['111px', '70px', '363', '248', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene2Truck9UnderCopy',
                        type: 'image',
                        rect: ['-7px', '94px', '359px', '150px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Under.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim1Copy',
                        type: 'image',
                        rect: ['36px', '174px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim2Copy',
                        type: 'image',
                        rect: ['83px', '180px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    },
                    {
                        id: 'scene2Truck9Rim3Copy',
                        type: 'image',
                        rect: ['272px', '192px', '23px', '23px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene2Truck9Rim.png', '0px', '0px']
                    },
                    {
                        id: 'sceneTruckLogoChasisCopy',
                        type: 'image',
                        rect: ['6px', '0px', '363px', '214px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/sceneTruckLogoChasis.png', '0px', '0px']
                    }]
                },
                {
                    id: 'scene3BridgeUpscene3',
                    type: 'image',
                    rect: ['488px', '269px', '325px', '148px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3BridgeUpscene3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['212px', '236px', '102px', '180px', 'auto', 'auto'],
                    id: 'scene3SignDupli',
                    fill: ['rgba(0,0,0,0)', 'images/scene3SignDupli.png', '0px', '0px']
                },
                {
                    id: 'scene3DetourSign',
                    type: 'image',
                    rect: ['440px', '0px', '94px', '353px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3DetourSign.png', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'scene3Nav1',
                    rect: ['523', '359px', '484', '218', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'scene3TextBox3',
                        opacity: 1,
                        rect: ['0px', '0px', '484px', '237px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene3TextBox1.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp',
                        type: 'rect',
                        rect: ['251px', '193px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackComp',
                        type: 'rect',
                        rect: ['177px', '193px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'scene3Nav2',
                    rect: ['523px', '410px', '484', '218', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'scene3TextBox2',
                        opacity: 1,
                        rect: ['0px', '-16px', '484px', '202px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene3TextBox2.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardCompCopy',
                        type: 'rect',
                        rect: ['249px', '141px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackCompCopy',
                        type: 'rect',
                        rect: ['176px', '139px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'scene3Nav4',
                    rect: ['523px', '437px', '484', '218', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene3TextBox4',
                        type: 'image',
                        rect: ['51px', '-4px', '349px', '161px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene3TextBox4.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardCompCopy2',
                        type: 'rect',
                        rect: ['249px', '114px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackCompCopy2',
                        type: 'rect',
                        rect: ['176px', '112px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['322px', '272px', '59px', '185px', 'auto', 'auto'],
                    id: 'scene3StopSign',
                    fill: ['rgba(0,0,0,0)', 'images/scene3StopSign.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'splashMainCopy',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'scene3DebrisMain3',
                symbolName: 'scene3DebrisMain',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy2',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'scene3TruckBttn',
                symbolName: 'scene3TruckBttn',
                autoPlay: {

               }
            },
            {
                id: 'splashMain2Copy',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'splashMain2Copy3',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'splashMainCopy3',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'splashMain2',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'splashMainCopy2',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'splashMain2Copy4',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'splashMain',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'scene3DebrisMain',
                symbolName: 'scene3DebrisMain',
                autoPlay: {

               }
            },
            {
                id: 'scene3DebrisMain2',
                symbolName: 'scene3DebrisMain',
                autoPlay: {

               }
            },
            {
                id: 'navForwardCompCopy',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardCompCopy2',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'splashMain2Copy2',
                symbolName: 'splashMain',
                autoPlay: {

               }
            },
            {
                id: 'scene3DebrisMain4',
                symbolName: 'scene3DebrisMain',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_navBackCompCopy}": [
                ["style", "left", '176px'],
                ["style", "top", '139px']
            ],
            "${_scene3CrackRoad14}": [
                ["style", "top", '491px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '373px']
            ],
            "${_scene3Warning}": [
                ["style", "top", '409px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '360px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene3CrackRoad19}": [
                ["style", "top", '484px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '409px']
            ],
            "${_scene3CrackRoad9}": [
                ["style", "top", '506px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '49px'],
                ["style", "opacity", '1'],
                ["style", "left", '328px'],
                ["transform", "scaleX", '1']
            ],
            "${_scene3CrackRoad20}": [
                ["style", "top", '486px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '430px']
            ],
            "${_navBackComp}": [
                ["style", "top", '193px'],
                ["style", "left", '177px']
            ],
            "${_scene3RoadCrackMain}": [
                ["style", "top", '418px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '107px'],
                ["style", "display", 'none']
            ],
            "${_scene2Truck9Under}": [
                ["style", "top", '94px'],
                ["style", "left", '-7px']
            ],
            "${_scene3CrackRoad4}": [
                ["style", "top", '545px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '295px']
            ],
            "${_scene3TextBox4}": [
                ["style", "height", '161px'],
                ["style", "top", '-4px'],
                ["style", "left", '51px'],
                ["style", "width", '349px']
            ],
            "${_scene3Nav4}": [
                ["style", "top", '437px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_scene2Truck9UnderCopy}": [
                ["style", "top", '94px'],
                ["style", "left", '-7px']
            ],
            "${_splashMain2Copy4}": [
                ["style", "top", '532px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '357px'],
                ["style", "display", 'none']
            ],
            "${_scene3CrackRoad5}": [
                ["style", "top", '528px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '259px']
            ],
            "${_scene3RoadRed}": [
                ["style", "top", '330px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '118px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_scene3DebrisMain}": [
                ["style", "top", '512px'],
                ["style", "left", '375px'],
                ["style", "display", 'none']
            ],
            "${_scene3PoleBehindDetourSign3}": [
                ["style", "top", '0px']
            ],
            "${_navForwardCompCopy}": [
                ["style", "top", '141px'],
                ["style", "left", '249px']
            ],
            "${_scene3DebrisMain2}": [
                ["style", "top", '512px'],
                ["style", "left", '407px'],
                ["style", "display", 'none']
            ],
            "${_navBackCompCopy2}": [
                ["style", "left", '176px'],
                ["style", "top", '112px']
            ],
            "${_scene3BridgeUpscene3}": [
                ["style", "top", '269px'],
                ["style", "left", '488px']
            ],
            "${_sceneTruckLogoChasis}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '4deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '6px'],
                ["style", "width", '341px']
            ],
            "${_splashMainCopy3}": [
                ["style", "top", '578px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '284px'],
                ["style", "display", 'none']
            ],
            "${_scene3SignDupli}": [
                ["style", "top", '228px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '163px'],
                ["style", "display", 'none']
            ],
            "${_scene3Nav2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "top", '410px']
            ],
            "${_scene3CrackRoad16}": [
                ["style", "top", '486px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '372px']
            ],
            "${_scene3CrackRoad1}": [
                ["style", "top", '506px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '203px']
            ],
            "${_scene3TextBox3}": [
                ["style", "height", '237px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_scene3CrackRoad18}": [
                ["style", "top", '479px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '391px']
            ],
            "${_scene2Truck9Rim2}": [
                ["style", "top", '180px'],
                ["style", "left", '83px']
            ],
            "${_splashMain2Copy}": [
                ["style", "top", '536px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '352px'],
                ["style", "display", 'none']
            ],
            "${_scene3DetourSign}": [
                ["style", "top", '0px'],
                ["style", "left", '440px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_scene3CrackRoad15}": [
                ["style", "top", '485px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '347px']
            ],
            "${_scene3SignYear}": [
                ["style", "top", '120px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '534px'],
                ["style", "display", 'none']
            ],
            "${_scene2Truck9Rim1}": [
                ["style", "top", '174px'],
                ["style", "left", '36px']
            ],
            "${_scene3StopSign}": [
                ["style", "top", '288px'],
                ["style", "-webkit-transform-origin", [50,86], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,86],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "height", '165px'],
                ["style", "display", 'none'],
                ["style", "left", '320px'],
                ["style", "width", '64px']
            ],
            "${_splashMain2Copy3}": [
                ["style", "top", '528px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '296px'],
                ["style", "display", 'none']
            ],
            "${_scene3CrackRoad8}": [
                ["style", "top", '541px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '325px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_scene2Truck9Rim1Copy}": [
                ["style", "top", '174px'],
                ["style", "left", '36px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_scene3TruckMorion}": [
                ["motion", "location", '-253.1640625px 61.9609375px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_scene3SignRoadToNowhere}": [
                ["style", "top", '416px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '87px'],
                ["style", "display", 'none']
            ],
            "${_scene3BadRoadArrow}": [
                ["style", "top", '318px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '1'],
                ["style", "left", '385px'],
                ["style", "display", 'none']
            ],
            "${_scene3CrackRoad10}": [
                ["style", "top", '479px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '266px']
            ],
            "${_scene3CrackRoad7}": [
                ["style", "top", '506px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '278px']
            ],
            "${_scene3Sign21stCent}": [
                ["style", "top", '124px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '840px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_splashMainCopy2}": [
                ["style", "top", '515px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '280px'],
                ["style", "display", 'none']
            ],
            "${_scene3TruckBttn}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '709px'],
                ["style", "top", '240px']
            ],
            "${_scene3Back}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_scene3CrackRoad13}": [
                ["style", "top", '503px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '397px'],
                ["transform", "skewX", '0deg']
            ],
            "${_scene3Nav1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_scene2Truck9Rim2Copy}": [
                ["style", "top", '180px'],
                ["style", "left", '83px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_scene3WaterCompleteScene33}": [
                ["style", "top", '480px'],
                ["style", "opacity", '1'],
                ["style", "left", '235px']
            ],
            "${_scene2Truck9Rim3}": [
                ["style", "top", '192px'],
                ["style", "left", '272px']
            ],
            "${_scene2Truck9Rim3Copy}": [
                ["style", "top", '192px'],
                ["style", "left", '272px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_sceneTruckLogoChasisCopy}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '4deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '6px'],
                ["style", "width", '341px']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1020px']
            ],
            "${_scene3RoadTops}": [
                ["style", "left", '188px'],
                ["style", "top", '512px']
            ],
            "${_navForwardComp}": [
                ["style", "left", '251px'],
                ["style", "top", '193px']
            ],
            "${_scene3CrackRoad11}": [
                ["style", "top", '486px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '307px']
            ],
            "${_scene3DebrisMain3}": [
                ["style", "top", '491px'],
                ["style", "left", '406px'],
                ["style", "display", 'none']
            ],
            "${_scene3CrackRoad3}": [
                ["style", "top", '477px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '310px']
            ],
            "${_splashMain2Copy2}": [
                ["style", "top", '504px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '390px'],
                ["style", "display", 'none']
            ],
            "${_scene3DebrisMain4}": [
                ["style", "top", '512px'],
                ["style", "left", '338px'],
                ["style", "display", 'none']
            ],
            "${_splashMain2}": [
                ["style", "top", '576px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '273px'],
                ["style", "display", 'none']
            ],
            "${_scene3CrackRoad17}": [
                ["style", "top", '469px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '1'],
                ["style", "left", '307px']
            ],
            "${_scene3CrackRoad12}": [
                ["style", "top", '511px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '354px']
            ],
            "${_scene3TextBox2}": [
                ["style", "top", '-16px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "height", '202px']
            ],
            "${_scene3CrackRoad6}": [
                ["style", "top", '497px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '240px']
            ],
            "${_splashMainCopy}": [
                ["style", "top", '511px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '286px'],
                ["style", "display", 'none']
            ],
            "${_navForwardCompCopy2}": [
                ["style", "top", '114px'],
                ["style", "left", '249px']
            ],
            "${_scene3Truck}": [
                ["style", "top", '15px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-416px'],
                ["style", "display", 'none']
            ],
            "${_scene3SignWayAhead}": [
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.05'],
                ["transform", "scaleY", '0.05'],
                ["style", "top", '67px']
            ],
            "${_scene3CompleteConcretescene32}": [
                ["style", "top", '462px'],
                ["style", "opacity", '1'],
                ["style", "left", '214px']
            ],
            "${_scene3CrackRoad2}": [
                ["style", "top", '526px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '231px']
            ],
            "${_splashMain}": [
                ["style", "top", '551px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '333px'],
                ["style", "display", 'none']
            ],
            "${_scene3Better}": [
                ["style", "top", '218px'],
                ["style", "opacity", '0'],
                ["style", "left", '574px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 21048,
            autoPlay: true,
            labels: {
                "roadCollapse": 6000,
                "collapse fade": 6500,
                "scene3Part2": 15000,
                "scene3Part3": 18000,
                "scene3Part4": 20000
            },
            timeline: [
                { id: "eid1745", tween: [ "transform", "${_scene3Warning}", "scaleX", '1', { fromValue: '0.05'}], position: 2745, duration: 500, easing: "easeOutBounce" },
                { id: "eid2468", tween: [ "style", "${_scene3CrackRoad13}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2484", tween: [ "style", "${_scene3CrackRoad20}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2485", tween: [ "style", "${_scene3CrackRoad20}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid11691", tween: [ "style", "${_scene3StopSign}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBounce" },
                { id: "eid2808", tween: [ "transform", "${_scene3RoadRed}", "scaleY", '1.5', { fromValue: '0.5'}], position: 3908, duration: 1117, easing: "easeInOutBounce" },
                { id: "eid2810", tween: [ "transform", "${_scene3RoadRed}", "scaleY", '0.5', { fromValue: '1.5'}], position: 5025, duration: 883, easing: "easeInOutBounce" },
                { id: "eid2631", tween: [ "transform", "${_splashMain2Copy2}", "scaleX", '0.5', { fromValue: '0.05'}], position: 4408, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2632", tween: [ "transform", "${_splashMain2Copy2}", "scaleX", '0.05', { fromValue: '0.5'}], position: 4757, duration: 157, easing: "easeInOutBounce" },
                { id: "eid1824", tween: [ "style", "${_scene3CrackRoad4}", "left", '295px', { fromValue: '295px'}], position: 3908, duration: 0 },
                { id: "eid2308", tween: [ "transform", "${_scene3CrackRoad4}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid1855", tween: [ "style", "${_scene3CrackRoad16}", "top", '486px', { fromValue: '486px'}], position: 3908, duration: 0 },
                { id: "eid1845", tween: [ "style", "${_scene3CrackRoad5}", "top", '528px', { fromValue: '528px'}], position: 3908, duration: 0 },
                { id: "eid2558", tween: [ "style", "${_scene3WaterCompleteScene33}", "opacity", '0', { fromValue: '1'}], position: 3908, duration: 500, easing: "easeInExpo" },
                { id: "eid1728", tween: [ "transform", "${_scene3SignDupli}", "scaleX", '1', { fromValue: '0.05'}], position: 2000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1723", tween: [ "transform", "${_scene3Truck}", "scaleX", '0.96', { fromValue: '1'}], position: 1175, duration: 115, easing: "easeOutBack" },
                { id: "eid1724", tween: [ "transform", "${_scene3Truck}", "scaleX", '1', { fromValue: '0.96'}], position: 1290, duration: 0, easing: "easeOutBack" },
                { id: "eid2992", tween: [ "transform", "${_scene3Truck}", "scaleX", '0.96', { fromValue: '0.96'}], position: 18000, duration: 0 },
                { id: "eid3104", tween: [ "transform", "${_scene3Truck}", "scaleX", '0.96', { fromValue: '0.96'}], position: 20000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2504", tween: [ "style", "${_scene3CrackRoad2}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2505", tween: [ "style", "${_scene3CrackRoad2}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2178", tween: [ "transform", "${_scene3CrackRoad18}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid3071", tween: [ "transform", "${_splashMainCopy}", "scaleY", '0.5', { fromValue: '0.05'}], position: 5494, duration: 349, easing: "easeInOutBounce" },
                { id: "eid3072", tween: [ "transform", "${_splashMainCopy}", "scaleY", '0.05', { fromValue: '0.5'}], position: 5843, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2595", tween: [ "style", "${_scene3DebrisMain3}", "left", '406px', { fromValue: '406px'}], position: 4095, duration: 0, easing: "easeInExpo" },
                { id: "eid3076", tween: [ "transform", "${_splashMainCopy}", "scaleX", '0.5', { fromValue: '0.05'}], position: 5494, duration: 349, easing: "easeInOutBounce" },
                { id: "eid3077", tween: [ "transform", "${_splashMainCopy}", "scaleX", '0.05', { fromValue: '0.5'}], position: 5843, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2474", tween: [ "style", "${_scene3CrackRoad8}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2475", tween: [ "style", "${_scene3CrackRoad8}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2506", tween: [ "style", "${_scene3CrackRoad1}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2507", tween: [ "style", "${_scene3CrackRoad1}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2796", tween: [ "style", "${_splashMainCopy2}", "top", '515px', { fromValue: '515px'}], position: 5043, duration: 0, easing: "easeInOutBounce" },
                { id: "eid3080", tween: [ "style", "${_splashMainCopy3}", "top", '551px', { fromValue: '578px'}], position: 5780, duration: 63, easing: "easeInOutBounce" },
                { id: "eid2686", tween: [ "style", "${_splashMain2Copy3}", "display", 'block', { fromValue: 'none'}], position: 4408, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2687", tween: [ "style", "${_splashMain2Copy3}", "display", 'none', { fromValue: 'block'}], position: 4914, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2325", tween: [ "transform", "${_scene3CrackRoad2}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2299", tween: [ "transform", "${_scene3CrackRoad8}", "scaleX", '0.99441', { fromValue: '1'}], position: 3908, duration: 1368, easing: "easeInExpo" },
                { id: "eid2665", tween: [ "transform", "${_scene3CrackRoad8}", "scaleX", '0.39', { fromValue: '0.99441'}], position: 5276, duration: 251, easing: "easeInExpo" },
                { id: "eid2671", tween: [ "transform", "${_scene3CrackRoad8}", "scaleX", '0.95', { fromValue: '0.39'}], position: 5527, duration: 381, easing: "easeInExpo" },
                { id: "eid1719", tween: [ "transform", "${_scene3Truck}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1175, duration: 0, easing: "easeOutBack" },
                { id: "eid1703", tween: [ "transform", "${_scene3Truck}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1290, duration: 0 },
                { id: "eid3000", tween: [ "transform", "${_scene3Truck}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 18000, duration: 512, easing: "easeInOutBack" },
                { id: "eid3109", tween: [ "transform", "${_scene3Truck}", "rotateZ", '-12deg', { fromValue: '-10deg'}], position: 20000, duration: 66 },
                { id: "eid3114", tween: [ "transform", "${_scene3Truck}", "rotateZ", '14deg', { fromValue: '-12deg'}], position: 20066, duration: 184 },
                { id: "eid3110", tween: [ "transform", "${_scene3Truck}", "rotateZ", '17deg', { fromValue: '14deg'}], position: 20250, duration: 750 },
                { id: "eid2480", tween: [ "style", "${_scene3CrackRoad9}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2481", tween: [ "style", "${_scene3CrackRoad9}", "opacity", '1', { fromValue: '1'}], position: 5408, duration: 0, easing: "easeInExpo" },
                { id: "eid2841", tween: [ "style", "${_scene3BadRoadArrow}", "display", 'block', { fromValue: 'none'}], position: 3262, duration: 0, easing: "easeOutBounce" },
                { id: "eid2785", tween: [ "style", "${_splashMain}", "left", '333px', { fromValue: '333px'}], position: 5843, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2301", tween: [ "transform", "${_scene3CrackRoad7}", "scaleX", '0.99541', { fromValue: '1'}], position: 3908, duration: 1368, easing: "easeInExpo" },
                { id: "eid3056", tween: [ "transform", "${_scene3CrackRoad7}", "scaleX", '0.98809', { fromValue: '0.99541'}], position: 5276, duration: 218, easing: "easeInExpo" },
                { id: "eid2635", tween: [ "transform", "${_scene3CrackRoad7}", "scaleX", '0.96777', { fromValue: '0.98809'}], position: 5494, duration: 211, easing: "easeInExpo" },
                { id: "eid2662", tween: [ "transform", "${_scene3CrackRoad7}", "scaleX", '0.38', { fromValue: '0.96777'}], position: 5705, duration: 203, easing: "easeInExpo" },
                { id: "eid2307", tween: [ "transform", "${_scene3CrackRoad4}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2594", tween: [ "style", "${_scene3DebrisMain3}", "top", '635px', { fromValue: '491px'}], position: 4095, duration: 718, easing: "easeInExpo" },
                { id: "eid2317", tween: [ "transform", "${_scene3CrackRoad3}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2316", tween: [ "transform", "${_scene3CrackRoad18}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2496", tween: [ "style", "${_scene3CrackRoad17}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2497", tween: [ "style", "${_scene3CrackRoad17}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid1725", tween: [ "style", "${_scene3SignDupli}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBack" },
                { id: "eid1836", tween: [ "style", "${_scene3CrackRoad10}", "left", '266px', { fromValue: '266px'}], position: 3908, duration: 0 },
                { id: "eid2647", tween: [ "style", "${_scene3CrackRoad10}", "left", '289px', { fromValue: '266px'}], position: 5025, duration: 383, easing: "easeInExpo" },
                { id: "eid1846", tween: [ "style", "${_scene3CrackRoad6}", "top", '497px', { fromValue: '497px'}], position: 3908, duration: 0 },
                { id: "eid2658", tween: [ "style", "${_scene3CrackRoad6}", "top", '567px', { fromValue: '497px'}], position: 5276, duration: 462, easing: "easeInExpo" },
                { id: "eid5506", tween: [ "transform", "${_scene3TruckMorion}", "scaleY", '1', { fromValue: '1'}], position: 1175, duration: 0, easing: "easeOutBack" },
                { id: "eid5507", tween: [ "transform", "${_scene3TruckMorion}", "scaleY", '1', { fromValue: '1'}], position: 1290, duration: 0 },
                { id: "eid5508", tween: [ "transform", "${_scene3TruckMorion}", "scaleY", '1', { fromValue: '1'}], position: 18000, duration: 0 },
                { id: "eid5509", tween: [ "transform", "${_scene3TruckMorion}", "scaleY", '1', { fromValue: '1'}], position: 20000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2848", tween: [ "style", "${_scene3Nav2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid2322", tween: [ "transform", "${_scene3CrackRoad16}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2294", tween: [ "transform", "${_scene3CrackRoad13}", "scaleY", '0.99223', { fromValue: '1'}], position: 3908, duration: 1463, easing: "easeInExpo" },
                { id: "eid3047", tween: [ "transform", "${_scene3CrackRoad13}", "scaleY", '0.52001', { fromValue: '0.99223'}], position: 5371, duration: 123, easing: "easeInExpo" },
                { id: "eid2849", tween: [ "style", "${_scene3Nav2}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 488 },
                { id: "eid2989", tween: [ "style", "${_scene3Nav2}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 500 },
                { id: "eid2689", tween: [ "style", "${_splashMain2Copy3}", "top", '528px', { fromValue: '528px'}], position: 4757, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2302", tween: [ "transform", "${_scene3CrackRoad7}", "scaleY", '0.99541', { fromValue: '1'}], position: 3908, duration: 1368, easing: "easeInExpo" },
                { id: "eid3057", tween: [ "transform", "${_scene3CrackRoad7}", "scaleY", '0.98809', { fromValue: '0.99541'}], position: 5276, duration: 218, easing: "easeInExpo" },
                { id: "eid2636", tween: [ "transform", "${_scene3CrackRoad7}", "scaleY", '0.96777', { fromValue: '0.98809'}], position: 5494, duration: 211, easing: "easeInExpo" },
                { id: "eid2663", tween: [ "transform", "${_scene3CrackRoad7}", "scaleY", '0.38', { fromValue: '0.96777'}], position: 5705, duration: 203, easing: "easeInExpo" },
                { id: "eid1856", tween: [ "style", "${_scene3CrackRoad10}", "top", '479px', { fromValue: '479px'}], position: 3908, duration: 0 },
                { id: "eid2648", tween: [ "style", "${_scene3CrackRoad10}", "top", '636px', { fromValue: '479px'}], position: 5025, duration: 383, easing: "easeInExpo" },
                { id: "eid1830", tween: [ "style", "${_scene3CrackRoad7}", "left", '278px', { fromValue: '278px'}], position: 3908, duration: 0 },
                { id: "eid3059", tween: [ "style", "${_scene3CrackRoad7}", "left", '278px', { fromValue: '278px'}], position: 5276, duration: 0, easing: "easeInExpo" },
                { id: "eid2640", tween: [ "style", "${_scene3CrackRoad7}", "left", '278px', { fromValue: '278px'}], position: 5494, duration: 211, easing: "easeInExpo" },
                { id: "eid2660", tween: [ "style", "${_scene3CrackRoad7}", "left", '281px', { fromValue: '278px'}], position: 5705, duration: 203, easing: "easeInExpo" },
                { id: "eid2625", tween: [ "transform", "${_splashMain2Copy}", "scaleX", '0.5', { fromValue: '0.05'}], position: 4694, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2626", tween: [ "transform", "${_splashMain2Copy}", "scaleX", '0.05', { fromValue: '0.5'}], position: 5043, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2699", tween: [ "style", "${_splashMain2Copy4}", "top", '532px', { fromValue: '532px'}], position: 4757, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2570", tween: [ "style", "${_scene3DebrisMain}", "display", 'block', { fromValue: 'none'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2611", tween: [ "style", "${_scene3CrackRoad11}", "top", '629px', { fromValue: '486px'}], position: 3908, duration: 1830, easing: "easeInExpo" },
                { id: "eid2319", tween: [ "transform", "${_scene3CrackRoad6}", "scaleX", '0.9944', { fromValue: '1'}], position: 3908, duration: 1368, easing: "easeInExpo" },
                { id: "eid2652", tween: [ "transform", "${_scene3CrackRoad6}", "scaleX", '0.95', { fromValue: '0.9944'}], position: 5276, duration: 632, easing: "easeInExpo" },
                { id: "eid2176", tween: [ "transform", "${_scene3CrackRoad10}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2651", tween: [ "transform", "${_scene3CrackRoad10}", "rotateZ", '294deg', { fromValue: '0deg'}], position: 5025, duration: 383, easing: "easeInExpo" },
                { id: "eid1842", tween: [ "style", "${_scene3CrackRoad1}", "top", '506px', { fromValue: '506px'}], position: 3908, duration: 0 },
                { id: "eid1843", tween: [ "style", "${_scene3CrackRoad3}", "top", '477px', { fromValue: '477px'}], position: 3908, duration: 0 },
                { id: "eid2242", tween: [ "style", "${_splashMain}", "display", 'block', { fromValue: 'none'}], position: 5494, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2243", tween: [ "style", "${_splashMain}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1841", tween: [ "style", "${_scene3CrackRoad2}", "top", '526px', { fromValue: '526px'}], position: 3908, duration: 0 },
                { id: "eid1854", tween: [ "style", "${_scene3CrackRoad15}", "top", '485px', { fromValue: '485px'}], position: 3908, duration: 0 },
                { id: "eid2180", tween: [ "transform", "${_scene3CrackRoad20}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2326", tween: [ "transform", "${_scene3CrackRoad2}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2899", tween: [ "style", "${_scene3Better}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeOutBounce" },
                { id: "eid3078", tween: [ "style", "${_splashMainCopy}", "left", '333px', { fromValue: '286px'}], position: 5780, duration: 63, easing: "easeInOutBounce" },
                { id: "eid2161", tween: [ "transform", "${_scene3CrackRoad2}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid1859", tween: [ "style", "${_scene3CrackRoad19}", "top", '484px', { fromValue: '484px'}], position: 3908, duration: 0 },
                { id: "eid2502", tween: [ "style", "${_scene3CrackRoad15}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2503", tween: [ "style", "${_scene3CrackRoad15}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2667", tween: [ "style", "${_scene3CrackRoad8}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5276, duration: 0, easing: "easeInExpo" },
                { id: "eid11724", tween: [ "style", "${_scene3CrackRoad8}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5276, duration: 0, easing: "easeInExpo" },
                { id: "eid11725", tween: [ "style", "${_scene3CrackRoad8}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5276, duration: 0, easing: "easeInExpo" },
                { id: "eid11726", tween: [ "style", "${_scene3CrackRoad8}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5276, duration: 0, easing: "easeInExpo" },
                { id: "eid11727", tween: [ "style", "${_scene3CrackRoad8}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 5276, duration: 0, easing: "easeInExpo" },
                { id: "eid2582", tween: [ "style", "${_scene3DebrisMain2}", "top", '506px', { fromValue: '512px'}], position: 3908, duration: 431, easing: "easeInExpo" },
                { id: "eid3033", tween: [ "style", "${_scene3DebrisMain2}", "top", '635px', { fromValue: '506px'}], position: 4339, duration: 287, easing: "easeInOutBack" },
                { id: "eid2604", tween: [ "style", "${_scene3DebrisMain4}", "left", '365px', { fromValue: '338px'}], position: 5581, duration: 0, easing: "easeInExpo" },
                { id: "eid2179", tween: [ "transform", "${_scene3CrackRoad19}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2709", tween: [ "style", "${_scene3RoadRed}", "display", 'block', { fromValue: 'none'}], position: 3908, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2728", tween: [ "style", "${_scene3RoadRed}", "display", 'none', { fromValue: 'block'}], position: 5908, duration: 0, easing: "easeInOutBounce" },
                { id: "eid5510", tween: [ "transform", "${_scene3TruckMorion}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1175, duration: 0, easing: "easeOutBack" },
                { id: "eid5511", tween: [ "transform", "${_scene3TruckMorion}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1290, duration: 0 },
                { id: "eid5512", tween: [ "transform", "${_scene3TruckMorion}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 18000, duration: 512 },
                { id: "eid5545", tween: [ "transform", "${_scene3TruckMorion}", "rotateZ", '-10deg', { fromValue: '-10deg'}], position: 20000, duration: 0 },
                { id: "eid5546", tween: [ "transform", "${_scene3TruckMorion}", "rotateZ", '28deg', { fromValue: '-10deg'}], position: 20668, duration: 380 },
                { id: "eid2314", tween: [ "transform", "${_scene3CrackRoad19}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid1730", tween: [ "style", "${_scene3SignRoadToNowhere}", "display", 'block', { fromValue: 'none'}], position: 2245, duration: 0, easing: "easeOutBack" },
                { id: "eid1831", tween: [ "style", "${_scene3CrackRoad11}", "left", '307px', { fromValue: '307px'}], position: 3908, duration: 0 },
                { id: "eid2610", tween: [ "style", "${_scene3CrackRoad11}", "left", '326px', { fromValue: '307px'}], position: 5111, duration: 627, easing: "easeInExpo" },
                { id: "eid2897", tween: [ "transform", "${_scene3Sign21stCent}", "scaleX", '1', { fromValue: '0.05'}], position: 16000, duration: 500, easing: "easeOutBounce" },
                { id: "eid2492", tween: [ "style", "${_scene3CrackRoad18}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2493", tween: [ "style", "${_scene3CrackRoad18}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid1709", tween: [ "style", "${_scene3Truck}", "top", '60px', { fromValue: '15px'}], position: 1000, duration: 775, easing: "easeOutBack" },
                { id: "eid2999", tween: [ "style", "${_scene3Truck}", "top", '89px', { fromValue: '60px'}], position: 18000, duration: 512, easing: "easeInOutBack" },
                { id: "eid3108", tween: [ "style", "${_scene3Truck}", "top", '96px', { fromValue: '89px'}], position: 20000, duration: 27 },
                { id: "eid3168", tween: [ "style", "${_scene3Truck}", "top", '74px', { fromValue: '96px'}], position: 20027, duration: 39 },
                { id: "eid3166", tween: [ "style", "${_scene3Truck}", "top", '132px', { fromValue: '74px'}], position: 20066, duration: 184 },
                { id: "eid3112", tween: [ "style", "${_scene3Truck}", "top", '332px', { fromValue: '132px'}], position: 20250, duration: 750 },
                { id: "eid2892", tween: [ "style", "${_scene3Sign21stCent}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0 },
                { id: "eid2627", tween: [ "style", "${_splashMain2Copy2}", "display", 'block', { fromValue: 'none'}], position: 4408, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2628", tween: [ "style", "${_splashMain2Copy2}", "display", 'none', { fromValue: 'block'}], position: 4914, duration: 0, easing: "easeInOutBounce" },
                { id: "eid3052", tween: [ "style", "${_scene3CrackRoad13}", "top", '644px', { fromValue: '503px'}], position: 3908, duration: 1586, easing: "easeInExpo" },
                { id: "eid2304", tween: [ "transform", "${_scene3CrackRoad5}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2596", tween: [ "style", "${_scene3DebrisMain4}", "display", 'block', { fromValue: 'none'}], position: 4896, duration: 0, easing: "easeInExpo" },
                { id: "eid2597", tween: [ "style", "${_scene3DebrisMain4}", "display", 'none', { fromValue: 'block'}], position: 5614, duration: 0, easing: "easeInExpo" },
                { id: "eid3045", tween: [ "transform", "${_scene3CrackRoad12}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid3044", tween: [ "transform", "${_scene3CrackRoad12}", "rotateZ", '-98deg', { fromValue: '0deg'}], position: 5276, duration: 132, easing: "easeInExpo" },
                { id: "eid1710", tween: [ "transform", "${_sceneTruckLogoChasis}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 1604, duration: 171, easing: "easeOutBack" },
                { id: "eid11699", tween: [ "style", "${_scene3SignDupli}", "top", '228px', { fromValue: '228px'}], position: 3540, duration: 0 },
                { id: "eid5579", tween: [ "transform", "${_scene2Truck9Rim3Copy}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 20000, duration: 250 },
                { id: "eid5582", tween: [ "transform", "${_scene2Truck9Rim3Copy}", "rotateZ", '-360deg', { fromValue: '180deg'}], position: 20250, duration: 798 },
                { id: "eid3085", tween: [ "style", "${_splashMainCopy3}", "left", '333px', { fromValue: '284px'}], position: 5780, duration: 63, easing: "easeInOutBounce" },
                { id: "eid2167", tween: [ "transform", "${_scene3CrackRoad8}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2673", tween: [ "transform", "${_scene3CrackRoad8}", "rotateZ", '-344deg', { fromValue: '0deg'}], position: 5276, duration: 251, easing: "easeInExpo" },
                { id: "eid2223", tween: [ "transform", "${_scene3CrackRoad9}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2568", tween: [ "transform", "${_scene3CrackRoad9}", "rotateZ", '-59deg', { fromValue: '0deg'}], position: 4896, duration: 512, easing: "easeInExpo" },
                { id: "eid2177", tween: [ "transform", "${_scene3CrackRoad17}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2245", tween: [ "style", "${_scene3CrackRoad9}", "left", '328px', { fromValue: '328px'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2566", tween: [ "style", "${_scene3CrackRoad9}", "left", '359px', { fromValue: '328px'}], position: 4896, duration: 512, easing: "easeInExpo" },
                { id: "eid3138", tween: [ "style", "${_scene3TruckBttn}", "opacity", '1', { fromValue: '0'}], position: 18250, duration: 250, easing: "easeInOutBounce" },
                { id: "eid3141", tween: [ "style", "${_scene3TruckBttn}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid2310", tween: [ "transform", "${_scene3CrackRoad20}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2901", tween: [ "style", "${_scene3Better}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 500, easing: "easeOutBounce" },
                { id: "eid3099", tween: [ "style", "${_scene3Better}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 500, easing: "easeInOutBounce" },
                { id: "eid2807", tween: [ "transform", "${_scene3RoadRed}", "scaleX", '1.5', { fromValue: '0.5'}], position: 3908, duration: 1117, easing: "easeInOutBounce" },
                { id: "eid2809", tween: [ "transform", "${_scene3RoadRed}", "scaleX", '0.5', { fromValue: '1.5'}], position: 5025, duration: 883, easing: "easeInOutBounce" },
                { id: "eid2494", tween: [ "style", "${_scene3CrackRoad3}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2495", tween: [ "style", "${_scene3CrackRoad3}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid1832", tween: [ "style", "${_scene3CrackRoad13}", "left", '397px', { fromValue: '397px'}], position: 3908, duration: 0 },
                { id: "eid3051", tween: [ "style", "${_scene3CrackRoad13}", "left", '402px', { fromValue: '397px'}], position: 5371, duration: 123, easing: "easeInExpo" },
                { id: "eid2328", tween: [ "transform", "${_scene3CrackRoad1}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2500", tween: [ "style", "${_scene3CrackRoad16}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2501", tween: [ "style", "${_scene3CrackRoad16}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid5578", tween: [ "transform", "${_scene2Truck9Rim2Copy}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 20000, duration: 250 },
                { id: "eid5581", tween: [ "transform", "${_scene2Truck9Rim2Copy}", "rotateZ", '-360deg', { fromValue: '180deg'}], position: 20250, duration: 798 },
                { id: "eid5526", tween: [ "transform", "${_sceneTruckLogoChasisCopy}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 1604, duration: 171, easing: "easeOutBack" },
                { id: "eid5556", tween: [ "transform", "${_sceneTruckLogoChasisCopy}", "rotateZ", '-5deg', { fromValue: '0deg'}], position: 20000, duration: 478, easing: "easeOutBack" },
                { id: "eid5565", tween: [ "transform", "${_sceneTruckLogoChasisCopy}", "rotateZ", '1deg', { fromValue: '-5deg'}], position: 20478, duration: 570, easing: "easeOutBack" },
                { id: "eid2306", tween: [ "transform", "${_scene3CrackRoad9}", "scaleY", '0.9985', { fromValue: '1'}], position: 3908, duration: 988, easing: "easeInExpo" },
                { id: "eid2560", tween: [ "transform", "${_scene3CrackRoad9}", "scaleY", '0.54', { fromValue: '0.9985'}], position: 4896, duration: 512, easing: "easeInExpo" },
                { id: "eid2696", tween: [ "transform", "${_splashMain2Copy4}", "scaleX", '0.5', { fromValue: '0.05'}], position: 4408, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2697", tween: [ "transform", "${_splashMain2Copy4}", "scaleX", '0.05', { fromValue: '0.5'}], position: 4757, duration: 157, easing: "easeInOutBounce" },
                { id: "eid1708", tween: [ "style", "${_scene3Truck}", "left", '38px', { fromValue: '-416px'}], position: 1000, duration: 775, easing: "easeOutBack" },
                { id: "eid2998", tween: [ "style", "${_scene3Truck}", "left", '422px', { fromValue: '38px'}], position: 18000, duration: 512, easing: "easeInOutBack" },
                { id: "eid3107", tween: [ "style", "${_scene3Truck}", "left", '403px', { fromValue: '422px'}], position: 20000, duration: 27 },
                { id: "eid3167", tween: [ "style", "${_scene3Truck}", "left", '483px', { fromValue: '403px'}], position: 20027, duration: 39 },
                { id: "eid3113", tween: [ "style", "${_scene3Truck}", "left", '579px', { fromValue: '483px'}], position: 20066, duration: 184 },
                { id: "eid3111", tween: [ "style", "${_scene3Truck}", "left", '1041px', { fromValue: '579px'}], position: 20250, duration: 750 },
                { id: "eid2300", tween: [ "transform", "${_scene3CrackRoad8}", "scaleY", '0.99441', { fromValue: '1'}], position: 3908, duration: 1368, easing: "easeInExpo" },
                { id: "eid2666", tween: [ "transform", "${_scene3CrackRoad8}", "scaleY", '0.39', { fromValue: '0.99441'}], position: 5276, duration: 251, easing: "easeInExpo" },
                { id: "eid2672", tween: [ "transform", "${_scene3CrackRoad8}", "scaleY", '0.95', { fromValue: '0.39'}], position: 5527, duration: 381, easing: "easeInExpo" },
                { id: "eid1823", tween: [ "style", "${_scene3CrackRoad3}", "left", '310px', { fromValue: '310px'}], position: 3908, duration: 0 },
                { id: "eid2788", tween: [ "transform", "${_splashMainCopy2}", "scaleY", '0.5', { fromValue: '0.05'}], position: 4694, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2789", tween: [ "transform", "${_splashMainCopy2}", "scaleY", '0.05', { fromValue: '0.5'}], position: 5043, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2578", tween: [ "style", "${_scene3DebrisMain}", "left", '375px', { fromValue: '375px'}], position: 4408, duration: 0, easing: "easeInExpo" },
                { id: "eid2583", tween: [ "style", "${_scene3DebrisMain2}", "left", '407px', { fromValue: '407px'}], position: 4626, duration: 0, easing: "easeInExpo" },
                { id: "eid2171", tween: [ "transform", "${_scene3CrackRoad11}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2614", tween: [ "transform", "${_scene3CrackRoad11}", "rotateZ", '259deg', { fromValue: '0deg'}], position: 5111, duration: 627, easing: "easeInExpo" },
                { id: "eid1840", tween: [ "style", "${_scene3CrackRoad20}", "left", '430px', { fromValue: '430px'}], position: 3908, duration: 0 },
                { id: "eid3073", tween: [ "style", "${_splashMainCopy}", "display", 'block', { fromValue: 'none'}], position: 5494, duration: 0, easing: "easeInOutBounce" },
                { id: "eid3074", tween: [ "style", "${_splashMainCopy}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid11686", tween: [ "transform", "${_scene3StopSign}", "scaleY", '0.9', { fromValue: '0.05'}], position: 1000, duration: 470, easing: "easeOutBounce" },
                { id: "eid2510", tween: [ "style", "${_scene3RoadCrackMain}", "opacity", '1', { fromValue: '0'}], position: 3908, duration: 500, easing: "easeInExpo" },
                { id: "eid2320", tween: [ "transform", "${_scene3CrackRoad6}", "scaleY", '0.99441', { fromValue: '1'}], position: 3908, duration: 1368, easing: "easeInExpo" },
                { id: "eid2653", tween: [ "transform", "${_scene3CrackRoad6}", "scaleY", '0.95', { fromValue: '0.99441'}], position: 5276, duration: 632, easing: "easeInExpo" },
                { id: "eid2682", tween: [ "transform", "${_splashMain2Copy3}", "scaleX", '0.5', { fromValue: '0.05'}], position: 4408, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2683", tween: [ "transform", "${_splashMain2Copy3}", "scaleX", '0.05', { fromValue: '0.5'}], position: 4757, duration: 157, easing: "easeInOutBounce" },
                { id: "eid1858", tween: [ "style", "${_scene3CrackRoad18}", "top", '479px', { fromValue: '479px'}], position: 3908, duration: 0 },
                { id: "eid2323", tween: [ "transform", "${_scene3CrackRoad15}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2795", tween: [ "style", "${_splashMainCopy2}", "left", '280px', { fromValue: '280px'}], position: 5043, duration: 0, easing: "easeInOutBounce" },
                { id: "eid3081", tween: [ "transform", "${_splashMainCopy3}", "scaleY", '0.5', { fromValue: '0.05'}], position: 5494, duration: 349, easing: "easeInOutBounce" },
                { id: "eid3082", tween: [ "transform", "${_splashMainCopy3}", "scaleY", '0.05', { fromValue: '0.5'}], position: 5843, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2847", tween: [ "style", "${_scene3Nav1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 488 },
                { id: "eid2851", tween: [ "style", "${_scene3Nav1}", "opacity", '0', { fromValue: '1'}], position: 15488, duration: 488 },
                { id: "eid5530", tween: [ "motion", "${_scene3TruckMorion}", [[-253.16, 61.96, 0, 0],[-9.08, 131.96, 471.15, 165.68, 415.16, 145.99],[280.41, 203.89, 0, 0]]], position: 1000, duration: 775, easing: "easeOutBack" },
                { id: "eid5534", tween: [ "motion", "${_scene3TruckMorion}", [[280.41, 203.89, 0, 0],[471.8, 218.09, 254.42, -51.07, 238.42, -47.86],[586.69, 203.23, 0, 0]]], position: 18000, duration: 512, easing: "easeOutBack" },
                { id: "eid5544", tween: [ "motion", "${_scene3TruckMorion}", [[586.69, 203.23, 0, 0],[948.27, 291.61, 428.29, 373.4, 427.77, 372.94],[1377.05, 467.18, 0, 0]]], position: 20000, duration: 1034, easing: "easeInBack" },
                { id: "eid2163", tween: [ "transform", "${_scene3CrackRoad3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2693", tween: [ "style", "${_splashMain2Copy4}", "display", 'block', { fromValue: 'none'}], position: 4408, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2694", tween: [ "style", "${_splashMain2Copy4}", "display", 'none', { fromValue: 'block'}], position: 4914, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1833", tween: [ "style", "${_scene3CrackRoad14}", "left", '373px', { fromValue: '373px'}], position: 3908, duration: 0 },
                { id: "eid3065", tween: [ "style", "${_scene3CrackRoad14}", "left", '382px', { fromValue: '373px'}], position: 5494, duration: 120, easing: "easeInExpo" },
                { id: "eid1860", tween: [ "style", "${_scene3CrackRoad20}", "top", '486px', { fromValue: '486px'}], position: 3908, duration: 0 },
                { id: "eid2824", tween: [ "style", "${_scene3SignYear}", "display", 'block', { fromValue: 'none'}], position: 1775, duration: 0 },
                { id: "eid3086", tween: [ "style", "${_splashMainCopy3}", "display", 'block', { fromValue: 'none'}], position: 5494, duration: 0, easing: "easeInOutBounce" },
                { id: "eid3087", tween: [ "style", "${_splashMainCopy3}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid1835", tween: [ "style", "${_scene3CrackRoad16}", "left", '372px', { fromValue: '372px'}], position: 3908, duration: 0 },
                { id: "eid2511", tween: [ "transform", "${_scene3CrackRoad17}", "scaleX", '0.95', { fromValue: '0.9'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2691", tween: [ "transform", "${_splashMain2Copy4}", "scaleY", '0.5', { fromValue: '0.05'}], position: 4408, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2692", tween: [ "transform", "${_splashMain2Copy4}", "scaleY", '0.05', { fromValue: '0.5'}], position: 4757, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2698", tween: [ "style", "${_splashMain2Copy4}", "left", '357px', { fromValue: '357px'}], position: 4757, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2580", tween: [ "style", "${_scene3DebrisMain2}", "display", 'block', { fromValue: 'none'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2584", tween: [ "style", "${_scene3DebrisMain2}", "display", 'none', { fromValue: 'block'}], position: 4626, duration: 0, easing: "easeInExpo" },
                { id: "eid2173", tween: [ "transform", "${_scene3CrackRoad14}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid3069", tween: [ "transform", "${_scene3CrackRoad14}", "rotateZ", '-134deg', { fromValue: '0deg'}], position: 5494, duration: 120, easing: "easeInExpo" },
                { id: "eid2898", tween: [ "transform", "${_scene3Sign21stCent}", "scaleY", '1', { fromValue: '0.05'}], position: 16000, duration: 500, easing: "easeOutBounce" },
                { id: "eid2629", tween: [ "transform", "${_splashMain2Copy2}", "scaleY", '0.5', { fromValue: '0.05'}], position: 4408, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2630", tween: [ "transform", "${_splashMain2Copy2}", "scaleY", '0.05', { fromValue: '0.5'}], position: 4757, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2175", tween: [ "transform", "${_scene3CrackRoad16}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2293", tween: [ "transform", "${_scene3CrackRoad13}", "scaleX", '0.99221', { fromValue: '1'}], position: 3908, duration: 1463, easing: "easeInExpo" },
                { id: "eid3046", tween: [ "transform", "${_scene3CrackRoad13}", "scaleX", '0.52', { fromValue: '0.99221'}], position: 5371, duration: 123, easing: "easeInExpo" },
                { id: "eid5562", tween: [ "style", "${_sceneTruckLogoChasisCopy}", "top", '4px', { fromValue: '0px'}], position: 20000, duration: 478, easing: "easeOutBack" },
                { id: "eid5564", tween: [ "style", "${_sceneTruckLogoChasisCopy}", "top", '-1px', { fromValue: '4px'}], position: 20478, duration: 570, easing: "easeOutBack" },
                { id: "eid2315", tween: [ "transform", "${_scene3CrackRoad18}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid1825", tween: [ "style", "${_scene3CrackRoad5}", "left", '259px', { fromValue: '259px'}], position: 3908, duration: 0 },
                { id: "eid11698", tween: [ "style", "${_scene3SignDupli}", "left", '163px', { fromValue: '163px'}], position: 3540, duration: 0 },
                { id: "eid2476", tween: [ "style", "${_scene3CrackRoad7}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2477", tween: [ "style", "${_scene3CrackRoad7}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2579", tween: [ "style", "${_scene3DebrisMain}", "top", '635px', { fromValue: '512px'}], position: 3908, duration: 500, easing: "easeInExpo" },
                { id: "eid1740", tween: [ "style", "${_scene3Warning}", "display", 'block', { fromValue: 'none'}], position: 2745, duration: 0, easing: "easeOutBack" },
                { id: "eid2490", tween: [ "style", "${_scene3CrackRoad19}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2491", tween: [ "style", "${_scene3CrackRoad19}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2793", tween: [ "transform", "${_splashMainCopy2}", "scaleX", '0.5', { fromValue: '0.05'}], position: 4694, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2794", tween: [ "transform", "${_splashMainCopy2}", "scaleX", '0.05', { fromValue: '0.5'}], position: 5043, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2482", tween: [ "style", "${_scene3CrackRoad4}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2483", tween: [ "style", "${_scene3CrackRoad4}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid3083", tween: [ "transform", "${_splashMainCopy3}", "scaleX", '0.5', { fromValue: '0.05'}], position: 5494, duration: 349, easing: "easeInOutBounce" },
                { id: "eid3084", tween: [ "transform", "${_splashMainCopy3}", "scaleX", '0.05', { fromValue: '0.5'}], position: 5843, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2599", tween: [ "style", "${_scene3DebrisMain4}", "top", '543px', { fromValue: '512px'}], position: 4896, duration: 304, easing: "easeInExpo" },
                { id: "eid2605", tween: [ "style", "${_scene3DebrisMain4}", "top", '654px', { fromValue: '511px'}], position: 5408, duration: 173, easing: "easeInExpo" },
                { id: "eid2602", tween: [ "style", "${_scene3DebrisMain4}", "top", '635px', { fromValue: '654px'}], position: 5581, duration: 33, easing: "easeInExpo" },
                { id: "eid2843", tween: [ "transform", "${_scene3BadRoadArrow}", "scaleY", '1', { fromValue: '0.05'}], position: 3262, duration: 513, easing: "easeOutBounce" },
                { id: "eid2313", tween: [ "transform", "${_scene3CrackRoad19}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2591", tween: [ "style", "${_scene3DebrisMain3}", "display", 'block', { fromValue: 'none'}], position: 4095, duration: 0, easing: "easeInExpo" },
                { id: "eid2592", tween: [ "style", "${_scene3DebrisMain3}", "display", 'none', { fromValue: 'block'}], position: 4813, duration: 0, easing: "easeInExpo" },
                { id: "eid2790", tween: [ "style", "${_splashMainCopy2}", "display", 'block', { fromValue: 'none'}], position: 4694, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2791", tween: [ "style", "${_splashMainCopy2}", "display", 'none', { fromValue: 'block'}], position: 5200, duration: 0, easing: "easeInOutBounce" },
                { id: "eid5527", tween: [ "style", "${_scene3Truck}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2586", tween: [ "style", "${_scene3CompleteConcretescene32}", "opacity", '0', { fromValue: '1'}], position: 3908, duration: 500, easing: "easeInExpo" },
                { id: "eid2669", tween: [ "style", "${_scene3CrackRoad8}", "left", '331px', { fromValue: '325px'}], position: 3908, duration: 1619, easing: "easeInExpo" },
                { id: "eid5170", tween: [ "style", "${_scene3Nav4}", "opacity", '0', { fromValue: '0'}], position: 15000, duration: 0 },
                { id: "eid5171", tween: [ "style", "${_scene3Nav4}", "opacity", '0', { fromValue: '0'}], position: 15488, duration: 0 },
                { id: "eid5196", tween: [ "style", "${_scene3Nav4}", "opacity", '1', { fromValue: '0'}], position: 18000, duration: 500 },
                { id: "eid2623", tween: [ "transform", "${_splashMain2Copy}", "scaleY", '0.5', { fromValue: '0.05'}], position: 4694, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2624", tween: [ "transform", "${_splashMain2Copy}", "scaleY", '0.05', { fromValue: '0.5'}], position: 5043, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2827", tween: [ "transform", "${_scene3SignYear}", "scaleX", '0.84', { fromValue: '0.05'}], position: 1775, duration: 470, easing: "easeOutBounce" },
                { id: "eid2174", tween: [ "transform", "${_scene3CrackRoad15}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid1828", tween: [ "style", "${_scene3CrackRoad12}", "left", '354px', { fromValue: '354px'}], position: 3908, duration: 0 },
                { id: "eid3039", tween: [ "style", "${_scene3CrackRoad12}", "left", '362px', { fromValue: '354px'}], position: 5276, duration: 132, easing: "easeInExpo" },
                { id: "eid2246", tween: [ "style", "${_scene3CrackRoad9}", "top", '506px', { fromValue: '506px'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2567", tween: [ "style", "${_scene3CrackRoad9}", "top", '637px', { fromValue: '506px'}], position: 4896, duration: 512, easing: "easeInExpo" },
                { id: "eid2786", tween: [ "style", "${_splashMain}", "top", '551px', { fromValue: '551px'}], position: 5843, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2237", tween: [ "transform", "${_splashMain}", "scaleY", '0.5', { fromValue: '0.05'}], position: 5494, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2239", tween: [ "transform", "${_splashMain}", "scaleY", '0.05', { fromValue: '0.5'}], position: 5843, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2321", tween: [ "transform", "${_scene3CrackRoad16}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid1834", tween: [ "style", "${_scene3CrackRoad15}", "left", '347px', { fromValue: '347px'}], position: 3908, duration: 0 },
                { id: "eid1821", tween: [ "style", "${_scene3CrackRoad2}", "left", '231px', { fromValue: '231px'}], position: 3908, duration: 0 },
                { id: "eid5205", tween: [ "style", "${_scene3TruckBttn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2828", tween: [ "transform", "${_scene3SignYear}", "scaleY", '0.84', { fromValue: '0.05'}], position: 1775, duration: 470, easing: "easeOutBounce" },
                { id: "eid2615", tween: [ "style", "${_splashMain2}", "display", 'block', { fromValue: 'none'}], position: 5232, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2616", tween: [ "style", "${_splashMain2}", "display", 'none', { fromValue: 'block'}], position: 5738, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2309", tween: [ "transform", "${_scene3CrackRoad20}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid1837", tween: [ "style", "${_scene3CrackRoad17}", "left", '307px', { fromValue: '307px'}], position: 3908, duration: 0 },
                { id: "eid2164", tween: [ "transform", "${_scene3CrackRoad4}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid1848", tween: [ "style", "${_scene3CrackRoad12}", "top", '511px', { fromValue: '511px'}], position: 3908, duration: 0 },
                { id: "eid3040", tween: [ "style", "${_scene3CrackRoad12}", "top", '626px', { fromValue: '511px'}], position: 5276, duration: 132, easing: "easeInExpo" },
                { id: "eid2726", tween: [ "style", "${_scene3RoadRed}", "opacity", '1', { fromValue: '0'}], position: 3908, duration: 1000, easing: "easeInOutBounce" },
                { id: "eid2727", tween: [ "style", "${_scene3RoadRed}", "opacity", '0', { fromValue: '1'}], position: 4908, duration: 1000, easing: "easeInOutBounce" },
                { id: "eid2883", tween: [ "style", "${_scene3SignWayAhead}", "display", 'block', { fromValue: 'none'}], position: 15488, duration: 0 },
                { id: "eid1838", tween: [ "style", "${_scene3CrackRoad18}", "left", '391px', { fromValue: '391px'}], position: 3908, duration: 0 },
                { id: "eid1734", tween: [ "transform", "${_scene3SignRoadToNowhere}", "scaleY", '1', { fromValue: '0.05'}], position: 2245, duration: 500, easing: "easeOutBounce" },
                { id: "eid2311", tween: [ "transform", "${_scene3CrackRoad12}", "scaleX", '0.99441', { fromValue: '1'}], position: 3908, duration: 1368, easing: "easeInExpo" },
                { id: "eid3041", tween: [ "transform", "${_scene3CrackRoad12}", "scaleX", '0.43', { fromValue: '0.99441'}], position: 5276, duration: 132, easing: "easeInExpo" },
                { id: "eid2684", tween: [ "transform", "${_splashMain2Copy3}", "scaleY", '0.5', { fromValue: '0.05'}], position: 4408, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2685", tween: [ "transform", "${_splashMain2Copy3}", "scaleY", '0.05', { fromValue: '0.5'}], position: 4757, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2688", tween: [ "style", "${_splashMain2Copy3}", "left", '296px', { fromValue: '296px'}], position: 4757, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2498", tween: [ "style", "${_scene3CrackRoad6}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2499", tween: [ "style", "${_scene3CrackRoad6}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid1822", tween: [ "style", "${_scene3CrackRoad1}", "left", '203px', { fromValue: '203px'}], position: 3908, duration: 0 },
                { id: "eid1850", tween: [ "style", "${_scene3CrackRoad7}", "top", '506px', { fromValue: '506px'}], position: 3908, duration: 0 },
                { id: "eid2641", tween: [ "style", "${_scene3CrackRoad7}", "top", '510px', { fromValue: '506px'}], position: 5494, duration: 211, easing: "easeInExpo" },
                { id: "eid2661", tween: [ "style", "${_scene3CrackRoad7}", "top", '633px', { fromValue: '510px'}], position: 5705, duration: 203, easing: "easeInExpo" },
                { id: "eid2886", tween: [ "transform", "${_scene3SignWayAhead}", "scaleX", '1', { fromValue: '0.05'}], position: 15488, duration: 512, easing: "easeOutBounce" },
                { id: "eid2297", tween: [ "transform", "${_scene3CrackRoad10}", "scaleX", '0.99766', { fromValue: '1'}], position: 3908, duration: 1117, easing: "easeInExpo" },
                { id: "eid2642", tween: [ "transform", "${_scene3CrackRoad10}", "scaleX", '0.33', { fromValue: '0.99766'}], position: 5025, duration: 383, easing: "easeInExpo" },
                { id: "eid2649", tween: [ "transform", "${_scene3CrackRoad10}", "scaleX", '0.95', { fromValue: '0.33'}], position: 5408, duration: 500, easing: "easeInExpo" },
                { id: "eid2295", tween: [ "transform", "${_scene3CrackRoad14}", "scaleX", '0.98809', { fromValue: '1'}], position: 3908, duration: 1586, easing: "easeInExpo" },
                { id: "eid3060", tween: [ "transform", "${_scene3CrackRoad14}", "scaleX", '0.55', { fromValue: '0.98809'}], position: 5494, duration: 120, easing: "easeInExpo" },
                { id: "eid2478", tween: [ "style", "${_scene3CrackRoad5}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2479", tween: [ "style", "${_scene3CrackRoad5}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid1839", tween: [ "style", "${_scene3CrackRoad19}", "left", '409px', { fromValue: '409px'}], position: 3908, duration: 0 },
                { id: "eid2621", tween: [ "style", "${_splashMain2Copy}", "display", 'block', { fromValue: 'none'}], position: 4694, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2622", tween: [ "style", "${_splashMain2Copy}", "display", 'none', { fromValue: 'block'}], position: 5200, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2318", tween: [ "transform", "${_scene3CrackRoad3}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2166", tween: [ "transform", "${_scene3CrackRoad6}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2659", tween: [ "transform", "${_scene3CrackRoad6}", "rotateZ", '168deg', { fromValue: '0deg'}], position: 5276, duration: 462, easing: "easeInExpo" },
                { id: "eid5516", tween: [ "transform", "${_scene3TruckMorion}", "scaleX", '1', { fromValue: '1'}], position: 1175, duration: 0 },
                { id: "eid5517", tween: [ "transform", "${_scene3TruckMorion}", "scaleX", '0.96', { fromValue: '1'}], position: 1290, duration: 0, easing: "easeOutBack" },
                { id: "eid5518", tween: [ "transform", "${_scene3TruckMorion}", "scaleX", '0.96', { fromValue: '0.96'}], position: 18000, duration: 0 },
                { id: "eid5519", tween: [ "transform", "${_scene3TruckMorion}", "scaleX", '0.96', { fromValue: '0.96'}], position: 20000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid3079", tween: [ "style", "${_splashMainCopy}", "top", '551px', { fromValue: '511px'}], position: 5780, duration: 63, easing: "easeInOutBounce" },
                { id: "eid1733", tween: [ "transform", "${_scene3SignRoadToNowhere}", "scaleX", '1', { fromValue: '0.05'}], position: 2245, duration: 500, easing: "easeOutBounce" },
                { id: "eid2329", tween: [ "transform", "${_scene3CrackRoad11}", "scaleX", '0.99684', { fromValue: '1'}], position: 3908, duration: 1203, easing: "easeInExpo" },
                { id: "eid2607", tween: [ "transform", "${_scene3CrackRoad11}", "scaleX", '0.46', { fromValue: '0.99684'}], position: 5111, duration: 627, easing: "easeInExpo" },
                { id: "eid2162", tween: [ "transform", "${_scene3CrackRoad1}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid1857", tween: [ "style", "${_scene3CrackRoad17}", "top", '469px', { fromValue: '469px'}], position: 3908, duration: 0 },
                { id: "eid1844", tween: [ "style", "${_scene3CrackRoad4}", "top", '545px', { fromValue: '545px'}], position: 3908, duration: 0 },
                { id: "eid11685", tween: [ "transform", "${_scene3StopSign}", "scaleX", '0.9', { fromValue: '0.05'}], position: 1000, duration: 470, easing: "easeOutBounce" },
                { id: "eid2486", tween: [ "style", "${_scene3CrackRoad12}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2487", tween: [ "style", "${_scene3CrackRoad12}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2887", tween: [ "transform", "${_scene3SignWayAhead}", "scaleY", '1', { fromValue: '0.05'}], position: 15488, duration: 512, easing: "easeOutBounce" },
                { id: "eid2844", tween: [ "style", "${_scene3Nav1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid2852", tween: [ "style", "${_scene3Nav1}", "display", 'none', { fromValue: 'block'}], position: 15976, duration: 0 },
                { id: "eid1718", tween: [ "transform", "${_scene3Truck}", "scaleY", '1', { fromValue: '1'}], position: 1175, duration: 0, easing: "easeOutBack" },
                { id: "eid1699", tween: [ "transform", "${_scene3Truck}", "scaleY", '1', { fromValue: '1'}], position: 1290, duration: 0 },
                { id: "eid2993", tween: [ "transform", "${_scene3Truck}", "scaleY", '1', { fromValue: '1'}], position: 18000, duration: 0 },
                { id: "eid3105", tween: [ "transform", "${_scene3Truck}", "scaleY", '1', { fromValue: '1'}], position: 20000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2305", tween: [ "transform", "${_scene3CrackRoad9}", "scaleX", '0.9985', { fromValue: '1'}], position: 3908, duration: 988, easing: "easeInExpo" },
                { id: "eid2559", tween: [ "transform", "${_scene3CrackRoad9}", "scaleX", '0.54', { fromValue: '0.9985'}], position: 4896, duration: 512, easing: "easeInExpo" },
                { id: "eid2617", tween: [ "transform", "${_splashMain2}", "scaleY", '0.5', { fromValue: '0.05'}], position: 5232, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2618", tween: [ "transform", "${_splashMain2}", "scaleY", '0.05', { fromValue: '0.5'}], position: 5581, duration: 157, easing: "easeInOutBounce" },
                { id: "eid5577", tween: [ "transform", "${_scene2Truck9Rim1Copy}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 20000, duration: 250 },
                { id: "eid5580", tween: [ "transform", "${_scene2Truck9Rim1Copy}", "rotateZ", '-360deg', { fromValue: '180deg'}], position: 20250, duration: 798 },
                { id: "eid2619", tween: [ "transform", "${_splashMain2}", "scaleX", '0.5', { fromValue: '0.05'}], position: 5232, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2620", tween: [ "transform", "${_splashMain2}", "scaleX", '0.05', { fromValue: '0.5'}], position: 5581, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2296", tween: [ "transform", "${_scene3CrackRoad14}", "scaleY", '0.98809', { fromValue: '1'}], position: 3908, duration: 1586, easing: "easeInExpo" },
                { id: "eid3061", tween: [ "transform", "${_scene3CrackRoad14}", "scaleY", '0.55', { fromValue: '0.98809'}], position: 5494, duration: 120, easing: "easeInExpo" },
                { id: "eid1746", tween: [ "transform", "${_scene3Warning}", "scaleY", '1', { fromValue: '0.05'}], position: 2745, duration: 500, easing: "easeOutBounce" },
                { id: "eid2165", tween: [ "transform", "${_scene3CrackRoad5}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid2470", tween: [ "style", "${_scene3CrackRoad14}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid5561", tween: [ "style", "${_sceneTruckLogoChasisCopy}", "left", '1px', { fromValue: '6px'}], position: 20000, duration: 478, easing: "easeOutBack" },
                { id: "eid5563", tween: [ "style", "${_sceneTruckLogoChasisCopy}", "left", '2px', { fromValue: '1px'}], position: 20478, duration: 570, easing: "easeOutBack" },
                { id: "eid2670", tween: [ "style", "${_scene3CrackRoad8}", "top", '651px', { fromValue: '541px'}], position: 3908, duration: 1619, easing: "easeInExpo" },
                { id: "eid11105", tween: [ "style", "${_scene3BadRoadArrow}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 505 },
                { id: "eid1826", tween: [ "style", "${_scene3CrackRoad6}", "left", '240px', { fromValue: '240px'}], position: 3908, duration: 0 },
                { id: "eid2657", tween: [ "style", "${_scene3CrackRoad6}", "left", '254px', { fromValue: '240px'}], position: 5276, duration: 462, easing: "easeInExpo" },
                { id: "eid5169", tween: [ "style", "${_scene3Nav4}", "display", 'block', { fromValue: 'none'}], position: 18000, duration: 0 },
                { id: "eid2172", tween: [ "transform", "${_scene3CrackRoad13}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid3053", tween: [ "transform", "${_scene3CrackRoad13}", "rotateZ", '-300deg', { fromValue: '0deg'}], position: 5371, duration: 123, easing: "easeInExpo" },
                { id: "eid2303", tween: [ "transform", "${_scene3CrackRoad5}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid1729", tween: [ "transform", "${_scene3SignDupli}", "scaleY", '1', { fromValue: '0.05'}], position: 2000, duration: 500, easing: "easeOutBounce" },
                { id: "eid1853", tween: [ "style", "${_scene3CrackRoad14}", "top", '491px', { fromValue: '491px'}], position: 3908, duration: 0 },
                { id: "eid3066", tween: [ "style", "${_scene3CrackRoad14}", "top", '634px', { fromValue: '491px'}], position: 5494, duration: 120, easing: "easeInExpo" },
                { id: "eid2472", tween: [ "style", "${_scene3CrackRoad10}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2473", tween: [ "style", "${_scene3CrackRoad10}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2330", tween: [ "transform", "${_scene3CrackRoad11}", "scaleY", '0.99684', { fromValue: '1'}], position: 3908, duration: 1203, easing: "easeInExpo" },
                { id: "eid2608", tween: [ "transform", "${_scene3CrackRoad11}", "scaleY", '0.46', { fromValue: '0.99684'}], position: 5111, duration: 627, easing: "easeInExpo" },
                { id: "eid2312", tween: [ "transform", "${_scene3CrackRoad12}", "scaleY", '0.99441', { fromValue: '1'}], position: 3908, duration: 1368, easing: "easeInExpo" },
                { id: "eid3042", tween: [ "transform", "${_scene3CrackRoad12}", "scaleY", '0.43', { fromValue: '0.99441'}], position: 5276, duration: 132, easing: "easeInExpo" },
                { id: "eid2324", tween: [ "transform", "${_scene3CrackRoad15}", "scaleY", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2842", tween: [ "transform", "${_scene3BadRoadArrow}", "scaleX", '1', { fromValue: '0.05'}], position: 3262, duration: 513, easing: "easeOutBounce" },
                { id: "eid2512", tween: [ "transform", "${_scene3CrackRoad17}", "scaleY", '0.95', { fromValue: '0.9'}], position: 3908, duration: 2000, easing: "easeInExpo" },
                { id: "eid2298", tween: [ "transform", "${_scene3CrackRoad10}", "scaleY", '0.99766', { fromValue: '1'}], position: 3908, duration: 1117, easing: "easeInExpo" },
                { id: "eid2643", tween: [ "transform", "${_scene3CrackRoad10}", "scaleY", '0.33', { fromValue: '0.99766'}], position: 5025, duration: 383, easing: "easeInExpo" },
                { id: "eid2650", tween: [ "transform", "${_scene3CrackRoad10}", "scaleY", '0.95', { fromValue: '0.33'}], position: 5408, duration: 500, easing: "easeInExpo" },
                { id: "eid2236", tween: [ "transform", "${_splashMain}", "scaleX", '0.5', { fromValue: '0.05'}], position: 5494, duration: 349, easing: "easeInOutBounce" },
                { id: "eid2238", tween: [ "transform", "${_splashMain}", "scaleX", '0.05', { fromValue: '0.5'}], position: 5843, duration: 157, easing: "easeInOutBounce" },
                { id: "eid2508", tween: [ "style", "${_scene3CrackRoad11}", "opacity", '1', { fromValue: '1'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2509", tween: [ "style", "${_scene3CrackRoad11}", "opacity", '1', { fromValue: '1'}], position: 5908, duration: 0, easing: "easeInExpo" },
                { id: "eid2170", tween: [ "transform", "${_scene3CrackRoad7}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3908, duration: 0, easing: "easeOutBounce" },
                { id: "eid3058", tween: [ "transform", "${_scene3CrackRoad7}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5276, duration: 0, easing: "easeInExpo" },
                { id: "eid2637", tween: [ "transform", "${_scene3CrackRoad7}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5494, duration: 0, easing: "easeInOutBounce" },
                { id: "eid2664", tween: [ "transform", "${_scene3CrackRoad7}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 5705, duration: 0, easing: "easeInExpo" },
                { id: "eid2250", tween: [ "style", "${_scene3RoadCrackMain}", "display", 'block', { fromValue: 'none'}], position: 3908, duration: 0, easing: "easeInExpo" },
                { id: "eid2327", tween: [ "transform", "${_scene3CrackRoad1}", "scaleX", '0.95', { fromValue: '1'}], position: 3908, duration: 2000, easing: "easeInExpo" }            ]
        }
    }
},
"sene2nextBttnComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene1TruckAroowGlowComp',
                    type: 'rect',
                    rect: ['226px', '-80px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'scene2nextUp',
                    type: 'image',
                    rect: ['0px', '0px', '452px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene2nextUp.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '452px', '118px', 'auto', 'auto'],
                    id: 'scene2nextOver',
                    fill: ['rgba(0,0,0,0)', 'images/scene2nextOver.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'mouserScene2Next',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '452px', '118px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'scene1TruckAroowGlowComp',
                symbolName: 'scene1TruckAroowGlowComp'
            }            ]
        },
    states: {
        "Base State": {
            "${_scene2nextUp}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_scene2nextOver}": [
                ["style", "display", 'none']
            ],
            "${_scene1TruckAroowGlowComp}": [
                ["style", "left", '226px'],
                ["style", "top", '-80px']
            ],
            "${symbolSelector}": [
                ["style", "height", '118px'],
                ["style", "width", '452px']
            ],
            "${_mouserScene2Next}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            labels: {
                "scene2NextUp": 0,
                "scene2NextOver": 500
            },
            timeline: [
                { id: "eid1468", tween: [ "style", "${_scene2nextOver}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }            ]
        }
    }
},
"splashMain": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'scene3Splash',
                    opacity: 0.53658536585366,
                    rect: ['0px', '0px', '148px', '94px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3Splash.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene3Splash}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.53658536585366'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '148px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scene3DebrisMain": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene3Debris',
                    type: 'image',
                    rect: ['0px', '0px', '24px', '38px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene3Debris.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '38px'],
                ["style", "width", '24px']
            ],
            "${_scene3Debris}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scene3TruckBttn": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene1TruckAroowGlowComp',
                    type: 'rect',
                    rect: ['-44px', '-81px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '197px', '134px', 'auto', 'auto'],
                    id: 'scene3TruckArrow',
                    fill: ['rgba(0,0,0,0)', 'images/scene3TruckArrow.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['2px', '0px', '193px', '132px', 'auto', 'auto'],
                    id: 'scene3TruckArrowOver',
                    fill: ['rgba(0,0,0,0)', 'images/scene3TruckArrowOver.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'mouserScene3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '197px', '132px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'scene1TruckAroowGlowComp',
                symbolName: 'scene1TruckAroowGlowComp'
            }            ]
        },
    states: {
        "Base State": {
            "${_scene3TruckArrow}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '134px'],
                ["style", "width", '197px']
            ],
            "${_mouserScene3}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_scene1TruckAroowGlowComp}": [
                ["style", "left", '-44px'],
                ["style", "top", '-81px']
            ],
            "${_scene3TruckArrowOver}": [
                ["style", "top", '0px'],
                ["style", "left", '2px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "scene3TruckOver": 0,
                "scene3TruckUp": 1000
            },
            timeline: [
                { id: "eid3100", tween: [ "style", "${_scene3TruckArrowOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid3101", tween: [ "style", "${_scene3TruckArrow}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutBounce" }            ]
        }
    }
},
"scene4Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene4Back2',
                    type: 'image',
                    rect: ['0', '0', '1054px', '672px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene4Back.jpg', '0px', '0px']
                },
                {
                    id: 'craneBttmComp',
                    type: 'group',
                    rect: ['223px', '44px', '359', '292', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene4CraneBody',
                        type: 'image',
                        rect: ['0px', '15px', '359px', '277px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4CraneBody.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'scene4RCraneRim1',
                        rect: ['245px', '225px', '31px', '31px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.88', '0.88']],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Rim.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'scene4RCraneRim2',
                        rect: ['39px', '184px', '31px', '31px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.88', '0.88']],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Rim.png', '0px', '0px']
                    },
                    {
                        id: 'scene4craneBttm',
                        type: 'image',
                        rect: ['103px', '-66px', '177px', '135px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4craneBttm.png', '0px', '0px']
                    }]
                },
                {
                    id: 'truckAppear',
                    type: 'group',
                    rect: ['87px', '129px', '545', '404', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene4truckUnder',
                        type: 'image',
                        rect: ['0px', '172px', '545px', '232px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4truckUnder.png', '0px', '0px']
                    },
                    {
                        id: 'truckChasis',
                        type: 'group',
                        rect: ['0', '0', '526', '378', 'auto', 'auto'],
                        c: [
                        {
                            id: 'scene4TruckChasis',
                            type: 'image',
                            rect: ['19px', '155px', '507px', '215px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene4TruckChasis.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '426px', '325px', 'auto', 'auto'],
                            id: 'scene4TruckContainer',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/scene4TruckContainer.png', '0px', '0px']
                        },
                        {
                            rect: ['21px', '66px', '389px', '237px', 'auto', 'auto'],
                            type: 'image',
                            id: 'scene4ContStays',
                            opacity: 1,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont1.png', '0px', '0px']
                        },
                        {
                            id: 'scene4truckCab',
                            type: 'image',
                            rect: ['380px', '166px', '146px', '212px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene4truckCab.png', '0px', '0px']
                        },
                        {
                            id: 'scene4Rim1',
                            type: 'image',
                            rect: ['412px', '323px', '31px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene4Rim.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'scene4Rim2',
                        type: 'image',
                        rect: ['131px', '292px', '31px', '31px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Rim.png', '0px', '0px']
                    },
                    {
                        id: 'scene4Rim3',
                        type: 'image',
                        rect: ['63px', '278px', '31px', '31px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Rim.png', '0px', '0px']
                    },
                    {
                        id: 'stays',
                        type: 'group',
                        rect: ['38px', '42px', '369', '210', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '0px', '159px', '166px', 'auto', 'auto'],
                            type: 'image',
                            id: 'scene4Cont4Stay',
                            opacity: 1,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont2.png', '0px', '0px']
                        },
                        {
                            rect: ['110px', '21px', '155px', '169px', 'auto', 'auto'],
                            id: 'scene4ContStay',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont3.png', '0px', '0px']
                        },
                        {
                            rect: ['217px', '41px', '152px', '169px', 'auto', 'auto'],
                            type: 'image',
                            id: 'scene4Cont2Stay',
                            opacity: 0.59641768292683,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont4.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'staysCopy',
                        type: 'group',
                        rect: ['38px', '42px', '369', '210', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '0px', '159px', '166px', 'auto', 'auto'],
                            type: 'image',
                            id: 'scene4Cont4StayCopy',
                            opacity: 1,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont2.png', '0px', '0px']
                        },
                        {
                            rect: ['110px', '21px', '155px', '169px', 'auto', 'auto'],
                            id: 'scene4ContStayCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont3.png', '0px', '0px']
                        },
                        {
                            rect: ['217px', '41px', '152px', '169px', 'auto', 'auto'],
                            type: 'image',
                            id: 'scene4Cont2StayCopy',
                            opacity: 0.59641768292683,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont4.png', '0px', '0px']
                        }]
                    }]
                },
                {
                    id: 'craneTopComp',
                    type: 'group',
                    rect: ['150px', '-56px', '441px', '230px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        transform: [[0, 0], [], [], ['0.9', '0.9']],
                        display: 'none',
                        rect: ['1px', '45px', '426px', '325px', 'auto', 'auto'],
                        id: 'scene4TruckContainerLift',
                        fill: ['rgba(0,0,0,0)', 'images/scene4TruckContainer.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        transform: [[0, 0], [], [], ['1.01', '1.01']],
                        display: 'none',
                        rect: ['18px', '66px', '389px', '237px', 'auto', 'auto'],
                        id: 'scene4Cont1',
                        fill: ['rgba(0,0,0,0)', 'images/scene4Cont1.png', '0px', '0px']
                    },
                    {
                        id: 'scene4craneEndLeft',
                        type: 'image',
                        rect: ['25px', '64px', '70px', '80px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4craneEndLeft.png', '0px', '0px']
                    },
                    {
                        id: 'scene4craneEndRght',
                        type: 'image',
                        rect: ['339px', '127px', '67px', '82px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4craneEndRght.png', '0px', '0px']
                    },
                    {
                        id: 'scene4craneTop',
                        type: 'image',
                        rect: ['49px', '23px', '341px', '168px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4craneTop.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['467px', '271px', '146px', '212px', 'auto', 'auto'],
                    type: 'image',
                    id: 'scene4truckCabStay',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene4truckCab.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    display: 'none',
                    rect: ['431px', '425px', '133px', '118px', 'auto', 'auto'],
                    id: 'scene4Tire1',
                    fill: ['rgba(0,0,0,0)', 'images/scene4Tire1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    display: 'none',
                    rect: ['104px', '367px', '127px', '118px', 'auto', 'auto'],
                    id: 'scene4Tire3',
                    fill: ['rgba(0,0,0,0)', 'images/scene4Tire3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    display: 'none',
                    rect: ['168px', '376px', '131px', '122px', 'auto', 'auto'],
                    id: 'scene4Tire2',
                    fill: ['rgba(0,0,0,0)', 'images/scene4Tire2.png', '0px', '0px']
                },
                {
                    rect: ['295', '186', '191', '460', 'auto', 'auto'],
                    id: 'fork1',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'scene4ForkBars',
                        type: 'image',
                        rect: ['67px', '89px', '90px', '86px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkBars.png', '0px', '0px']
                    },
                    {
                        rect: ['39px', '0px', '152px', '169px', 'auto', 'auto'],
                        id: 'scene4Cont42',
                        type: 'image',
                        display: 'block',
                        fill: ['rgba(0,0,0,0)', 'images/scene4Cont4.png', '0px', '0px']
                    },
                    {
                        id: 'scene4ForkAnim',
                        type: 'image',
                        rect: ['47px', '91px', '83px', '157px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkAnim.png', '0px', '0px']
                    },
                    {
                        id: 'scene4ForkLifter',
                        type: 'image',
                        rect: ['46px', '152px', '84px', '193px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkLifter.png', '0px', '0px']
                    },
                    {
                        id: 'scene4Forkmain',
                        type: 'image',
                        rect: ['0px', '246px', '165px', '214px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Forkmain.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['295px', '186px', '191', '460', 'auto', 'auto'],
                    id: 'fork2',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'scene4ForkBarsCopy',
                        type: 'image',
                        rect: ['67px', '89px', '90px', '86px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkBars.png', '0px', '0px']
                    },
                    {
                        rect: ['24px', '146px', '152', '169', 'auto', 'auto'],
                        id: 'container',
                        display: 'block',
                        type: 'group',
                        c: [
                        {
                            id: 'scene4Cont32',
                            type: 'image',
                            rect: ['8px', '2px', '155px', '169px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont3.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'scene4ForkAnimCopy',
                        type: 'image',
                        rect: ['47px', '91px', '83px', '157px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkAnim.png', '0px', '0px']
                    },
                    {
                        id: 'scene4ForkLifterCopy',
                        type: 'image',
                        rect: ['46px', '152px', '84px', '193px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkLifter.png', '0px', '0px']
                    },
                    {
                        id: 'scene4ForkmainCopy',
                        type: 'image',
                        rect: ['0px', '246px', '165px', '214px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Forkmain.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['295px', '186px', '191', '460', 'auto', 'auto'],
                    id: 'fork3',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'scene4ForkBarsCopy3',
                        type: 'image',
                        rect: ['67px', '89px', '90px', '86px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkBars.png', '0px', '0px']
                    },
                    {
                        rect: ['24px', '146px', '152', '169', 'auto', 'auto'],
                        id: 'containerCopy2',
                        display: 'block',
                        type: 'group',
                        c: [
                        {
                            id: 'scene4Cont23',
                            type: 'image',
                            rect: ['7px', '1px', '159px', '166px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene4Cont2.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'scene4ForkAnimCopy3',
                        type: 'image',
                        rect: ['47px', '91px', '83px', '157px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkAnim.png', '0px', '0px']
                    },
                    {
                        id: 'scene4ForkLifterCopy3',
                        type: 'image',
                        rect: ['46px', '152px', '84px', '193px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4ForkLifter.png', '0px', '0px']
                    },
                    {
                        id: 'scene4ForkmainCopy3',
                        type: 'image',
                        rect: ['0px', '246px', '165px', '214px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Forkmain.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['125px', '171px', '369', '210', 'auto', 'auto'],
                    id: 'staysCopy2',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        rect: ['0px', '0px', '159px', '166px', 'auto', 'auto'],
                        type: 'image',
                        id: 'scene4Cont4StayCopy2',
                        opacity: 1,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene4Cont2.png', '0px', '0px']
                    },
                    {
                        rect: ['110px', '21px', '155px', '169px', 'auto', 'auto'],
                        id: 'scene4ContStayCopy2',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene4Cont3.png', '0px', '0px']
                    },
                    {
                        rect: ['217px', '41px', '152px', '169px', 'auto', 'auto'],
                        type: 'image',
                        id: 'scene4Cont2StayCopy2',
                        opacity: 0.59641768292683,
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene4Cont4.png', '0px', '0px']
                    }]
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['467', '310', 'auto', 'auto', 'auto', 'auto'],
                    id: 'scene4PumpGlowComp'
                },
                {
                    rect: ['506px', '489px', '121px', '158px', 'auto', 'auto'],
                    type: 'image',
                    id: 'scene4blueguy',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene4blueguy.png', '0px', '0px']
                },
                {
                    rect: ['531px', '513px', '153px', '170px', 'auto', 'auto'],
                    id: 'scene4Year',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene4Year.png', '0px', '0px']
                },
                {
                    type: 'group',
                    display: 'block',
                    opacity: 1,
                    id: 'scene4Texter1',
                    rect: ['642px', '14px', '400', '240', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene4Box1',
                        type: 'image',
                        rect: ['0px', '0px', '400px', '231px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Box1.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp',
                        type: 'rect',
                        rect: ['227px', '191px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackComp',
                        type: 'rect',
                        rect: ['134px', '191px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    rect: ['642', '14', '400', '240', 'auto', 'auto'],
                    id: 'scene4Texter2',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'scene4Box2',
                        type: 'image',
                        rect: ['0px', '0px', '400px', '256px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Box2.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp42',
                        type: 'rect',
                        rect: ['227px', '214px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackComp42',
                        type: 'rect',
                        rect: ['134px', '214px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    rect: ['642', '14', '400', '240', 'auto', 'auto'],
                    id: 'scene4Texter3',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'scene4Box32',
                        type: 'image',
                        rect: ['0px', '-1px', '400px', '322px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Box3.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp42Copy',
                        type: 'rect',
                        rect: ['223px', '284px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackComp42Copy',
                        type: 'rect',
                        rect: ['130px', '284px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    rect: ['642', '14', '400', '240', 'auto', 'auto'],
                    id: 'scene4Texter4',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'scene4Box4',
                        type: 'image',
                        rect: ['0px', '1px', '400px', '211px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene4Box4.png', '0px', '0px']
                    },
                    {
                        id: 'navForwardComp44',
                        type: 'rect',
                        rect: ['223px', '124px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navBackComp44',
                        type: 'rect',
                        rect: ['130px', '124px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'scene4PumpGlowComp',
                symbolName: 'scene4PumpGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp44',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp44',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp42',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp42',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp42Copy',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp42Copy',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene4ForkAnimCopy}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '47px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '239px']
            ],
            "${_fork2}": [
                ["style", "top", '601px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2'],
                ["style", "left", '-74px'],
                ["style", "display", 'none']
            ],
            "${_scene4Year}": [
                ["style", "top", '513px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '531px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_scene4Cont4StayCopy2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_scene4Cont4Stay}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_fork3}": [
                ["style", "top", '601px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2'],
                ["style", "left", '-74px'],
                ["style", "display", 'none']
            ],
            "${_scene4craneTop}": [
                ["style", "left", '49px'],
                ["style", "top", '23px']
            ],
            "${_scene4ContStay}": [
                ["style", "top", '21px'],
                ["style", "left", '110px'],
                ["style", "display", 'none']
            ],
            "${_scene4ForkBarsCopy3}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '237px'],
                ["style", "left", '67px'],
                ["transform", "scaleY", '1']
            ],
            "${_scene4Tire3}": [
                ["style", "top", '367px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '104px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_scene4Cont4StayCopy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_scene4Rim1}": [
                ["style", "top", '332px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '400px']
            ],
            "${_scene4ContStayCopy}": [
                ["style", "top", '21px'],
                ["style", "left", '110px'],
                ["style", "display", 'none']
            ],
            "${_scene4ForkmainCopy3}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '246px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1']
            ],
            "${_scene4Cont2StayCopy}": [
                ["style", "top", '41px'],
                ["style", "opacity", '1'],
                ["style", "left", '217px'],
                ["style", "display", 'none']
            ],
            "${_scene4truckUnder}": [
                ["style", "top", '172px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${_scene4Texter4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_scene4ContStayCopy2}": [
                ["style", "top", '21px'],
                ["style", "left", '110px'],
                ["style", "display", 'none']
            ],
            "${_scene4CraneBody}": [
                ["style", "top", '15px'],
                ["style", "left", '0px']
            ],
            "${_scene4ForkBars}": [
                ["style", "top", '237px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '67px']
            ],
            "${_scene4Box2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_scene4Rim3}": [
                ["style", "top", '277px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '63px']
            ],
            "${_scene4truckCab}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '380px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '166px']
            ],
            "${_scene4craneEndRght}": [
                ["style", "left", '339px'],
                ["style", "top", '127px']
            ],
            "${_scene4ForkBarsCopy}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '67px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '237px']
            ],
            "${_scene4ContStays}": [
                ["style", "top", '66px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '21px'],
                ["transform", "scaleX", '1']
            ],
            "${_scene4Cont2StayCopy2}": [
                ["style", "top", '41px'],
                ["style", "opacity", '1'],
                ["style", "left", '217px'],
                ["style", "display", 'none']
            ],
            "${_truckAppear}": [
                ["style", "top", '-42px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "height", '404px'],
                ["style", "left", '-584px'],
                ["style", "width", '545px']
            ],
            "${_scene4Rim2}": [
                ["style", "top", '291px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '131px']
            ],
            "${_scene4RCraneRim2}": [
                ["style", "top", '184px'],
                ["transform", "scaleX", '0.88'],
                ["transform", "scaleY", '0.88'],
                ["style", "left", '39px']
            ],
            "${_scene4truckCabStay}": [
                ["style", "top", '271px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '467px'],
                ["style", "display", 'none']
            ],
            "${_staysCopy2}": [
                ["style", "top", '171px'],
                ["style", "left", '125px'],
                ["style", "display", 'none']
            ],
            "${_scene4Tire1}": [
                ["style", "top", '425px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '431px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_scene4ForkAnimCopy3}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '239px'],
                ["style", "left", '47px'],
                ["transform", "scaleY", '1']
            ],
            "${_scene4ForkLifterCopy}": [
                ["style", "left", '46px'],
                ["style", "top", '189px']
            ],
            "${_scene4TruckContainer}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_scene4ForkmainCopy}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '246px']
            ],
            "${_scene4ForkAnim}": [
                ["style", "top", '239px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '47px']
            ],
            "${_staysCopy}": [
                ["style", "left", '38px'],
                ["style", "top", '42px']
            ],
            "${_navForwardComp}": [
                ["style", "left", '214px'],
                ["style", "top", '191px']
            ],
            "${_navForwardComp44}": [
                ["style", "left", '213px'],
                ["style", "top", '171px']
            ],
            "${_scene4Tire2}": [
                ["style", "top", '376px'],
                ["transform", "scaleY", '0.5'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '168px'],
                ["transform", "scaleX", '0.5']
            ],
            "${_scene4ForkLifter}": [
                ["style", "left", '46px'],
                ["style", "top", '189px']
            ],
            "${_scene4TruckChasis}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '19px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '155px']
            ],
            "${_scene4Cont23}": [
                ["style", "left", '7px'],
                ["style", "top", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '672px'],
                ["style", "width", '1054px']
            ],
            "${_scene4PumpGlowComp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '466px']
            ],
            "${_scene4craneBttm}": [
                ["style", "top", '-36px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '101px']
            ],
            "${_scene4Texter2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_scene4Cont1}": [
                ["style", "top", '66px'],
                ["transform", "scaleY", '1.01'],
                ["style", "display", 'none'],
                ["style", "left", '18px'],
                ["transform", "scaleX", '1.01']
            ],
            "${_scene4blueguy}": [
                ["style", "top", '489px'],
                ["style", "opacity", '1'],
                ["style", "left", '506px'],
                ["style", "display", 'none']
            ],
            "${_stays}": [
                ["style", "left", '38px'],
                ["style", "top", '42px']
            ],
            "${_navBackComp44}": [
                ["style", "left", '141px'],
                ["style", "top", '171px']
            ],
            "${_navBackComp42Copy}": [
                ["style", "left", '140px'],
                ["style", "top", '284px']
            ],
            "${_scene4Box4}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '211px']
            ],
            "${_scene4ForkLifterCopy3}": [
                ["style", "left", '46px'],
                ["style", "top", '189px']
            ],
            "${_scene4craneEndLeft}": [
                ["style", "left", '25px'],
                ["style", "top", '64px']
            ],
            "${_fork1}": [
                ["style", "top", '672px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2'],
                ["style", "left", '133px'],
                ["style", "display", 'none']
            ],
            "${_craneBttmComp}": [
                ["style", "top", '44px'],
                ["style", "left", '223px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_scene4Forkmain}": [
                ["style", "top", '246px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${_scene4TruckContainerLift}": [
                ["style", "top", '45px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '1px'],
                ["style", "display", 'none']
            ],
            "${_scene4Texter3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_scene4Cont42}": [
                ["style", "top", '148px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["style", "left", '39px'],
                ["transform", "scaleX", '1']
            ],
            "${_scene4Texter1}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1']
            ],
            "${_container}": [
                ["style", "top", '146px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '24px'],
                ["style", "display", 'block']
            ],
            "${_navForwardComp42Copy}": [
                ["style", "top", '284px'],
                ["style", "left", '212px']
            ],
            "${_scene4RCraneRim1}": [
                ["style", "top", '225px'],
                ["transform", "scaleY", '0.88'],
                ["style", "left", '245px'],
                ["transform", "scaleX", '0.88']
            ],
            "${_scene4Cont32}": [
                ["style", "left", '8px'],
                ["style", "top", '2px']
            ],
            "${_navForwardComp42}": [
                ["style", "left", '212px'],
                ["style", "top", '213px']
            ],
            "${_navBackComp}": [
                ["style", "left", '142px'],
                ["style", "top", '191px']
            ],
            "${_scene4Box1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_navBackComp42}": [
                ["style", "left", '140px'],
                ["style", "top", '213px']
            ],
            "${_craneTopComp}": [
                ["style", "top", '-56px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '230px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '150px'],
                ["style", "width", '441px']
            ],
            "${_truckChasis}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '5deg'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0px']
            ],
            "${_scene4Cont2Stay}": [
                ["style", "top", '41px'],
                ["style", "opacity", '1'],
                ["style", "left", '217px'],
                ["style", "display", 'none']
            ],
            "${_scene4Box32}": [
                ["style", "left", '0px'],
                ["style", "top", '-1px']
            ],
            "${_containerCopy2}": [
                ["style", "top", '146px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '24px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 37000,
            autoPlay: true,
            labels: {
                "sc41": 0,
                "sc42": 10000,
                "sc43": 25000,
                "sc44": 30000,
                "sc4Play": 35000
            },
            timeline: [
                { id: "eid4585", tween: [ "transform", "${_container}", "scaleX", '1', { fromValue: '1'}], position: 12500, duration: 0 },
                { id: "eid4593", tween: [ "transform", "${_container}", "scaleX", '1', { fromValue: '1'}], position: 15167, duration: 0 },
                { id: "eid4595", tween: [ "transform", "${_container}", "scaleX", '1', { fromValue: '1'}], position: 15544, duration: 0 },
                { id: "eid3621", tween: [ "transform", "${_scene4truckCab}", "scaleX", '1', { fromValue: '1'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid5281", tween: [ "style", "${_navBackComp42Copy}", "left", '140px', { fromValue: '140px'}], position: 27999, duration: 0 },
                { id: "eid3664", tween: [ "style", "${_craneTopComp}", "top", '60px', { fromValue: '-56px'}], position: 3000, duration: 1000 },
                { id: "eid3819", tween: [ "style", "${_craneTopComp}", "top", '-56px', { fromValue: '60px'}], position: 4500, duration: 500 },
                { id: "eid3878", tween: [ "style", "${_craneTopComp}", "top", '-110px', { fromValue: '-56px'}], position: 5000, duration: 1000 },
                { id: "eid3902", tween: [ "style", "${_craneTopComp}", "top", '-26px', { fromValue: '-110px'}], position: 6250, duration: 1000 },
                { id: "eid3925", tween: [ "style", "${_craneTopComp}", "top", '128px', { fromValue: '-26px'}], position: 7250, duration: 1250 },
                { id: "eid4003", tween: [ "style", "${_craneTopComp}", "top", '14px', { fromValue: '128px'}], position: 9000, duration: 500 },
                { id: "eid4030", tween: [ "style", "${_craneTopComp}", "top", '40px', { fromValue: '14px'}], position: 9500, duration: 377 },
                { id: "eid3629", tween: [ "style", "${_scene4TruckChasis}", "top", '130px', { fromValue: '155px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid4363", tween: [ "style", "${_scene4ForkAnim}", "left", '47px', { fromValue: '47px'}], position: 10500, duration: 0 },
                { id: "eid4371", tween: [ "style", "${_scene4ForkAnim}", "left", '47px', { fromValue: '47px'}], position: 11500, duration: 0 },
                { id: "eid4435", tween: [ "style", "${_scene4ForkAnim}", "left", '47px', { fromValue: '47px'}], position: 13544, duration: 0 },
                { id: "eid3534", tween: [ "transform", "${_scene4Rim1}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1000, duration: 1006, easing: "easeOutBack" },
                { id: "eid4698", tween: [ "transform", "${_fork3}", "scaleX", '1', { fromValue: '1.2'}], position: 14500, duration: 1000 },
                { id: "eid4699", tween: [ "transform", "${_fork3}", "scaleX", '1', { fromValue: '1'}], position: 17167, duration: 0 },
                { id: "eid4700", tween: [ "transform", "${_fork3}", "scaleX", '1', { fromValue: '1'}], position: 18198, duration: 0 },
                { id: "eid4135", tween: [ "style", "${_scene4Tire1}", "left", '431px', { fromValue: '431px'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4156", tween: [ "style", "${_scene4Tire1}", "left", '431px', { fromValue: '431px'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid5278", tween: [ "style", "${_navBackComp42}", "top", '213px', { fromValue: '213px'}], position: 11436, duration: 0 },
                { id: "eid3530", tween: [ "transform", "${_scene4Rim2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1000, duration: 1006, easing: "easeOutBack" },
                { id: "eid3628", tween: [ "style", "${_scene4TruckContainer}", "top", '-25px', { fromValue: '0px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid3820", tween: [ "style", "${_scene4TruckContainer}", "top", '-129px', { fromValue: '-25px'}], position: 4500, duration: 500 },
                { id: "eid4547", tween: [ "style", "${_scene4ForkLifterCopy}", "left", '46px', { fromValue: '46px'}], position: 12500, duration: 0 },
                { id: "eid4548", tween: [ "style", "${_scene4ForkLifterCopy}", "left", '46px', { fromValue: '46px'}], position: 13500, duration: 0 },
                { id: "eid4839", tween: [ "style", "${_scene4truckCabStay}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid4840", tween: [ "style", "${_scene4truckCabStay}", "display", 'none', { fromValue: 'block'}], position: 9877, duration: 0 },
                { id: "eid4540", tween: [ "transform", "${_fork2}", "scaleX", '1', { fromValue: '1.2'}], position: 12500, duration: 1000 },
                { id: "eid4541", tween: [ "transform", "${_fork2}", "scaleX", '1', { fromValue: '1'}], position: 15167, duration: 0 },
                { id: "eid4542", tween: [ "transform", "${_fork2}", "scaleX", '1', { fromValue: '1'}], position: 16198, duration: 0 },
                { id: "eid4823", tween: [ "style", "${_scene4blueguy}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid3521", tween: [ "transform", "${_truckChasis}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1900, duration: 106, easing: "easeOutBack" },
                { id: "eid4695", tween: [ "transform", "${_fork3}", "scaleY", '1', { fromValue: '1.2'}], position: 14500, duration: 1000 },
                { id: "eid4696", tween: [ "transform", "${_fork3}", "scaleY", '1', { fromValue: '1'}], position: 17167, duration: 0 },
                { id: "eid4697", tween: [ "transform", "${_fork3}", "scaleY", '1', { fromValue: '1'}], position: 18198, duration: 0 },
                { id: "eid4189", tween: [ "transform", "${_scene4Rim3}", "scaleX", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4181", tween: [ "transform", "${_scene4Rim3}", "scaleX", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4168", tween: [ "transform", "${_truckChasis}", "scaleY", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid3970", tween: [ "style", "${_scene4Texter4}", "opacity", '1', { fromValue: '0'}], position: 30000, duration: 500 },
                { id: "eid5603", tween: [ "style", "${_scene4Texter4}", "opacity", '0', { fromValue: '1'}], position: 35000, duration: 500 },
                { id: "eid3612", tween: [ "style", "${_scene4Tire3}", "top", '364px', { fromValue: '367px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid4139", tween: [ "style", "${_scene4Tire3}", "top", '364px', { fromValue: '364px'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4154", tween: [ "style", "${_scene4Tire3}", "top", '364px', { fromValue: '364px'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4221", tween: [ "transform", "${_scene4Rim1}", "scaleY", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid3599", tween: [ "transform", "${_scene4Tire1}", "scaleX", '1', { fromValue: '0.5'}], position: 2500, duration: 500, easing: "easeOutBounce" },
                { id: "eid4159", tween: [ "transform", "${_scene4Tire1}", "scaleX", '0.5', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid3627", tween: [ "style", "${_scene4truckCab}", "top", '141px', { fromValue: '166px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid4570", tween: [ "style", "${_scene4ForkBarsCopy}", "left", '67px', { fromValue: '67px'}], position: 12500, duration: 0 },
                { id: "eid4571", tween: [ "style", "${_scene4ForkBarsCopy}", "left", '67px', { fromValue: '67px'}], position: 13500, duration: 0 },
                { id: "eid4572", tween: [ "style", "${_scene4ForkBarsCopy}", "left", '67px', { fromValue: '67px'}], position: 15544, duration: 0 },
                { id: "eid4693", tween: [ "style", "${_fork3}", "top", '161px', { fromValue: '601px'}], position: 14500, duration: 1000 },
                { id: "eid4694", tween: [ "style", "${_fork3}", "top", '479px', { fromValue: '161px'}], position: 17167, duration: 1031 },
                { id: "eid3600", tween: [ "transform", "${_scene4Tire1}", "scaleY", '1', { fromValue: '0.5'}], position: 2500, duration: 500, easing: "easeOutBounce" },
                { id: "eid4160", tween: [ "transform", "${_scene4Tire1}", "scaleY", '0.5', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid3882", tween: [ "transform", "${_craneBttmComp}", "scaleX", '0.95', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid3898", tween: [ "transform", "${_craneBttmComp}", "scaleX", '0.95', { fromValue: '0.95'}], position: 6250, duration: 0 },
                { id: "eid4078", tween: [ "style", "${_scene4truckUnder}", "top", '142px', { fromValue: '172px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid4196", tween: [ "style", "${_scene4truckUnder}", "top", '168px', { fromValue: '142px'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid5294", tween: [ "style", "${_navBackComp44}", "left", '141px', { fromValue: '141px'}], position: 32332, duration: 0 },
                { id: "eid3691", tween: [ "transform", "${_scene4craneBttm}", "scaleY", '1.05', { fromValue: '1'}], position: 3000, duration: 1000 },
                { id: "eid3800", tween: [ "transform", "${_scene4craneBttm}", "scaleY", '1.05', { fromValue: '1.05'}], position: 4500, duration: 0 },
                { id: "eid3929", tween: [ "transform", "${_scene4craneBttm}", "scaleY", '1.05', { fromValue: '1.05'}], position: 7250, duration: 0 },
                { id: "eid4050", tween: [ "transform", "${_scene4craneBttm}", "scaleY", '1.05', { fromValue: '1.05'}], position: 9000, duration: 0 },
                { id: "eid3536", tween: [ "style", "${_scene4Tire2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid4206", tween: [ "style", "${_scene4Tire2}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid5296", tween: [ "style", "${_navBackComp44}", "top", '171px', { fromValue: '171px'}], position: 32332, duration: 0 },
                { id: "eid4353", tween: [ "style", "${_fork1}", "left", '303px', { fromValue: '133px'}], position: 10500, duration: 1000 },
                { id: "eid4413", tween: [ "style", "${_fork1}", "left", '120px', { fromValue: '303px'}], position: 13167, duration: 1031 },
                { id: "eid4891", tween: [ "style", "${_scene4ContStayCopy2}", "display", 'block', { fromValue: 'none'}], position: 15359, duration: 0 },
                { id: "eid4734", tween: [ "transform", "${_scene4ForkBarsCopy3}", "scaleY", '1', { fromValue: '1'}], position: 23950, duration: 0 },
                { id: "eid4366", tween: [ "style", "${_scene4ForkBars}", "left", '67px', { fromValue: '67px'}], position: 10500, duration: 0 },
                { id: "eid4374", tween: [ "style", "${_scene4ForkBars}", "left", '67px', { fromValue: '67px'}], position: 11500, duration: 0 },
                { id: "eid4433", tween: [ "style", "${_scene4ForkBars}", "left", '67px', { fromValue: '67px'}], position: 13544, duration: 0 },
                { id: "eid3866", tween: [ "style", "${_scene4TruckContainer}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid3613", tween: [ "style", "${_scene4Tire2}", "left", '185px', { fromValue: '168px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid4198", tween: [ "style", "${_scene4Tire2}", "left", '164px', { fromValue: '185px'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid4249", tween: [ "style", "${_scene4ContStays}", "left", '21px', { fromValue: '21px'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid3603", tween: [ "transform", "${_scene4Tire3}", "scaleX", '1', { fromValue: '0.5'}], position: 2500, duration: 500, easing: "easeOutBounce" },
                { id: "eid4161", tween: [ "transform", "${_scene4Tire3}", "scaleX", '0.5', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid4774", tween: [ "style", "${_scene4Cont4Stay}", "opacity", '1', { fromValue: '1'}], position: 17359, duration: 0 },
                { id: "eid3671", tween: [ "style", "${_scene4craneBttm}", "top", '-22px', { fromValue: '-36px'}], position: 3000, duration: 1000 },
                { id: "eid3829", tween: [ "style", "${_scene4craneBttm}", "top", '-73px', { fromValue: '-22px'}], position: 4500, duration: 500 },
                { id: "eid3931", tween: [ "style", "${_scene4craneBttm}", "top", '21px', { fromValue: '-73px'}], position: 7250, duration: 1250 },
                { id: "eid4053", tween: [ "style", "${_scene4craneBttm}", "top", '-102px', { fromValue: '21px'}], position: 9000, duration: 500 },
                { id: "eid4055", tween: [ "style", "${_scene4craneBttm}", "top", '-75px', { fromValue: '-102px'}], position: 9500, duration: 377 },
                { id: "eid3688", tween: [ "transform", "${_craneTopComp}", "scaleX", '1.1', { fromValue: '1'}], position: 3000, duration: 1000 },
                { id: "eid3817", tween: [ "transform", "${_craneTopComp}", "scaleX", '1.1', { fromValue: '1.1'}], position: 4500, duration: 0 },
                { id: "eid3880", tween: [ "transform", "${_craneTopComp}", "scaleX", '0.95', { fromValue: '1.1'}], position: 5000, duration: 1000 },
                { id: "eid3897", tween: [ "transform", "${_craneTopComp}", "scaleX", '0.95', { fromValue: '0.95'}], position: 6250, duration: 0 },
                { id: "eid3989", tween: [ "transform", "${_craneTopComp}", "scaleX", '1', { fromValue: '0.95'}], position: 7250, duration: 1250 },
                { id: "eid3998", tween: [ "transform", "${_craneTopComp}", "scaleX", '1', { fromValue: '1'}], position: 9000, duration: 0 },
                { id: "eid3883", tween: [ "transform", "${_craneBttmComp}", "scaleY", '0.95', { fromValue: '1'}], position: 5000, duration: 1000 },
                { id: "eid3900", tween: [ "transform", "${_craneBttmComp}", "scaleY", '0.95', { fromValue: '0.95'}], position: 6250, duration: 0 },
                { id: "eid4379", tween: [ "style", "${_scene4Cont42}", "top", '-28px', { fromValue: '148px'}], position: 10500, duration: 1000 },
                { id: "eid4395", tween: [ "style", "${_scene4Cont42}", "top", '12px', { fromValue: '-28px'}], position: 12000, duration: 500 },
                { id: "eid4476", tween: [ "style", "${_scene4Cont42}", "top", '-129px', { fromValue: '12px'}], position: 13167, duration: 377 },
                { id: "eid4365", tween: [ "style", "${_scene4Cont42}", "left", '39px', { fromValue: '39px'}], position: 10500, duration: 0 },
                { id: "eid4373", tween: [ "style", "${_scene4Cont42}", "left", '39px', { fromValue: '39px'}], position: 11500, duration: 0 },
                { id: "eid4468", tween: [ "style", "${_scene4Cont42}", "left", '39px', { fromValue: '39px'}], position: 12500, duration: 0 },
                { id: "eid4475", tween: [ "style", "${_scene4Cont42}", "left", '107px', { fromValue: '39px'}], position: 13167, duration: 377 },
                { id: "eid4887", tween: [ "style", "${_scene4ContStayCopy}", "display", 'block', { fromValue: 'none'}], position: 15359, duration: 0 },
                { id: "eid4427", tween: [ "transform", "${_scene4ForkBars}", "scaleX", '1', { fromValue: '1'}], position: 13544, duration: 0 },
                { id: "eid4718", tween: [ "transform", "${_containerCopy2}", "scaleY", '1', { fromValue: '1'}], position: 14500, duration: 0 },
                { id: "eid4185", tween: [ "style", "${_scene4Rim3}", "left", '63px', { fromValue: '63px'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4177", tween: [ "style", "${_scene4Rim3}", "left", '63px', { fromValue: '63px'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4224", tween: [ "style", "${_scene4Rim1}", "left", '400px', { fromValue: '400px'}], position: 1006, duration: 1494, easing: "easeOutBack" },
                { id: "eid4228", tween: [ "style", "${_scene4Rim1}", "left", '399px', { fromValue: '400px'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid3875", tween: [ "style", "${_craneBttmComp}", "left", '-371px', { fromValue: '223px'}], position: 5000, duration: 1000 },
                { id: "eid3903", tween: [ "style", "${_craneBttmComp}", "left", '263px', { fromValue: '-371px'}], position: 6250, duration: 1000 },
                { id: "eid4432", tween: [ "transform", "${_scene4ForkAnim}", "scaleY", '1', { fromValue: '1'}], position: 13544, duration: 0 },
                { id: "eid4566", tween: [ "style", "${_scene4ForkBarsCopy}", "top", '61px', { fromValue: '237px'}], position: 12500, duration: 1000 },
                { id: "eid4567", tween: [ "style", "${_scene4ForkBarsCopy}", "top", '101px', { fromValue: '61px'}], position: 14000, duration: 500 },
                { id: "eid4568", tween: [ "style", "${_scene4ForkBarsCopy}", "top", '228px', { fromValue: '101px'}], position: 15544, duration: 500 },
                { id: "eid4703", tween: [ "style", "${_fork3}", "display", 'block', { fromValue: 'none'}], position: 14500, duration: 0, easing: "easeOutBounce" },
                { id: "eid4165", tween: [ "style", "${_truckChasis}", "left", '0px', { fromValue: '0px'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4842", tween: [ "style", "${_scene4blueguy}", "opacity", '0', { fromValue: '1'}], position: 35000, duration: 500 },
                { id: "eid11262", tween: [ "style", "${_scene4PumpGlowComp}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid4730", tween: [ "transform", "${_scene4ForkBarsCopy3}", "scaleX", '1', { fromValue: '1'}], position: 17544, duration: 0 },
                { id: "eid4893", tween: [ "style", "${_scene4Cont4StayCopy2}", "opacity", '1', { fromValue: '1'}], position: 17359, duration: 0 },
                { id: "eid4204", tween: [ "style", "${_scene4Tire3}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 250, easing: "easeOutBack" },
                { id: "eid4890", tween: [ "style", "${_scene4Cont2StayCopy2}", "display", 'block', { fromValue: 'none'}], position: 13345, duration: 0 },
                { id: "eid4711", tween: [ "style", "${_scene4ForkAnimCopy3}", "left", '47px', { fromValue: '47px'}], position: 14500, duration: 0 },
                { id: "eid4712", tween: [ "style", "${_scene4ForkAnimCopy3}", "left", '47px', { fromValue: '47px'}], position: 15500, duration: 0 },
                { id: "eid4713", tween: [ "style", "${_scene4ForkAnimCopy3}", "left", '47px', { fromValue: '47px'}], position: 17544, duration: 0 },
                { id: "eid4251", tween: [ "transform", "${_scene4ContStays}", "scaleX", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4380", tween: [ "style", "${_scene4ForkAnim}", "top", '63px', { fromValue: '239px'}], position: 10500, duration: 1000 },
                { id: "eid4396", tween: [ "style", "${_scene4ForkAnim}", "top", '103px', { fromValue: '63px'}], position: 12000, duration: 500 },
                { id: "eid4440", tween: [ "style", "${_scene4ForkAnim}", "top", '230px', { fromValue: '103px'}], position: 13544, duration: 500 },
                { id: "eid4704", tween: [ "style", "${_scene4ForkLifterCopy3}", "left", '46px', { fromValue: '46px'}], position: 14500, duration: 0 },
                { id: "eid4705", tween: [ "style", "${_scene4ForkLifterCopy3}", "left", '46px', { fromValue: '46px'}], position: 15500, duration: 0 },
                { id: "eid4569", tween: [ "transform", "${_scene4ForkBarsCopy}", "scaleY", '1', { fromValue: '1'}], position: 15544, duration: 0 },
                { id: "eid4203", tween: [ "style", "${_scene4Tire1}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 250, easing: "easeOutBack" },
                { id: "eid4077", tween: [ "transform", "${_scene4truckUnder}", "scaleY", '1', { fromValue: '1'}], position: 2500, duration: 0 },
                { id: "eid4174", tween: [ "transform", "${_scene4truckUnder}", "scaleY", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4172", tween: [ "transform", "${_scene4truckUnder}", "scaleY", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4706", tween: [ "style", "${_scene4ForkLifterCopy3}", "top", '152px', { fromValue: '189px'}], position: 14500, duration: 1000 },
                { id: "eid4238", tween: [ "style", "${_scene4Rim3}", "top", '278px', { fromValue: '277px'}], position: 2500, duration: 7500, easing: "easeOutBack" },
                { id: "eid4193", tween: [ "style", "${_scene4Rim3}", "top", '276px', { fromValue: '278px'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid3510", tween: [ "style", "${_truckAppear}", "left", '87px', { fromValue: '-584px'}], position: 1006, duration: 1000, easing: "easeOutBack" },
                { id: "eid4850", tween: [ "style", "${_truckAppear}", "left", '1073px', { fromValue: '87px'}], position: 35500, duration: 1500, easing: "easeInBack" },
                { id: "eid4167", tween: [ "transform", "${_truckChasis}", "scaleX", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid3689", tween: [ "transform", "${_craneTopComp}", "scaleY", '1.1', { fromValue: '1'}], position: 3000, duration: 1000 },
                { id: "eid3818", tween: [ "transform", "${_craneTopComp}", "scaleY", '1.1', { fromValue: '1.1'}], position: 4500, duration: 0 },
                { id: "eid3881", tween: [ "transform", "${_craneTopComp}", "scaleY", '0.95', { fromValue: '1.1'}], position: 5000, duration: 1000 },
                { id: "eid3899", tween: [ "transform", "${_craneTopComp}", "scaleY", '0.95', { fromValue: '0.95'}], position: 6250, duration: 0 },
                { id: "eid3990", tween: [ "transform", "${_craneTopComp}", "scaleY", '1', { fromValue: '0.95'}], position: 7250, duration: 1250 },
                { id: "eid3999", tween: [ "transform", "${_craneTopComp}", "scaleY", '1', { fromValue: '1'}], position: 9000, duration: 0 },
                { id: "eid5276", tween: [ "style", "${_navBackComp}", "left", '142px', { fromValue: '142px'}], position: 0, duration: 0 },
                { id: "eid4731", tween: [ "style", "${_scene4ForkBarsCopy3}", "left", '67px', { fromValue: '67px'}], position: 14500, duration: 0 },
                { id: "eid4732", tween: [ "style", "${_scene4ForkBarsCopy3}", "left", '67px', { fromValue: '67px'}], position: 15500, duration: 0 },
                { id: "eid4733", tween: [ "style", "${_scene4ForkBarsCopy3}", "left", '67px', { fromValue: '67px'}], position: 17544, duration: 0 },
                { id: "eid4537", tween: [ "transform", "${_fork2}", "scaleY", '1', { fromValue: '1.2'}], position: 12500, duration: 1000 },
                { id: "eid4538", tween: [ "transform", "${_fork2}", "scaleY", '1', { fromValue: '1'}], position: 15167, duration: 0 },
                { id: "eid4539", tween: [ "transform", "${_fork2}", "scaleY", '1', { fromValue: '1'}], position: 16198, duration: 0 },
                { id: "eid4412", tween: [ "style", "${_scene4Cont42}", "display", 'none', { fromValue: 'block'}], position: 13345, duration: 0 },
                { id: "eid3670", tween: [ "style", "${_scene4craneBttm}", "left", '38px', { fromValue: '101px'}], position: 3000, duration: 1000 },
                { id: "eid3830", tween: [ "style", "${_scene4craneBttm}", "left", '38px', { fromValue: '38px'}], position: 4500, duration: 500 },
                { id: "eid3930", tween: [ "style", "${_scene4craneBttm}", "left", '-1px', { fromValue: '38px'}], position: 7250, duration: 1250 },
                { id: "eid4054", tween: [ "style", "${_scene4craneBttm}", "left", '-1px', { fromValue: '-1px'}], position: 9000, duration: 0 },
                { id: "eid4065", tween: [ "style", "${_scene4craneBttm}", "left", '137px', { fromValue: '-1px'}], position: 9500, duration: 377 },
                { id: "eid5295", tween: [ "style", "${_navForwardComp44}", "left", '213px', { fromValue: '213px'}], position: 32332, duration: 0 },
                { id: "eid3614", tween: [ "style", "${_scene4Tire2}", "top", '384px', { fromValue: '376px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid4199", tween: [ "style", "${_scene4Tire2}", "top", '378px', { fromValue: '384px'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid3876", tween: [ "style", "${_craneBttmComp}", "top", '-10px', { fromValue: '44px'}], position: 5000, duration: 1000 },
                { id: "eid3904", tween: [ "style", "${_craneBttmComp}", "top", '74px', { fromValue: '-10px'}], position: 6250, duration: 1000 },
                { id: "eid4382", tween: [ "style", "${_scene4ForkLifter}", "top", '152px', { fromValue: '189px'}], position: 10500, duration: 1000 },
                { id: "eid4252", tween: [ "style", "${_scene4ContStays}", "top", '60px', { fromValue: '66px'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid4549", tween: [ "transform", "${_scene4ForkAnimCopy}", "scaleX", '1', { fromValue: '1'}], position: 15544, duration: 0 },
                { id: "eid3660", tween: [ "transform", "${_craneTopComp}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0, easing: "easeOutBounce" },
                { id: "eid3531", tween: [ "transform", "${_scene4Rim3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 1000, duration: 1006, easing: "easeOutBack" },
                { id: "eid3604", tween: [ "transform", "${_scene4Tire3}", "scaleY", '1', { fromValue: '0.5'}], position: 2500, duration: 500, easing: "easeOutBounce" },
                { id: "eid4162", tween: [ "transform", "${_scene4Tire3}", "scaleY", '0.5', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid4587", tween: [ "style", "${_container}", "left", '30px', { fromValue: '24px'}], position: 12500, duration: 1000 },
                { id: "eid4599", tween: [ "style", "${_container}", "left", '111px', { fromValue: '30px'}], position: 15167, duration: 377 },
                { id: "eid3622", tween: [ "transform", "${_scene4TruckContainer}", "scaleX", '1', { fromValue: '1'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid3813", tween: [ "transform", "${_scene4TruckContainer}", "scaleX", '1', { fromValue: '1'}], position: 4500, duration: 0 },
                { id: "eid4190", tween: [ "transform", "${_scene4Rim2}", "scaleX", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4182", tween: [ "transform", "${_scene4Rim2}", "scaleX", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4894", tween: [ "style", "${_staysCopy2}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid4895", tween: [ "style", "${_staysCopy2}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0 },
                { id: "eid4710", tween: [ "transform", "${_scene4ForkAnimCopy3}", "scaleY", '1', { fromValue: '1'}], position: 17544, duration: 0 },
                { id: "eid4284", tween: [ "style", "${_fork1}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid3602", tween: [ "transform", "${_scene4Tire2}", "scaleY", '1', { fromValue: '0.5'}], position: 2500, duration: 500, easing: "easeOutBounce" },
                { id: "eid4164", tween: [ "transform", "${_scene4Tire2}", "scaleY", '0.5', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid3958", tween: [ "style", "${_scene4Texter2}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 500 },
                { id: "eid3960", tween: [ "style", "${_scene4Texter2}", "opacity", '0', { fromValue: '1'}], position: 25000, duration: 500 },
                { id: "eid3565", tween: [ "style", "${_scene4Cont1}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutBack" },
                { id: "eid3996", tween: [ "style", "${_scene4Cont1}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid4076", tween: [ "transform", "${_scene4truckUnder}", "scaleX", '1', { fromValue: '1'}], position: 2500, duration: 0 },
                { id: "eid4173", tween: [ "transform", "${_scene4truckUnder}", "scaleX", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4171", tween: [ "transform", "${_scene4truckUnder}", "scaleX", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4888", tween: [ "style", "${_scene4Cont4StayCopy}", "display", 'block', { fromValue: 'none'}], position: 17359, duration: 0 },
                { id: "eid3537", tween: [ "style", "${_scene4Tire1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid4208", tween: [ "style", "${_scene4Tire1}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4192", tween: [ "transform", "${_scene4Rim2}", "scaleY", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4184", tween: [ "transform", "${_scene4Rim2}", "scaleY", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4430", tween: [ "transform", "${_scene4ForkBars}", "scaleY", '1', { fromValue: '1'}], position: 13544, duration: 0 },
                { id: "eid3511", tween: [ "style", "${_truckAppear}", "top", '129px', { fromValue: '-42px'}], position: 1006, duration: 1000, easing: "easeOutBounce" },
                { id: "eid4851", tween: [ "style", "${_truckAppear}", "top", '140px', { fromValue: '129px'}], position: 35500, duration: 1500, easing: "easeInBack" },
                { id: "eid4724", tween: [ "style", "${_containerCopy2}", "left", '30px', { fromValue: '24px'}], position: 14500, duration: 1000 },
                { id: "eid4771", tween: [ "style", "${_containerCopy2}", "left", '73px', { fromValue: '30px'}], position: 17167, duration: 192 },
                { id: "eid4295", tween: [ "transform", "${_fork1}", "scaleX", '1', { fromValue: '1.2'}], position: 10500, duration: 1000 },
                { id: "eid4404", tween: [ "transform", "${_fork1}", "scaleX", '1', { fromValue: '1'}], position: 13167, duration: 0 },
                { id: "eid4408", tween: [ "transform", "${_fork1}", "scaleX", '1', { fromValue: '1'}], position: 14198, duration: 0 },
                { id: "eid4550", tween: [ "style", "${_scene4ForkAnimCopy}", "top", '63px', { fromValue: '239px'}], position: 12500, duration: 1000 },
                { id: "eid4551", tween: [ "style", "${_scene4ForkAnimCopy}", "top", '103px', { fromValue: '63px'}], position: 14000, duration: 500 },
                { id: "eid4552", tween: [ "style", "${_scene4ForkAnimCopy}", "top", '230px', { fromValue: '103px'}], position: 15544, duration: 500 },
                { id: "eid4546", tween: [ "style", "${_scene4ForkLifterCopy}", "top", '152px', { fromValue: '189px'}], position: 12500, duration: 1000 },
                { id: "eid5274", tween: [ "style", "${_navForwardComp}", "left", '214px', { fromValue: '214px'}], position: 0, duration: 0 },
                { id: "eid4275", tween: [ "transform", "${_scene4Year}", "scaleY", '1', { fromValue: '0.05'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid3956", tween: [ "style", "${_scene4Texter2}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid3961", tween: [ "style", "${_scene4Texter2}", "display", 'none', { fromValue: 'block'}], position: 25500, duration: 0 },
                { id: "eid4225", tween: [ "style", "${_scene4Rim1}", "top", '336px', { fromValue: '332px'}], position: 1006, duration: 1494, easing: "easeOutBack" },
                { id: "eid4227", tween: [ "style", "${_scene4Rim1}", "top", '311px', { fromValue: '336px'}], position: 2500, duration: 7500, easing: "easeOutBack" },
                { id: "eid4219", tween: [ "style", "${_scene4Rim1}", "top", '309px', { fromValue: '311px'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid3968", tween: [ "style", "${_scene4Texter4}", "display", 'block', { fromValue: 'none'}], position: 30000, duration: 0 },
                { id: "eid3669", tween: [ "transform", "${_scene4craneBttm}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0, easing: "easeOutBounce" },
                { id: "eid11264", tween: [ "style", "${_scene4PumpGlowComp}", "opacity", '1', { fromValue: '0'}], position: 25000, duration: 497 },
                { id: "eid11302", tween: [ "style", "${_scene4PumpGlowComp}", "opacity", '0', { fromValue: '1'}], position: 35000, duration: 500 },
                { id: "eid3954", tween: [ "style", "${_scene4Texter1}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 500 },
                { id: "eid4354", tween: [ "style", "${_fork1}", "top", '200px', { fromValue: '672px'}], position: 10500, duration: 1000 },
                { id: "eid4414", tween: [ "style", "${_fork1}", "top", '585px', { fromValue: '200px'}], position: 13167, duration: 1031 },
                { id: "eid5284", tween: [ "style", "${_navForwardComp42Copy}", "left", '212px', { fromValue: '212px'}], position: 27999, duration: 0 },
                { id: "eid3617", tween: [ "style", "${_scene4TruckChasis}", "left", '19px', { fromValue: '19px'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid4545", tween: [ "style", "${_fork2}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0, easing: "easeOutBounce" },
                { id: "eid4429", tween: [ "transform", "${_scene4ForkAnim}", "scaleX", '1', { fromValue: '1'}], position: 13544, duration: 0 },
                { id: "eid4586", tween: [ "transform", "${_container}", "scaleY", '1', { fromValue: '1'}], position: 12500, duration: 0 },
                { id: "eid4594", tween: [ "transform", "${_container}", "scaleY", '1', { fromValue: '1'}], position: 15167, duration: 0 },
                { id: "eid4596", tween: [ "transform", "${_container}", "scaleY", '1', { fromValue: '1'}], position: 15544, duration: 0 },
                { id: "eid5279", tween: [ "style", "${_navForwardComp42}", "left", '212px', { fromValue: '212px'}], position: 11436, duration: 0 },
                { id: "eid5280", tween: [ "style", "${_navForwardComp42}", "top", '213px', { fromValue: '213px'}], position: 11436, duration: 0 },
                { id: "eid4721", tween: [ "transform", "${_containerCopy2}", "scaleX", '1', { fromValue: '1'}], position: 14500, duration: 0 },
                { id: "eid4220", tween: [ "transform", "${_scene4Rim1}", "scaleX", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid3611", tween: [ "style", "${_scene4Tire3}", "left", '86px', { fromValue: '104px'}], position: 2500, duration: 500, easing: "easeOutBack" },
                { id: "eid4197", tween: [ "style", "${_scene4Tire3}", "left", '95px', { fromValue: '86px'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid4727", tween: [ "style", "${_scene4ForkBarsCopy3}", "top", '61px', { fromValue: '237px'}], position: 14500, duration: 1000 },
                { id: "eid4728", tween: [ "style", "${_scene4ForkBarsCopy3}", "top", '101px', { fromValue: '61px'}], position: 16000, duration: 500 },
                { id: "eid4729", tween: [ "style", "${_scene4ForkBarsCopy3}", "top", '228px', { fromValue: '101px'}], position: 17544, duration: 500 },
                { id: "eid3625", tween: [ "transform", "${_scene4TruckContainer}", "scaleY", '1', { fromValue: '1'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid3814", tween: [ "transform", "${_scene4TruckContainer}", "scaleY", '1', { fromValue: '1'}], position: 4500, duration: 0 },
                { id: "eid4209", tween: [ "style", "${_scene4Rim2}", "left", '130px', { fromValue: '131px'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid4565", tween: [ "transform", "${_scene4ForkBarsCopy}", "scaleX", '1', { fromValue: '1'}], position: 15544, duration: 0 },
                { id: "eid3601", tween: [ "transform", "${_scene4Tire2}", "scaleX", '1', { fromValue: '0.5'}], position: 2500, duration: 500, easing: "easeOutBounce" },
                { id: "eid4163", tween: [ "transform", "${_scene4Tire2}", "scaleX", '0.5', { fromValue: '1'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid3962", tween: [ "style", "${_scene4Texter3}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid3967", tween: [ "style", "${_scene4Texter3}", "display", 'none', { fromValue: 'block'}], position: 30500, duration: 0 },
                { id: "eid4701", tween: [ "style", "${_fork3}", "left", '87px', { fromValue: '-74px'}], position: 14500, duration: 1000 },
                { id: "eid4702", tween: [ "style", "${_fork3}", "left", '-140px', { fromValue: '87px'}], position: 17167, duration: 1031 },
                { id: "eid3955", tween: [ "style", "${_scene4Texter1}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid3725", tween: [ "style", "${_scene4craneEndRght}", "top", '133px', { fromValue: '127px'}], position: 3000, duration: 1000 },
                { id: "eid3759", tween: [ "style", "${_scene4craneEndRght}", "top", '135px', { fromValue: '133px'}], position: 4000, duration: 500 },
                { id: "eid4074", tween: [ "style", "${_scene4truckUnder}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
                { id: "eid4175", tween: [ "style", "${_scene4truckUnder}", "left", '0px', { fromValue: '0px'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4170", tween: [ "style", "${_scene4truckUnder}", "left", '0px', { fromValue: '0px'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4554", tween: [ "style", "${_scene4ForkAnimCopy}", "left", '47px', { fromValue: '47px'}], position: 12500, duration: 0 },
                { id: "eid4555", tween: [ "style", "${_scene4ForkAnimCopy}", "left", '47px', { fromValue: '47px'}], position: 13500, duration: 0 },
                { id: "eid4556", tween: [ "style", "${_scene4ForkAnimCopy}", "left", '47px', { fromValue: '47px'}], position: 15544, duration: 0 },
                { id: "eid4205", tween: [ "style", "${_scene4Tire2}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 250, easing: "easeOutBack" },
                { id: "eid4296", tween: [ "transform", "${_fork1}", "scaleY", '1', { fromValue: '1.2'}], position: 10500, duration: 1000 },
                { id: "eid4405", tween: [ "transform", "${_fork1}", "scaleY", '1', { fromValue: '1'}], position: 13167, duration: 0 },
                { id: "eid4409", tween: [ "transform", "${_fork1}", "scaleY", '1', { fromValue: '1'}], position: 14198, duration: 0 },
                { id: "eid4543", tween: [ "style", "${_fork2}", "left", '197px', { fromValue: '-74px'}], position: 12500, duration: 1000 },
                { id: "eid4544", tween: [ "style", "${_fork2}", "left", '-24px', { fromValue: '197px'}], position: 15167, duration: 1031 },
                { id: "eid4364", tween: [ "style", "${_scene4ForkLifter}", "left", '46px', { fromValue: '46px'}], position: 10500, duration: 0 },
                { id: "eid4372", tween: [ "style", "${_scene4ForkLifter}", "left", '46px', { fromValue: '46px'}], position: 11500, duration: 0 },
                { id: "eid4886", tween: [ "style", "${_scene4Cont2StayCopy}", "display", 'block', { fromValue: 'none'}], position: 13345, duration: 0 },
                { id: "eid3626", tween: [ "transform", "${_scene4TruckChasis}", "scaleY", '1', { fromValue: '1'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid4195", tween: [ "style", "${_truckChasis}", "top", '26px', { fromValue: '0px'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid4588", tween: [ "style", "${_container}", "top", '-25px', { fromValue: '146px'}], position: 12500, duration: 1000 },
                { id: "eid4590", tween: [ "style", "${_container}", "top", '10px', { fromValue: '-25px'}], position: 14000, duration: 500 },
                { id: "eid4600", tween: [ "style", "${_container}", "top", '-140px', { fromValue: '10px'}], position: 15167, duration: 377 },
                { id: "eid5277", tween: [ "style", "${_navBackComp42}", "left", '140px', { fromValue: '140px'}], position: 11436, duration: 0 },
                { id: "eid3663", tween: [ "style", "${_craneTopComp}", "left", '87px', { fromValue: '150px'}], position: 3000, duration: 1000 },
                { id: "eid3782", tween: [ "style", "${_craneTopComp}", "left", '87px', { fromValue: '87px'}], position: 4000, duration: 0 },
                { id: "eid3815", tween: [ "style", "${_craneTopComp}", "left", '87px', { fromValue: '87px'}], position: 4500, duration: 0 },
                { id: "eid3877", tween: [ "style", "${_craneTopComp}", "left", '-507px', { fromValue: '87px'}], position: 5000, duration: 1000 },
                { id: "eid3901", tween: [ "style", "${_craneTopComp}", "left", '127px', { fromValue: '-507px'}], position: 6250, duration: 1000 },
                { id: "eid3924", tween: [ "style", "${_craneTopComp}", "left", '89px', { fromValue: '127px'}], position: 7250, duration: 1250 },
                { id: "eid4002", tween: [ "style", "${_craneTopComp}", "left", '90px', { fromValue: '89px'}], position: 9000, duration: 500 },
                { id: "eid4029", tween: [ "style", "${_craneTopComp}", "left", '218px', { fromValue: '90px'}], position: 9500, duration: 377 },
                { id: "eid4191", tween: [ "transform", "${_scene4Rim3}", "scaleY", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4183", tween: [ "transform", "${_scene4Rim3}", "scaleY", '1', { fromValue: '1'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid4892", tween: [ "style", "${_scene4Cont4StayCopy2}", "display", 'block', { fromValue: 'none'}], position: 17359, duration: 0 },
                { id: "eid4138", tween: [ "style", "${_scene4Tire1}", "top", '425px', { fromValue: '425px'}], position: 10000, duration: 0, easing: "easeOutBack" },
                { id: "eid4153", tween: [ "style", "${_scene4Tire1}", "top", '425px', { fromValue: '425px'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid3724", tween: [ "style", "${_scene4craneEndRght}", "left", '365px', { fromValue: '339px'}], position: 3000, duration: 1000 },
                { id: "eid3758", tween: [ "style", "${_scene4craneEndRght}", "left", '352px', { fromValue: '365px'}], position: 4000, duration: 500 },
                { id: "eid3616", tween: [ "style", "${_scene4TruckContainer}", "left", '0px', { fromValue: '0px'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid3811", tween: [ "style", "${_scene4TruckContainer}", "left", '0px', { fromValue: '0px'}], position: 4500, duration: 0 },
                { id: "eid4889", tween: [ "style", "${_scene4Cont4StayCopy}", "opacity", '1', { fromValue: '1'}], position: 17359, duration: 0 },
                { id: "eid5297", tween: [ "style", "${_navForwardComp44}", "top", '171px', { fromValue: '171px'}], position: 32332, duration: 0 },
                { id: "eid4535", tween: [ "style", "${_fork2}", "top", '179px', { fromValue: '601px'}], position: 12500, duration: 1000 },
                { id: "eid4536", tween: [ "style", "${_fork2}", "top", '592px', { fromValue: '179px'}], position: 15167, duration: 1031 },
                { id: "eid3690", tween: [ "transform", "${_scene4craneBttm}", "scaleX", '1.05', { fromValue: '1'}], position: 3000, duration: 1000 },
                { id: "eid3799", tween: [ "transform", "${_scene4craneBttm}", "scaleX", '1.05', { fromValue: '1.05'}], position: 4500, duration: 0 },
                { id: "eid3928", tween: [ "transform", "${_scene4craneBttm}", "scaleX", '1.05', { fromValue: '1.05'}], position: 7250, duration: 0 },
                { id: "eid4049", tween: [ "transform", "${_scene4craneBttm}", "scaleX", '1.05', { fromValue: '1.05'}], position: 9000, duration: 0 },
                { id: "eid4237", tween: [ "style", "${_scene4Rim2}", "top", '292px', { fromValue: '291px'}], position: 2500, duration: 7500, easing: "easeOutBack" },
                { id: "eid4194", tween: [ "style", "${_scene4Rim2}", "top", '290px', { fromValue: '292px'}], position: 10000, duration: 500, easing: "easeOutBack" },
                { id: "eid3723", tween: [ "style", "${_scene4craneEndLeft}", "top", '59px', { fromValue: '64px'}], position: 3000, duration: 1000 },
                { id: "eid3761", tween: [ "style", "${_scene4craneEndLeft}", "top", '66px', { fromValue: '59px'}], position: 4000, duration: 500 },
                { id: "eid4477", tween: [ "style", "${_scene4Cont2Stay}", "display", 'block', { fromValue: 'none'}], position: 13345, duration: 0 },
                { id: "eid3535", tween: [ "style", "${_scene4Tire3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid4207", tween: [ "style", "${_scene4Tire3}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeOutBack" },
                { id: "eid3964", tween: [ "style", "${_scene4Texter3}", "opacity", '1', { fromValue: '0'}], position: 25000, duration: 500 },
                { id: "eid3966", tween: [ "style", "${_scene4Texter3}", "opacity", '0', { fromValue: '1'}], position: 30000, duration: 500 },
                { id: "eid4602", tween: [ "style", "${_container}", "display", 'none', { fromValue: 'block'}], position: 15359, duration: 0 },
                { id: "eid4783", tween: [ "style", "${_containerCopy2}", "display", 'none', { fromValue: 'block'}], position: 17359, duration: 0 },
                { id: "eid4601", tween: [ "style", "${_scene4ContStay}", "display", 'block', { fromValue: 'none'}], position: 15359, duration: 0 },
                { id: "eid4274", tween: [ "transform", "${_scene4Year}", "scaleX", '1', { fromValue: '0.05'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid3997", tween: [ "style", "${_scene4ContStays}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid3865", tween: [ "style", "${_scene4TruckContainerLift}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid3892", tween: [ "style", "${_scene4TruckContainerLift}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid4381", tween: [ "style", "${_scene4ForkBars}", "top", '61px', { fromValue: '237px'}], position: 10500, duration: 1000 },
                { id: "eid4397", tween: [ "style", "${_scene4ForkBars}", "top", '101px', { fromValue: '61px'}], position: 12000, duration: 500 },
                { id: "eid4439", tween: [ "style", "${_scene4ForkBars}", "top", '228px', { fromValue: '101px'}], position: 13544, duration: 500 },
                { id: "eid4869", tween: [ "transform", "${_truckAppear}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 35500, duration: 1000 },
                { id: "eid9859", tween: [ "transform", "${_truckAppear}", "rotateZ", '-19deg', { fromValue: '-3deg'}], position: 36500, duration: 500 },
                { id: "eid4714", tween: [ "transform", "${_scene4ForkAnimCopy3}", "scaleX", '1', { fromValue: '1'}], position: 17544, duration: 0 },
                { id: "eid3623", tween: [ "transform", "${_scene4TruckChasis}", "scaleX", '1', { fromValue: '1'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid4761", tween: [ "style", "${_scene4Cont4Stay}", "display", 'block', { fromValue: 'none'}], position: 17359, duration: 0 },
                { id: "eid3722", tween: [ "style", "${_scene4craneEndLeft}", "left", '4px', { fromValue: '25px'}], position: 3000, duration: 1000 },
                { id: "eid3760", tween: [ "style", "${_scene4craneEndLeft}", "left", '16px', { fromValue: '4px'}], position: 4000, duration: 500 },
                { id: "eid4553", tween: [ "transform", "${_scene4ForkAnimCopy}", "scaleY", '1', { fromValue: '1'}], position: 15544, duration: 0 },
                { id: "eid3615", tween: [ "style", "${_scene4truckCab}", "left", '380px', { fromValue: '380px'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid4715", tween: [ "style", "${_containerCopy2}", "top", '-25px', { fromValue: '146px'}], position: 14500, duration: 1000 },
                { id: "eid4716", tween: [ "style", "${_containerCopy2}", "top", '10px', { fromValue: '-25px'}], position: 16000, duration: 500 },
                { id: "eid4717", tween: [ "style", "${_containerCopy2}", "top", '-51px', { fromValue: '10px'}], position: 17167, duration: 192 },
                { id: "eid4707", tween: [ "style", "${_scene4ForkAnimCopy3}", "top", '63px', { fromValue: '239px'}], position: 14500, duration: 1000 },
                { id: "eid4708", tween: [ "style", "${_scene4ForkAnimCopy3}", "top", '103px', { fromValue: '63px'}], position: 16000, duration: 500 },
                { id: "eid4709", tween: [ "style", "${_scene4ForkAnimCopy3}", "top", '230px', { fromValue: '103px'}], position: 17544, duration: 500 },
                { id: "eid3624", tween: [ "transform", "${_scene4truckCab}", "scaleY", '1', { fromValue: '1'}], position: 2500, duration: 0, easing: "easeOutBack" },
                { id: "eid4265", tween: [ "style", "${_scene4Year}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutBack" }            ]
        }
    }
},
"pumpGlow": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '317px', '317px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['1.5', '1.5']],
                    id: 'scene1TruckArrowGlow',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/scene1TruckArrowGlow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene1TruckArrowGlow}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '317px'],
                ["style", "width", '317px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scene4Battery": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene4pumpStand',
                    type: 'image',
                    rect: ['259px', '207px', '278px', '156px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene4pumpStand.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.5', '1.5']],
                    id: 'pumpGlow',
                    opacity: 1,
                    type: 'rect',
                    rect: ['209px', '-71px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'scene4glowSmall',
                    type: 'image',
                    rect: ['195px', '-6px', '205px', '216px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene4glowSmall.png', '0px', '0px']
                },
                {
                    id: 'scene4glowSmallCopy',
                    type: 'image',
                    rect: ['-96px', '22px', '205px', '216px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene4glowSmall.png', '0px', '0px']
                },
                {
                    id: 'scene4Pump',
                    type: 'image',
                    rect: ['-21px', '4px', '519px', '299px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene4Pump.png', '0px', '0px']
                },
                {
                    id: 'scene4glows',
                    type: 'image',
                    rect: ['239px', '37px', '142px', '158px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene4glows.png', '0px', '0px']
                },
                {
                    rect: ['302px', '4px', '196px', '299px', 'auto', 'auto'],
                    id: 'scene4PumpFade',
                    opacity: 0.056910569105691,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/scene4PumpFade.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'pumpGlow',
                symbolName: 'pumpGlow',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene4PumpFade}": [
                ["style", "top", '4px'],
                ["style", "height", '299px'],
                ["style", "opacity", '0.032838'],
                ["style", "left", '302px'],
                ["style", "width", '196px']
            ],
            "${_scene4glowSmall}": [
                ["style", "top", '-6px'],
                ["style", "opacity", '1'],
                ["style", "left", '195px']
            ],
            "${_scene4pumpStand}": [
                ["style", "left", '259px'],
                ["style", "top", '207px']
            ],
            "${symbolSelector}": [
                ["style", "height", '309px'],
                ["style", "width", '498px']
            ],
            "${_scene4Pump}": [
                ["style", "top", '4px'],
                ["style", "height", '299px'],
                ["style", "opacity", '1'],
                ["style", "left", '-21px'],
                ["style", "width", '519px']
            ],
            "${_pumpGlow}": [
                ["style", "top", '-71px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '209px']
            ],
            "${_scene4glowSmallCopy}": [
                ["style", "top", '22px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-96px']
            ],
            "${_scene4glows}": [
                ["motion", "location", '310.01546875px 116.4790625px'],
                ["style", "opacity", '0'],
                ["style", "left", '-42px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid5389", tween: [ "transform", "${_scene4glowSmallCopy}", "scaleY", '1', { fromValue: '0.5'}], position: 379, duration: 58 },
                { id: "eid5390", tween: [ "transform", "${_scene4glowSmallCopy}", "scaleY", '0.5', { fromValue: '1'}], position: 437, duration: 57 },
                { id: "eid5356", tween: [ "style", "${_scene4glowSmall}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 125 },
                { id: "eid5433", tween: [ "transform", "${_pumpGlow}", "scaleY", '1.5', { fromValue: '0.5'}], position: 0, duration: 250 },
                { id: "eid5435", tween: [ "transform", "${_pumpGlow}", "scaleY", '0.5', { fromValue: '1.5'}], position: 250, duration: 250 },
                { id: "eid5320", tween: [ "motion", "${_scene4glows}", [[310.02, 116.48, 0, 0],[182.42, 206.42, -397.3, -249.91, -296.77, -186.67],[4.65, 128.6, 0, 0]]], position: 0, duration: 500 },
                { id: "eid5387", tween: [ "transform", "${_scene4glowSmallCopy}", "scaleX", '1', { fromValue: '0.5'}], position: 379, duration: 58 },
                { id: "eid5388", tween: [ "transform", "${_scene4glowSmallCopy}", "scaleX", '0.5', { fromValue: '1'}], position: 437, duration: 57 },
                { id: "eid5378", tween: [ "style", "${_scene4glowSmallCopy}", "opacity", '1', { fromValue: '0'}], position: 379, duration: 58 },
                { id: "eid5379", tween: [ "style", "${_scene4glowSmallCopy}", "opacity", '0', { fromValue: '1'}], position: 437, duration: 63 },
                { id: "eid5450", tween: [ "style", "${_scene4PumpFade}", "opacity", '1', { fromValue: '0.032838'}], position: 0, duration: 250 },
                { id: "eid5451", tween: [ "style", "${_scene4PumpFade}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
                { id: "eid4845", tween: [ "style", "${_scene4Pump}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid5343", tween: [ "style", "${_scene4glows}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid5345", tween: [ "style", "${_scene4glows}", "opacity", '0', { fromValue: '1'}], position: 379, duration: 121 },
                { id: "eid5432", tween: [ "transform", "${_pumpGlow}", "scaleX", '1.5', { fromValue: '0.5'}], position: 0, duration: 250 },
                { id: "eid5434", tween: [ "transform", "${_pumpGlow}", "scaleX", '0.5', { fromValue: '1.5'}], position: 250, duration: 250 }            ]
        }
    }
},
"scene5Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene5Back2',
                    type: 'image',
                    rect: ['6px', '0', '1020px', '635px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene5Back.jpg', '0px', '0px']
                },
                {
                    rect: ['14px', '0px', '465px', '256px', 'auto', 'auto'],
                    id: 'scene5Box1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5Box1.png', '0px', '0px']
                },
                {
                    rect: ['14px', '0px', '465px', '238px', 'auto', 'auto'],
                    id: 'scene5Box2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5Box2.png', '0px', '0px']
                },
                {
                    rect: ['79px', '5', '333px', '170px', 'auto', 'auto'],
                    id: 'scene5Box3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5Box3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '296px', '87px', '177px', 'auto', 'auto'],
                    id: 'scene5YearSignal2015',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5YearSignal2015.png', '0px', '0px']
                },
                {
                    rect: ['68px', '213px', '91px', '172px', 'auto', 'auto'],
                    id: 'scene5YearSignal2016',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5YearSignal2016.png', '0px', '0px']
                },
                {
                    id: 'scene5truck1Comp',
                    type: 'group',
                    rect: ['-390px', '564px', '338', '384', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene5truckUnder',
                        type: 'group',
                        rect: ['2px', '127px', '336', '257', 'auto', 'auto'],
                        c: [
                        {
                            id: 'scene5Truck1Under',
                            type: 'image',
                            rect: ['0px', '0px', '336px', '257px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene5Truck1Under.png', '0px', '0px']
                        },
                        {
                            id: 'scene5TruckRim1',
                            type: 'image',
                            rect: ['275px', '68px', '18px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene5TruckRim1.png', '0px', '0px']
                        },
                        {
                            id: 'scene5TruckRim1Copy2',
                            type: 'image',
                            rect: ['152px', '169px', '18px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene5TruckRim1.png', '0px', '0px']
                        },
                        {
                            id: 'scene5TruckRim1Copy3',
                            type: 'image',
                            rect: ['120px', '197px', '18px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene5TruckRim1.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'scene5Truck1ChasisComp',
                        type: 'group',
                        rect: ['0px', '0px', '320', '358', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '58px', '320px', '300px', 'auto', 'auto'],
                            id: 'scene5Truck1Chasis',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/scene5Truck1Chasis.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '319px', '357px', 'auto', 'auto'],
                            type: 'image',
                            id: 'scene5Truck2Chasis',
                            opacity: 1,
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/scene5Truck2Chasis.png', '0px', '0px']
                        }]
                    }]
                },
                {
                    rect: ['844px', '746px', '305', '262', 'auto', 'auto'],
                    id: 'scene5ForkComp',
                    opacity: 1,
                    type: 'group',
                    c: [
                    {
                        id: 'scene5Cont',
                        type: 'group',
                        rect: ['0', '11px', '273', '226', 'auto', 'auto'],
                        c: [
                        {
                            id: 'scene5ForkBars',
                            type: 'image',
                            rect: ['111px', '137px', '100px', '53px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene5ForkBars.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '273px', '226px', 'auto', 'auto'],
                            type: 'image',
                            id: 'scene5ForkContainer',
                            opacity: 1,
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/scene5ForkContainer.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'scene5ForkAmin',
                        type: 'image',
                        rect: ['169px', '88px', '48px', '150px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene5ForkAmin.png', '0px', '0px']
                    },
                    {
                        id: 'scene5ForkLift2',
                        type: 'image',
                        rect: ['170px', '88px', '47px', '148px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene5ForkLift2.png', '0px', '0px']
                    },
                    {
                        id: 'scene5ForkLift1',
                        type: 'image',
                        rect: ['175px', '100px', '50px', '119px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene5ForkLift1.png', '0px', '0px']
                    },
                    {
                        id: 'scene5ForkMain',
                        type: 'image',
                        rect: ['175px', '124px', '130px', '138px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene5ForkMain.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'scene5ForkRim1',
                        rect: ['240px', '236px', '16px', '18px', 'auto', 'auto'],
                        transform: [[0, 0], ['-15']],
                        fill: ['rgba(0,0,0,0)', 'images/scene5TruckRim1.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'scene5ForkRim2',
                        rect: ['180px', '211px', '16px', '18px', 'auto', 'auto'],
                        transform: [[0, 0], ['-9']],
                        fill: ['rgba(0,0,0,0)', 'images/scene5TruckRim1.png', '0px', '0px']
                    }]
                },
                {
                    type: 'image',
                    id: 'scene5Markets',
                    rect: ['670px', '41px', '525px', '885px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.89', '0.89']],
                    fill: ['rgba(0,0,0,0)', 'images/scene5Markets.png', '0px', '0px']
                },
                {
                    id: 'scene5SuperMarketBack',
                    type: 'image',
                    rect: ['640px', '214px', '548px', '455px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene5SuperMarketBack.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['217', '100', 'auto', 'auto', 'auto', 'auto'],
                    id: 'scene5WalkComp'
                },
                {
                    rect: ['618px', '195px', '604px', '512px', 'auto', 'auto'],
                    id: 'scene5SuperMarket',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/scene5SuperMarket.png', '0px', '0px']
                },
                {
                    rect: ['471px', '197px', '564', '390', 'auto', 'auto'],
                    id: 'logosScene5',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        display: 'none',
                        type: 'rect',
                        rect: ['-98px', '-100px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'scene1TruckAroowGlowComp'
                    },
                    {
                        display: 'none',
                        type: 'rect',
                        rect: ['-12px', '29px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'scene1TruckAroowGlowCompCopy4'
                    },
                    {
                        display: 'none',
                        type: 'rect',
                        rect: ['82px', '95px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'scene1TruckAroowGlowCompCopy'
                    },
                    {
                        display: 'none',
                        type: 'rect',
                        rect: ['205px', '102px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'scene1TruckAroowGlowCompCopy2'
                    },
                    {
                        display: 'none',
                        type: 'rect',
                        rect: ['337px', '111px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'scene1TruckAroowGlowCompCopy3'
                    },
                    {
                        rect: ['428px', '217px', '130px', '142px', 'auto', 'auto'],
                        id: 'scene5quakerLogo',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5quakerLogo.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        transform: [[0, 0], [], [], ['0.82', '0.82']],
                        display: 'none',
                        rect: ['83px', '95px', '126px', '142px', 'auto', 'auto'],
                        id: 'scene5GLogo',
                        fill: ['rgba(0,0,0,0)', 'images/scene5GLogo.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        rect: ['113px', '173px', '217px', '125px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.84', '0.84']],
                        id: 'scene5tropicanaLogo',
                        display: 'none',
                        clip: ['rect(-1.5078412294387817px 215.53465270996094px 125px 0px)'],
                        fill: ['rgba(0,0,0,0)', 'images/scene5tropicanaLogo.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        transform: [[0, 0], [], [], ['0.78', '0.78']],
                        display: 'none',
                        rect: ['275px', '197px', '176px', '151px', 'auto', 'auto'],
                        id: 'scene5laysLogo',
                        fill: ['rgba(0,0,0,0)', 'images/scene5laysLogo.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'scene5PepsiLogo',
                        rect: ['1px', '-2px', '137px', '175px', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.86', '0.86']],
                        fill: ['rgba(0,0,0,0)', 'images/scene5PepsiLogo.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['172', '207', '147', '49', 'auto', 'auto'],
                    id: 'scNav1',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'navBackComp',
                        type: 'rect',
                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'navForwardComp',
                        type: 'rect',
                        rect: ['147px', '20px', 'auto', 'auto', 'auto', 'auto']
                    }]
                },
                {
                    rect: ['170px', '189px', '147', '49', 'auto', 'auto'],
                    id: 'scNav2',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'navBackCompCopy',
                        type: 'rect',
                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        display: 'none',
                        type: 'rect',
                        rect: ['147px', '20px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'navForwardCompCopy'
                    }]
                },
                {
                    rect: ['172', '128px', '147', '49', 'auto', 'auto'],
                    id: 'scNav3',
                    display: 'none',
                    type: 'group',
                    c: [
                    {
                        id: 'navBackCompCopy2',
                        type: 'rect',
                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        display: 'none',
                        type: 'rect',
                        rect: ['147px', '20px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'navForwardCompCopy2'
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'scene1TruckAroowGlowCompCopy',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'scene1TruckAroowGlowCompCopy3',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy2',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardCompCopy',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'scene1TruckAroowGlowCompCopy2',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardCompCopy2',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'scene1TruckAroowGlowCompCopy4',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'scene1TruckAroowGlowComp',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'scene5WalkComp',
                symbolName: 'scene5WalkComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene1TruckAroowGlowCompCopy}": [
                ["style", "top", '95px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.50346161291851'],
                ["style", "left", '82px'],
                ["style", "display", 'none']
            ],
            "${_scene1TruckAroowGlowCompCopy3}": [
                ["style", "top", '111px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.50346161291851'],
                ["style", "left", '337px'],
                ["style", "display", 'none']
            ],
            "${_scene5Truck2Chasis}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_scene5Truck1Under}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_scene5ForkMain}": [
                ["style", "top", '124px'],
                ["style", "left", '175px']
            ],
            "${_scene5truckUnder}": [
                ["style", "left", '2px'],
                ["style", "top", '127px']
            ],
            "${_navBackComp}": [
                ["style", "left", '18px'],
                ["style", "top", '0px']
            ],
            "${_scNav3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "top", '128px']
            ],
            "${_scene5truck1Comp}": [
                ["transform", "scaleY", '0.95'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '362px'],
                ["style", "opacity", '1'],
                ["motion", "location", '-184.80465px 814.210975px'],
                ["transform", "scaleX", '1.07']
            ],
            "${_scene5TruckRim1Copy2}": [
                ["style", "top", '169px'],
                ["style", "height", '26px'],
                ["style", "left", '152px'],
                ["style", "width", '18px']
            ],
            "${_scene5ForkRim1}": [
                ["style", "top", '236px'],
                ["transform", "rotateZ", '-15deg'],
                ["style", "height", '18px'],
                ["style", "left", '240px'],
                ["style", "width", '16px']
            ],
            "${_scene5TruckRim1}": [
                ["style", "height", '26px'],
                ["style", "top", '68px'],
                ["style", "left", '275px'],
                ["style", "width", '18px']
            ],
            "${_scene5WalkComp}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_scene5YearSignal2015}": [
                ["style", "top", '296px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [52,78], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [52,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [52,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [52,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [52,78],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["transform", "scaleX", '0.05']
            ],
            "${_navForwardComp}": [
                ["style", "top", '0px'],
                ["style", "left", '86px']
            ],
            "${_scene5Cont}": [
                ["style", "left", '0px'],
                ["style", "top", '11px']
            ],
            "${_scene5Box1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "display", 'none']
            ],
            "${_scNav2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '170px'],
                ["style", "top", '189px']
            ],
            "${_scene5ForkLift2}": [
                ["style", "left", '170px'],
                ["style", "top", '88px']
            ],
            "${_navForwardCompCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '86px'],
                ["style", "display", 'none']
            ],
            "${_scene1TruckAroowGlowCompCopy4}": [
                ["style", "top", '29px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.50346161291851'],
                ["style", "left", '-12px'],
                ["style", "display", 'none']
            ],
            "${_scene5Markets}": [
                ["style", "top", '41px'],
                ["transform", "scaleY", '0.89'],
                ["style", "height", '885px'],
                ["transform", "scaleX", '0.89'],
                ["style", "left", '670px'],
                ["style", "width", '525px']
            ],
            "${_scene5laysLogo}": [
                ["style", "top", '197px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '275px'],
                ["style", "display", 'none']
            ],
            "${_scene5ForkBars}": [
                ["style", "left", '111px'],
                ["style", "top", '137px']
            ],
            "${_logosScene5}": [
                ["style", "top", '197px'],
                ["style", "opacity", '1'],
                ["style", "left", '471px'],
                ["style", "display", 'none']
            ],
            "${_scene5Back2}": [
                ["style", "left", '6px']
            ],
            "${_scene5Truck1ChasisComp}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_scene5Truck1Chasis}": [
                ["style", "top", '58px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_navBackCompCopy2}": [
                ["style", "left", '18px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1031px']
            ],
            "${_scene5quakerLogo}": [
                ["style", "top", '217px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '428px'],
                ["style", "display", 'none']
            ],
            "${_scene5YearSignal2016}": [
                ["style", "-webkit-transform-origin", [52,79], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [52,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [52,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [52,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [52,79],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '68px'],
                ["style", "top", '213px']
            ],
            "${_scene1TruckAroowGlowCompCopy2}": [
                ["style", "top", '102px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.78236191495647'],
                ["style", "left", '205px'],
                ["style", "display", 'none']
            ],
            "${_scene5TruckRim1Copy3}": [
                ["style", "height", '26px'],
                ["style", "top", '197px'],
                ["style", "left", '120px'],
                ["style", "width", '18px']
            ],
            "${_navBackCompCopy}": [
                ["style", "left", '18px'],
                ["style", "top", '0px']
            ],
            "${_scene5ForkComp}": [
                ["motion", "location", '996.685546875px 877.1328125px'],
                ["style", "opacity", '1'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_scene1TruckAroowGlowComp}": [
                ["style", "top", '-100px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.50346161291851'],
                ["style", "left", '-98px'],
                ["style", "display", 'none']
            ],
            "${_scene5Box3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '79px']
            ],
            "${_scNav1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_scene5ForkLift1}": [
                ["style", "top", '100px'],
                ["style", "left", '175px']
            ],
            "${_navForwardCompCopy2}": [
                ["style", "top", '0px'],
                ["style", "left", '86px'],
                ["style", "display", 'none']
            ],
            "${_scene5SuperMarket}": [
                ["style", "top", '195px'],
                ["style", "opacity", '1'],
                ["style", "left", '618px']
            ],
            "${_scene5PepsiLogo}": [
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '-10px'],
                ["motion", "location", '69.430407072369px 85.249897203947px']
            ],
            "${_scene5ForkContainer}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_scene5SuperMarketBack}": [
                ["style", "left", '640px'],
                ["style", "top", '214px']
            ],
            "${_scene5tropicanaLogo}": [
                ["style", "top", '173px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '113px'],
                ["style", "clip", [-1.5078412294388,215.53465270996,125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_scene5Box2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "display", 'none']
            ],
            "${_scene5ForkAmin}": [
                ["style", "left", '169px'],
                ["style", "top", '88px']
            ],
            "${_scene5GLogo}": [
                ["style", "top", '95px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_scene5ForkRim2}": [
                ["style", "top", '211px'],
                ["transform", "rotateZ", '-9deg'],
                ["style", "height", '18px'],
                ["style", "left", '180px'],
                ["style", "width", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 23000,
            autoPlay: true,
            labels: {
                "sc51": 0,
                "sc52": 7000,
                "sc53": 20000,
                "sc54": 22000
            },
            timeline: [
                { id: "eid7124", tween: [ "transform", "${_scene5laysLogo}", "scaleX", '0.74', { fromValue: '0.05'}], position: 9404, duration: 404, easing: "easeOutBounce" },
                { id: "eid7237", tween: [ "style", "${_scene5GLogo}", "display", 'block', { fromValue: 'none'}], position: 10212, duration: 0, easing: "easeOutBounce" },
                { id: "eid6443", tween: [ "style", "${_scene5YearSignal2016}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid7219", tween: [ "style", "${_scene1TruckAroowGlowCompCopy2}", "opacity", '0.78236191495647', { fromValue: '0.78236191495647'}], position: 11020, duration: 0, easing: "easeOutBounce" },
                { id: "eid6280", tween: [ "style", "${_navBackCompCopy}", "left", '18px', { fromValue: '18px'}], position: 7630, duration: 0 },
                { id: "eid11561", tween: [ "transform", "${_scene5truck1Comp}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 7250, duration: 380, easing: "easeInBack" },
                { id: "eid6004", tween: [ "style", "${_scene5ForkAmin}", "top", '88px', { fromValue: '88px'}], position: 1500, duration: 0 },
                { id: "eid6010", tween: [ "style", "${_scene5ForkAmin}", "top", '-26px', { fromValue: '88px'}], position: 2977, duration: 523 },
                { id: "eid6046", tween: [ "style", "${_scene5ForkAmin}", "top", '84px', { fromValue: '-26px'}], position: 5189, duration: 561 },
                { id: "eid5866", tween: [ "transform", "${_scene5Truck1ChasisComp}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 1020, duration: 277, easing: "easeOutBack" },
                { id: "eid5867", tween: [ "transform", "${_scene5Truck1ChasisComp}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1297, duration: 203, easing: "easeOutBack" },
                { id: "eid6325", tween: [ "style", "${_scene5Box3}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid7127", tween: [ "transform", "${_scene5tropicanaLogo}", "scaleY", '0.84', { fromValue: '0.05'}], position: 9808, duration: 404, easing: "easeOutBounce" },
                { id: "eid6334", tween: [ "style", "${_navForwardCompCopy2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid6003", tween: [ "style", "${_scene5Cont}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0 },
                { id: "eid6007", tween: [ "style", "${_scene5Cont}", "left", '0px', { fromValue: '0px'}], position: 2977, duration: 0 },
                { id: "eid6040", tween: [ "style", "${_scene5Cont}", "left", '0px', { fromValue: '0px'}], position: 5189, duration: 0 },
                { id: "eid6043", tween: [ "style", "${_scene5Cont}", "left", '0px', { fromValue: '0px'}], position: 5750, duration: 0 },
                { id: "eid7258", tween: [ "style", "${_scene5WalkComp}", "opacity", '0', { fromValue: '1'}], position: 22000, duration: 500, easing: "easeOutBounce" },
                { id: "eid7131", tween: [ "transform", "${_scene5quakerLogo}", "scaleY", '1', { fromValue: '0.05'}], position: 10616, duration: 404, easing: "easeOutBounce" },
                { id: "eid6079", tween: [ "style", "${_scNav1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid6282", tween: [ "style", "${_scNav1}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid5855", tween: [ "motion", "${_scene5truck1Comp}", [[-184.8, 814.21, 0, 0],[43.46, 571.06, 292.03, -275, 345.67, -325.51],[243.36, 411.02, 0, 0]]], position: 1020, duration: 480, easing: "easeOutBack" },
                { id: "eid6115", tween: [ "motion", "${_scene5truck1Comp}", [[243.36, 411.02, 0, 0],[674.65, 131.87, 0, 0]]], position: 7000, duration: 630, easing: "easeInBack" },
                { id: "eid11568", tween: [ "motion", "${_scene5truck1Comp}", [[674.65, 131.87, 0, 0],[864.9, 33.77, 401.35, -185.14, 306.35, -141.31],[1177.55, -82.34, 0, 0]]], position: 22000, duration: 1000, easing: "easeInBack" },
                { id: "eid6117", tween: [ "transform", "${_scene5Truck2Chasis}", "rotateZ", '-1deg', { fromValue: '0deg'}], position: 7000, duration: 130, easing: "easeInBack" },
                { id: "eid6118", tween: [ "transform", "${_scene5Truck2Chasis}", "rotateZ", '0deg', { fromValue: '-1deg'}], position: 7130, duration: 120, easing: "easeInBack" },
                { id: "eid6333", tween: [ "style", "${_navForwardCompCopy2}", "left", '86px', { fromValue: '86px'}], position: 7630, duration: 0 },
                { id: "eid6005", tween: [ "style", "${_scene5Cont}", "top", '11px', { fromValue: '11px'}], position: 1500, duration: 0 },
                { id: "eid6011", tween: [ "style", "${_scene5Cont}", "top", '-103px', { fromValue: '11px'}], position: 2977, duration: 523 },
                { id: "eid6047", tween: [ "style", "${_scene5Cont}", "top", '7px', { fromValue: '-103px'}], position: 5189, duration: 561 },
                { id: "eid5876", tween: [ "transform", "${_scene5truck1Comp}", "scaleY", '1', { fromValue: '0.95'}], position: 1297, duration: 203, easing: "easeOutBack" },
                { id: "eid6125", tween: [ "transform", "${_scene5truck1Comp}", "scaleY", '1.04', { fromValue: '1'}], position: 7000, duration: 130, easing: "easeInBack" },
                { id: "eid6256", tween: [ "transform", "${_scene5truck1Comp}", "scaleY", '0.884', { fromValue: '1.04'}], position: 7130, duration: 500, easing: "easeInBack" },
                { id: "eid6447", tween: [ "transform", "${_scene5YearSignal2016}", "scaleY", '0.85', { fromValue: '0.05'}], position: 2000, duration: 500, easing: "easeOutBounce" },
                { id: "eid7125", tween: [ "transform", "${_scene5laysLogo}", "scaleY", '0.74', { fromValue: '0.05'}], position: 9404, duration: 404, easing: "easeOutBounce" },
                { id: "eid6275", tween: [ "style", "${_navForwardComp}", "left", '86px', { fromValue: '86px'}], position: 7630, duration: 0 },
                { id: "eid7130", tween: [ "transform", "${_scene5quakerLogo}", "scaleX", '1', { fromValue: '0.05'}], position: 10616, duration: 404, easing: "easeOutBounce" },
                { id: "eid5894", tween: [ "motion", "${_scene5ForkComp}", [[996.69, 877.13, 0, 0],[340.6, 492.54, 0, 0]]], position: 1500, duration: 1000 },
                { id: "eid6014", tween: [ "motion", "${_scene5ForkComp}", [[340.6, 492.54, 0, 0],[230.5, 453, 0, 0]]], position: 4311, duration: 189 },
                { id: "eid6032", tween: [ "motion", "${_scene5ForkComp}", [[230.5, 453, 0, 0],[987.79, 894.67, 0, 0]]], position: 5000, duration: 1000 },
                { id: "eid6033", tween: [ "style", "${_scene5ForkContainer}", "display", 'none', { fromValue: 'block'}], position: 5076, duration: 0 },
                { id: "eid6002", tween: [ "style", "${_scene5ForkAmin}", "left", '169px', { fromValue: '169px'}], position: 1500, duration: 0 },
                { id: "eid6006", tween: [ "style", "${_scene5ForkAmin}", "left", '169px', { fromValue: '169px'}], position: 2977, duration: 0 },
                { id: "eid6036", tween: [ "style", "${_scene5ForkAmin}", "left", '169px', { fromValue: '169px'}], position: 5189, duration: 0 },
                { id: "eid6042", tween: [ "style", "${_scene5ForkAmin}", "left", '169px', { fromValue: '169px'}], position: 5750, duration: 0 },
                { id: "eid7222", tween: [ "style", "${_scene1TruckAroowGlowComp}", "opacity", '0.50346161291851', { fromValue: '0.50346161291851'}], position: 11020, duration: 0, easing: "easeOutBounce" },
                { id: "eid7221", tween: [ "style", "${_scene1TruckAroowGlowCompCopy4}", "opacity", '0.50346161291851', { fromValue: '0.50346161291851'}], position: 11020, duration: 0, easing: "easeOutBounce" },
                { id: "eid7253", tween: [ "style", "${_logosScene5}", "opacity", '0', { fromValue: '1'}], position: 22000, duration: 500, easing: "easeOutBounce" },
                { id: "eid6087", tween: [ "style", "${_scene5Box1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
                { id: "eid6310", tween: [ "style", "${_scene5Box1}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 250 },
                { id: "eid6336", tween: [ "style", "${_scNav3}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid6074", tween: [ "style", "${_scene5Truck2Chasis}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6075", tween: [ "style", "${_scene5Truck2Chasis}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid6084", tween: [ "style", "${_scene5Box1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid7123", tween: [ "transform", "${_scene5PepsiLogo}", "scaleY", '0.78', { fromValue: '0.05'}], position: 9000, duration: 404, easing: "easeOutBounce" },
                { id: "eid6352", tween: [ "style", "${_scNav3}", "opacity", '1', { fromValue: '0'}], position: 20000, duration: 250 },
                { id: "eid7128", tween: [ "transform", "${_scene5GLogo}", "scaleX", '0.7', { fromValue: '0.05'}], position: 10212, duration: 404, easing: "easeOutBounce" },
                { id: "eid6441", tween: [ "transform", "${_scene5YearSignal2015}", "scaleX", '0.85', { fromValue: '0.05'}], position: 1500, duration: 500, easing: "easeOutBounce" },
                { id: "eid6291", tween: [ "style", "${_scNav2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid6076", tween: [ "style", "${_scene5Truck1Chasis}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
                { id: "eid6082", tween: [ "style", "${_scNav1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
                { id: "eid6276", tween: [ "style", "${_navBackComp}", "left", '18px', { fromValue: '18px'}], position: 7630, duration: 0 },
                { id: "eid7242", tween: [ "style", "${_scene1TruckAroowGlowCompCopy4}", "display", 'block', { fromValue: 'none'}], position: 10616, duration: 0, easing: "easeOutBounce" },
                { id: "eid7241", tween: [ "style", "${_scene1TruckAroowGlowCompCopy}", "display", 'block', { fromValue: 'none'}], position: 10616, duration: 0, easing: "easeOutBounce" },
                { id: "eid6316", tween: [ "style", "${_scene5Box2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid6432", tween: [ "style", "${_scene5YearSignal2015}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid6335", tween: [ "style", "${_navBackCompCopy2}", "left", '18px', { fromValue: '18px'}], position: 7630, duration: 0 },
                { id: "eid7218", tween: [ "style", "${_scene1TruckAroowGlowCompCopy3}", "opacity", '0.50346161291851', { fromValue: '0.50346161291851'}], position: 11020, duration: 0, easing: "easeOutBounce" },
                { id: "eid6315", tween: [ "style", "${_scene5Box2}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 250 },
                { id: "eid6342", tween: [ "style", "${_scene5Box2}", "opacity", '1', { fromValue: '1'}], position: 7250, duration: 0 },
                { id: "eid6343", tween: [ "style", "${_scene5Box2}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 250 },
                { id: "eid6279", tween: [ "style", "${_navForwardCompCopy}", "left", '86px', { fromValue: '86px'}], position: 7630, duration: 0 },
                { id: "eid7243", tween: [ "style", "${_scene1TruckAroowGlowComp}", "display", 'block', { fromValue: 'none'}], position: 10616, duration: 0, easing: "easeOutBounce" },
                { id: "eid7235", tween: [ "style", "${_scene5laysLogo}", "display", 'block', { fromValue: 'none'}], position: 9404, duration: 0, easing: "easeOutBounce" },
                { id: "eid7240", tween: [ "style", "${_scene1TruckAroowGlowCompCopy2}", "display", 'block', { fromValue: 'none'}], position: 10616, duration: 0, easing: "easeOutBounce" },
                { id: "eid6446", tween: [ "transform", "${_scene5YearSignal2016}", "scaleX", '0.85', { fromValue: '0.05'}], position: 2000, duration: 500, easing: "easeOutBounce" },
                { id: "eid6105", tween: [ "style", "${_scene5ForkContainer}", "top", '-33px', { fromValue: '0px'}], position: 5000, duration: 76 },
                { id: "eid6330", tween: [ "style", "${_scene5Box3}", "opacity", '1', { fromValue: '0'}], position: 20000, duration: 250 },
                { id: "eid7084", tween: [ "style", "${_scene5WalkComp}", "display", 'block', { fromValue: 'none'}], position: 8096, duration: 0 },
                { id: "eid10731", tween: [ "style", "${_scene5WalkComp}", "display", 'none', { fromValue: 'block'}], position: 20000, duration: 0 },
                { id: "eid7262", tween: [ "style", "${_scene5WalkComp}", "display", 'none', { fromValue: 'none'}], position: 22500, duration: 0, easing: "easeOutBounce" },
                { id: "eid11562", tween: [ "style", "${_scene5truck1Comp}", "height", '362px', { fromValue: '362px'}], position: 7630, duration: 0, easing: "easeInBack" },
                { id: "eid5875", tween: [ "transform", "${_scene5truck1Comp}", "scaleX", '1', { fromValue: '1.07'}], position: 1297, duration: 203, easing: "easeOutBack" },
                { id: "eid6124", tween: [ "transform", "${_scene5truck1Comp}", "scaleX", '0.96', { fromValue: '1'}], position: 7000, duration: 130, easing: "easeInBack" },
                { id: "eid6126", tween: [ "transform", "${_scene5truck1Comp}", "scaleX", '1', { fromValue: '0.96'}], position: 7130, duration: 120, easing: "easeInBack" },
                { id: "eid6255", tween: [ "transform", "${_scene5truck1Comp}", "scaleX", '0.85', { fromValue: '1'}], position: 7250, duration: 380, easing: "easeInBack" },
                { id: "eid6281", tween: [ "style", "${_navForwardCompCopy}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid7111", tween: [ "style", "${_logosScene5}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
                { id: "eid7263", tween: [ "style", "${_logosScene5}", "display", 'none', { fromValue: 'block'}], position: 22500, duration: 0, easing: "easeOutBounce" },
                { id: "eid7236", tween: [ "style", "${_scene5tropicanaLogo}", "display", 'block', { fromValue: 'none'}], position: 9808, duration: 0, easing: "easeOutBounce" },
                { id: "eid7220", tween: [ "style", "${_scene1TruckAroowGlowCompCopy}", "opacity", '0.50346161291851', { fromValue: '0.50346161291851'}], position: 11020, duration: 0, easing: "easeOutBounce" },
                { id: "eid7122", tween: [ "transform", "${_scene5PepsiLogo}", "scaleX", '0.78', { fromValue: '0.05'}], position: 9000, duration: 404, easing: "easeOutBounce" },
                { id: "eid6104", tween: [ "style", "${_scene5ForkContainer}", "left", '-56px', { fromValue: '0px'}], position: 5000, duration: 76 },
                { id: "eid6278", tween: [ "style", "${_scNav2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
                { id: "eid6345", tween: [ "style", "${_scNav2}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 4500 },
                { id: "eid6346", tween: [ "style", "${_scNav2}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 500 },
                { id: "eid6349", tween: [ "style", "${_scNav2}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 250 },
                { id: "eid7238", tween: [ "style", "${_scene5quakerLogo}", "display", 'block', { fromValue: 'none'}], position: 10616, duration: 0, easing: "easeOutBounce" },
                { id: "eid7239", tween: [ "style", "${_scene1TruckAroowGlowCompCopy3}", "display", 'block', { fromValue: 'none'}], position: 10616, duration: 0, easing: "easeOutBounce" },
                { id: "eid6442", tween: [ "transform", "${_scene5YearSignal2015}", "scaleY", '0.85', { fromValue: '0.05'}], position: 1500, duration: 500, easing: "easeOutBounce" },
                { id: "eid7126", tween: [ "transform", "${_scene5tropicanaLogo}", "scaleX", '0.84', { fromValue: '0.05'}], position: 9808, duration: 404, easing: "easeOutBounce" },
                { id: "eid7129", tween: [ "transform", "${_scene5GLogo}", "scaleY", '0.7', { fromValue: '0.05'}], position: 10212, duration: 404, easing: "easeOutBounce" }            ]
        }
    }
},
"scene6Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene6Fire_00001',
                    type: 'image',
                    rect: ['0', '0', '1020px', '635px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00001.jpg', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'scene6fireWorksComp',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['663px', '-16px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    opacity: 0.097560971975327,
                    type: 'rect',
                    id: 'scene6BetterComp'
                },
                {
                    id: 'scene6pepsiSign',
                    type: 'image',
                    rect: ['285px', '347px', '578px', '89px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6pepsiSign.png', '0px', '0px']
                },
                {
                    type: 'group',
                    id: 'scene6TruckComp',
                    rect: ['-84px', '647px', '295', '254', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.9', '0.9']],
                    c: [
                    {
                        id: 'scene6Truck1Under',
                        type: 'image',
                        rect: ['58px', '154px', '220px', '100px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6Truck1Under.png', '0px', '0px']
                    },
                    {
                        id: 'scene6Truck1Chasis',
                        type: 'image',
                        rect: ['5px', '2px', '295px', '243px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6Truck1Chasis.png', '0px', '0px']
                    }]
                },
                {
                    id: 'scene6People',
                    type: 'group',
                    rect: ['61px', '417px', '972', '255', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene6StadiumPeopleLftOne',
                        type: 'image',
                        rect: ['149px', '143px', '123px', '152px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleLft.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleRghtOne',
                        type: 'image',
                        rect: ['869px', '136px', '103px', '112px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleRght.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleLftTwo',
                        type: 'image',
                        rect: ['321px', '70px', '123px', '152px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleLft.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleRghtTwo',
                        type: 'image',
                        rect: ['749px', '127px', '103px', '112px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleRght.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleLftThree',
                        type: 'image',
                        rect: ['0px', '60px', '123px', '152px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleLft.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleLftThreeCopy',
                        type: 'image',
                        rect: ['0px', '60px', '123px', '152px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleLft.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleRghtThree',
                        type: 'image',
                        rect: ['594px', '143px', '103px', '112px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleRght.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleLftFour',
                        type: 'image',
                        rect: ['174px', '18px', '123px', '152px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleLft.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleRightFour',
                        type: 'image',
                        rect: ['828px', '0px', '103px', '112px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleRght.png', '0px', '0px']
                    },
                    {
                        id: 'scene6StadiumPeopleRightFourCopy',
                        type: 'image',
                        rect: ['828px', '0px', '103px', '112px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6StadiumPeopleRght.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        display: 'none',
                        rect: ['820px', '58px', '64px', '106px', 'auto', 'auto'],
                        id: 'scene6Sign20172',
                        fill: ['rgba(0,0,0,0)', 'images/scene6Sign2017.png', '0px', '0px']
                    }]
                },
                {
                    type: 'group',
                    display: 'block',
                    id: 'text1',
                    rect: ['0', '9', '251', '469', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene6Text1',
                        type: 'image',
                        rect: ['0px', '0px', '251px', '457px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6Text1.png', '0px', '0px']
                    },
                    {
                        id: 'nav1',
                        type: 'group',
                        rect: ['64', '420px', '115', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navBackComp',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navForwardComp',
                            type: 'rect',
                            rect: ['66px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'text2',
                    rect: ['0', '9', '251', '469', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene6Text2',
                        type: 'image',
                        rect: ['0px', '0px', '251px', '457px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6Text2.png', '0px', '0px']
                    },
                    {
                        id: 'nav2',
                        type: 'group',
                        rect: ['64', '420px', '115', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navBackCompCopy',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navForwardCompCopy',
                            type: 'rect',
                            rect: ['66px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    type: 'group',
                    display: 'none',
                    id: 'text3',
                    rect: ['0', '9', '251', '586px', 'auto', 'auto'],
                    c: [
                    {
                        id: 'scene6Text3',
                        type: 'image',
                        rect: ['0px', '0px', '251px', '402px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6Text3.png', '0px', '0px']
                    },
                    {
                        id: 'nav3',
                        type: 'group',
                        rect: ['65px', '364px', '115', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navBackCompCopy2',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navForwardCompCopy2',
                            type: 'rect',
                            rect: ['66px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    rect: ['0', '9', '251', '586', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    type: 'group',
                    id: 'text4',
                    c: [
                    {
                        id: 'scene6Text4',
                        type: 'image',
                        rect: ['0px', '0px', '290px', '551px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6Text4.png', '0px', '0px']
                    },
                    {
                        id: 'nav4',
                        type: 'group',
                        rect: ['87px', '502px', '115', '49', 'auto', 'auto'],
                        c: [
                        {
                            id: 'navBackCompCopy3',
                            type: 'rect',
                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'navForwardCompCopy3',
                            type: 'rect',
                            rect: ['66px', '0px', 'auto', 'auto', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'flag3Break',
                    rect: ['382px', '-83px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'flag6Leading',
                    rect: ['540px', '-52px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['210px', '-30px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    clip: ['rect(0px 300px 368px 0px)'],
                    id: 'flagOneGreatPlace'
                },
                {
                    rect: ['478px', '72px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    clip: ['rect(0px 300px 289px 0px)'],
                    id: 'flag6Sus2'
                },
                {
                    rect: ['297px', '82px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    clip: ['rect(0px 300px 273px 0px)'],
                    id: 'flag2Uni'
                },
                {
                    rect: ['645px', '98px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    clip: ['rect(0px 300px 267px 0px)'],
                    id: 'flag4Record'
                },
                {
                    rect: ['319', '650px', '381', '49', 'auto', 'auto'],
                    display: 'none',
                    opacity: 1,
                    type: 'group',
                    id: 'navMapper',
                    c: [
                    {
                        id: 'scene6Map',
                        type: 'image',
                        rect: ['-319px', '-650px', '1020px', '635px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/scene6Map.jpg', '0px', '0px']
                    },
                    {
                        id: 'glow1',
                        type: 'rect',
                        rect: ['-329px', '-673px', 'auto', 'auto', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.3', '0.3']]
                    },
                    {
                        id: 'nav1CompCopy',
                        type: 'rect',
                        rect: ['0px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'glow2',
                        type: 'rect',
                        rect: ['-429px', '-564px', 'auto', 'auto', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.3', '0.3']]
                    },
                    {
                        id: 'nav2CompCopy',
                        type: 'rect',
                        rect: ['66px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'glow3',
                        type: 'rect',
                        rect: ['-97px', '-388px', 'auto', 'auto', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.3', '0.3']]
                    },
                    {
                        id: 'nav3CompCopy',
                        type: 'rect',
                        rect: ['37px', '-253px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'glow4',
                        type: 'rect',
                        rect: ['330px', '-286px', 'auto', 'auto', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.3', '0.3']]
                    },
                    {
                        id: 'nav4CompCopy',
                        type: 'rect',
                        rect: ['199px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'glow5',
                        type: 'rect',
                        rect: ['90px', '-503px', 'auto', 'auto', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.3', '0.3']]
                    },
                    {
                        id: 'nav5CompCopy',
                        type: 'rect',
                        rect: ['266px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'glow6',
                        type: 'rect',
                        rect: ['74px', '-708px', 'auto', 'auto', 'auto', 'auto'],
                        transform: [[0, 0], [], [], ['0.3', '0.3']]
                    },
                    {
                        id: 'nav6CompCopy',
                        type: 'rect',
                        rect: ['332px', '-1px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'text5',
                        type: 'group',
                        rect: ['-320px', '-250px', '305', '157', 'auto', 'auto'],
                        c: [
                        {
                            id: 'scene6Text5',
                            type: 'image',
                            rect: ['0px', '0px', '163px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scene6Text5.png', '0px', '0px']
                        },
                        {
                            id: 'nav5',
                            type: 'group',
                            rect: ['56px', '148px', '115', '49', 'auto', 'auto'],
                            c: [
                            {
                                id: 'navBackCompCopy4',
                                type: 'rect',
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                display: 'block',
                                type: 'rect',
                                id: 'navForwardCompCopy4',
                                rect: ['66px', '0px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }]
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'flagOneGreatPlace',
                symbolName: 'flag1GreatPlace',
                autoPlay: {

               }
            },
            {
                id: 'navBackComp',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'nav1CompCopy',
                symbolName: 'nav1Comp',
                autoPlay: {

               }
            },
            {
                id: 'nav5CompCopy',
                symbolName: 'nav5Comp',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy2',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'nav3CompCopy',
                symbolName: 'nav3Comp',
                autoPlay: {

               }
            },
            {
                id: 'flag4Record',
                symbolName: 'flag4Record',
                autoPlay: {

               }
            },
            {
                id: 'glow1',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'glow6',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'flag2Uni',
                symbolName: 'flag2Uni',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy4',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'nav6CompCopy',
                symbolName: 'nav6Comp',
                autoPlay: {

               }
            },
            {
                id: 'scene6fireWorksComp',
                symbolName: 'scene6fireWorksComp',
                autoPlay: {

               }
            },
            {
                id: 'glow5',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'nav4CompCopy',
                symbolName: 'nav4Comp',
                autoPlay: {

               }
            },
            {
                id: 'glow2',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardCompCopy4',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy3',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardCompCopy3',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'nav2CompCopy',
                symbolName: 'nav2Comp',
                autoPlay: {

               }
            },
            {
                id: 'navBackCompCopy',
                symbolName: 'navBackComp',
                autoPlay: {

               }
            },
            {
                id: 'glow4',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'flag3Break',
                symbolName: 'flag3Break',
                autoPlay: {

               }
            },
            {
                id: 'navForwardCompCopy',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'flag6Leading',
                symbolName: 'flag6Leading',
                autoPlay: {

               }
            },
            {
                id: 'flag6Sus2',
                symbolName: 'flag6Sus2',
                autoPlay: {

               }
            },
            {
                id: 'navForwardCompCopy2',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            },
            {
                id: 'glow3',
                symbolName: 'scene1TruckAroowGlowComp',
                autoPlay: {

               }
            },
            {
                id: 'scene6BetterComp',
                symbolName: 'scene6BetterComp',
                autoPlay: {

               }
            },
            {
                id: 'navForwardComp',
                symbolName: 'navForwardComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_glow5}": [
                ["transform", "scaleX", '0.3'],
                ["style", "top", '-503px'],
                ["transform", "scaleY", '0.3'],
                ["style", "left", '90px']
            ],
            "${_navBackCompCopy}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_nav5}": [
                ["style", "top", '148px'],
                ["style", "left", '56px']
            ],
            "${_text5}": [
                ["style", "left", '-320px'],
                ["style", "top", '-250px']
            ],
            "${_flagOneGreatPlace}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '210px'],
                ["style", "clip", [0,300,368,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-30px']
            ],
            "${_navForwardCompCopy4}": [
                ["style", "top", '0px'],
                ["style", "left", '66px'],
                ["style", "display", 'block']
            ],
            "${_scene6Text1}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_scene6People}": [
                ["style", "left", '61px'],
                ["style", "top", '417px']
            ],
            "${_nav3}": [
                ["style", "top", '364px'],
                ["style", "left", '65px']
            ],
            "${_glow4}": [
                ["transform", "scaleX", '0.3'],
                ["transform", "scaleY", '0.3'],
                ["style", "left", '330px'],
                ["style", "top", '-286px']
            ],
            "${_nav4CompCopy}": [
                ["style", "left", '464px'],
                ["style", "top", '-153px']
            ],
            "${_scene6StadiumPeopleRghtThree}": [
                ["style", "top", '143px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '594px']
            ],
            "${_text3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000']
            ],
            "${_scene6TruckComp}": [
                ["motion", "location", '63.5px 774px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.8']
            ],
            "${_scene6Sign20172}": [
                ["style", "top", '58px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "-webkit-transform-origin", [50,95], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,95],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '820px'],
                ["style", "display", 'none']
            ],
            "${_nav6CompCopy}": [
                ["style", "top", '-574px'],
                ["style", "left", '209px']
            ],
            "${_scene6StadiumPeopleRightFourCopy}": [
                ["style", "top", '-100px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '884px']
            ],
            "${_nav2}": [
                ["style", "top", '420px']
            ],
            "${_scene6Text3}": [
                ["style", "height", '402px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '251px']
            ],
            "${_scene6fireWorksComp}": [
                ["style", "display", 'none']
            ],
            "${_scene6StadiumPeopleRghtOne}": [
                ["style", "top", '136px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '869px']
            ],
            "${_nav4}": [
                ["style", "top", '502px'],
                ["style", "left", '87px']
            ],
            "${_scene6StadiumPeopleLftTwo}": [
                ["style", "top", '70px'],
                ["style", "opacity", '0'],
                ["style", "left", '321px']
            ],
            "${_navBackCompCopy3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flag6Sus2}": [
                ["style", "top", '72px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '478px'],
                ["style", "clip", [0,300,289,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [50,101], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,101],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_flag2Uni}": [
                ["style", "top", '82px'],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '297px'],
                ["style", "clip", [0,300,273,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [42,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_navMapper}": [
                ["style", "top", '650px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none']
            ],
            "${_scene6Map}": [
                ["style", "top", '-650px'],
                ["transform", "scaleY", '5'],
                ["transform", "scaleX", '5'],
                ["style", "height", '635px'],
                ["style", "left", '-319px'],
                ["style", "width", '1020px']
            ],
            "${_scene6StadiumPeopleLftOne}": [
                ["style", "top", '143px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '149px']
            ],
            "${_scene6Text5}": [
                ["style", "top", '0px'],
                ["style", "height", '188px'],
                ["style", "left", '0px'],
                ["style", "width", '163px']
            ],
            "${_nav1}": [
                ["style", "top", '420px']
            ],
            "${_scene6StadiumPeopleLftFour}": [
                ["style", "top", '18px'],
                ["style", "opacity", '0'],
                ["style", "left", '174px']
            ],
            "${_nav1CompCopy}": [
                ["style", "left", '-194px'],
                ["style", "top", '-538px']
            ],
            "${_navForwardCompCopy}": [
                ["style", "left", '66px'],
                ["style", "top", '0px']
            ],
            "${_navForwardCompCopy3}": [
                ["style", "left", '66px'],
                ["style", "top", '0px']
            ],
            "${_text2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000']
            ],
            "${_scene6Truck1Chasis}": [
                ["style", "top", '2px'],
                ["style", "left", '5px'],
                ["transform", "rotateZ", '5deg']
            ],
            "${_flag3Break}": [
                ["style", "-webkit-transform-origin", [35,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [35,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [35,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [35,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [35,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '382px'],
                ["style", "top", '-83px']
            ],
            "${_text4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_text1}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0']
            ],
            "${_scene6pepsiSign}": [
                ["style", "top", '347px'],
                ["style", "opacity", '0.012830'],
                ["style", "left", '285px']
            ],
            "${_scene6Text4}": [
                ["style", "height", '551px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '290px']
            ],
            "${_navBackCompCopy2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1020px']
            ],
            "${_scene6StadiumPeopleLftThree}": [
                ["style", "top", '60px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_nav5CompCopy}": [
                ["style", "top", '-368px'],
                ["style", "left", '224px']
            ],
            "${_scene6Truck1Under}": [
                ["style", "left", '58px'],
                ["style", "top", '154px']
            ],
            "${_scene6Text2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flag4Record}": [
                ["style", "top", '98px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "display", 'none'],
                ["style", "left", '645px'],
                ["style", "clip", [0,300,267,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_scene6BetterComp}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '663px'],
                ["style", "display", 'none']
            ],
            "${_glow2}": [
                ["style", "top", '-564px'],
                ["style", "left", '-429px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3']
            ],
            "${_scene6StadiumPeopleRightFour}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '828px']
            ],
            "${_navBackCompCopy4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_glow3}": [
                ["style", "top", '-388px'],
                ["transform", "scaleX", '0.3'],
                ["style", "left", '-97px'],
                ["transform", "scaleY", '0.3']
            ],
            "${_navForwardCompCopy2}": [
                ["style", "left", '66px'],
                ["style", "top", '0px']
            ],
            "${_nav3CompCopy}": [
                ["style", "left", '37px'],
                ["style", "top", '-253px']
            ],
            "${_navBackComp}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_glow1}": [
                ["transform", "scaleX", '0.3'],
                ["style", "top", '-673px'],
                ["transform", "scaleY", '0.3'],
                ["style", "left", '-329px']
            ],
            "${_navForwardComp}": [
                ["style", "left", '66px'],
                ["style", "top", '0px']
            ],
            "${_glow6}": [
                ["style", "top", '-708px'],
                ["style", "left", '74px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3']
            ],
            "${_scene6StadiumPeopleLftThreeCopy}": [
                ["style", "top", '151px'],
                ["style", "opacity", '0'],
                ["style", "left", '444px']
            ],
            "${_nav2CompCopy}": [
                ["style", "left", '-295px'],
                ["style", "top", '-429px']
            ],
            "${_scene6StadiumPeopleRghtTwo}": [
                ["style", "top", '127px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '749px']
            ],
            "${_flag6Leading}": [
                ["style", "-webkit-transform-origin", [49,102], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [49,102],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [49,102],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [49,102],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [49,102],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.05'],
                ["style", "left", '540px'],
                ["style", "top", '-52px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 26769,
            autoPlay: true,
            labels: {
                "s61": 5000,
                "s62": 10000,
                "s63": 15000,
                "s64": 20000,
                "s65": 25000
            },
            timeline: [
                { id: "eid10813", tween: [ "style", "${_scene6StadiumPeopleRghtTwo}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 462 },
                { id: "eid11412", tween: [ "style", "${_flag6Leading}", "display", 'block', { fromValue: 'none'}], position: 16000, duration: 0, easing: "easeOutBounce" },
                { id: "eid10519", tween: [ "transform", "${_scene6Truck1Chasis}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 1750, duration: 250 },
                { id: "eid9201", tween: [ "transform", "${_flag3Break}", "scaleY", '1', { fromValue: '0.05'}], position: 10500, duration: 500, easing: "easeOutBounce" },
                { id: "eid9439", tween: [ "style", "${_flag4Record}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0, easing: "easeOutBounce" },
                { id: "eid7712", tween: [ "style", "${_navMapper}", "opacity", '1', { fromValue: '0'}], position: 25000, duration: 1000 },
                { id: "eid9193", tween: [ "style", "${_flag3Break}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0, easing: "easeOutBounce" },
                { id: "eid7554", tween: [ "style", "${_text2}", "opacity", '1', { fromValue: '0.000000'}], position: 10000, duration: 500 },
                { id: "eid7558", tween: [ "style", "${_text2}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 500 },
                { id: "eid10826", tween: [ "style", "${_scene6StadiumPeopleRightFourCopy}", "opacity", '1', { fromValue: '0.000000'}], position: 3676, duration: 520 },
                { id: "eid10816", tween: [ "style", "${_scene6StadiumPeopleLftThree}", "opacity", '1', { fromValue: '0'}], position: 2962, duration: 538 },
                { id: "eid9138", tween: [ "style", "${_flagOneGreatPlace}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid9276", tween: [ "style", "${_flag6Sus2}", "display", 'block', { fromValue: 'none'}], position: 20500, duration: 0, easing: "easeOutBounce" },
                { id: "eid9143", tween: [ "transform", "${_flagOneGreatPlace}", "scaleY", '1', { fromValue: '0.05'}], position: 2000, duration: 500, easing: "easeOutBounce" },
                { id: "eid7556", tween: [ "style", "${_text1}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0 },
                { id: "eid10825", tween: [ "style", "${_scene6StadiumPeopleRightFour}", "opacity", '1', { fromValue: '0.000000'}], position: 3480, duration: 520 },
                { id: "eid7562", tween: [ "style", "${_text3}", "opacity", '1', { fromValue: '0.000000'}], position: 15000, duration: 500 },
                { id: "eid7565", tween: [ "style", "${_text3}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 500 },
                { id: "eid9440", tween: [ "style", "${_scene6Sign20172}", "display", 'block', { fromValue: 'none'}], position: 2029, duration: 0, easing: "easeOutBounce" },
                { id: "eid10810", tween: [ "style", "${_scene6StadiumPeopleLftTwo}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 462 },
                { id: "eid9281", tween: [ "transform", "${_flag6Sus2}", "scaleY", '1', { fromValue: '0.05'}], position: 20500, duration: 500, easing: "easeOutBounce" },
                { id: "eid9280", tween: [ "transform", "${_flag6Sus2}", "scaleX", '1', { fromValue: '0.05'}], position: 20500, duration: 500, easing: "easeOutBounce" },
                { id: "eid9156", tween: [ "style", "${_flag2Uni}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutBounce" },
                { id: "eid10566", tween: [ "transform", "${_scene6TruckComp}", "scaleX", '0.9', { fromValue: '0.8'}], position: 1875, duration: 125 },
                { id: "eid11417", tween: [ "transform", "${_flag6Leading}", "scaleX", '1', { fromValue: '0.05'}], position: 16000, duration: 500, easing: "easeOutBounce" },
                { id: "eid9215", tween: [ "transform", "${_flag4Record}", "scaleX", '1', { fromValue: '0.05'}], position: 15000, duration: 500, easing: "easeOutBounce" },
                { id: "eid9508", tween: [ "style", "${_scene6BetterComp}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0, easing: "easeOutBounce" },
                { id: "eid7846", tween: [ "transform", "${_scene6Map}", "scaleY", '1', { fromValue: '5'}], position: 25000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid7567", tween: [ "style", "${_text4}", "display", 'block', { fromValue: 'none'}], position: 20000, duration: 0 },
                { id: "eid7758", tween: [ "style", "${_navForwardCompCopy4}", "display", 'none', { fromValue: 'block'}], position: 25000, duration: 0, easing: "easeOutBounce" },
                { id: "eid7733", tween: [ "style", "${_navForwardCompCopy4}", "display", 'none', { fromValue: 'none'}], position: 26769, duration: 0, easing: "easeOutBounce" },
                { id: "eid7563", tween: [ "style", "${_text3}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid7566", tween: [ "style", "${_text3}", "display", 'none', { fromValue: 'block'}], position: 20500, duration: 0 },
                { id: "eid7845", tween: [ "transform", "${_scene6Map}", "scaleX", '1', { fromValue: '5'}], position: 25000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid10515", tween: [ "motion", "${_scene6TruckComp}", [[63.5, 774, 0, 0],[679.96, 529.25, 0, 0]]], position: 1000, duration: 1000, easing: "easeOutBack" },
                { id: "eid7801", tween: [ "transform", "${_scene6Sign20172}", "scaleX", '1', { fromValue: '0.05'}], position: 2029, duration: 500, easing: "easeOutBounce" },
                { id: "eid9196", tween: [ "transform", "${_flag2Uni}", "scaleX", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid9197", tween: [ "transform", "${_flag2Uni}", "scaleY", '1', { fromValue: '0.05'}], position: 10000, duration: 500, easing: "easeOutBounce" },
                { id: "eid7802", tween: [ "transform", "${_scene6Sign20172}", "scaleY", '1', { fromValue: '0.05'}], position: 2029, duration: 500, easing: "easeOutBounce" },
                { id: "eid10819", tween: [ "style", "${_scene6StadiumPeopleRghtThree}", "opacity", '1', { fromValue: '0.000000'}], position: 2962, duration: 538 },
                { id: "eid9374", tween: [ "style", "${_scene6fireWorksComp}", "display", 'block', { fromValue: 'none'}], position: 20019, duration: 0, easing: "easeOutBounce" },
                { id: "eid9142", tween: [ "transform", "${_flagOneGreatPlace}", "scaleX", '1', { fromValue: '0.05'}], position: 2000, duration: 500, easing: "easeOutBounce" },
                { id: "eid7550", tween: [ "style", "${_text1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid7551", tween: [ "style", "${_text1}", "opacity", '1', { fromValue: '1'}], position: 5000, duration: 0 },
                { id: "eid7548", tween: [ "style", "${_text1}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500 },
                { id: "eid10804", tween: [ "style", "${_scene6StadiumPeopleLftOne}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500 },
                { id: "eid7711", tween: [ "style", "${_navMapper}", "display", 'block', { fromValue: 'none'}], position: 25000, duration: 0 },
                { id: "eid7555", tween: [ "style", "${_text2}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
                { id: "eid7559", tween: [ "style", "${_text2}", "display", 'none', { fromValue: 'block'}], position: 15500, duration: 0 },
                { id: "eid10709", tween: [ "style", "${_scene6BetterComp}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 750, easing: "easeOutBounce" },
                { id: "eid10822", tween: [ "style", "${_scene6StadiumPeopleLftFour}", "opacity", '1', { fromValue: '0'}], position: 3196, duration: 480 },
                { id: "eid11418", tween: [ "transform", "${_flag6Leading}", "scaleY", '1', { fromValue: '0.05'}], position: 16000, duration: 500, easing: "easeOutBounce" },
                { id: "eid10807", tween: [ "style", "${_scene6StadiumPeopleRghtOne}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500 },
                { id: "eid10830", tween: [ "style", "${_scene6StadiumPeopleLftThreeCopy}", "opacity", '1', { fromValue: '0'}], position: 3302, duration: 538 },
                { id: "eid9216", tween: [ "transform", "${_flag4Record}", "scaleY", '1', { fromValue: '0.05'}], position: 15000, duration: 500, easing: "easeOutBounce" },
                { id: "eid9200", tween: [ "transform", "${_flag3Break}", "scaleX", '1', { fromValue: '0.05'}], position: 10500, duration: 500, easing: "easeOutBounce" },
                { id: "eid7569", tween: [ "style", "${_text4}", "opacity", '1', { fromValue: '0'}], position: 20000, duration: 500 },
                { id: "eid7571", tween: [ "style", "${_text4}", "opacity", '0', { fromValue: '1'}], position: 25000, duration: 500 },
                { id: "eid7820", tween: [ "style", "${_scene6pepsiSign}", "opacity", '1', { fromValue: '0.012830'}], position: 3874, duration: 500, easing: "easeOutBounce" }            ]
        }
    }
},
"seven7Comp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1020px', '635px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle4}": [
                ["style", "height", '635px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1020px']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1020px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scene5WalkComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['129px', '0px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA1.png', '0px', '0px']
                },
                {
                    rect: ['119px', '5px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA2.png', '0px', '0px']
                },
                {
                    rect: ['106px', '10px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA3.png', '0px', '0px']
                },
                {
                    rect: ['88px', '19px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA4.png', '0px', '0px']
                },
                {
                    rect: ['72px', '23px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA5.png', '0px', '0px']
                },
                {
                    rect: ['60px', '32px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA6.png', '0px', '0px']
                },
                {
                    rect: ['49px', '37px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA7.png', '0px', '0px']
                },
                {
                    rect: ['30px', '46px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA8.png', '0px', '0px']
                },
                {
                    rect: ['15px', '52px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB1.png', '0px', '0px']
                },
                {
                    rect: ['6px', '59px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '68px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '73px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB4.png', '0px', '0px']
                },
                {
                    rect: ['6px', '89px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB5.png', '0px', '0px']
                },
                {
                    rect: ['8px', '110px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB6.png', '0px', '0px']
                },
                {
                    rect: ['14px', '138px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB7.png', '0px', '0px']
                },
                {
                    id: 'scene5CBlueWalk',
                    type: 'group',
                    rect: ['27px', '146px', '348', '336', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC1',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC1.png', '0px', '0px']
                    },
                    {
                        rect: ['15px', '10px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC2',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC2.png', '0px', '0px']
                    },
                    {
                        rect: ['26px', '22px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC3',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC3.png', '0px', '0px']
                    },
                    {
                        rect: ['37px', '34px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC4',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC4.png', '0px', '0px']
                    },
                    {
                        rect: ['51px', '45px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC5',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC5.png', '0px', '0px']
                    },
                    {
                        rect: ['68px', '58px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC6',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC6.png', '0px', '0px']
                    },
                    {
                        rect: ['83px', '71px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC7',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC7.png', '0px', '0px']
                    }]
                },
                {
                    id: 'scene5CBlueWalk2',
                    type: 'group',
                    rect: ['125px', '236px', '348', '336', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC1Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC1.png', '0px', '0px']
                    },
                    {
                        rect: ['15px', '10px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC2Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC2.png', '0px', '0px']
                    },
                    {
                        rect: ['26px', '22px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC3Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC3.png', '0px', '0px']
                    },
                    {
                        rect: ['37px', '34px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC4Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC4.png', '0px', '0px']
                    },
                    {
                        rect: ['51px', '45px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC5Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC5.png', '0px', '0px']
                    },
                    {
                        rect: ['68px', '58px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC6Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC6.png', '0px', '0px']
                    },
                    {
                        rect: ['83px', '71px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC7Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC7.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['237px', '335px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD01',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD01.png', '0px', '0px']
                },
                {
                    rect: ['259px', '339px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD02',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD02.png', '0px', '0px']
                },
                {
                    rect: ['288px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD03',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD03.png', '0px', '0px']
                },
                {
                    rect: ['309px', '351px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD04',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD04.png', '0px', '0px']
                },
                {
                    rect: ['327px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD05',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD05.png', '0px', '0px']
                },
                {
                    rect: ['345px', '351px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD06',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD06.png', '0px', '0px']
                },
                {
                    rect: ['369px', '352px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD07',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD07.png', '0px', '0px']
                },
                {
                    rect: ['397px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD08',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD08.png', '0px', '0px']
                },
                {
                    rect: ['417px', '345px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD09',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD09.png', '0px', '0px']
                },
                {
                    rect: ['438px', '339px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD10',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD10.png', '0px', '0px']
                },
                {
                    rect: ['460px', '336px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD11',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD11.png', '0px', '0px']
                },
                {
                    rect: ['484px', '329px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD12.png', '0px', '0px']
                },
                {
                    rect: ['507px', '324px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD13.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene5BlueC4}": [
                ["style", "top", '34px'],
                ["style", "left", '37px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC7}": [
                ["style", "top", '71px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA5}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '72px'],
                ["style", "top", '23px']
            ],
            "${_scene5BlueD04}": [
                ["style", "display", 'none'],
                ["style", "left", '309px'],
                ["style", "top", '351px']
            ],
            "${_scene5BlueA3}": [
                ["style", "top", '10px'],
                ["style", "opacity", '1'],
                ["style", "left", '106px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB2}": [
                ["style", "display", 'none'],
                ["style", "left", '6px'],
                ["style", "top", '59px']
            ],
            "${_scene5BlueD01}": [
                ["style", "display", 'none'],
                ["style", "left", '237px'],
                ["style", "top", '335px']
            ],
            "${_scene5BlueB1}": [
                ["style", "display", 'none'],
                ["style", "left", '15px'],
                ["style", "top", '52px']
            ],
            "${_scene5BlueB6}": [
                ["style", "display", 'none'],
                ["style", "left", '8px'],
                ["style", "top", '110px']
            ],
            "${_scene5BlueC2}": [
                ["style", "top", '10px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA6}": [
                ["style", "top", '32px'],
                ["style", "opacity", '1'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC7Copy}": [
                ["style", "top", '71px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '119px'],
                ["style", "top", '5px']
            ],
            "${_scene5BlueA8}": [
                ["style", "top", '46px'],
                ["style", "opacity", '1'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB3}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '68px']
            ],
            "${_scene5BlueC5}": [
                ["style", "top", '45px'],
                ["style", "left", '51px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC1Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD05}": [
                ["style", "display", 'none'],
                ["style", "left", '327px'],
                ["style", "top", '349px']
            ],
            "${_scene5BlueD02}": [
                ["style", "display", 'none'],
                ["style", "left", '259px'],
                ["style", "top", '339px']
            ],
            "${_scene5BlueB5}": [
                ["style", "display", 'none'],
                ["style", "left", '6px'],
                ["style", "top", '89px']
            ],
            "${_scene5BlueA4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '88px'],
                ["style", "top", '19px']
            ],
            "${_scene5BlueB7}": [
                ["style", "display", 'none'],
                ["style", "left", '14px'],
                ["style", "top", '138px']
            ],
            "${_scene5BlueC5Copy}": [
                ["style", "top", '45px'],
                ["style", "left", '51px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD12}": [
                ["style", "display", 'none'],
                ["style", "left", '484px'],
                ["style", "top", '329px']
            ],
            "${_scene5BlueD03}": [
                ["style", "display", 'none'],
                ["style", "left", '288px'],
                ["style", "top", '349px']
            ],
            "${symbolSelector}": [
                ["style", "height", '617px'],
                ["style", "width", '772px']
            ],
            "${_scene5BlueD06}": [
                ["style", "display", 'none'],
                ["style", "left", '345px'],
                ["style", "top", '351px']
            ],
            "${_scene5BlueD13}": [
                ["style", "display", 'none'],
                ["style", "left", '507px'],
                ["style", "top", '324px']
            ],
            "${_scene5BlueC2Copy}": [
                ["style", "top", '10px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC3Copy}": [
                ["style", "top", '22px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA7}": [
                ["style", "top", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '49px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB4}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '73px']
            ],
            "${_scene5BlueC6}": [
                ["style", "top", '58px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC6Copy}": [
                ["style", "top", '58px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD09}": [
                ["style", "display", 'none'],
                ["style", "left", '417px'],
                ["style", "top", '345px']
            ],
            "${_scene5BlueC1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD11}": [
                ["style", "display", 'none'],
                ["style", "left", '460px'],
                ["style", "top", '336px']
            ],
            "${_scene5BlueA1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '129px'],
                ["style", "top", '0px']
            ],
            "${_scene5BlueD07}": [
                ["style", "display", 'none'],
                ["style", "left", '369px'],
                ["style", "top", '352px']
            ],
            "${_scene5BlueC4Copy}": [
                ["style", "top", '34px'],
                ["style", "left", '37px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD08}": [
                ["style", "display", 'none'],
                ["style", "left", '397px'],
                ["style", "top", '349px']
            ],
            "${_scene5BlueC3}": [
                ["style", "top", '22px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_scene5CBlueWalk2}": [
                ["style", "left", '125px'],
                ["style", "top", '236px']
            ],
            "${_scene5CBlueWalk}": [
                ["style", "left", '27px'],
                ["style", "top", '146px']
            ],
            "${_scene5BlueD10}": [
                ["style", "display", 'none'],
                ["style", "left", '438px'],
                ["style", "top", '339px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5228,
            autoPlay: true,
            timeline: [
                { id: "eid6973", tween: [ "style", "${_scene5BlueD04}", "display", 'block', { fromValue: 'none'}], position: 3928, duration: 0 },
                { id: "eid6979", tween: [ "style", "${_scene5BlueD04}", "display", 'none', { fromValue: 'block'}], position: 4058, duration: 0 },
                { id: "eid6972", tween: [ "style", "${_scene5BlueD05}", "display", 'block', { fromValue: 'none'}], position: 4058, duration: 0 },
                { id: "eid6980", tween: [ "style", "${_scene5BlueD05}", "display", 'none', { fromValue: 'block'}], position: 4188, duration: 0 },
                { id: "eid6964", tween: [ "style", "${_scene5BlueD13}", "display", 'block', { fromValue: 'none'}], position: 5098, duration: 0 },
                { id: "eid6988", tween: [ "style", "${_scene5BlueD13}", "display", 'none', { fromValue: 'block'}], position: 5228, duration: 0 },
                { id: "eid6967", tween: [ "style", "${_scene5BlueD10}", "display", 'block', { fromValue: 'none'}], position: 4708, duration: 0 },
                { id: "eid6985", tween: [ "style", "${_scene5BlueD10}", "display", 'none', { fromValue: 'block'}], position: 4838, duration: 0 },
                { id: "eid6949", tween: [ "style", "${_scene5BlueC1Copy}", "display", 'block', { fromValue: 'none'}], position: 2664, duration: 0 },
                { id: "eid6950", tween: [ "style", "${_scene5BlueC1Copy}", "display", 'none', { fromValue: 'block'}], position: 2789, duration: 0 },
                { id: "eid6848", tween: [ "style", "${_scene5BlueC7}", "display", 'block', { fromValue: 'none'}], position: 2539, duration: 0 },
                { id: "eid6855", tween: [ "style", "${_scene5BlueC7}", "display", 'none', { fromValue: 'block'}], position: 2664, duration: 0 },
                { id: "eid6908", tween: [ "style", "${_scene5BlueA4}", "display", 'block', { fromValue: 'none'}], position: 332, duration: 0 },
                { id: "eid6924", tween: [ "style", "${_scene5BlueA4}", "display", 'none', { fromValue: 'block'}], position: 445, duration: 0 },
                { id: "eid6816", tween: [ "style", "${_scene5BlueB1}", "display", 'block', { fromValue: 'none'}], position: 904, duration: 0 },
                { id: "eid6823", tween: [ "style", "${_scene5BlueB1}", "display", 'none', { fromValue: 'block'}], position: 1029, duration: 0 },
                { id: "eid6906", tween: [ "style", "${_scene5BlueA2}", "display", 'block', { fromValue: 'none'}], position: 112, duration: 0 },
                { id: "eid6922", tween: [ "style", "${_scene5BlueA2}", "display", 'none', { fromValue: 'block'}], position: 222, duration: 0 },
                { id: "eid6937", tween: [ "style", "${_scene5BlueC7Copy}", "display", 'block', { fromValue: 'none'}], position: 3414, duration: 0 },
                { id: "eid6938", tween: [ "style", "${_scene5BlueC7Copy}", "display", 'none', { fromValue: 'block'}], position: 3539, duration: 0 },
                { id: "eid6911", tween: [ "style", "${_scene5BlueA7}", "display", 'block', { fromValue: 'none'}], position: 666, duration: 0 },
                { id: "eid6927", tween: [ "style", "${_scene5BlueA7}", "display", 'none', { fromValue: 'block'}], position: 777, duration: 0 },
                { id: "eid6968", tween: [ "style", "${_scene5BlueD09}", "display", 'block', { fromValue: 'none'}], position: 4578, duration: 0 },
                { id: "eid6984", tween: [ "style", "${_scene5BlueD09}", "display", 'none', { fromValue: 'block'}], position: 4708, duration: 0 },
                { id: "eid6907", tween: [ "style", "${_scene5BlueA3}", "display", 'block', { fromValue: 'none'}], position: 222, duration: 0 },
                { id: "eid6923", tween: [ "style", "${_scene5BlueA3}", "display", 'none', { fromValue: 'block'}], position: 332, duration: 0 },
                { id: "eid6963", tween: [ "style", "${_scene5BlueD01}", "display", 'block', { fromValue: 'none'}], position: 3538, duration: 0 },
                { id: "eid6976", tween: [ "style", "${_scene5BlueD01}", "display", 'none', { fromValue: 'block'}], position: 3668, duration: 0 },
                { id: "eid6822", tween: [ "style", "${_scene5BlueB7}", "display", 'block', { fromValue: 'none'}], position: 1654, duration: 0 },
                { id: "eid6829", tween: [ "style", "${_scene5BlueB7}", "display", 'none', { fromValue: 'block'}], position: 1779, duration: 0 },
                { id: "eid6910", tween: [ "style", "${_scene5BlueA6}", "display", 'block', { fromValue: 'none'}], position: 554, duration: 0 },
                { id: "eid6926", tween: [ "style", "${_scene5BlueA6}", "display", 'none', { fromValue: 'block'}], position: 666, duration: 0 },
                { id: "eid6817", tween: [ "style", "${_scene5BlueB2}", "display", 'block', { fromValue: 'none'}], position: 1029, duration: 0 },
                { id: "eid6824", tween: [ "style", "${_scene5BlueB2}", "display", 'none', { fromValue: 'block'}], position: 1154, duration: 0 },
                { id: "eid6970", tween: [ "style", "${_scene5BlueD07}", "display", 'block', { fromValue: 'none'}], position: 4318, duration: 0 },
                { id: "eid6982", tween: [ "style", "${_scene5BlueD07}", "display", 'none', { fromValue: 'block'}], position: 4448, duration: 0 },
                { id: "eid6819", tween: [ "style", "${_scene5BlueB4}", "display", 'block', { fromValue: 'none'}], position: 1279, duration: 0 },
                { id: "eid6826", tween: [ "style", "${_scene5BlueB4}", "display", 'none', { fromValue: 'block'}], position: 1404, duration: 0 },
                { id: "eid6820", tween: [ "style", "${_scene5BlueB5}", "display", 'block', { fromValue: 'none'}], position: 1404, duration: 0 },
                { id: "eid6827", tween: [ "style", "${_scene5BlueB5}", "display", 'none', { fromValue: 'block'}], position: 1529, duration: 0 },
                { id: "eid6939", tween: [ "style", "${_scene5BlueC6Copy}", "display", 'block', { fromValue: 'none'}], position: 3289, duration: 0 },
                { id: "eid6940", tween: [ "style", "${_scene5BlueC6Copy}", "display", 'none', { fromValue: 'block'}], position: 3414, duration: 0 },
                { id: "eid6965", tween: [ "style", "${_scene5BlueD12}", "display", 'block', { fromValue: 'none'}], position: 4968, duration: 0 },
                { id: "eid6987", tween: [ "style", "${_scene5BlueD12}", "display", 'none', { fromValue: 'block'}], position: 5098, duration: 0 },
                { id: "eid6969", tween: [ "style", "${_scene5BlueD08}", "display", 'block', { fromValue: 'none'}], position: 4448, duration: 0 },
                { id: "eid6983", tween: [ "style", "${_scene5BlueD08}", "display", 'none', { fromValue: 'block'}], position: 4578, duration: 0 },
                { id: "eid6974", tween: [ "style", "${_scene5BlueD03}", "display", 'block', { fromValue: 'none'}], position: 3798, duration: 0 },
                { id: "eid6978", tween: [ "style", "${_scene5BlueD03}", "display", 'none', { fromValue: 'block'}], position: 3928, duration: 0 },
                { id: "eid6842", tween: [ "style", "${_scene5BlueC1}", "display", 'block', { fromValue: 'none'}], position: 1779, duration: 0 },
                { id: "eid6849", tween: [ "style", "${_scene5BlueC1}", "display", 'none', { fromValue: 'block'}], position: 1914, duration: 0 },
                { id: "eid6905", tween: [ "style", "${_scene5BlueA1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6921", tween: [ "style", "${_scene5BlueA1}", "display", 'none', { fromValue: 'block'}], position: 112, duration: 0 },
                { id: "eid6818", tween: [ "style", "${_scene5BlueB3}", "display", 'block', { fromValue: 'none'}], position: 1154, duration: 0 },
                { id: "eid6825", tween: [ "style", "${_scene5BlueB3}", "display", 'none', { fromValue: 'block'}], position: 1279, duration: 0 },
                { id: "eid6844", tween: [ "style", "${_scene5BlueC3}", "display", 'block', { fromValue: 'none'}], position: 2039, duration: 0 },
                { id: "eid6851", tween: [ "style", "${_scene5BlueC3}", "display", 'none', { fromValue: 'block'}], position: 2164, duration: 0 },
                { id: "eid6966", tween: [ "style", "${_scene5BlueD11}", "display", 'block', { fromValue: 'none'}], position: 4838, duration: 0 },
                { id: "eid6986", tween: [ "style", "${_scene5BlueD11}", "display", 'none', { fromValue: 'block'}], position: 4968, duration: 0 },
                { id: "eid6971", tween: [ "style", "${_scene5BlueD06}", "display", 'block', { fromValue: 'none'}], position: 4188, duration: 0 },
                { id: "eid6981", tween: [ "style", "${_scene5BlueD06}", "display", 'none', { fromValue: 'block'}], position: 4318, duration: 0 },
                { id: "eid6947", tween: [ "style", "${_scene5BlueC2Copy}", "display", 'block', { fromValue: 'none'}], position: 2789, duration: 0 },
                { id: "eid6948", tween: [ "style", "${_scene5BlueC2Copy}", "display", 'none', { fromValue: 'block'}], position: 2914, duration: 0 },
                { id: "eid6843", tween: [ "style", "${_scene5BlueC2}", "display", 'block', { fromValue: 'none'}], position: 1914, duration: 0 },
                { id: "eid6850", tween: [ "style", "${_scene5BlueC2}", "display", 'none', { fromValue: 'block'}], position: 2039, duration: 0 },
                { id: "eid6945", tween: [ "style", "${_scene5BlueC3Copy}", "display", 'block', { fromValue: 'none'}], position: 2914, duration: 0 },
                { id: "eid6946", tween: [ "style", "${_scene5BlueC3Copy}", "display", 'none', { fromValue: 'block'}], position: 3039, duration: 0 },
                { id: "eid6821", tween: [ "style", "${_scene5BlueB6}", "display", 'block', { fromValue: 'none'}], position: 1529, duration: 0 },
                { id: "eid6828", tween: [ "style", "${_scene5BlueB6}", "display", 'none', { fromValue: 'block'}], position: 1654, duration: 0 },
                { id: "eid6845", tween: [ "style", "${_scene5BlueC4}", "display", 'block', { fromValue: 'none'}], position: 2164, duration: 0 },
                { id: "eid6852", tween: [ "style", "${_scene5BlueC4}", "display", 'none', { fromValue: 'block'}], position: 2289, duration: 0 },
                { id: "eid6846", tween: [ "style", "${_scene5BlueC5}", "display", 'block', { fromValue: 'none'}], position: 2289, duration: 0 },
                { id: "eid6853", tween: [ "style", "${_scene5BlueC5}", "display", 'none', { fromValue: 'block'}], position: 2414, duration: 0 },
                { id: "eid6847", tween: [ "style", "${_scene5BlueC6}", "display", 'block', { fromValue: 'none'}], position: 2414, duration: 0 },
                { id: "eid6854", tween: [ "style", "${_scene5BlueC6}", "display", 'none', { fromValue: 'block'}], position: 2539, duration: 0 },
                { id: "eid6943", tween: [ "style", "${_scene5BlueC4Copy}", "display", 'block', { fromValue: 'none'}], position: 3039, duration: 0 },
                { id: "eid6944", tween: [ "style", "${_scene5BlueC4Copy}", "display", 'none', { fromValue: 'block'}], position: 3164, duration: 0 },
                { id: "eid6912", tween: [ "style", "${_scene5BlueA8}", "display", 'block', { fromValue: 'none'}], position: 777, duration: 0 },
                { id: "eid6928", tween: [ "style", "${_scene5BlueA8}", "display", 'none', { fromValue: 'block'}], position: 904, duration: 0 },
                { id: "eid6975", tween: [ "style", "${_scene5BlueD02}", "display", 'block', { fromValue: 'none'}], position: 3668, duration: 0 },
                { id: "eid6977", tween: [ "style", "${_scene5BlueD02}", "display", 'none', { fromValue: 'block'}], position: 3798, duration: 0 },
                { id: "eid6909", tween: [ "style", "${_scene5BlueA5}", "display", 'block', { fromValue: 'none'}], position: 445, duration: 0 },
                { id: "eid6925", tween: [ "style", "${_scene5BlueA5}", "display", 'none', { fromValue: 'block'}], position: 554, duration: 0 },
                { id: "eid6941", tween: [ "style", "${_scene5BlueC5Copy}", "display", 'block', { fromValue: 'none'}], position: 3164, duration: 0 },
                { id: "eid6942", tween: [ "style", "${_scene5BlueC5Copy}", "display", 'none', { fromValue: 'block'}], position: 3289, duration: 0 }            ]
        }
    }
},
"scene5WalkComp2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['129px', '0px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA1.png', '0px', '0px']
                },
                {
                    rect: ['119px', '5px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA2.png', '0px', '0px']
                },
                {
                    rect: ['106px', '10px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA3.png', '0px', '0px']
                },
                {
                    rect: ['88px', '19px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA4.png', '0px', '0px']
                },
                {
                    rect: ['72px', '23px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA5.png', '0px', '0px']
                },
                {
                    rect: ['60px', '32px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA6.png', '0px', '0px']
                },
                {
                    rect: ['49px', '37px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA7.png', '0px', '0px']
                },
                {
                    rect: ['30px', '46px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA8.png', '0px', '0px']
                },
                {
                    rect: ['15px', '52px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB1.png', '0px', '0px']
                },
                {
                    rect: ['6px', '59px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '68px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '73px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB4.png', '0px', '0px']
                },
                {
                    rect: ['6px', '89px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB5.png', '0px', '0px']
                },
                {
                    rect: ['8px', '110px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB6.png', '0px', '0px']
                },
                {
                    rect: ['14px', '138px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB7.png', '0px', '0px']
                },
                {
                    id: 'scene5CBlueWalk',
                    type: 'group',
                    rect: ['27px', '146px', '348', '336', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC1',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC1.png', '0px', '0px']
                    },
                    {
                        rect: ['15px', '10px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC2',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC2.png', '0px', '0px']
                    },
                    {
                        rect: ['26px', '22px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC3',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC3.png', '0px', '0px']
                    },
                    {
                        rect: ['37px', '34px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC4',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC4.png', '0px', '0px']
                    },
                    {
                        rect: ['51px', '45px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC5',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC5.png', '0px', '0px']
                    },
                    {
                        rect: ['68px', '58px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC6',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC6.png', '0px', '0px']
                    },
                    {
                        rect: ['83px', '71px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC7',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC7.png', '0px', '0px']
                    }]
                },
                {
                    id: 'scene5CBlueWalk2',
                    type: 'group',
                    rect: ['125px', '236px', '348', '336', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC1Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC1.png', '0px', '0px']
                    },
                    {
                        rect: ['15px', '10px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC2Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC2.png', '0px', '0px']
                    },
                    {
                        rect: ['26px', '22px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC3Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC3.png', '0px', '0px']
                    },
                    {
                        rect: ['37px', '34px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC4Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC4.png', '0px', '0px']
                    },
                    {
                        rect: ['51px', '45px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC5Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC5.png', '0px', '0px']
                    },
                    {
                        rect: ['68px', '58px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC6Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC6.png', '0px', '0px']
                    },
                    {
                        rect: ['83px', '71px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC7Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC7.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['237px', '335px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD01',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD01.png', '0px', '0px']
                },
                {
                    rect: ['259px', '339px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD02',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD02.png', '0px', '0px']
                },
                {
                    rect: ['288px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD03',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD03.png', '0px', '0px']
                },
                {
                    rect: ['309px', '351px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD04',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD04.png', '0px', '0px']
                },
                {
                    rect: ['327px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD05',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD05.png', '0px', '0px']
                },
                {
                    rect: ['345px', '351px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD06',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD06.png', '0px', '0px']
                },
                {
                    rect: ['369px', '352px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD07',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD07.png', '0px', '0px']
                },
                {
                    rect: ['397px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD08',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD08.png', '0px', '0px']
                },
                {
                    rect: ['417px', '345px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD09',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD09.png', '0px', '0px']
                },
                {
                    rect: ['438px', '339px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD10',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD10.png', '0px', '0px']
                },
                {
                    rect: ['460px', '336px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD11',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD11.png', '0px', '0px']
                },
                {
                    rect: ['484px', '329px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD12.png', '0px', '0px']
                },
                {
                    rect: ['507px', '324px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD13.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene5BlueC4}": [
                ["style", "top", '34px'],
                ["style", "left", '37px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC7}": [
                ["style", "top", '71px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA5}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '72px'],
                ["style", "top", '23px']
            ],
            "${_scene5BlueD04}": [
                ["style", "display", 'none'],
                ["style", "left", '309px'],
                ["style", "top", '351px']
            ],
            "${_scene5BlueA3}": [
                ["style", "top", '10px'],
                ["style", "opacity", '1'],
                ["style", "left", '106px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB2}": [
                ["style", "display", 'none'],
                ["style", "left", '6px'],
                ["style", "top", '59px']
            ],
            "${_scene5BlueD01}": [
                ["style", "display", 'none'],
                ["style", "left", '237px'],
                ["style", "top", '335px']
            ],
            "${_scene5BlueB1}": [
                ["style", "display", 'none'],
                ["style", "left", '15px'],
                ["style", "top", '52px']
            ],
            "${_scene5BlueB6}": [
                ["style", "display", 'none'],
                ["style", "left", '8px'],
                ["style", "top", '110px']
            ],
            "${_scene5BlueC2}": [
                ["style", "top", '10px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA6}": [
                ["style", "top", '32px'],
                ["style", "opacity", '1'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC7Copy}": [
                ["style", "top", '71px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '119px'],
                ["style", "top", '5px']
            ],
            "${_scene5BlueA8}": [
                ["style", "top", '46px'],
                ["style", "opacity", '1'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB3}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '68px']
            ],
            "${_scene5BlueC5}": [
                ["style", "top", '45px'],
                ["style", "left", '51px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC1Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD05}": [
                ["style", "display", 'none'],
                ["style", "left", '327px'],
                ["style", "top", '349px']
            ],
            "${_scene5BlueD02}": [
                ["style", "display", 'none'],
                ["style", "left", '259px'],
                ["style", "top", '339px']
            ],
            "${_scene5BlueB5}": [
                ["style", "display", 'none'],
                ["style", "left", '6px'],
                ["style", "top", '89px']
            ],
            "${_scene5BlueA4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '88px'],
                ["style", "top", '19px']
            ],
            "${_scene5BlueB7}": [
                ["style", "display", 'none'],
                ["style", "left", '14px'],
                ["style", "top", '138px']
            ],
            "${_scene5BlueC5Copy}": [
                ["style", "top", '45px'],
                ["style", "left", '51px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD12}": [
                ["style", "display", 'none'],
                ["style", "left", '484px'],
                ["style", "top", '329px']
            ],
            "${_scene5BlueD03}": [
                ["style", "display", 'none'],
                ["style", "left", '288px'],
                ["style", "top", '349px']
            ],
            "${symbolSelector}": [
                ["style", "height", '617px'],
                ["style", "width", '772px']
            ],
            "${_scene5BlueD06}": [
                ["style", "display", 'none'],
                ["style", "left", '345px'],
                ["style", "top", '351px']
            ],
            "${_scene5BlueD13}": [
                ["style", "display", 'none'],
                ["style", "left", '507px'],
                ["style", "top", '324px']
            ],
            "${_scene5BlueC2Copy}": [
                ["style", "top", '10px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD10}": [
                ["style", "display", 'none'],
                ["style", "left", '438px'],
                ["style", "top", '339px']
            ],
            "${_scene5CBlueWalk}": [
                ["style", "left", '27px'],
                ["style", "top", '146px']
            ],
            "${_scene5CBlueWalk2}": [
                ["style", "left", '125px'],
                ["style", "top", '236px']
            ],
            "${_scene5BlueC6}": [
                ["style", "top", '58px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC6Copy}": [
                ["style", "top", '58px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD09}": [
                ["style", "display", 'none'],
                ["style", "left", '417px'],
                ["style", "top", '345px']
            ],
            "${_scene5BlueD08}": [
                ["style", "display", 'none'],
                ["style", "left", '397px'],
                ["style", "top", '349px']
            ],
            "${_scene5BlueD11}": [
                ["style", "display", 'none'],
                ["style", "left", '460px'],
                ["style", "top", '336px']
            ],
            "${_scene5BlueA1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '129px'],
                ["style", "top", '0px']
            ],
            "${_scene5BlueC4Copy}": [
                ["style", "top", '34px'],
                ["style", "left", '37px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD07}": [
                ["style", "display", 'none'],
                ["style", "left", '369px'],
                ["style", "top", '352px']
            ],
            "${_scene5BlueC1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC3}": [
                ["style", "top", '22px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB4}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '73px']
            ],
            "${_scene5BlueC3Copy}": [
                ["style", "top", '22px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA7}": [
                ["style", "top", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '49px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5228,
            autoPlay: true,
            timeline: [
                { id: "eid6973", tween: [ "style", "${_scene5BlueD04}", "display", 'block', { fromValue: 'none'}], position: 3928, duration: 0 },
                { id: "eid6979", tween: [ "style", "${_scene5BlueD04}", "display", 'none', { fromValue: 'block'}], position: 4058, duration: 0 },
                { id: "eid6972", tween: [ "style", "${_scene5BlueD05}", "display", 'block', { fromValue: 'none'}], position: 4058, duration: 0 },
                { id: "eid6980", tween: [ "style", "${_scene5BlueD05}", "display", 'none', { fromValue: 'block'}], position: 4188, duration: 0 },
                { id: "eid6974", tween: [ "style", "${_scene5BlueD03}", "display", 'block', { fromValue: 'none'}], position: 3798, duration: 0 },
                { id: "eid6978", tween: [ "style", "${_scene5BlueD03}", "display", 'none', { fromValue: 'block'}], position: 3928, duration: 0 },
                { id: "eid6967", tween: [ "style", "${_scene5BlueD10}", "display", 'block', { fromValue: 'none'}], position: 4708, duration: 0 },
                { id: "eid6985", tween: [ "style", "${_scene5BlueD10}", "display", 'none', { fromValue: 'block'}], position: 4838, duration: 0 },
                { id: "eid6949", tween: [ "style", "${_scene5BlueC1Copy}", "display", 'block', { fromValue: 'none'}], position: 2664, duration: 0 },
                { id: "eid6950", tween: [ "style", "${_scene5BlueC1Copy}", "display", 'none', { fromValue: 'block'}], position: 2789, duration: 0 },
                { id: "eid6848", tween: [ "style", "${_scene5BlueC7}", "display", 'block', { fromValue: 'none'}], position: 2539, duration: 0 },
                { id: "eid6855", tween: [ "style", "${_scene5BlueC7}", "display", 'none', { fromValue: 'block'}], position: 2664, duration: 0 },
                { id: "eid6908", tween: [ "style", "${_scene5BlueA4}", "display", 'block', { fromValue: 'none'}], position: 332, duration: 0 },
                { id: "eid6924", tween: [ "style", "${_scene5BlueA4}", "display", 'none', { fromValue: 'block'}], position: 445, duration: 0 },
                { id: "eid6816", tween: [ "style", "${_scene5BlueB1}", "display", 'block', { fromValue: 'none'}], position: 904, duration: 0 },
                { id: "eid6823", tween: [ "style", "${_scene5BlueB1}", "display", 'none', { fromValue: 'block'}], position: 1029, duration: 0 },
                { id: "eid6906", tween: [ "style", "${_scene5BlueA2}", "display", 'block', { fromValue: 'none'}], position: 112, duration: 0 },
                { id: "eid6922", tween: [ "style", "${_scene5BlueA2}", "display", 'none', { fromValue: 'block'}], position: 222, duration: 0 },
                { id: "eid6937", tween: [ "style", "${_scene5BlueC7Copy}", "display", 'block', { fromValue: 'none'}], position: 3414, duration: 0 },
                { id: "eid6938", tween: [ "style", "${_scene5BlueC7Copy}", "display", 'none', { fromValue: 'block'}], position: 3539, duration: 0 },
                { id: "eid6911", tween: [ "style", "${_scene5BlueA7}", "display", 'block', { fromValue: 'none'}], position: 666, duration: 0 },
                { id: "eid6927", tween: [ "style", "${_scene5BlueA7}", "display", 'none', { fromValue: 'block'}], position: 777, duration: 0 },
                { id: "eid6968", tween: [ "style", "${_scene5BlueD09}", "display", 'block', { fromValue: 'none'}], position: 4578, duration: 0 },
                { id: "eid6984", tween: [ "style", "${_scene5BlueD09}", "display", 'none', { fromValue: 'block'}], position: 4708, duration: 0 },
                { id: "eid6907", tween: [ "style", "${_scene5BlueA3}", "display", 'block', { fromValue: 'none'}], position: 222, duration: 0 },
                { id: "eid6923", tween: [ "style", "${_scene5BlueA3}", "display", 'none', { fromValue: 'block'}], position: 332, duration: 0 },
                { id: "eid6963", tween: [ "style", "${_scene5BlueD01}", "display", 'block', { fromValue: 'none'}], position: 3538, duration: 0 },
                { id: "eid6976", tween: [ "style", "${_scene5BlueD01}", "display", 'none', { fromValue: 'block'}], position: 3668, duration: 0 },
                { id: "eid6969", tween: [ "style", "${_scene5BlueD08}", "display", 'block', { fromValue: 'none'}], position: 4448, duration: 0 },
                { id: "eid6983", tween: [ "style", "${_scene5BlueD08}", "display", 'none', { fromValue: 'block'}], position: 4578, duration: 0 },
                { id: "eid6910", tween: [ "style", "${_scene5BlueA6}", "display", 'block', { fromValue: 'none'}], position: 554, duration: 0 },
                { id: "eid6926", tween: [ "style", "${_scene5BlueA6}", "display", 'none', { fromValue: 'block'}], position: 666, duration: 0 },
                { id: "eid6817", tween: [ "style", "${_scene5BlueB2}", "display", 'block', { fromValue: 'none'}], position: 1029, duration: 0 },
                { id: "eid6824", tween: [ "style", "${_scene5BlueB2}", "display", 'none', { fromValue: 'block'}], position: 1154, duration: 0 },
                { id: "eid6970", tween: [ "style", "${_scene5BlueD07}", "display", 'block', { fromValue: 'none'}], position: 4318, duration: 0 },
                { id: "eid6982", tween: [ "style", "${_scene5BlueD07}", "display", 'none', { fromValue: 'block'}], position: 4448, duration: 0 },
                { id: "eid6819", tween: [ "style", "${_scene5BlueB4}", "display", 'block', { fromValue: 'none'}], position: 1279, duration: 0 },
                { id: "eid6826", tween: [ "style", "${_scene5BlueB4}", "display", 'none', { fromValue: 'block'}], position: 1404, duration: 0 },
                { id: "eid6820", tween: [ "style", "${_scene5BlueB5}", "display", 'block', { fromValue: 'none'}], position: 1404, duration: 0 },
                { id: "eid6827", tween: [ "style", "${_scene5BlueB5}", "display", 'none', { fromValue: 'block'}], position: 1529, duration: 0 },
                { id: "eid6939", tween: [ "style", "${_scene5BlueC6Copy}", "display", 'block', { fromValue: 'none'}], position: 3289, duration: 0 },
                { id: "eid6940", tween: [ "style", "${_scene5BlueC6Copy}", "display", 'none', { fromValue: 'block'}], position: 3414, duration: 0 },
                { id: "eid6965", tween: [ "style", "${_scene5BlueD12}", "display", 'block', { fromValue: 'none'}], position: 4968, duration: 0 },
                { id: "eid6987", tween: [ "style", "${_scene5BlueD12}", "display", 'none', { fromValue: 'block'}], position: 5098, duration: 0 },
                { id: "eid6822", tween: [ "style", "${_scene5BlueB7}", "display", 'block', { fromValue: 'none'}], position: 1654, duration: 0 },
                { id: "eid6829", tween: [ "style", "${_scene5BlueB7}", "display", 'none', { fromValue: 'block'}], position: 1779, duration: 0 },
                { id: "eid6964", tween: [ "style", "${_scene5BlueD13}", "display", 'block', { fromValue: 'none'}], position: 5098, duration: 0 },
                { id: "eid6988", tween: [ "style", "${_scene5BlueD13}", "display", 'none', { fromValue: 'block'}], position: 5228, duration: 0 },
                { id: "eid6842", tween: [ "style", "${_scene5BlueC1}", "display", 'block', { fromValue: 'none'}], position: 1779, duration: 0 },
                { id: "eid6849", tween: [ "style", "${_scene5BlueC1}", "display", 'none', { fromValue: 'block'}], position: 1914, duration: 0 },
                { id: "eid6905", tween: [ "style", "${_scene5BlueA1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6921", tween: [ "style", "${_scene5BlueA1}", "display", 'none', { fromValue: 'block'}], position: 112, duration: 0 },
                { id: "eid6966", tween: [ "style", "${_scene5BlueD11}", "display", 'block', { fromValue: 'none'}], position: 4838, duration: 0 },
                { id: "eid6986", tween: [ "style", "${_scene5BlueD11}", "display", 'none', { fromValue: 'block'}], position: 4968, duration: 0 },
                { id: "eid6844", tween: [ "style", "${_scene5BlueC3}", "display", 'block', { fromValue: 'none'}], position: 2039, duration: 0 },
                { id: "eid6851", tween: [ "style", "${_scene5BlueC3}", "display", 'none', { fromValue: 'block'}], position: 2164, duration: 0 },
                { id: "eid6818", tween: [ "style", "${_scene5BlueB3}", "display", 'block', { fromValue: 'none'}], position: 1154, duration: 0 },
                { id: "eid6825", tween: [ "style", "${_scene5BlueB3}", "display", 'none', { fromValue: 'block'}], position: 1279, duration: 0 },
                { id: "eid6971", tween: [ "style", "${_scene5BlueD06}", "display", 'block', { fromValue: 'none'}], position: 4188, duration: 0 },
                { id: "eid6981", tween: [ "style", "${_scene5BlueD06}", "display", 'none', { fromValue: 'block'}], position: 4318, duration: 0 },
                { id: "eid6943", tween: [ "style", "${_scene5BlueC4Copy}", "display", 'block', { fromValue: 'none'}], position: 3039, duration: 0 },
                { id: "eid6944", tween: [ "style", "${_scene5BlueC4Copy}", "display", 'none', { fromValue: 'block'}], position: 3164, duration: 0 },
                { id: "eid6843", tween: [ "style", "${_scene5BlueC2}", "display", 'block', { fromValue: 'none'}], position: 1914, duration: 0 },
                { id: "eid6850", tween: [ "style", "${_scene5BlueC2}", "display", 'none', { fromValue: 'block'}], position: 2039, duration: 0 },
                { id: "eid6945", tween: [ "style", "${_scene5BlueC3Copy}", "display", 'block', { fromValue: 'none'}], position: 2914, duration: 0 },
                { id: "eid6946", tween: [ "style", "${_scene5BlueC3Copy}", "display", 'none', { fromValue: 'block'}], position: 3039, duration: 0 },
                { id: "eid6821", tween: [ "style", "${_scene5BlueB6}", "display", 'block', { fromValue: 'none'}], position: 1529, duration: 0 },
                { id: "eid6828", tween: [ "style", "${_scene5BlueB6}", "display", 'none', { fromValue: 'block'}], position: 1654, duration: 0 },
                { id: "eid6845", tween: [ "style", "${_scene5BlueC4}", "display", 'block', { fromValue: 'none'}], position: 2164, duration: 0 },
                { id: "eid6852", tween: [ "style", "${_scene5BlueC4}", "display", 'none', { fromValue: 'block'}], position: 2289, duration: 0 },
                { id: "eid6846", tween: [ "style", "${_scene5BlueC5}", "display", 'block', { fromValue: 'none'}], position: 2289, duration: 0 },
                { id: "eid6853", tween: [ "style", "${_scene5BlueC5}", "display", 'none', { fromValue: 'block'}], position: 2414, duration: 0 },
                { id: "eid6847", tween: [ "style", "${_scene5BlueC6}", "display", 'block', { fromValue: 'none'}], position: 2414, duration: 0 },
                { id: "eid6854", tween: [ "style", "${_scene5BlueC6}", "display", 'none', { fromValue: 'block'}], position: 2539, duration: 0 },
                { id: "eid6947", tween: [ "style", "${_scene5BlueC2Copy}", "display", 'block', { fromValue: 'none'}], position: 2789, duration: 0 },
                { id: "eid6948", tween: [ "style", "${_scene5BlueC2Copy}", "display", 'none', { fromValue: 'block'}], position: 2914, duration: 0 },
                { id: "eid6912", tween: [ "style", "${_scene5BlueA8}", "display", 'block', { fromValue: 'none'}], position: 777, duration: 0 },
                { id: "eid6928", tween: [ "style", "${_scene5BlueA8}", "display", 'none', { fromValue: 'block'}], position: 904, duration: 0 },
                { id: "eid6975", tween: [ "style", "${_scene5BlueD02}", "display", 'block', { fromValue: 'none'}], position: 3668, duration: 0 },
                { id: "eid6977", tween: [ "style", "${_scene5BlueD02}", "display", 'none', { fromValue: 'block'}], position: 3798, duration: 0 },
                { id: "eid6909", tween: [ "style", "${_scene5BlueA5}", "display", 'block', { fromValue: 'none'}], position: 445, duration: 0 },
                { id: "eid6925", tween: [ "style", "${_scene5BlueA5}", "display", 'none', { fromValue: 'block'}], position: 554, duration: 0 },
                { id: "eid6941", tween: [ "style", "${_scene5BlueC5Copy}", "display", 'block', { fromValue: 'none'}], position: 3164, duration: 0 },
                { id: "eid6942", tween: [ "style", "${_scene5BlueC5Copy}", "display", 'none', { fromValue: 'block'}], position: 3289, duration: 0 }            ]
        }
    }
},
"scene5WalkComp3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['129px', '0px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA1.png', '0px', '0px']
                },
                {
                    rect: ['119px', '5px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA2.png', '0px', '0px']
                },
                {
                    rect: ['106px', '10px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA3.png', '0px', '0px']
                },
                {
                    rect: ['88px', '19px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA4.png', '0px', '0px']
                },
                {
                    rect: ['72px', '23px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA5.png', '0px', '0px']
                },
                {
                    rect: ['60px', '32px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA6.png', '0px', '0px']
                },
                {
                    rect: ['49px', '37px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA7.png', '0px', '0px']
                },
                {
                    rect: ['30px', '46px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueA8',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueA8.png', '0px', '0px']
                },
                {
                    rect: ['15px', '52px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB1',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB1.png', '0px', '0px']
                },
                {
                    rect: ['6px', '59px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB2.png', '0px', '0px']
                },
                {
                    rect: ['0px', '68px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB3.png', '0px', '0px']
                },
                {
                    rect: ['0px', '73px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB4.png', '0px', '0px']
                },
                {
                    rect: ['6px', '89px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB5.png', '0px', '0px']
                },
                {
                    rect: ['8px', '110px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB6',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB6.png', '0px', '0px']
                },
                {
                    rect: ['14px', '138px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueB7',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueB7.png', '0px', '0px']
                },
                {
                    id: 'scene5CBlueWalk',
                    type: 'group',
                    rect: ['27px', '146px', '348', '336', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC1',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC1.png', '0px', '0px']
                    },
                    {
                        rect: ['15px', '10px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC2',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC2.png', '0px', '0px']
                    },
                    {
                        rect: ['26px', '22px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC3',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC3.png', '0px', '0px']
                    },
                    {
                        rect: ['37px', '34px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC4',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC4.png', '0px', '0px']
                    },
                    {
                        rect: ['51px', '45px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC5',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC5.png', '0px', '0px']
                    },
                    {
                        rect: ['68px', '58px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC6',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC6.png', '0px', '0px']
                    },
                    {
                        rect: ['83px', '71px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC7',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC7.png', '0px', '0px']
                    }]
                },
                {
                    id: 'scene5CBlueWalk2',
                    type: 'group',
                    rect: ['125px', '236px', '348', '336', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC1Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC1.png', '0px', '0px']
                    },
                    {
                        rect: ['15px', '10px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC2Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC2.png', '0px', '0px']
                    },
                    {
                        rect: ['26px', '22px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC3Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC3.png', '0px', '0px']
                    },
                    {
                        rect: ['37px', '34px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC4Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC4.png', '0px', '0px']
                    },
                    {
                        rect: ['51px', '45px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC5Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC5.png', '0px', '0px']
                    },
                    {
                        rect: ['68px', '58px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC6Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC6.png', '0px', '0px']
                    },
                    {
                        rect: ['83px', '71px', '265px', '265px', 'auto', 'auto'],
                        id: 'scene5BlueC7Copy',
                        type: 'image',
                        display: 'none',
                        fill: ['rgba(0,0,0,0)', 'images/scene5BlueC7.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['237px', '335px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD01',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD01.png', '0px', '0px']
                },
                {
                    rect: ['259px', '339px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD02',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD02.png', '0px', '0px']
                },
                {
                    rect: ['288px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD03',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD03.png', '0px', '0px']
                },
                {
                    rect: ['309px', '351px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD04',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD04.png', '0px', '0px']
                },
                {
                    rect: ['327px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD05',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD05.png', '0px', '0px']
                },
                {
                    rect: ['345px', '351px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD06',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD06.png', '0px', '0px']
                },
                {
                    rect: ['369px', '352px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD07',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD07.png', '0px', '0px']
                },
                {
                    rect: ['397px', '349px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD08',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD08.png', '0px', '0px']
                },
                {
                    rect: ['417px', '345px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD09',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD09.png', '0px', '0px']
                },
                {
                    rect: ['438px', '339px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD10',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD10.png', '0px', '0px']
                },
                {
                    rect: ['460px', '336px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD11',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD11.png', '0px', '0px']
                },
                {
                    rect: ['484px', '329px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD12',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD12.png', '0px', '0px']
                },
                {
                    rect: ['507px', '324px', '265px', '265px', 'auto', 'auto'],
                    id: 'scene5BlueD13',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene5BlueD13.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene5BlueC4}": [
                ["style", "top", '34px'],
                ["style", "left", '37px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC7}": [
                ["style", "top", '71px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA5}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '72px'],
                ["style", "top", '23px']
            ],
            "${_scene5BlueD04}": [
                ["style", "display", 'none'],
                ["style", "left", '309px'],
                ["style", "top", '351px']
            ],
            "${_scene5BlueA3}": [
                ["style", "top", '10px'],
                ["style", "opacity", '1'],
                ["style", "left", '106px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB2}": [
                ["style", "display", 'none'],
                ["style", "left", '6px'],
                ["style", "top", '59px']
            ],
            "${_scene5BlueD01}": [
                ["style", "display", 'none'],
                ["style", "left", '237px'],
                ["style", "top", '335px']
            ],
            "${_scene5BlueB1}": [
                ["style", "display", 'none'],
                ["style", "left", '15px'],
                ["style", "top", '52px']
            ],
            "${_scene5BlueB6}": [
                ["style", "display", 'none'],
                ["style", "left", '8px'],
                ["style", "top", '110px']
            ],
            "${_scene5BlueC2}": [
                ["style", "top", '10px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA6}": [
                ["style", "top", '32px'],
                ["style", "opacity", '1'],
                ["style", "left", '60px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC7Copy}": [
                ["style", "top", '71px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '119px'],
                ["style", "top", '5px']
            ],
            "${_scene5BlueA8}": [
                ["style", "top", '46px'],
                ["style", "opacity", '1'],
                ["style", "left", '30px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB3}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '68px']
            ],
            "${_scene5BlueC5}": [
                ["style", "top", '45px'],
                ["style", "left", '51px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC1Copy}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD05}": [
                ["style", "display", 'none'],
                ["style", "left", '327px'],
                ["style", "top", '349px']
            ],
            "${_scene5BlueD02}": [
                ["style", "display", 'none'],
                ["style", "left", '259px'],
                ["style", "top", '339px']
            ],
            "${_scene5BlueB5}": [
                ["style", "display", 'none'],
                ["style", "left", '6px'],
                ["style", "top", '89px']
            ],
            "${_scene5BlueA4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '88px'],
                ["style", "top", '19px']
            ],
            "${_scene5BlueB7}": [
                ["style", "display", 'none'],
                ["style", "left", '14px'],
                ["style", "top", '138px']
            ],
            "${_scene5BlueC5Copy}": [
                ["style", "top", '45px'],
                ["style", "left", '51px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD12}": [
                ["style", "display", 'none'],
                ["style", "left", '484px'],
                ["style", "top", '329px']
            ],
            "${_scene5BlueD03}": [
                ["style", "display", 'none'],
                ["style", "left", '288px'],
                ["style", "top", '349px']
            ],
            "${symbolSelector}": [
                ["style", "height", '617px'],
                ["style", "width", '772px']
            ],
            "${_scene5BlueD10}": [
                ["style", "display", 'none'],
                ["style", "left", '438px'],
                ["style", "top", '339px']
            ],
            "${_scene5BlueD13}": [
                ["style", "display", 'none'],
                ["style", "left", '507px'],
                ["style", "top", '324px']
            ],
            "${_scene5BlueC2Copy}": [
                ["style", "top", '10px'],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueA7}": [
                ["style", "top", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '49px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC3Copy}": [
                ["style", "top", '22px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueB4}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '73px']
            ],
            "${_scene5BlueC6}": [
                ["style", "top", '58px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_scene5CBlueWalk2}": [
                ["style", "left", '125px'],
                ["style", "top", '236px']
            ],
            "${_scene5BlueD09}": [
                ["style", "display", 'none'],
                ["style", "left", '417px'],
                ["style", "top", '345px']
            ],
            "${_scene5BlueC1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD11}": [
                ["style", "display", 'none'],
                ["style", "left", '460px'],
                ["style", "top", '336px']
            ],
            "${_scene5BlueA1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '129px'],
                ["style", "top", '0px']
            ],
            "${_scene5BlueD07}": [
                ["style", "display", 'none'],
                ["style", "left", '369px'],
                ["style", "top", '352px']
            ],
            "${_scene5BlueC4Copy}": [
                ["style", "top", '34px'],
                ["style", "left", '37px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueD08}": [
                ["style", "display", 'none'],
                ["style", "left", '397px'],
                ["style", "top", '349px']
            ],
            "${_scene5BlueC3}": [
                ["style", "top", '22px'],
                ["style", "left", '26px'],
                ["style", "display", 'none']
            ],
            "${_scene5BlueC6Copy}": [
                ["style", "top", '58px'],
                ["style", "left", '68px'],
                ["style", "display", 'none']
            ],
            "${_scene5CBlueWalk}": [
                ["style", "left", '27px'],
                ["style", "top", '146px']
            ],
            "${_scene5BlueD06}": [
                ["style", "display", 'none'],
                ["style", "left", '345px'],
                ["style", "top", '351px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5228,
            autoPlay: true,
            timeline: [
                { id: "eid6973", tween: [ "style", "${_scene5BlueD04}", "display", 'block', { fromValue: 'none'}], position: 3928, duration: 0 },
                { id: "eid6979", tween: [ "style", "${_scene5BlueD04}", "display", 'none', { fromValue: 'block'}], position: 4058, duration: 0 },
                { id: "eid6972", tween: [ "style", "${_scene5BlueD05}", "display", 'block', { fromValue: 'none'}], position: 4058, duration: 0 },
                { id: "eid6980", tween: [ "style", "${_scene5BlueD05}", "display", 'none', { fromValue: 'block'}], position: 4188, duration: 0 },
                { id: "eid6964", tween: [ "style", "${_scene5BlueD13}", "display", 'block', { fromValue: 'none'}], position: 5098, duration: 0 },
                { id: "eid6988", tween: [ "style", "${_scene5BlueD13}", "display", 'none', { fromValue: 'block'}], position: 5228, duration: 0 },
                { id: "eid6967", tween: [ "style", "${_scene5BlueD10}", "display", 'block', { fromValue: 'none'}], position: 4708, duration: 0 },
                { id: "eid6985", tween: [ "style", "${_scene5BlueD10}", "display", 'none', { fromValue: 'block'}], position: 4838, duration: 0 },
                { id: "eid6949", tween: [ "style", "${_scene5BlueC1Copy}", "display", 'block', { fromValue: 'none'}], position: 2664, duration: 0 },
                { id: "eid6950", tween: [ "style", "${_scene5BlueC1Copy}", "display", 'none', { fromValue: 'block'}], position: 2789, duration: 0 },
                { id: "eid6848", tween: [ "style", "${_scene5BlueC7}", "display", 'block', { fromValue: 'none'}], position: 2539, duration: 0 },
                { id: "eid6855", tween: [ "style", "${_scene5BlueC7}", "display", 'none', { fromValue: 'block'}], position: 2664, duration: 0 },
                { id: "eid6908", tween: [ "style", "${_scene5BlueA4}", "display", 'block', { fromValue: 'none'}], position: 332, duration: 0 },
                { id: "eid6924", tween: [ "style", "${_scene5BlueA4}", "display", 'none', { fromValue: 'block'}], position: 445, duration: 0 },
                { id: "eid6816", tween: [ "style", "${_scene5BlueB1}", "display", 'block', { fromValue: 'none'}], position: 904, duration: 0 },
                { id: "eid6823", tween: [ "style", "${_scene5BlueB1}", "display", 'none', { fromValue: 'block'}], position: 1029, duration: 0 },
                { id: "eid6906", tween: [ "style", "${_scene5BlueA2}", "display", 'block', { fromValue: 'none'}], position: 112, duration: 0 },
                { id: "eid6922", tween: [ "style", "${_scene5BlueA2}", "display", 'none', { fromValue: 'block'}], position: 222, duration: 0 },
                { id: "eid6937", tween: [ "style", "${_scene5BlueC7Copy}", "display", 'block', { fromValue: 'none'}], position: 3414, duration: 0 },
                { id: "eid6938", tween: [ "style", "${_scene5BlueC7Copy}", "display", 'none', { fromValue: 'block'}], position: 3539, duration: 0 },
                { id: "eid6911", tween: [ "style", "${_scene5BlueA7}", "display", 'block', { fromValue: 'none'}], position: 666, duration: 0 },
                { id: "eid6927", tween: [ "style", "${_scene5BlueA7}", "display", 'none', { fromValue: 'block'}], position: 777, duration: 0 },
                { id: "eid6968", tween: [ "style", "${_scene5BlueD09}", "display", 'block', { fromValue: 'none'}], position: 4578, duration: 0 },
                { id: "eid6984", tween: [ "style", "${_scene5BlueD09}", "display", 'none', { fromValue: 'block'}], position: 4708, duration: 0 },
                { id: "eid6907", tween: [ "style", "${_scene5BlueA3}", "display", 'block', { fromValue: 'none'}], position: 222, duration: 0 },
                { id: "eid6923", tween: [ "style", "${_scene5BlueA3}", "display", 'none', { fromValue: 'block'}], position: 332, duration: 0 },
                { id: "eid6963", tween: [ "style", "${_scene5BlueD01}", "display", 'block', { fromValue: 'none'}], position: 3538, duration: 0 },
                { id: "eid6976", tween: [ "style", "${_scene5BlueD01}", "display", 'none', { fromValue: 'block'}], position: 3668, duration: 0 },
                { id: "eid6822", tween: [ "style", "${_scene5BlueB7}", "display", 'block', { fromValue: 'none'}], position: 1654, duration: 0 },
                { id: "eid6829", tween: [ "style", "${_scene5BlueB7}", "display", 'none', { fromValue: 'block'}], position: 1779, duration: 0 },
                { id: "eid6910", tween: [ "style", "${_scene5BlueA6}", "display", 'block', { fromValue: 'none'}], position: 554, duration: 0 },
                { id: "eid6926", tween: [ "style", "${_scene5BlueA6}", "display", 'none', { fromValue: 'block'}], position: 666, duration: 0 },
                { id: "eid6817", tween: [ "style", "${_scene5BlueB2}", "display", 'block', { fromValue: 'none'}], position: 1029, duration: 0 },
                { id: "eid6824", tween: [ "style", "${_scene5BlueB2}", "display", 'none', { fromValue: 'block'}], position: 1154, duration: 0 },
                { id: "eid6970", tween: [ "style", "${_scene5BlueD07}", "display", 'block', { fromValue: 'none'}], position: 4318, duration: 0 },
                { id: "eid6982", tween: [ "style", "${_scene5BlueD07}", "display", 'none', { fromValue: 'block'}], position: 4448, duration: 0 },
                { id: "eid6819", tween: [ "style", "${_scene5BlueB4}", "display", 'block', { fromValue: 'none'}], position: 1279, duration: 0 },
                { id: "eid6826", tween: [ "style", "${_scene5BlueB4}", "display", 'none', { fromValue: 'block'}], position: 1404, duration: 0 },
                { id: "eid6820", tween: [ "style", "${_scene5BlueB5}", "display", 'block', { fromValue: 'none'}], position: 1404, duration: 0 },
                { id: "eid6827", tween: [ "style", "${_scene5BlueB5}", "display", 'none', { fromValue: 'block'}], position: 1529, duration: 0 },
                { id: "eid6939", tween: [ "style", "${_scene5BlueC6Copy}", "display", 'block', { fromValue: 'none'}], position: 3289, duration: 0 },
                { id: "eid6940", tween: [ "style", "${_scene5BlueC6Copy}", "display", 'none', { fromValue: 'block'}], position: 3414, duration: 0 },
                { id: "eid6965", tween: [ "style", "${_scene5BlueD12}", "display", 'block', { fromValue: 'none'}], position: 4968, duration: 0 },
                { id: "eid6987", tween: [ "style", "${_scene5BlueD12}", "display", 'none', { fromValue: 'block'}], position: 5098, duration: 0 },
                { id: "eid6969", tween: [ "style", "${_scene5BlueD08}", "display", 'block', { fromValue: 'none'}], position: 4448, duration: 0 },
                { id: "eid6983", tween: [ "style", "${_scene5BlueD08}", "display", 'none', { fromValue: 'block'}], position: 4578, duration: 0 },
                { id: "eid6974", tween: [ "style", "${_scene5BlueD03}", "display", 'block', { fromValue: 'none'}], position: 3798, duration: 0 },
                { id: "eid6978", tween: [ "style", "${_scene5BlueD03}", "display", 'none', { fromValue: 'block'}], position: 3928, duration: 0 },
                { id: "eid6842", tween: [ "style", "${_scene5BlueC1}", "display", 'block', { fromValue: 'none'}], position: 1779, duration: 0 },
                { id: "eid6849", tween: [ "style", "${_scene5BlueC1}", "display", 'none', { fromValue: 'block'}], position: 1914, duration: 0 },
                { id: "eid6905", tween: [ "style", "${_scene5BlueA1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid6921", tween: [ "style", "${_scene5BlueA1}", "display", 'none', { fromValue: 'block'}], position: 112, duration: 0 },
                { id: "eid6818", tween: [ "style", "${_scene5BlueB3}", "display", 'block', { fromValue: 'none'}], position: 1154, duration: 0 },
                { id: "eid6825", tween: [ "style", "${_scene5BlueB3}", "display", 'none', { fromValue: 'block'}], position: 1279, duration: 0 },
                { id: "eid6844", tween: [ "style", "${_scene5BlueC3}", "display", 'block', { fromValue: 'none'}], position: 2039, duration: 0 },
                { id: "eid6851", tween: [ "style", "${_scene5BlueC3}", "display", 'none', { fromValue: 'block'}], position: 2164, duration: 0 },
                { id: "eid6966", tween: [ "style", "${_scene5BlueD11}", "display", 'block', { fromValue: 'none'}], position: 4838, duration: 0 },
                { id: "eid6986", tween: [ "style", "${_scene5BlueD11}", "display", 'none', { fromValue: 'block'}], position: 4968, duration: 0 },
                { id: "eid6971", tween: [ "style", "${_scene5BlueD06}", "display", 'block', { fromValue: 'none'}], position: 4188, duration: 0 },
                { id: "eid6981", tween: [ "style", "${_scene5BlueD06}", "display", 'none', { fromValue: 'block'}], position: 4318, duration: 0 },
                { id: "eid6947", tween: [ "style", "${_scene5BlueC2Copy}", "display", 'block', { fromValue: 'none'}], position: 2789, duration: 0 },
                { id: "eid6948", tween: [ "style", "${_scene5BlueC2Copy}", "display", 'none', { fromValue: 'block'}], position: 2914, duration: 0 },
                { id: "eid6843", tween: [ "style", "${_scene5BlueC2}", "display", 'block', { fromValue: 'none'}], position: 1914, duration: 0 },
                { id: "eid6850", tween: [ "style", "${_scene5BlueC2}", "display", 'none', { fromValue: 'block'}], position: 2039, duration: 0 },
                { id: "eid6945", tween: [ "style", "${_scene5BlueC3Copy}", "display", 'block', { fromValue: 'none'}], position: 2914, duration: 0 },
                { id: "eid6946", tween: [ "style", "${_scene5BlueC3Copy}", "display", 'none', { fromValue: 'block'}], position: 3039, duration: 0 },
                { id: "eid6821", tween: [ "style", "${_scene5BlueB6}", "display", 'block', { fromValue: 'none'}], position: 1529, duration: 0 },
                { id: "eid6828", tween: [ "style", "${_scene5BlueB6}", "display", 'none', { fromValue: 'block'}], position: 1654, duration: 0 },
                { id: "eid6845", tween: [ "style", "${_scene5BlueC4}", "display", 'block', { fromValue: 'none'}], position: 2164, duration: 0 },
                { id: "eid6852", tween: [ "style", "${_scene5BlueC4}", "display", 'none', { fromValue: 'block'}], position: 2289, duration: 0 },
                { id: "eid6846", tween: [ "style", "${_scene5BlueC5}", "display", 'block', { fromValue: 'none'}], position: 2289, duration: 0 },
                { id: "eid6853", tween: [ "style", "${_scene5BlueC5}", "display", 'none', { fromValue: 'block'}], position: 2414, duration: 0 },
                { id: "eid6847", tween: [ "style", "${_scene5BlueC6}", "display", 'block', { fromValue: 'none'}], position: 2414, duration: 0 },
                { id: "eid6854", tween: [ "style", "${_scene5BlueC6}", "display", 'none', { fromValue: 'block'}], position: 2539, duration: 0 },
                { id: "eid6943", tween: [ "style", "${_scene5BlueC4Copy}", "display", 'block', { fromValue: 'none'}], position: 3039, duration: 0 },
                { id: "eid6944", tween: [ "style", "${_scene5BlueC4Copy}", "display", 'none', { fromValue: 'block'}], position: 3164, duration: 0 },
                { id: "eid6912", tween: [ "style", "${_scene5BlueA8}", "display", 'block', { fromValue: 'none'}], position: 777, duration: 0 },
                { id: "eid6928", tween: [ "style", "${_scene5BlueA8}", "display", 'none', { fromValue: 'block'}], position: 904, duration: 0 },
                { id: "eid6975", tween: [ "style", "${_scene5BlueD02}", "display", 'block', { fromValue: 'none'}], position: 3668, duration: 0 },
                { id: "eid6977", tween: [ "style", "${_scene5BlueD02}", "display", 'none', { fromValue: 'block'}], position: 3798, duration: 0 },
                { id: "eid6909", tween: [ "style", "${_scene5BlueA5}", "display", 'block', { fromValue: 'none'}], position: 445, duration: 0 },
                { id: "eid6925", tween: [ "style", "${_scene5BlueA5}", "display", 'none', { fromValue: 'block'}], position: 554, duration: 0 },
                { id: "eid6941", tween: [ "style", "${_scene5BlueC5Copy}", "display", 'block', { fromValue: 'none'}], position: 3164, duration: 0 },
                { id: "eid6942", tween: [ "style", "${_scene5BlueC5Copy}", "display", 'none', { fromValue: 'block'}], position: 3289, duration: 0 }            ]
        }
    }
},
"scene1light": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00001',
                    fill: ['rgba(0,0,0,0)', 'images/light_00001.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00002',
                    fill: ['rgba(0,0,0,0)', 'images/light_00002.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00003',
                    fill: ['rgba(0,0,0,0)', 'images/light_00003.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00004',
                    fill: ['rgba(0,0,0,0)', 'images/light_00004.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00005',
                    fill: ['rgba(0,0,0,0)', 'images/light_00005.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00006',
                    fill: ['rgba(0,0,0,0)', 'images/light_00006.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00007',
                    fill: ['rgba(0,0,0,0)', 'images/light_00007.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00008',
                    fill: ['rgba(0,0,0,0)', 'images/light_00008.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00009',
                    fill: ['rgba(0,0,0,0)', 'images/light_00009.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '200px', '200px', 'auto', 'auto'],
                    id: 'light_00010',
                    fill: ['rgba(0,0,0,0)', 'images/light_00010.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['-0.18', '-0.18']],
                    rect: ['27px', '-151px', '317px', '317px', 'auto', 'auto'],
                    display: 'block',
                    id: 'scene1TruckArrowGlow4',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/scene1TruckArrowGlow.png', '0px', '0px', '100%', '100%']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_light_00002}": [
                ["style", "display", 'none']
            ],
            "${_light_00010}": [
                ["style", "display", 'none']
            ],
            "${_light_00007}": [
                ["style", "display", 'none']
            ],
            "${_scene1TruckArrowGlow4}": [
                ["style", "top", '-151px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '1'],
                ["style", "left", '27px'],
                ["style", "display", 'block']
            ],
            "${_light_00003}": [
                ["style", "display", 'none']
            ],
            "${_light_00008}": [
                ["style", "display", 'none']
            ],
            "${_light_00005}": [
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '200px'],
                ["style", "width", '200px']
            ],
            "${_light_00001}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_light_00009}": [
                ["style", "display", 'none']
            ],
            "${_light_00006}": [
                ["style", "display", 'none']
            ],
            "${_light_00004}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid8266", tween: [ "transform", "${_scene1TruckArrowGlow4}", "scaleY", '0.2', { fromValue: '0.05'}], position: 0, duration: 568, easing: "easeInOutBounce" },
                { id: "eid8268", tween: [ "transform", "${_scene1TruckArrowGlow4}", "scaleY", '0.05', { fromValue: '0.2'}], position: 568, duration: 682, easing: "easeInOutBounce" },
                { id: "eid8103", tween: [ "style", "${_light_00002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8091", tween: [ "style", "${_light_00002}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid8101", tween: [ "style", "${_light_00002}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
                { id: "eid8277", tween: [ "style", "${_scene1TruckArrowGlow4}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8092", tween: [ "style", "${_light_00001}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8102", tween: [ "style", "${_light_00001}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
                { id: "eid8107", tween: [ "style", "${_light_00007}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8086", tween: [ "style", "${_light_00007}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid8096", tween: [ "style", "${_light_00007}", "display", 'none', { fromValue: 'block'}], position: 875, duration: 0 },
                { id: "eid8265", tween: [ "transform", "${_scene1TruckArrowGlow4}", "scaleX", '0.2', { fromValue: '0.05'}], position: 0, duration: 568, easing: "easeInOutBounce" },
                { id: "eid8267", tween: [ "transform", "${_scene1TruckArrowGlow4}", "scaleX", '0.05', { fromValue: '0.2'}], position: 568, duration: 682, easing: "easeInOutBounce" },
                { id: "eid8111", tween: [ "style", "${_light_00003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8090", tween: [ "style", "${_light_00003}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid8100", tween: [ "style", "${_light_00003}", "display", 'none', { fromValue: 'block'}], position: 375, duration: 0 },
                { id: "eid8106", tween: [ "style", "${_light_00008}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8085", tween: [ "style", "${_light_00008}", "display", 'block', { fromValue: 'none'}], position: 875, duration: 0 },
                { id: "eid8095", tween: [ "style", "${_light_00008}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid8104", tween: [ "style", "${_light_00010}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8083", tween: [ "style", "${_light_00010}", "display", 'block', { fromValue: 'none'}], position: 1125, duration: 0 },
                { id: "eid8093", tween: [ "style", "${_light_00010}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid8108", tween: [ "style", "${_light_00006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8087", tween: [ "style", "${_light_00006}", "display", 'block', { fromValue: 'none'}], position: 625, duration: 0 },
                { id: "eid8097", tween: [ "style", "${_light_00006}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid8262", tween: [ "style", "${_scene1TruckArrowGlow4}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid8109", tween: [ "style", "${_light_00005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8088", tween: [ "style", "${_light_00005}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid8098", tween: [ "style", "${_light_00005}", "display", 'none', { fromValue: 'block'}], position: 625, duration: 0 },
                { id: "eid8105", tween: [ "style", "${_light_00009}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8084", tween: [ "style", "${_light_00009}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid8094", tween: [ "style", "${_light_00009}", "display", 'none', { fromValue: 'block'}], position: 1125, duration: 0 },
                { id: "eid8110", tween: [ "style", "${_light_00004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid8089", tween: [ "style", "${_light_00004}", "display", 'block', { fromValue: 'none'}], position: 375, duration: 0 },
                { id: "eid8099", tween: [ "style", "${_light_00004}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }            ]
        }
    }
},
"scene1CloudsLight": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['1.15999', '1.15999']],
                    rect: ['-147px', '-49px', '305px', '278px', 'auto', 'auto'],
                    id: 'scene1CloudDark',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/scene1CloudDark.png', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['-158px', '-158px', '317px', '317px', 'auto', 'auto'],
                    id: 'scene1TruckArrowGlow5',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene1TruckArrowGlow.png', '0px', '0px']
                },
                {
                    rect: ['-153px', '-159px', '317px', '317px', 'auto', 'auto'],
                    id: 'scene1TruckArrowGlow3',
                    transform: [[0, 0], [], [], ['0.82', '0.82']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/scene1TruckArrowGlow.png', '0px', '0px']
                },
                {
                    id: 'scene1TruckArrowGlow2',
                    type: 'image',
                    rect: ['-80px', '-19px', '110px', '110px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene1TruckArrowGlow.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'scene1Thunder',
                    opacity: 1,
                    rect: ['-119px', '-71px', '260px', '148px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene1Thunder.png', '0px', '0px']
                },
                {
                    rect: ['-266px', '3px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    transform: [[0, 0], ['12']],
                    id: 'scene1light4',
                    type: 'rect'
                },
                {
                    rect: ['83px', '-58px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    transform: [[0, 0], ['-126']],
                    id: 'scene1light4Copy',
                    type: 'rect'
                },
                {
                    rect: ['-86px', '59px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    transform: [[0, 0], ['-58']],
                    id: 'scene1light4Copy2',
                    type: 'rect'
                },
                {
                    rect: ['-266px', '3px', 'auto', 'auto', 'auto', 'auto'],
                    display: 'none',
                    transform: [[0, 0], ['12']],
                    id: 'scene1light4Copy3',
                    type: 'rect'
                },
                {
                    type: 'image',
                    id: 'scene1CloudEconomic2',
                    opacity: 1,
                    rect: ['-111px', '-61px', '233px', '129px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene1CloudEconomic.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'scene1light4Copy3',
                symbolName: 'scene1light',
                autoPlay: {

               }
            },
            {
                id: 'scene1light4',
                symbolName: 'scene1light',
                autoPlay: {

               }
            },
            {
                id: 'scene1light4Copy2',
                symbolName: 'scene1light',
                autoPlay: {

               }
            },
            {
                id: 'scene1light4Copy',
                symbolName: 'scene1light',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene1CloudDark}": [
                ["style", "top", '-49px'],
                ["transform", "scaleY", '1.15999'],
                ["transform", "scaleX", '1.15999'],
                ["style", "opacity", '1'],
                ["style", "left", '-147px']
            ],
            "${_scene1Thunder}": [
                ["style", "top", '-71px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-119px']
            ],
            "${_scene1light4Copy3}": [
                ["style", "top", '20px'],
                ["transform", "rotateZ", '-11deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-172px']
            ],
            "${_scene1CloudEconomic2}": [
                ["style", "top", '-61px'],
                ["style", "opacity", '0'],
                ["style", "left", '-111px']
            ],
            "${_scene1TruckArrowGlow5}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '0'],
                ["style", "left", '-158px'],
                ["style", "display", 'none']
            ],
            "${_scene1light4Copy}": [
                ["style", "top", '48px'],
                ["transform", "rotateZ", '-63deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-118px']
            ],
            "${symbolSelector}": [
                ["style", "height", '6px'],
                ["style", "width", '12px']
            ],
            "${_scene1light4}": [
                ["style", "top", '22px'],
                ["transform", "rotateZ", '12deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-277px']
            ],
            "${_scene1TruckArrowGlow2}": [
                ["style", "top", '-19px'],
                ["transform", "scaleY", '0.1'],
                ["style", "height", '110px'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0.09756100177764893'],
                ["style", "left", '-80px'],
                ["style", "width", '110px']
            ],
            "${_scene1TruckArrowGlow3}": [
                ["style", "top", '-159px'],
                ["transform", "scaleY", '0.82'],
                ["transform", "scaleX", '0.82'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-153px']
            ],
            "${_scene1light4Copy2}": [
                ["style", "top", '78px'],
                ["transform", "rotateZ", '-58deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-97px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: true,
            labels: {
                "cloudLight": 1500
            },
            timeline: [
                { id: "eid8446", tween: [ "style", "${_scene1TruckArrowGlow5}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8447", tween: [ "style", "${_scene1TruckArrowGlow5}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8452", tween: [ "style", "${_scene1TruckArrowGlow5}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8450", tween: [ "style", "${_scene1TruckArrowGlow5}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid10149", tween: [ "style", "${_scene1light4Copy3}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid10150", tween: [ "style", "${_scene1light4Copy3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8455", tween: [ "transform", "${_scene1TruckArrowGlow5}", "scaleX", '1.5', { fromValue: '0.05'}], position: 1500, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8457", tween: [ "transform", "${_scene1TruckArrowGlow5}", "scaleX", '0.05', { fromValue: '1.5'}], position: 3000, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid10081", tween: [ "style", "${_scene1CloudEconomic2}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500 },
                { id: "eid10082", tween: [ "style", "${_scene1CloudEconomic2}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 500 },
                { id: "eid10949", tween: [ "style", "${_scene1light4Copy}", "left", '-107px', { fromValue: '-118px'}], position: 3000, duration: 1377 },
                { id: "eid8206", tween: [ "transform", "${_scene1TruckArrowGlow2}", "scaleY", '1', { fromValue: '0.1'}], position: 1000, duration: 250, easing: "easeOutBounce" },
                { id: "eid8211", tween: [ "transform", "${_scene1TruckArrowGlow2}", "scaleY", '0.1', { fromValue: '1'}], position: 1250, duration: 250, easing: "easeOutBounce" },
                { id: "eid10944", tween: [ "style", "${_scene1light4}", "top", '22px', { fromValue: '22px'}], position: 3000, duration: 0 },
                { id: "eid8471", tween: [ "style", "${_scene1light4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8474", tween: [ "style", "${_scene1light4}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid10147", tween: [ "style", "${_scene1light4Copy3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid10148", tween: [ "style", "${_scene1light4Copy3}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8418", tween: [ "style", "${_scene1light4Copy2}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8443", tween: [ "style", "${_scene1light4Copy2}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8470", tween: [ "style", "${_scene1light4Copy2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8473", tween: [ "style", "${_scene1light4Copy2}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid10947", tween: [ "style", "${_scene1light4Copy2}", "left", '-97px', { fromValue: '-97px'}], position: 3000, duration: 0 },
                { id: "eid10246", tween: [ "transform", "${_scene1light4Copy3}", "rotateZ", '-11deg', { fromValue: '-11deg'}], position: 3000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid10946", tween: [ "style", "${_scene1light4Copy3}", "top", '20px', { fromValue: '20px'}], position: 3000, duration: 0 },
                { id: "eid8417", tween: [ "style", "${_scene1light4Copy}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8444", tween: [ "style", "${_scene1light4Copy}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid10943", tween: [ "style", "${_scene1light4}", "left", '-277px', { fromValue: '-277px'}], position: 3000, duration: 0 },
                { id: "eid8472", tween: [ "style", "${_scene1light4Copy}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8475", tween: [ "style", "${_scene1light4Copy}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8484", tween: [ "transform", "${_scene1light4Copy}", "rotateZ", '-63deg', { fromValue: '-63deg'}], position: 4377, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8416", tween: [ "style", "${_scene1light4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8445", tween: [ "style", "${_scene1light4}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0, easing: "easeInOutBounce" },
                { id: "eid8166", tween: [ "style", "${_scene1Thunder}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500, easing: "easeOutBounce" },
                { id: "eid10950", tween: [ "style", "${_scene1light4Copy}", "top", '29px', { fromValue: '48px'}], position: 3000, duration: 1377 },
                { id: "eid8456", tween: [ "transform", "${_scene1TruckArrowGlow5}", "scaleY", '1.5', { fromValue: '0.05'}], position: 1500, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8458", tween: [ "transform", "${_scene1TruckArrowGlow5}", "scaleY", '0.05', { fromValue: '1.5'}], position: 3000, duration: 1500, easing: "easeInOutBounce" },
                { id: "eid8207", tween: [ "style", "${_scene1TruckArrowGlow2}", "opacity", '1', { fromValue: '0.09756100177764893'}], position: 1000, duration: 250, easing: "easeOutBounce" },
                { id: "eid8209", tween: [ "style", "${_scene1TruckArrowGlow2}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 250, easing: "easeOutBounce" },
                { id: "eid10948", tween: [ "style", "${_scene1light4Copy2}", "top", '78px', { fromValue: '78px'}], position: 3000, duration: 0 },
                { id: "eid8205", tween: [ "transform", "${_scene1TruckArrowGlow2}", "scaleX", '1', { fromValue: '0.1'}], position: 1000, duration: 250, easing: "easeOutBounce" },
                { id: "eid8210", tween: [ "transform", "${_scene1TruckArrowGlow2}", "scaleX", '0.1', { fromValue: '1'}], position: 1250, duration: 250, easing: "easeOutBounce" },
                { id: "eid10945", tween: [ "style", "${_scene1light4Copy3}", "left", '-172px', { fromValue: '-172px'}], position: 3000, duration: 0 }            ]
        }
    }
},
"flagOrangeComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'block',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange01',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange01.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange02',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange02.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange03',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange03.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange04',
                        type: 'image',
                        rect: ['0px', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange04.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange05',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange05.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange06',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange06.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange07',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange07.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger8',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange08',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange08.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange09',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange09.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger10',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange10',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange10.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger11',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange113',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange11.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger12',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange12',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange12.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger13',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange133',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange13.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger14',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange143',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange14.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger15',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange153',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange15.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger16',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange16',
                        type: 'image',
                        rect: ['0', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange16.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger17',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange17',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange17.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger18',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange18',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange18.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger19',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange19',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange19.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger20',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagOrange20',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagOrange20.png', '0px', '0px']
                    }]
                },
                {
                    id: 'flag00FlagExtender',
                    type: 'image',
                    rect: ['58px', '334px', '15px', '107px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flag00FlagExtender.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flagger20}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger6}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagger17}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagOrange04}": [
                ["style", "left", '0px']
            ],
            "${_flagOrange143}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger11}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger8}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger15}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagOrange06}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger12}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger9}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagOrange09}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagOrange02}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger1}": [
                ["style", "-webkit-transform-origin", [50,98], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["transform", "scaleX", '0.05'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagOrange01}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagOrange05}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flag00FlagExtender}": [
                ["style", "left", '58px'],
                ["style", "top", '334px']
            ],
            "${_flagOrange08}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagOrange153}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ],
            "${_flagger16}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger7}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagOrange16}": [
                ["style", "top", '0px']
            ],
            "${_flagger3}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagOrange12}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger5}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagger4}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagger13}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger14}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger10}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger19}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagOrange10}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagOrange03}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_flagOrange113}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger18}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5012,
            autoPlay: true,
            labels: {
                "StartOver": 2756
            },
            timeline: [
                { id: "eid8776", tween: [ "style", "${_flagger10}", "display", 'block', { fromValue: 'none'}], position: 1506, duration: 0 },
                { id: "eid8777", tween: [ "style", "${_flagger10}", "display", 'none', { fromValue: 'block'}], position: 1762, duration: 0 },
                { id: "eid8840", tween: [ "style", "${_flagger14}", "display", 'block', { fromValue: 'none'}], position: 2006, duration: 0 },
                { id: "eid8841", tween: [ "style", "${_flagger14}", "display", 'none', { fromValue: 'block'}], position: 2262, duration: 0 },
                { id: "eid8937", tween: [ "style", "${_flagger19}", "display", 'block', { fromValue: 'none'}], position: 2631, duration: 0 },
                { id: "eid8938", tween: [ "style", "${_flagger19}", "display", 'none', { fromValue: 'block'}], position: 2887, duration: 0 },
                { id: "eid8888", tween: [ "transform", "${_flagger1}", "scaleX", '1', { fromValue: '0.05'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid8889", tween: [ "transform", "${_flagger1}", "scaleY", '1', { fromValue: '0.05'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid8763", tween: [ "style", "${_flagger6}", "display", 'block', { fromValue: 'none'}], position: 1006, duration: 0 },
                { id: "eid8765", tween: [ "style", "${_flagger6}", "display", 'none', { fromValue: 'block'}], position: 1262, duration: 0 },
                { id: "eid8838", tween: [ "style", "${_flagger13}", "display", 'block', { fromValue: 'none'}], position: 1881, duration: 0 },
                { id: "eid8839", tween: [ "style", "${_flagger13}", "display", 'none', { fromValue: 'block'}], position: 2137, duration: 0 },
                { id: "eid8741", tween: [ "style", "${_flagger3}", "display", 'block', { fromValue: 'none'}], position: 631, duration: 0 },
                { id: "eid8742", tween: [ "style", "${_flagger3}", "display", 'none', { fromValue: 'block'}], position: 888, duration: 0 },
                { id: "eid8939", tween: [ "style", "${_flagger20}", "display", 'block', { fromValue: 'none'}], position: 4887, duration: 0 },
                { id: "eid8940", tween: [ "style", "${_flagger20}", "display", 'none', { fromValue: 'block'}], position: 5012, duration: 0 },
                { id: "eid8975", tween: [ "style", "${_flagger15}", "display", 'block', { fromValue: 'none'}], position: 2131, duration: 0 },
                { id: "eid8976", tween: [ "style", "${_flagger15}", "display", 'none', { fromValue: 'block'}], position: 2387, duration: 0 },
                { id: "eid8770", tween: [ "style", "${_flagger8}", "display", 'block', { fromValue: 'none'}], position: 1256, duration: 0 },
                { id: "eid8771", tween: [ "style", "${_flagger8}", "display", 'none', { fromValue: 'block'}], position: 1512, duration: 0 },
                { id: "eid8915", tween: [ "style", "${_flagger16}", "display", 'block', { fromValue: 'none'}], position: 2256, duration: 0 },
                { id: "eid8916", tween: [ "style", "${_flagger16}", "display", 'none', { fromValue: 'block'}], position: 2512, duration: 0 },
                { id: "eid8836", tween: [ "style", "${_flagger12}", "display", 'block', { fromValue: 'none'}], position: 1756, duration: 0 },
                { id: "eid8837", tween: [ "style", "${_flagger12}", "display", 'none', { fromValue: 'block'}], position: 2012, duration: 0 },
                { id: "eid8737", tween: [ "style", "${_flagger1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8738", tween: [ "style", "${_flagger1}", "display", 'none', { fromValue: 'block'}], position: 762, duration: 0 },
                { id: "eid8773", tween: [ "style", "${_flagger9}", "display", 'block', { fromValue: 'none'}], position: 1381, duration: 0 },
                { id: "eid8774", tween: [ "style", "${_flagger9}", "display", 'none', { fromValue: 'block'}], position: 1637, duration: 0 },
                { id: "eid8767", tween: [ "style", "${_flagger7}", "display", 'block', { fromValue: 'none'}], position: 1131, duration: 0 },
                { id: "eid8768", tween: [ "style", "${_flagger7}", "display", 'none', { fromValue: 'block'}], position: 1387, duration: 0 },
                { id: "eid8745", tween: [ "style", "${_flagger5}", "display", 'block', { fromValue: 'none'}], position: 881, duration: 0 },
                { id: "eid8766", tween: [ "style", "${_flagger5}", "display", 'none', { fromValue: 'block'}], position: 1137, duration: 0 },
                { id: "eid8850", tween: [ "style", "${_flagger11}", "display", 'block', { fromValue: 'none'}], position: 1631, duration: 0 },
                { id: "eid8851", tween: [ "style", "${_flagger11}", "display", 'none', { fromValue: 'block'}], position: 1887, duration: 0 },
                { id: "eid8935", tween: [ "style", "${_flagger18}", "display", 'block', { fromValue: 'none'}], position: 2506, duration: 0 },
                { id: "eid8936", tween: [ "style", "${_flagger18}", "display", 'none', { fromValue: 'block'}], position: 2762, duration: 0 },
                { id: "eid8933", tween: [ "style", "${_flagger17}", "display", 'block', { fromValue: 'none'}], position: 2381, duration: 0 },
                { id: "eid8934", tween: [ "style", "${_flagger17}", "display", 'none', { fromValue: 'block'}], position: 2637, duration: 0 },
                { id: "eid8739", tween: [ "style", "${_flagger2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid8740", tween: [ "style", "${_flagger2}", "display", 'none', { fromValue: 'block'}], position: 762, duration: 0 },
                { id: "eid8743", tween: [ "style", "${_flagger4}", "display", 'block', { fromValue: 'none'}], position: 757, duration: 0 },
                { id: "eid8744", tween: [ "style", "${_flagger4}", "display", 'none', { fromValue: 'block'}], position: 1012, duration: 0 }            ]
        }
    }
},
"flag1GreatPlace": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flagOrangeComp',
                    type: 'rect',
                    rect: ['6px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-22']]
                },
                {
                    id: 'scene6Flag1No1',
                    type: 'image',
                    rect: ['49px', '128px', '112px', '92px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Flag1No1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'flagOrangeComp',
                symbolName: 'flagOrangeComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene6Flag1No1}": [
                ["style", "left", '49px'],
                ["style", "top", '128px']
            ],
            "${_flagOrangeComp}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '-22deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5012,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"flag2Uni": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flagBlueComp',
                    type: 'rect',
                    rect: ['0px', '-6px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-22']]
                },
                {
                    id: 'scene6Flag2Uni',
                    type: 'image',
                    rect: ['71px', '128px', '99px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Flag2Uni.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'flagBlueComp',
                symbolName: 'flagBlueComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene6Flag2Uni}": [
                ["style", "left", '71px'],
                ["style", "top", '128px']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ],
            "${_flagBlueComp}": [
                ["style", "top", '-6px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '-22deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2887,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"flag3Break": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'flagOrangeComp',
                    opacity: 1,
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-15']]
                },
                {
                    id: 'scene6Flag3Break',
                    type: 'image',
                    rect: ['42px', '123px', '124px', '59px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Flag3Break.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'flagOrangeComp',
                symbolName: 'flagOrangeComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ],
            "${_flagOrangeComp}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '-15deg']
            ],
            "${_scene6Flag3Break}": [
                ["style", "left", '42px'],
                ["style", "top", '123px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5012,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"flagBlueComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'block',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue01',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue01.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue02',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue02.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue03',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue03.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue04',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue04.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue05',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue05.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue06',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue06.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue07',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue07.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger8',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue08',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue08.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger9',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue09',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue09.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger10',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue10',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue10.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger11',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue11',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue11.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger12',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue12',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue12.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger13',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue13',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue13.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger14',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue142',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue14.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger15',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue15',
                        type: 'image',
                        rect: ['0', '0', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue15.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger16',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue16',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue16.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger17',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue17',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue17.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger18',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue18',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue18.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger19',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue19',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue19.png', '0px', '0px']
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                    id: 'flagger20',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'flagBlue20',
                        type: 'image',
                        rect: ['0px', '0px', '300px', '345px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/flagBlue20.png', '0px', '0px']
                    }]
                },
                {
                    id: 'flagBlue00Extender3',
                    type: 'image',
                    rect: ['57px', '324px', '15px', '106px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/flagBlue00Extender.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_flagger20}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagBlue19}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger6}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagger5}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagger17}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagBlue20}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagBlue08}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagBlue16}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ],
            "${_flagger10}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger16}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagBlue00Extender3}": [
                ["style", "left", '57px'],
                ["style", "top", '324px']
            ],
            "${_flagger11}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagBlue13}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagBlue142}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger3}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagger15}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger7}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger8}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger18}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger9}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger13}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger4}": [
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_flagger14}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger12}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagger19}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'none']
            ],
            "${_flagBlue17}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagBlue18}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_flagger1}": [
                ["style", "-webkit-transform-origin", [50,98], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.05'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "scaleX", '0.05']
            ],
            "${_flagBlue12}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2887,
            autoPlay: true,
            labels: {
                "four": 757,
                "five": 881,
                "six": 1006,
                "seven": 1131,
                "eight": 1256,
                "nine": 1381,
                "ten": 1506,
                "eleven": 1631,
                "twelve": 1756,
                "StartOver": 2887
            },
            timeline: [
                { id: "eid8776", tween: [ "style", "${_flagger10}", "display", 'block', { fromValue: 'none'}], position: 1506, duration: 0 },
                { id: "eid8777", tween: [ "style", "${_flagger10}", "display", 'none', { fromValue: 'block'}], position: 1762, duration: 0 },
                { id: "eid8840", tween: [ "style", "${_flagger14}", "display", 'block', { fromValue: 'none'}], position: 2006, duration: 0 },
                { id: "eid8841", tween: [ "style", "${_flagger14}", "display", 'none', { fromValue: 'block'}], position: 2262, duration: 0 },
                { id: "eid8937", tween: [ "style", "${_flagger19}", "display", 'block', { fromValue: 'none'}], position: 2631, duration: 0 },
                { id: "eid8938", tween: [ "style", "${_flagger19}", "display", 'none', { fromValue: 'block'}], position: 2887, duration: 0 },
                { id: "eid8888", tween: [ "transform", "${_flagger1}", "scaleX", '1', { fromValue: '0.05'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid8741", tween: [ "style", "${_flagger3}", "display", 'block', { fromValue: 'none'}], position: 631, duration: 0 },
                { id: "eid8742", tween: [ "style", "${_flagger3}", "display", 'none', { fromValue: 'block'}], position: 888, duration: 0 },
                { id: "eid8763", tween: [ "style", "${_flagger6}", "display", 'block', { fromValue: 'none'}], position: 1006, duration: 0 },
                { id: "eid8765", tween: [ "style", "${_flagger6}", "display", 'none', { fromValue: 'block'}], position: 1262, duration: 0 },
                { id: "eid8838", tween: [ "style", "${_flagger13}", "display", 'block', { fromValue: 'none'}], position: 1881, duration: 0 },
                { id: "eid8839", tween: [ "style", "${_flagger13}", "display", 'none', { fromValue: 'block'}], position: 2137, duration: 0 },
                { id: "eid8743", tween: [ "style", "${_flagger4}", "display", 'block', { fromValue: 'none'}], position: 757, duration: 0 },
                { id: "eid8744", tween: [ "style", "${_flagger4}", "display", 'none', { fromValue: 'block'}], position: 1012, duration: 0 },
                { id: "eid8739", tween: [ "style", "${_flagger2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid8740", tween: [ "style", "${_flagger2}", "display", 'none', { fromValue: 'block'}], position: 762, duration: 0 },
                { id: "eid8975", tween: [ "style", "${_flagger15}", "display", 'block', { fromValue: 'none'}], position: 2131, duration: 0 },
                { id: "eid8976", tween: [ "style", "${_flagger15}", "display", 'none', { fromValue: 'block'}], position: 2387, duration: 0 },
                { id: "eid8770", tween: [ "style", "${_flagger8}", "display", 'block', { fromValue: 'none'}], position: 1256, duration: 0 },
                { id: "eid8771", tween: [ "style", "${_flagger8}", "display", 'none', { fromValue: 'block'}], position: 1512, duration: 0 },
                { id: "eid8935", tween: [ "style", "${_flagger18}", "display", 'block', { fromValue: 'none'}], position: 2506, duration: 0 },
                { id: "eid8936", tween: [ "style", "${_flagger18}", "display", 'none', { fromValue: 'block'}], position: 2762, duration: 0 },
                { id: "eid8836", tween: [ "style", "${_flagger12}", "display", 'block', { fromValue: 'none'}], position: 1756, duration: 0 },
                { id: "eid8837", tween: [ "style", "${_flagger12}", "display", 'none', { fromValue: 'block'}], position: 2012, duration: 0 },
                { id: "eid8915", tween: [ "style", "${_flagger16}", "display", 'block', { fromValue: 'none'}], position: 2256, duration: 0 },
                { id: "eid8916", tween: [ "style", "${_flagger16}", "display", 'none', { fromValue: 'block'}], position: 2512, duration: 0 },
                { id: "eid8773", tween: [ "style", "${_flagger9}", "display", 'block', { fromValue: 'none'}], position: 1381, duration: 0 },
                { id: "eid8774", tween: [ "style", "${_flagger9}", "display", 'none', { fromValue: 'block'}], position: 1637, duration: 0 },
                { id: "eid8767", tween: [ "style", "${_flagger7}", "display", 'block', { fromValue: 'none'}], position: 1131, duration: 0 },
                { id: "eid8768", tween: [ "style", "${_flagger7}", "display", 'none', { fromValue: 'block'}], position: 1387, duration: 0 },
                { id: "eid8850", tween: [ "style", "${_flagger11}", "display", 'block', { fromValue: 'none'}], position: 1631, duration: 0 },
                { id: "eid8851", tween: [ "style", "${_flagger11}", "display", 'none', { fromValue: 'block'}], position: 1887, duration: 0 },
                { id: "eid8745", tween: [ "style", "${_flagger5}", "display", 'block', { fromValue: 'none'}], position: 881, duration: 0 },
                { id: "eid8766", tween: [ "style", "${_flagger5}", "display", 'none', { fromValue: 'block'}], position: 1137, duration: 0 },
                { id: "eid8737", tween: [ "style", "${_flagger1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8738", tween: [ "style", "${_flagger1}", "display", 'none', { fromValue: 'block'}], position: 762, duration: 0 },
                { id: "eid8933", tween: [ "style", "${_flagger17}", "display", 'block', { fromValue: 'none'}], position: 2381, duration: 0 },
                { id: "eid8934", tween: [ "style", "${_flagger17}", "display", 'none', { fromValue: 'block'}], position: 2637, duration: 0 },
                { id: "eid8889", tween: [ "transform", "${_flagger1}", "scaleY", '1', { fromValue: '0.05'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid8939", tween: [ "style", "${_flagger20}", "display", 'block', { fromValue: 'none'}], position: 2756, duration: 0 },
                { id: "eid8940", tween: [ "style", "${_flagger20}", "display", 'none', { fromValue: 'block'}], position: 2887, duration: 0 }            ]
        }
    }
},
"flag4Record": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flagBlueComp',
                    type: 'rect',
                    rect: ['0px', '-6px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['9']]
                },
                {
                    id: 'scene6Flag4Record',
                    type: 'image',
                    rect: ['67px', '100px', '94px', '81px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Flag4Record.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'flagBlueComp',
                symbolName: 'flagBlueComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene6Flag4Record}": [
                ["style", "left", '67px'],
                ["style", "top", '100px']
            ],
            "${_flagBlueComp}": [
                ["style", "top", '-6px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '9deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2887,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"flag5Sus": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flagOrangeComp2',
                    type: 'rect',
                    rect: ['16', '67', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'scene6Flag6Sus',
                    type: 'image',
                    rect: ['58px', '120px', '118px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Flag6Sus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'flagOrangeComp2',
                symbolName: 'flagOrangeComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene6Flag6Sus}": [
                ["style", "left", '58px'],
                ["style", "top", '120px']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ],
            "${_flagOrangeComp2}": [
                ["style", "top", '-13px'],
                ["style", "left", '-9px'],
                ["transform", "rotateZ", '-17deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5012,
            autoPlay: true,
            timeline: [
                { id: "eid9253", tween: [ "style", "${_flagOrangeComp2}", "top", '-13px', { fromValue: '-13px'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9252", tween: [ "style", "${_flagOrangeComp2}", "left", '-9px', { fromValue: '-9px'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9251", tween: [ "transform", "${_flagOrangeComp2}", "rotateZ", '-17deg', { fromValue: '-17deg'}], position: 0, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"flag6Sus2": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'flagOrangeComp',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    opacity: 1
                },
                {
                    id: 'scene6Flag6Sus',
                    type: 'image',
                    rect: ['60px', '132px', '118px', '63px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Flag6Sus.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'flagOrangeComp',
                symbolName: 'flagOrangeComp',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene6Flag6Sus}": [
                ["style", "left", '60px'],
                ["style", "top", '132px']
            ],
            "${_flagOrangeComp}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '-22deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5012,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scene6fireWorksComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene6Fire_00001',
                    type: 'image',
                    rect: ['0px', '0px', '1020px', '635px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00001.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['490px', '0px', '192px', '169px', 'auto', 'auto'],
                    id: 'scene6Fire_00002',
                    opacity: 1,
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00002.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['208px', '0px', '508px', '203px', 'auto', 'auto'],
                    id: 'scene6Fire_00003',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00003.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['160px', '0', '578px', '239px', 'auto', 'auto'],
                    id: 'scene6Fire_00004',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00004.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['108px', '0', '656px', '283px', 'auto', 'auto'],
                    id: 'scene6Fire_00005',
                    opacity: 1,
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00005.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['58px', '0', '962px', '359px', 'auto', 'auto'],
                    id: 'scene6Fire_00006',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00006.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['18px', '0', '1002px', '401px', 'auto', 'auto'],
                    id: 'scene6Fire_00007',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00007.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '1020px', '491px', 'auto', 'auto'],
                    id: 'scene6Fire_00008',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00008.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['324px', '0px', '696px', '409px', 'auto', 'auto'],
                    id: 'scene6Fire_00009',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00009.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['286px', '1px', '734px', '406px', 'auto', 'auto'],
                    id: 'scene6Fire_00010',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00010.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['286px', '0', '734px', '407px', 'auto', 'auto'],
                    id: 'scene6Fire_00011',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00011.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['278px', '0', '742px', '413px', 'auto', 'auto'],
                    id: 'scene6Fire_00012',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00012.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['260px', '0', '760px', '413px', 'auto', 'auto'],
                    id: 'scene6Fire_00013',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00013.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['236px', '0px', '784px', '417px', 'auto', 'auto'],
                    id: 'scene6Fire_00014',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00014.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['228px', '0', '792px', '413px', 'auto', 'auto'],
                    id: 'scene6Fire_00015',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00015.jpg', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['224px', '0', '796px', '407px', 'auto', 'auto'],
                    id: 'scene6Fire_00016',
                    fill: ['rgba(0,0,0,0)', 'images/scene6Fire_00016.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene6Fire_00009}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '409px'],
                ["style", "left", '324px'],
                ["style", "width", '696px']
            ],
            "${_scene6Fire_00001}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_scene6Fire_00012}": [
                ["style", "height", '413px'],
                ["style", "display", 'none'],
                ["style", "left", '278px'],
                ["style", "width", '742px']
            ],
            "${symbolSelector}": [
                ["style", "height", '635px'],
                ["style", "width", '1020px']
            ],
            "${_scene6Fire_00006}": [
                ["style", "height", '359px'],
                ["style", "display", 'none'],
                ["style", "left", '58px'],
                ["style", "width", '962px']
            ],
            "${_scene6Fire_00005}": [
                ["style", "height", '283px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '108px'],
                ["style", "width", '656px']
            ],
            "${_scene6Fire_00010}": [
                ["style", "top", '1px'],
                ["style", "display", 'none'],
                ["style", "height", '406px'],
                ["style", "left", '286px'],
                ["style", "width", '734px']
            ],
            "${_scene6Fire_00014}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '417px'],
                ["style", "left", '236px'],
                ["style", "width", '784px']
            ],
            "${_scene6Fire_00016}": [
                ["style", "height", '407px'],
                ["style", "display", 'none'],
                ["style", "left", '224px'],
                ["style", "width", '796px']
            ],
            "${_scene6Fire_00013}": [
                ["style", "height", '413px'],
                ["style", "display", 'none'],
                ["style", "left", '260px'],
                ["style", "width", '760px']
            ],
            "${_scene6Fire_00007}": [
                ["style", "height", '401px'],
                ["style", "display", 'none'],
                ["style", "left", '18px'],
                ["style", "width", '1002px']
            ],
            "${_scene6Fire_00008}": [
                ["style", "display", 'none'],
                ["style", "height", '491px']
            ],
            "${_scene6Fire_00011}": [
                ["style", "height", '407px'],
                ["style", "display", 'none'],
                ["style", "left", '286px'],
                ["style", "width", '734px']
            ],
            "${_scene6Fire_00002}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "height", '169px'],
                ["style", "opacity", '1'],
                ["style", "left", '490px'],
                ["style", "width", '192px']
            ],
            "${_scene6Fire_00004}": [
                ["style", "height", '239px'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '160px'],
                ["style", "width", '578px']
            ],
            "${_scene6Fire_00003}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '203px'],
                ["style", "opacity", '1'],
                ["style", "left", '208px'],
                ["style", "width", '508px']
            ],
            "${_scene6Fire_00015}": [
                ["style", "height", '413px'],
                ["style", "display", 'none'],
                ["style", "left", '228px'],
                ["style", "width", '792px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid9392", tween: [ "style", "${_scene6Fire_00016}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9345", tween: [ "style", "${_scene6Fire_00016}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid9397", tween: [ "style", "${_scene6Fire_00011}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9350", tween: [ "style", "${_scene6Fire_00011}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
                { id: "eid11654", tween: [ "style", "${_scene6Fire_00011}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid9395", tween: [ "style", "${_scene6Fire_00013}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9348", tween: [ "style", "${_scene6Fire_00013}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
                { id: "eid11656", tween: [ "style", "${_scene6Fire_00013}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid9399", tween: [ "style", "${_scene6Fire_00009}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9352", tween: [ "style", "${_scene6Fire_00009}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
                { id: "eid11652", tween: [ "style", "${_scene6Fire_00009}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid9396", tween: [ "style", "${_scene6Fire_00012}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9349", tween: [ "style", "${_scene6Fire_00012}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid11655", tween: [ "style", "${_scene6Fire_00012}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
                { id: "eid9398", tween: [ "style", "${_scene6Fire_00010}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9351", tween: [ "style", "${_scene6Fire_00010}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid11653", tween: [ "style", "${_scene6Fire_00010}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
                { id: "eid9391", tween: [ "style", "${_scene6Fire_00003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9344", tween: [ "style", "${_scene6Fire_00003}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid11646", tween: [ "style", "${_scene6Fire_00003}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid9394", tween: [ "style", "${_scene6Fire_00014}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9347", tween: [ "style", "${_scene6Fire_00014}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid11657", tween: [ "style", "${_scene6Fire_00014}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
                { id: "eid9393", tween: [ "style", "${_scene6Fire_00015}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9346", tween: [ "style", "${_scene6Fire_00015}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
                { id: "eid11658", tween: [ "style", "${_scene6Fire_00015}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid9401", tween: [ "style", "${_scene6Fire_00007}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9354", tween: [ "style", "${_scene6Fire_00007}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid11650", tween: [ "style", "${_scene6Fire_00007}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid9402", tween: [ "style", "${_scene6Fire_00006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9355", tween: [ "style", "${_scene6Fire_00006}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid11649", tween: [ "style", "${_scene6Fire_00006}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid9400", tween: [ "style", "${_scene6Fire_00008}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9353", tween: [ "style", "${_scene6Fire_00008}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid11651", tween: [ "style", "${_scene6Fire_00008}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
                { id: "eid9404", tween: [ "style", "${_scene6Fire_00004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9357", tween: [ "style", "${_scene6Fire_00004}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid11647", tween: [ "style", "${_scene6Fire_00004}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
                { id: "eid9403", tween: [ "style", "${_scene6Fire_00005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid9356", tween: [ "style", "${_scene6Fire_00005}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid11648", tween: [ "style", "${_scene6Fire_00005}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid11645", tween: [ "style", "${_scene6Fire_00002}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 }            ]
        }
    }
},
"scene6StadiumPeopleComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '170px'],
                ["style", "width", '687px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scene6BetterComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'scene6BetterFireworks',
                    type: 'image',
                    rect: ['0px', '0px', '386px', '293px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6BetterFireworks.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_scene6BetterFireworks}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.500000'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '293px'],
                ["style", "width", '386px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid10712", tween: [ "style", "${_scene6BetterFireworks}", "opacity", '1', { fromValue: '0.500000'}], position: 0, duration: 0, easing: "easeInOutBounce" }            ]
        }
    }
},
"navCircleGlowComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'navCircleGlow',
                    type: 'image',
                    rect: ['-23px', '-23px', '108px', '108px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/navCircleGlow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '62px'],
                ["style", "width", '62px']
            ],
            "${_navCircleGlow}": [
                ["style", "top", '-23px'],
                ["transform", "scaleY", '0.2'],
                ["transform", "scaleX", '0.2'],
                ["style", "height", '108px'],
                ["style", "opacity", '1'],
                ["style", "left", '-23px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "returner": 0
            },
            timeline: [
                { id: "eid10751", tween: [ "transform", "${_navCircleGlow}", "scaleX", '0.8', { fromValue: '0.2'}], position: 0, duration: 1000 },
                { id: "eid10752", tween: [ "transform", "${_navCircleGlow}", "scaleY", '0.8', { fromValue: '0.2'}], position: 0, duration: 1000 },
                { id: "eid10762", tween: [ "style", "${_navCircleGlow}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"scene4PumpGlowComp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['259px', '207px', '278px', '156px', 'auto', 'auto'],
                    id: 'scene4pumpStand',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene4pumpStand.png', '0px', '0px']
                },
                {
                    rect: ['-21px', '4px', '519px', '299px', 'auto', 'auto'],
                    id: 'scene4Pump',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/scene4Pump.png', '0px', '0px']
                },
                {
                    id: 'scene4Battery',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'scene4Battery',
                symbolName: 'scene4Battery',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_scene4Pump}": [
                ["style", "top", '4px'],
                ["style", "display", 'none'],
                ["style", "height", '299px'],
                ["style", "opacity", '1'],
                ["style", "left", '-21px'],
                ["style", "width", '519px']
            ],
            "${_scene4Battery}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_scene4pumpStand}": [
                ["style", "top", '207px'],
                ["style", "opacity", '1'],
                ["style", "left", '259px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '309px'],
                ["style", "width", '498px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6009,
            autoPlay: true,
            timeline: [
                { id: "eid11247", tween: [ "style", "${_scene4Pump}", "display", 'block', { fromValue: 'none'}], position: 5007, duration: 0 },
                { id: "eid11250", tween: [ "style", "${_scene4Battery}", "opacity", '0', { fromValue: '1'}], position: 5007, duration: 1002 },
                { id: "eid11248", tween: [ "style", "${_scene4pumpStand}", "display", 'block', { fromValue: 'none'}], position: 5007, duration: 0 },
                { id: "eid11304", tween: [ "style", "${_scene4Pump}", "opacity", '1', { fromValue: '1'}], position: 5007, duration: 0 },
                { id: "eid11305", tween: [ "style", "${_scene4pumpStand}", "opacity", '1', { fromValue: '1'}], position: 5007, duration: 0 }            ]
        }
    }
},
"flag6Leading": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'flagOrangeComp',
                    opacity: 1,
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    transform: [[0, 0], ['-15']]
                },
                {
                    id: 'scene6Flag5Lead',
                    type: 'image',
                    rect: ['78', '138', '151px', '48px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/scene6Flag5Lead.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'flagOrangeComp',
                symbolName: 'flagOrangeComp'
            }            ]
        },
    states: {
        "Base State": {
            "${_flagOrangeComp}": [
                ["style", "top", '7px'],
                ["style", "opacity", '1'],
                ["style", "left", '17px'],
                ["transform", "rotateZ", '15deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '345px'],
                ["style", "width", '300px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5012,
            autoPlay: true,
            timeline: [
                { id: "eid11371", tween: [ "transform", "${_flagOrangeComp}", "rotateZ", '15deg', { fromValue: '15deg'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid11372", tween: [ "style", "${_flagOrangeComp}", "left", '17px', { fromValue: '17px'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid11373", tween: [ "style", "${_flagOrangeComp}", "top", '7px', { fromValue: '7px'}], position: 0, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-17710639");
