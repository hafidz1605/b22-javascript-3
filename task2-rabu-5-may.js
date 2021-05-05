const getmonth =(callback) =>{
    setTimeout(()=>{
        let error= false
        let month=['January','February','March','April','May','Juni','July','August','september','October','November','Desember']
    if(!error){
        callback(null,month)
    }else{
        callback(new Error('Sorry Data Not Found',[]))
    }

    },4000)
}

function cetak(a,month){
    bulan=month.map(x => x)
    console.log(bulan)
}

getmonth(cetak)