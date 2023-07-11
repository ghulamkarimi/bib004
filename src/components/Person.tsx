import { useContext } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../AppContext"


const Person = () => {
    const { getPerson } = useContext(AppContext)
    const params = useParams()
    const idPersonal = params.IdPersonal ? parseInt(params.IdPersonal) : 0
    const person = getPerson(idPersonal)
    return (
        <div className=" flex flex-col mt-6 m-0 p-0 gap-6 justify-center items-center text-center h-screen ">
            <h1>Personal Information </h1>
            <div className="flex flex-col w-[400px]  border-b border-t rounded-2xl bg-slate-600 text-center" key={person?.id}>

                <img className="  rounded-t-2xl h-[300px] w-[400px] object-cover " src={`../image/${person?.imageUrl}.avif`} alt="" />
                <span className="flex flex-col w-[400px] items-center justify-center mt-4 gap-8">
                    <h2 className="border-b w-full ">{person?.name}</h2>
                    <p className="border-b w-full ">{person?.age}</p>
                    <p className="border-b w-full ">{person?.hobby}</p>
                    <p className="border-b w-full ">{person?.desc}</p>
                    <p className="border-b w-full ">{person?.email}</p>
                    <p className="border-b w-full ">{person?.telefon}</p>
                    <p>{person?.adresse}</p>


                </span>
            </div>
        </div>
    )
}

export default Person
