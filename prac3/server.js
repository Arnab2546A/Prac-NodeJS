const app=require('./src/app')

connectDB();
app.listen(3000,()=>{
    console.log('server has started on port 3000')
})