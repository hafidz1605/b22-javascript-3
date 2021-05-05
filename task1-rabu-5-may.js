const cekHariKerja = (day)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           const dataDay =['senin','selasa','rabu','kamis','jumat'] 
           let cek = dataDay.find((item)=>{
               return item===day
           })
        if(cek){
            resolve(cek)
        }else{
            reject(new Error('hari ini bukan hari kerja'))
        }   

        },3000)
    })
}
function thenHari(hari){

cekHariKerja(hari).then((cek) => {
    console.log(`hari ${cek} adalah hari kerja`)
  }).catch((Error)=>{
    console.log(Error)
  })
}

function tryHari(hari){
try {
    cekHariKerja(hari)
    console.log(`hari ${hari} adalah hari kerja`)
    }
    catch (Error){
    console.log(Error)
    }
}


tryHari('senin')
thenHari('minggu')