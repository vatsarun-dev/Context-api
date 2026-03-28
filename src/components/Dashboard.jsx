import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen text-black  flex flex-col items-center gap-3 w-full p-4">
      <div>
        <img
          className="h-[400px] w-[900px] object-cover mx-auto block border rounded-3xl "
          alt=""
          src="https://i.pinimg.com/1200x/a7/c4/c2/a7c4c26906ea7602cf14587f5f1e0bed.jpg"
        />
      </div>

      <div className="h-[450px] w-[350px] bg-white p-4  ">
        <div className="flex gap-4 justify-center">
          <div>
            <img
              className="w-[40px]"
              src="https://img.icons8.com/?size=512&id=15427&format=png"
              alt=""
            />
          </div>
          <h1 className="font-bold text-xl text-black">Schedule Planning</h1>
        </div>
        <form action="" className="bg-gray-200">
          <div className="flex flex-col">
            <label htmlFor="">Topic</label>
            <input
              className="border rounded bg-[#fff4ef] h-[40px]"
              type="text"
            />
          </div>
          <div className="flex ">
            <div className="flex flex-col">
              <label htmlFor="">Subject</label>
              <input
                className="border rounded bg-[#fff4ef] w-[96%] "
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Duration</label>
              <input
                className="border rounded bg-[#fff4ef] w-[96%]"
                type="text"
              />
            </div>
          </div>

          <div className="flex ">
            <div className="flex flex-col">
              <label htmlFor="">Priority</label>
              <input
                className="border rounded bg-[#fff4ef] w-[96%]"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Date</label>
              <input
                className="border rounded bg-[#fff4ef] w-[96%]"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
