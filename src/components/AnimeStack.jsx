import React from 'react';

function AnimeStack() {
    return (
        <div className="flex items-center justify-center h-screen">
          <div className="cardbox flex justify-center">
            {/* Card 1 */}
            <div className="card relative h-[200px] w-[140px] bg-red-500 border-[8px] border-white rounded-[5px] flex justify-center items-center transition-all duration-200 shadow-md -mr-8 hover:-mr-[2px] active:translate-y-[-3px]">
              <div className="oval absolute w-[90%] h-[70%] bg-white rounded-[80%_20%_80%_20%]"></div>
              <img
                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="uno-card-game-font"
                className="absolute"
              />
            </div>

            {/* Card 2 */}
            <div className="card relative h-[200px] w-[140px] bg-red-500 border-[8px] border-white rounded-[5px] flex justify-center items-center transition-all duration-200 shadow-md -mr-8 hover:-mr-[2px] active:translate-y-[-3px]">
              <div className="oval absolute w-[90%] h-[70%] bg-white rounded-[80%_20%_80%_20%]"></div>
              <img
                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="uno-card-game-font"
                className="absolute"
              />
            </div>

            {/* Card 3 */}
            <div className="card relative h-[200px] w-[140px] bg-red-500 border-[8px] border-white rounded-[5px] flex justify-center items-center transition-all duration-200 shadow-md -mr-8 hover:-mr-[2px] active:translate-y-[-3px]">
              <div className="oval absolute w-[90%] h-[70%] bg-white rounded-[80%_20%_80%_20%]"></div>
              <img
                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="uno-card-game-font"
                className="absolute"
              />
            </div>

            {/* Card 4 */}
            <div className="card relative h-[200px] w-[140px] bg-red-500 border-[8px] border-white rounded-[5px] flex justify-center items-center transition-all duration-200 shadow-md -mr-8 hover:-mr-[2px] active:translate-y-[-3px] last:hover:-mr-8">
              <div className="oval absolute w-[90%] h-[70%] bg-white rounded-[80%_20%_80%_20%]"></div>
              <img
                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="uno-card-game-font"
                className="absolute"
              />
            </div>
          </div>
        </div>
    );
}

export default AnimeStack;
