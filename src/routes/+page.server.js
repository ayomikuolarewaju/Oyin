import {isArtPromptAPI}  from '$lib/server.js'



export const actions ={
    button: async({request})=>{
     const data =await request.formData()
     const text = data.get('button')
     const res = isArtPromptAPI(text)
     const datas = JSON.parse(JSON.stringify(res))
     console.log(datas)
     return{
        datas
     }
    }
}