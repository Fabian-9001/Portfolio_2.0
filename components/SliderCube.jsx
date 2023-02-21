import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Image from "next/image";

export default function App({ company, rol, technologies, project, summary, work }) {
    return (
        <Swiper
            className='h-[100vw] min-h-[325px] max-h-[600px] flex flex-col items-center justify-center gap-[40px] px-[30px] py-[40px] w-full max-w-[90%] rounded-[10px] overflow-hidden'
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
        >
            <SwiperSlide className="flex flex-col items-center justify-center py-[40px] px-[30px] bg-[url(/img/prueba.jpeg)] bg-center bg-no-repeat bg-cover">
                <div className="relative border w-[50%]">
                    <Image src={''} fill={true} alt="" />
                </div>
                <div className="w-[50%]">
                    <h4 className='flex flex-col text-[25px] font-[600] pl-[35px] pb-[40px]'>
                        {company}
                        <span>{rol}</span>
                        {technologies}
                    </h4>
                    <p>{summary}</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel accusamus dolorum id culpa iusto possimus recusandae, officia eligendi reprehenderit illo quis maiores voluptatibus aperiam fugiat odio voluptatem expedita vero?
            </SwiperSlide>
            <SwiperSlide>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint eveniet obcaecati cum, quia consequuntur facilis repudiandae dicta sapiente sequi, quaerat consectetur aliquam architecto iste. Aut magni ullam nemo nihil!
            </SwiperSlide>
            <SwiperSlide>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vitae, odit excepturi quam obcaecati accusamus? Praesentium officia eligendi tempore harum repellendus ipsam aliquam dolore, esse enim perspiciatis eum animi quas!
            </SwiperSlide>
        </Swiper>
    );
}