const express= require('express')
// const data=require('./coursedata.js','utf-8',(err,data)=>{
const fs=require('fs')

const app=express()
const PORT=2500

const responseData=[
    {
      id: '001',
      title: 'Web designing',
      description:
        'This course will give you hands-on experience with developing web layouts,basic designing concepts, bootstrap etc. deploy your site to your gitHub pages',
    },
    {
      id: '002',
      title: 'Web application Dev',
      description:
        'Build your portfoio application with ReactJS and material UI and deploy it to netlify for free.',
    },
    {
      id: '003',
      title: 'Data Structures and algorithms',
      description:
        'Improve your coding skills with solving easy to hard algorithms. languages : C, C++, Java, Python',
    },
    {
      id: '004',
      title: 'Become a UNIX admin',
      description:
        'Get in to CLI interface by learning shell scripting, setting-up aoutomation scripts and much more on your free linux vertual machine.',
    },
  ]
  
  
app.get('/',(req,res)=>{
    fs.readFile('./coursedata.js','utf-8',(err,data)=>{
        if(err){

            res.json({data:'helo'})
        }else{
            const jsonContent = JSON.stringify(responseData);
            res.end(jsonContent)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`app up and running at http://localhost:${PORT}`)
})