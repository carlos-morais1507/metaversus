'use client';

const ServerCard = ({ bg, title, count }) => (
  <div className={`absolute glassmorphism p-2 rounded-[24px] 
  ${bg === "/server-card-01.png" ? ('top-1/2 left-10') : ('top-1/6 left-[45%]')}`}>
    <div>
        <img
        src={bg} alt={`${title} server`}
        className={`rounded-[24px] w-[180px] ${bg === "/server-card-01.png" ? 
        ('shadow-[0_15px_50px_-15px_#ff00ff]') : ('shadow-[0_25px_50px_-12px_#00d0ff]')}`}
        />
        <div className="absolute bottom-[15px] left-[15px] text-white" >
            <div className="flex mx-auto">
                <img src="people-04.png" alt="people" className="w-[24px] h-[24px] object-contain mr-[-8px]" />
                <img src="people-05.png" alt="people" className="w-[24px] h-[24px] object-contain mr-[-8px]" />
                <img src="people-06.png" alt="people" className="w-[24px] h-[24px] object-contain "/>
                
                <p className="text-sm ml-2">
                    +{count} has joined
                </p>
            </div>
            <h3 className="font-semibold text-lg">
                {title}
            </h3> 
        </div>
    </div>
  </div>
);

export default ServerCard;

//  shadow-[0_25px_50px_-12px_${light}]