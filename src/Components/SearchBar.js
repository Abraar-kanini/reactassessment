import React,{useState} from 'react'
import Table from './Table'


function SearchBar() {
    const [Data, setData] = useState({
       
        Search:"",
        Status:""
    })

    const HandleInput=(event)=>{
      const {name,value}= event.target;
      setData({
        ...Data,
        [name]:value
      })
    }
    console.log(Data);
    return (
        <>
        
            <div className="w-[95vw]  md:h-[17vh]  border border-gray rounded-xl shadow-lg shadow-gray-500/40 mt-5 m-auto flex-col md:flex flex-wrap gap-3 p-3">
                <div className=" w-[100%] md:w-[30%] h-[100%]  flex flex-col justify-center ">

                    <h2 className="font-bold">What Are You Looking For</h2>
                    <div className=" relative w-[100%]">
                        <span className="material-symbols-outlined mt-2 absolute">
                            search
                        </span>
                        <input onChange={HandleInput} className=" w-[100%] p-2 pl-6   rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Search" id="" placeholder='Search For The ID'/>
                    </div>
                </div>

                <div className="w-[100%] md:w-[25%] h-[100%] self-center flex flex-col justify-center">

                    <h2 className="font-bold">Category</h2>
                    <select className="border p-2 border-gray-200 rounded-lg shadow-lg shadow-gray-500/40  w-[100%]" id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>



                </div>
                <div className="w-[100%] md:w-[25%] h-[100%]  self-center flex flex-col justify-center">

                    <h2 className="font-bold">Status</h2>
                    <select onChange={HandleInput} className=" p-2 rounded-lg shadow-lg shadow-gray-500/40 w-[100%]" id="cars" name="Status">
                    <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="notdone">Not Done</option>
                        <option value="on going">On Going</option>
                        <option value="yet to start">Yet To Start</option>
                    </select>



                </div>

                <div className=" w-[100%] md:w-[15%] h-[100%]  self-center flex items-center justify-between ">
                    <button className="border border-gray-300 rounded-lg shadow-lg shadow-gray-500/40 h-[5vh] w-[30%] flex items-center justify-center mt-7">
                        <span className="material-symbols-outlined">
                            keyboard_double_arrow_down
                        </span>
                    </button>
                    <button className="border mt-7  rounded-lg shadow-lg shadow-gray-500/40 border-gray-300 h-[5vh] w-[60%] flex items-center justify-center bg-blue-500">
                        Submit
                    </button>
                </div>



            </div>







            <Table value={Data} />

        </>
    )
}

export default SearchBar
