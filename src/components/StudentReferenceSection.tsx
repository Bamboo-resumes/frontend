
import description_1 from '/description_1.png'
import description_2 from '/description_2.png'
import description_3 from '/description_3.png'
function StudentReferenceSection() {
    return (
        <section className=" py-5  items-center align-middle " style={{backgroundColor: "#24BB7F"}}>
      
        <h1 className="mb-3 text-center text-2xl font-medium text-white">
        Created by students
    </h1>
    <span className="mx-auto max-w-xl text-center text-5xl font-bold text-white md:text-8xl" >designed for candidates</span>
    <div className='flex justify-center mt-2'>
    <img
        src={description_1}
        className="h-auto "
        style={{ maxWidth: '100%', maxHeight: '300px', marginRight: '100px' }}
    />
     <img
        src={description_2}
        className="h-auto "
        style={{ maxWidth: '100%', maxHeight: '300px', marginLeft: '100px', marginRight: '100px' }}
    />
     <img
        src={description_3}
        className="h-auto "
        style={{ maxWidth: '100%', maxHeight: '300px', marginLeft: '100px' }}
    />
    </div>


    
   
   
</section>
    )
}

export default StudentReferenceSection