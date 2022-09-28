
    const rxURL = 'http://172.31.3.';
    const vw1x3URL = 'http://172.31.3.6'; //.61-69
    const vw2x2URL = 'http://172.31.3.4'; // .41-42
    const vw2x2_r1c1_On = 'e e_vw_pos_layout_1_1%3Be e_vw_enable_1_1_0_0%3Be e_vw_moninfo_195_200_95_100%3Be e_vw_refresh_pos_idx_0_0';
    const vw2x2_r1c2_On = 'e e_vw_pos_layout_1_1%3Be e_vw_enable_1_1_0_1%3Be e_vw_moninfo_195_200_95_100%3Be e_vw_refresh_pos_idx_0_1';
    const vw2x2_r2c1_On = 'e e_vw_pos_layout_1_1%3Be e_vw_enable_1_1_1_0%3Be e_vw_moninfo_195_200_95_100%3Be e_vw_refresh_pos_idx_1_0';
    const vw2x2_r2c2_On = 'e e_vw_pos_layout_1_1%3Be e_vw_enable_1_1_1_1%3Be e_vw_moninfo_195_200_95_100%3Be e_vw_refresh_pos_idx_1_1';
    const vw2x2Setting = [vw2x2_r1c1_On, vw2x2_r1c2_On, vw2x2_r2c1_On, vw2x2_r2c2_On];
    
    const vw1x2_r1c1_On = 'e e_vw_pos_layout_0_1%3Be e_vw_enable_0_1_0_0%3Be e_vw_moninfo_195_200_95_100%3Be e_vw_refresh_pos_idx_0_0';
    const vw1x2_r1c2_On = 'e e_vw_pos_layout_0_1%3Be e_vw_enable_0_1_0_1%3Be e_vw_moninfo_195_200_95_100%3Be e_vw_refresh_pos_idx_0_1';
    const vw1x2Setting = [vw1x2_r1c1_On, vw1x2_r1c2_On ];
     
    var tvSelected = '1';
    var inputSelected = '1';
    var snapShotCounterTX = 0;
    var snapShotCounterRX = 0;
    
    var txCapture = '0';
    var rxCapture = '0';

    let page1 = document.getElementById('page1');
    let page2 = document.getElementById('page2');

    let TVonBtn = document.getElementById('TVonBtn');
    let TVoffBtn = document.getElementById('TVoffBtn');
   // let SwitchBtn = document.getElementById('SwitchBtn');
    let SnapShotsBtn = document.getElementById('SnapShotsBtn');


    let page1Btn1 = document.getElementById('page1Btn1');
    let page1Btn2 = document.getElementById('page1Btn2');
    let page1Btn3 = document.getElementById('page1Btn3');
    let page1Btn4 = document.getElementById('page1Btn4');
    let page1Btn5 = document.getElementById('page1Btn5');
    let page1Btn6 = document.getElementById('page1Btn6');
    let page1Btn7 = document.getElementById('page1Btn7');
    let page1Btn8 = document.getElementById('page1Btn8');
    let page1Btn9 = document.getElementById('page1Btn9');
    let page1Btn10 = document.getElementById('page1Btn10');
    let page1Btn11 = document.getElementById('page1Btn11');
    let page1Btn12 = document.getElementById('page1Btn12'); 
    let page1Btn13 = document.getElementById('page1Btn13');     

    // let tv1Input = document.getElementById('tv1Input');
    // let tv2Input = document.getElementById('tv2Input');
    // let tv3Input = document.getElementById('tv3Input');
    // let tv4Input = document.getElementById('tv4Input');
    // let tv5Input = document.getElementById('tv5Input');

    let page2Btn1 = document.getElementById('page2Btn1');
    let page2Btn2 = document.getElementById('page2Btn2');
    let page2Btn3 = document.getElementById('page2Btn3');
    let page2Btn4 = document.getElementById('page2Btn4');

    page1Btn1.addEventListener('click', chooseTV);
    page1Btn2.addEventListener('click', chooseTV);
    page1Btn3.addEventListener('click', chooseTV);
    page1Btn4.addEventListener('click', chooseTV);
    page1Btn5.addEventListener('click', chooseTV);
    page1Btn6.addEventListener('click', chooseTV);
    page1Btn7.addEventListener('click', chooseTV);
    page1Btn8.addEventListener('click', chooseTV);
    page1Btn9.addEventListener('click', chooseTV);
    page1Btn10.addEventListener('click', chooseTV);
    page1Btn11.addEventListener('click', chooseTV);
    page1Btn12.addEventListener('click', chooseTV);
    page1Btn13.addEventListener('click', chooseTV);

    page2Btn1.addEventListener('click', chooseInput);
    page2Btn2.addEventListener('click', chooseInput);
    page2Btn3.addEventListener('click', chooseInput);
    page2Btn4.addEventListener('click', chooseInput);

    TVonBtn.addEventListener('click', ()=>{
            tvOnOff('on');
            
    });

    TVoffBtn.addEventListener('click', () => {
            tvOnOff('off'); 
            
    });

    // SwitchBtn.addEventListener('click', () => {
        
    //     ShowPage1();

    // });


    // SnapShotsBtn.addEventListener('click', () => {
        
    //     GetRxSnapShots();

    // });


//getStatus();

    
function TurnIntervalOn(_input) {
    
    if (_input == 'tx') {
        console.log('clear rx interval');
        clearInterval(rxCapture);
        clearInterval(txCapture);
        txCapture = setInterval(CaptureTXScreen, 2500);
       
    } else if(_input == 'rx'){
        console.log('clear tx interval');
        clearInterval(rxCapture);
        clearInterval(txCapture);
        rxCapture = setInterval(CaptureRXScreen, 2500);
        
    } else if(_input == 'none'){
        clearInterval(rxCapture);
        clearInterval(txCapture);
    }

}

function getStatus() {
    setInterval(RX_CH_Feedback, 10000);
}

function chooseTV(_value) {

    tvSelected = parseInt(this.value);
    TurnIntervalOn('tx');
    page1.style.zIndex = '-1';
    page2.style.zIndex = '100';
        
    //VW 1x3 A 
    if (tvSelected == 4 || tvSelected == 5) {

        vw1x3ABoff();

        setTimeout(() => {
            vw1x3ABon();
        }, 3000);

        //vw 1x6
    } else if (tvSelected == 6) {
        vw1x6on();
    }
    // r1c1 or r1c2 Prssed
    else if (tvSelected == 7 || tvSelected == 8) {
      
        vw1x2Aoff();
      
    }
    // r2c1 or r2c2 Prssed
    else if (tvSelected == 10 || tvSelected == 11) {

        vw1x2Boff();

    }
    // vw 1x2 A Pressed
    else if (tvSelected == 9) {
        vw1x2Aoff();
        setTimeout(() => {
            vw1x2Aon();
        }, 3000);

    } 
    // vw 1x2 B Pressed
    else if (tvSelected == 12) {
        vw1x2Boff();
        setTimeout(() => {
            vw1x2Bon();
        }, 3000);

    }      
    // vw 2x2 ON
    else if (tvSelected == 13) {
        
        vw2x2on();

    }


}

function chooseInput(_value) {
    inputSelected = this.value;
    page1.style.zIndex = '100';
    page2.style.zIndex = '0';
    page3.style.zIndex = '-100';
    TurnIntervalOn('none');
    rxSwitch();
}

function GetRxSnapShots() {
    page1.style.zIndex = '0';
    page2.style.zIndex = '-100';
    page3.style.zIndex = '100';
    TurnIntervalOn('rx');
}
function ShowPage1() {
    page1.style.zIndex = '100';
    page2.style.zIndex = '0';
    page3.style.zIndex = '-100';
    TurnIntervalOn('none');
}

function rxSwitch() {
      
    if (tvSelected <= 3) {
    
        fetch(`${rxURL}` + tvSelected + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
        .then(function (data) {
        });

    }
    //VW 1x3 A 
    else if (tvSelected == 4) {

        for (i = 0; i <= 2; i++) {
            fetch(`${vw1x3URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
                .then(function (data) {
                });
        }

    }
    //VW 1x3 B
    else if (tvSelected == 5) {
        
        for (i = 0; i <= 2; i++) {
            fetch(`${vw1x3URL}` + (i + 4) + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
            .then(function (data) {
            });
        }

    } //VW 1x6
    else if (tvSelected == 6) {

        for (i = 0; i <= 5; i++) {
            //switch 
            fetch(`${vw1x3URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
            .then(function (data) {
            });
        }

    }
    // VW r1xc1
    else if (tvSelected == 7) {
    
        fetch(`${vw2x2URL}` + '1' + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
        .then(function (data) {
        });
    }
    // VW r1xc2
    else if (tvSelected == 8) {
       
        fetch(`${vw2x2URL}` + '2' + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
        .then(function (data) {
        });
    }
    // vw 1x2 A
    else if (tvSelected == 9) {
        for (i = 0; i <= 1; i++){
            fetch(`${vw2x2URL}` + (i+1) + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
            .then(function (data) {
            });
        }
    }
    // vw 1x2 B
    else if (tvSelected == 12) {
        for (i = 0; i <= 1; i++) {
            fetch(`${vw2x2URL}` + (i + 3) + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
            .then(function (data) {
            });
        }
    }
    // VW r2xc1
    else if (tvSelected == 10) {
       
        fetch(`${vw2x2URL}` + '3' + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
        .then(function (data) {
        });
    }
    // VW r2xc2
    else if (tvSelected == 11) {
        
        fetch(`${vw2x2URL}` + '4' + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
        .then(function (data) {
        });
    }       
    // 2x2 VW ON
    else if (tvSelected == 13) {

        for (i = 0; i <= 3; i++) {
            //switch 
            fetch(`${vw2x2URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=rxswitch:${inputSelected}`)
            .then(function (data) {
            });
         }
    }
}

function vw1x3ABoff() {
 
    for (i = 0; i <= 5; i++) {
      
        fetch(`${vw1x3URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=vw:off`)
        .then(function (data) {
        });
    }
}

function vw1x3ABon() {
    
    for (i = 0; i <= 2; i++) {
        //switch A to 1x3 VW mode.
        fetch(`${vw1x3URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=e e_vw_enable_2_0_${i}_0%3Be e_vw_moninfo_195_200_95_100%3Bsleep 2%3Be e_vw_rotate_5`)
        .then(function (data) {
        });
    }
    for (i = 0; i <= 2; i++) {
        //switch B to 1x3 VW mode.
        fetch(`${vw1x3URL}` + (i + 4) + `/cgi-bin/query.cgi?cmd=e e_vw_enable_2_0_${i}_0%3Be e_vw_moninfo_195_200_95_100%3Bsleep 2%3Be e_vw_rotate_5`)
        .then(function (data) {
        });
    }
}
   
function vw1x6on() {
    
    for (i = 0; i <= 5; i++) {
        //switch to 1x3 VW mode.
        fetch(`${vw1x3URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=e e_vw_enable_5_0_${i}_0%3Be e_vw_moninfo_195_200_95_100%3Bsleep 2%3Be e_vw_rotate_5`)
        .then(function (data) {
        });
    }    
}

function vw1x2Aon() {
    for (i = 0; i <= 1; i++) {
        console.log(`${vw2x2URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd =` + vw1x2Setting[i])
        fetch(`${vw2x2URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=` + vw1x2Setting[i])
        .then(function (data) {
        });
    }
}

function vw1x2Aoff() {
    for (i = 0; i <= 1; i++) {
        
        fetch(`${vw2x2URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=vw:off`)
            .then(function (data) {
            });
    }
}

function vw1x2Bon() {
    for (i = 0; i <= 1; i++) {
        fetch(`${vw2x2URL}` + (i + 3) + `/cgi-bin/query.cgi?cmd=` + vw1x2Setting[i])
        .then(function (data) {
        });
    }
}

function vw1x2Boff() {
    for (i = 0; i <= 1; i++) {
        fetch(`${vw2x2URL}` + (i + 3) + `/cgi-bin/query.cgi?cmd=vw:off`)
            .then(function (data) {
            });
    }
}
 
    
function vw2x2off() {

    for (i = 0; i <= 3; i++) {
        fetch(`${vw2x2URL}` + (i + 1) + `/cgi-bin/query.cgi?cmd=vw:off`)
        .then(function (data) {
        });
    }
}



function vw2x2mix1to4() {

    for (i = 1; i <= 4; i++) {
        //switch vw 2x2 so source 1 to 4 show on displasy 1 to 4 respectively
        fetch(`${vw2x2URL}` + i + `/cgi-bin/query.cgi?cmd=rxswitch:00`+ i)
        .then(function (data) {
        });

    }
}
    
function vw2x2on() {
    for (i = 0; i <= 3; i++){
        console.log(`${vw2x2URL}` + (i+1) + `/cgi-bin/query.cgi?cmd=` + vw2x2Setting[i]);
        fetch(`${vw2x2URL}` + (i+1) + `/cgi-bin/query.cgi?cmd=` + vw2x2Setting[i] )
        .then(function (data) {
        });
    }
}
    

function tvOnOff(_on_off) {
    
    let on_off_cec = '';

    if (_on_off == 'on') {

        on_off_cec = 'cec_send e0:04'; // cec command for tv = ON
        alert('Turning TVs ON');
        
    } else {

        // on_off_cec = 'cec_send e0:36'  ; // cec command for tv = OFF. Old original OFF command
        on_off_cec = 'cec_send F0:36'; // cec command for tv = OFF Newer Off command
        alert('Turning TVs OFF');
        
    }

    // Turn ALL TV ON/OFF
    for (let i = 1; i <= 6; i++) {

        fetch(`${rxURL}` + i + `/cgi-bin/query.cgi?cmd=${on_off_cec}`)
        .then(function (data) {
         
        })
      
    }
    for (let i = 1; i <= 6; i++) {

        fetch(`${vw1x3URL}` + i + `/cgi-bin/query.cgi?cmd=${on_off_cec}`)
        .then(function (data) {
 
        })
   
    }
    for (let i = 1; i <= 4; i++) {

        fetch(`${vw2x2URL}` + i + `/cgi-bin/query.cgi?cmd=${on_off_cec}`)
        .then(function (data) {
      
        })
      
    }
}


/***  RX_CH_Feedback()  **********************************************************************************************
            Feedback.Shows what video source each display is currently connected to.
            Poll the RX and get the TX CH ID the RX is switched to.
            Update Display label with name of video source the display is switched to
        
    **************************************************************************************************************/
function RX_CH_Feedback() {

    for (let i = 1; i <= 5; i++) {

        // Get feedback 

        fetch('http://172.31.3.' + (i) + '/cgi-bin/query.cgi?cmd=astparam g ch_select')
            .then(function (res) {
                // Here you get the data to modify as you please
                return res.text()

            })
            .then(function (data) {
                console.log(data)
                if (data == '0001') {
                    console.log('camera');
                    //console.log('tv' + i + 'Input');
                    document.getElementById('tv' + i + 'Input').classList.remove('alert');
                    document.getElementById('tv' + i + 'Input').innerText = "videocam";

                } else if (data == '0002') {
                    console.log('ad');
                    //  console.log('tv' + i + 'Input');
                    document.getElementById('tv' + i + 'Input').classList.remove('alert');
                    document.getElementById('tv' + i + 'Input').innerText = "message";
                } else { }

            })

            .catch(function () {
                // show erron on TV button when RX not detected
                document.getElementById('tv' + i + 'Input').innerText = "report_problem";
                document.getElementById('tv' + i + 'Input').classList.add('alert');
                console.log('tv'+i+'not detected')
            });


    }

}


//***** Capture Source shot of the TX and save image as TXcapture.jpg in directory *************************************//
function CaptureTXScreen() {
    
    if (snapShotCounterTX < 4) {
        snapShotCounterTX = snapShotCounterTX + 1;
    } else {
        snapShotCounterTX = 1;
    }
console.log(snapShotCounterTX)
    let URL_TX_snapShot = 'http://172.31.2.' + snapShotCounterTX;

    var img = new Image(); // TX Snapshot picture/image
        console.log(URL_TX_snapShot+'/cgi-bin/query.cgi?cmd=capture:on');

    // img.src = URL_TX_snap_shot +'/images/capture.jpg' + '?d=' + Date.now(); // update each .jpg file with date/time stamp so each has unique name
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL_TX_snapShot + '/cgi-bin/query.cgi?cmd=cd /www/images%3Becho jpg 240 1 > /dev/videoip%3Bsleep 1%3Bcat /dev/videoip > capture.jpg', true);
    xhr.send();
    xhr.onload = function () {
        if (this.status == 200) {
            img.src = URL_TX_snapShot+ '/images/capture.jpg' + '?d=' + Date.now(); // update each .jpg file with date/time stamp so each has unique name
            document.getElementById('tx' +snapShotCounterTX+'Preview').src = img.src;
            xhr.abort();
            
        }

    };
}

//***** Capture Source shot of the RX and save image as RXcapture.jpg in directory *************************************//
    function CaptureRXScreen() {

        if (snapShotCounterRX < 5) {
            snapShotCounterRX = snapShotCounterRX + 1;
        } else {
            snapShotCounterRX = 1;
        }
        console.log(snapShotCounterTX)
        let URL_RX_snapShot = 'http://172.31.3.' + snapShotCounterRX;

        var img = new Image(); // RX Snapshot picture/image
        console.log(URL_RX_snapShot + '/cgi-bin/query.cgi?cmd=capture:on');

        // img.src = URL_RX_snap_shot +'/images/capture.jpg' + '?d=' + Date.now(); // update each .jpg file with date/time stamp so each has unique name
        var xhr = new XMLHttpRequest();
        xhr.open('GET', URL_RX_snapShot + '/cgi-bin/query.cgi?cmd=cd /www/images%3Becho jpg 240 1 > /dev/videoip%3Bsleep 1%3Bcat /dev/videoip > capture.jpg', true);
        xhr.send();
        xhr.onload = function () {
            if (this.status == 200) {
                img.src = URL_RX_snapShot + '/images/capture.jpg' + '?d=' + Date.now(); // update each .jpg file with date/time stamp so each has unique name

                document.getElementById('rx' + snapShotCounterRX + 'Preview').src = img.src;
                xhr.abort();

            }

        };
    }
