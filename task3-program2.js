const timerDetik = (waktu)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            resolve(waktu);
        },waktu*1000)
    })
}

function timer(detik){

    timerDetik(detik).then((data) => {
        console.log(`${detik} detik sudah berlalu`)
      })
    }

    timer(10)

    