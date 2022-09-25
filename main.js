var myArr = [];
var isMove = true;
var isMovePawn = true;

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(240, 201, 150)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(100, 75, 43)'
        }

    })
}
coloring()




//insert inmage
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            // if (image.innerText == 'Wpawn') {
            //     image.innerHTML = `<div class='boxMove allwpawn' id='m${image.id}'><img class='allimg' src="${image.innerText}.png" alt=""></div>`
            // }
            // else if (image.innerText == 'Bpawn') {
            //     image.innerHTML = `<div class='boxMove allbpawn' id='m${image.id}'><img class='allimg' src="${image.innerText}.png" alt=""></div>`
            // }

            // else {
                image.innerHTML = `<div class='boxMove all${image.innerText}' id='m${image.id}'><img class='allimg' src="${image.innerText}.png" alt=""></div>`        
            //}
        }
    })
}
insertImage()

//--------------------------------------------------------------------------------------------
window.onload = elementActive();

function elementActive() {
    var arrBox = document.getElementsByClassName('boxMove');
    for(const c of arrBox) {
        c.style.position = 'absolute';
        c.style.cursor = 'pointer';
        // c.style.left = '15px';
        // c.style.top = '12px';
        
        initDD(c);
    }
}
function initDD(obj) {
    obj.xOld = 0;
    obj.yOld = 0;
    obj.isDown = false;
    
    
    obj.onmousedown = function (e) {
        this.isDown = true;
        this.xOld = e.clientX;
        this.yOld = e.clientY;
        if (isNaN(parseInt(this.style.left))) {
            this.style.left = this.offsetLeft + 'px';
            this.style.top = this.offsetLeft + 'px';
        }
        if(flag === true) {
            myArr.push(this.outerHTML);
        }
        //-----------------------
        isMove = false;
        
    };
    obj.onmouseup = function (e) {
        this.isDown = false;
        //-----------------------Tốt trắng-----------------
        if(this.classList.contains('allWpawn')) {
            
            if (this.classList.contains('moved')) {
                if( parseInt(this.style.top) < 0 
                    && parseInt(this.style.top) > -75
                    && parseInt(this.style.left) > 0
                    && parseInt(this.style.left) < (75 - 42.5)) {
                isMove = true;
                }
            }
            else if(parseInt(this.style.top) < 0 
            && parseInt(this.style.top) > -75*2
            && parseInt(this.style.left) > 0
            && parseInt(this.style.left) < (75 - 42.5)) {
                isMove = true;
                
            } 
        }
        //---------------------------Tốt đen--------------------
        if(this.classList.contains('allBpawn')) {
            if (this.classList.contains('moved')){
                if( parseInt(this.style.top) > 0 
                && parseInt(this.style.top) < (75*2-42.5)
                && parseInt(this.style.left) > 0
                && parseInt(this.style.left) < (75 - 42.5)) {
                isMove = true;
                }
            }
            else if( parseInt(this.style.top) > 0 
            && parseInt(this.style.top) < (75*3-42.5) 
            && parseInt(this.style.left) > 0
            && parseInt(this.style.left) < (75 - 42.5)) {
                isMove = true;
            }
        }
        //-----------------------Xe---------------------
        if(this.classList.contains('allBrook') || this.classList.contains('allWrook')) {
            if((parseInt(this.style.left) >= 0
            && parseInt(this.style.left) <= 75-50)
            || (parseInt(this.style.top) >= 0
            && parseInt(this.style.top) <= 75-50)) {
                isMove = true;
            }
        }
        //-----------------------Tượng-----------------------
        if(this.classList.contains('allBbishop') || this.classList.contains('allWbishop')) {
            for (var i = 0; i < 8; i++) {
                if(parseInt(this.style.top) >= 75 + 75*i
                && parseInt(this.style.top) <= 100 + 75*i) {
                    if((parseInt(this.style.left) >= 75 + 75*i 
                    && parseInt(this.style.left) <= 100 + 75*i)
                    || (parseInt(this.style.left) >= -75 -75*i 
                    && parseInt(this.style.left) <= -50 -75*i)) {
                        isMove = true;
                    }
                }

                if(parseInt(this.style.top) >= -75 - 75*i
                && parseInt(this.style.top) <= -50 - 75*i) {
                    if((parseInt(this.style.left) >= 75 + 75*i 
                    && parseInt(this.style.left) <= 100 + 75*i)
                    || (parseInt(this.style.left) >= -75 -75*i 
                    && parseInt(this.style.left) <= -50 -75*i)) {
                        isMove = true;
                    }
                }
            }
        }
        //--------------------Vua---------------------
        if(this.classList.contains('allBking') || this.classList.contains('allWking')) {
            if(
                parseInt(this.style.top) <= 100 &&
                parseInt(this.style.top) >= -75 &&
                parseInt(this.style.left) <= 100 &&
                parseInt(this.style.left) >= -75
            ) {
                isMove = true;
            }
        }
        //--------------------Hậu--------------------------------
        if (this.classList.contains('allBqueen') || this.classList.contains('allWqueen')) {
            for (var i = 0; i < 8; i++) {
                if(parseInt(this.style.top) >= 75 + 75*i
                && parseInt(this.style.top) <= 100 + 75*i) {
                    if((parseInt(this.style.left) >= 75 + 75*i 
                    && parseInt(this.style.left) <= 100 + 75*i)
                    || (parseInt(this.style.left) >= -75 -75*i 
                    && parseInt(this.style.left) <= -50 -75*i)) {
                        isMove = true;
                    }
                }

                if(parseInt(this.style.top) >= -75 - 75*i
                && parseInt(this.style.top) <= -50 - 75*i) {
                    if((parseInt(this.style.left) >= 75 + 75*i 
                    && parseInt(this.style.left) <= 100 + 75*i)
                    || (parseInt(this.style.left) >= -75 -75*i 
                    && parseInt(this.style.left) <= -50 -75*i)) {
                        isMove = true;
                    }
                }
            }
            if((parseInt(this.style.left) >= 0
            && parseInt(this.style.left) <= 75-50)
            || (parseInt(this.style.top) >= 0
            && parseInt(this.style.top) <= 75-50)) {
                isMove = true;
            }
        }
        //---------------------Mã------------------------
        if (this.classList.contains('allBknight') || this.classList.contains('allWknight')) {
            if(
                ((parseInt(this.style.top) <= 175 && parseInt(this.style.top) >=150) ||
                (parseInt(this.style.top) >= -150 && parseInt(this.style.top) <= -125)) &&
                ((parseInt(this.style.left) >= 75 && parseInt(this.style.left) <=100) ||
                (parseInt(this.style.left) >= -75 && parseInt(this.style.left) <= -50))
            ) {
                isMove = true;
            }
            if(
                ((parseInt(this.style.left) <= 175 && parseInt(this.style.left) >=150) ||
                (parseInt(this.style.left) >= -150 && parseInt(this.style.left) <= -125)) &&
                ((parseInt(this.style.top) >= 75 && parseInt(this.style.top) <=100) ||
                (parseInt(this.style.top) >= -75 && parseInt(this.style.top) <= -50))
            ) {
                isMove = true;
            }
        }
        //------------------------------------------
        Object.assign(this.style, {
            zIndex: 100,
            backgroundColor: 'Red',
            top: '12px',
            left: '13px',
        })
        
    };
    obj.onmousemove = function (e) {
        if (this.isDown) {
            Object.assign(this.style, {
                zIndex: 1000,
                backgroundColor: 'Green',
            })
            

            let xCur = e.clientX;
            let yCur = e.clientY;
            let dx = xCur - this.xOld;
            let dy = yCur - this.yOld;
            this.xOld = xCur;
            this.yOld = yCur;
            this.style.left = (parseInt(this.style.left) + dx) + 'px';
            this.style.top = (parseInt(this.style.top) + dy) + 'px';
        }
    };
}

var boxArr = document.querySelectorAll('.box')
for(const b of boxArr) {
    myfun(b);
}

var flag = true;
var mybox;
var flagDeleteMyArr = true;
var myboxArr = [];

function myfun(b) {
    b.onmousemove = function(e) {
        Object.assign(this.style, {
            backgroundColor: 'Red',
        })
        mybox = this.id;
        if (mybox !== myboxArr[myboxArr.length-1]) {
            myboxArr.push(mybox);
        }
        
        // console.log(myArr);
        if (this.innerHTML === '') {
           
            var mayArrPop = myArr.pop();
            
            if(mayArrPop !== undefined && isMove === true) {
                this.innerHTML = mayArrPop;
                if(this.querySelector('.allWpawn') !== null) {
                    this.querySelector('.allWpawn').classList.add('moved');
                }
                else if (this.querySelector('.allBpawn') !== null) {
                    this.querySelector('.allBpawn').classList.add('moved');
                }
                
                document.getElementById(myboxArr[myboxArr.length-2]).innerHTML = '';
                myboxArr = [];
                elementActive();
            }
        }
        else if (this.innerHTML !== '' && flagDeleteMyArr === true) {

           var mayArrPop = myArr.pop();
        }
        // if (myboxArr.length>=2 && flagDeleteMyArr === true) {
        //     if (document.getElementById(myboxArr[myboxArr.length-2]).innerHTML !== '' &&
        //         document.getElementById(myboxArr[myboxArr.length-1]).innerHTML !== '') {
        //         myArr = [];
        //     }
        //     }
        
    } 
    b.onmouseup = function (e) {
        flagDeleteMyArr = true;
        
    }
    b.onmousedown = function () {
        flagDeleteMyArr = false;
        
    }
    b.onmouseout = function(e) {
        
        
        var idString = this.id;
        var vt = parseInt(idString[1]) + parseInt(idString[3]);
        if (vt % 2 == 0) {
            Object.assign(this.style, {
                backgroundColor : 'rgb(240, 201, 150)'
        })
        } else {
            Object.assign(this.style, {
                backgroundColor : 'rgb(100, 75, 43)'
        })
        }
    } 
};

// Di chuyển Tốt
// áp điều kiện di chuyển, nếu mọi điều kiện true thì isMove = true
// var arrPawn = document.getElementsByClassName('allpawn');
//     for(const c of arrPawn) {
//         PawMove(c);
//     }
// function PawMove() {
    
//}