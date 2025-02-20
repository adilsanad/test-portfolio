import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import COVER_IMAGE from '../assets/images/cyclocover.png'
import pfp from '../assets/images/user1.png';
import rtarrow from '../assets/rtarrow.svg'
import PersonaScroll from "./PersonaScroll";

const Template = () => {
    return (
        <section className='grid grid-cols-8 md:grid-cols-16 gap-y-24 w-full bg-linear-to-b from-[#151515] to-[#101010] text-[#C1C1C1] font-neulisneue font-light text-xl'>
            <Navbar style="pinned" />
            {/*<div className="col-span-12 col-start-3 p-20 pb-12 bg-black/30 rounded-[15px] items-center justify-center flex">
                <img src={COVER_IMAGE}></img>
            </div>*/}
            <div className="col-span-10 col-start-4 flex flex-col w-full gap-24">
                <div className="flex w-full justify-between border-b-2 border-white pb-5 text-white/40">
                    <p>Work // CYCLO</p>
                    <p>2024 · Case Studies</p>
                </div>
                <div className="flex flex-col gap-12">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-[64px] font-black">CYCLO</h1>
                        <div className="flex gap-2">
                            <div className="px-4 py-3 rounded-[5px] border border-[#4F78FF]/30 bg-[#4F78FF]/10 text-[#4F78FF]">UX + UI</div>
                            <div className="px-4 py-3 rounded-[5px] border border-[#A55BFF]/30 bg-[#A55BFF]/10 text-[#A55BFF]">Case Study</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 text-[#C1C1C1]">
                        <p>A freelance project I worked on independently, CYCLO required an online storefront for marketing and selling their products. The project timeline was two weeks.</p>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold">Role</h3>
                                <p>Product Engineer</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold">Tools</h3>
                                <p>Figma, Adobe CC</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="font-bold">Areas of Study</h3>
                                <p>Design, Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-full flex gap-6 justify-center">
                <img src={COVER_IMAGE} />
            
            </div>
            <div className="col-span-10 col-start-4 flex flex-col gap-14">
                <p>Cyclo aims to establish an impactful online presence through a straightforward and easy to use webstore experience. The current design fails to captivate users effectively, resulting in low conversion rates and limited engagement.
                    <br /><br />The redesign aims to create a modern user-centric interface that enhances the overall shopping journey, fostering brand loyalty and driving sales.
                </p>
                <div className="flex flex-col gap-5 p-9 border border-[#6268FF] rounded-[10px] bg-[#6268FF]/5">
                    <h1 className="font-neuliscursive text-[2em] text-[#6268FF]">Problem</h1>
                    <p>How can we best market cycling products and provide customers an intuitive shopping experience?</p>
                </div>
            </div>
            <div className="col-span-full flex flex-col gap-9 bg-[#181821] px-28 py-12">
                <h1 className="px-7 text-[2em] font-bold text-white/30">user research</h1>
                <div className="flex flex-col gap-10 bg-black/30 rounded-[15px] p-14">
                    <div className="flex flex-col pb-9 border-b border-white/10">
                        <h2 className="font-thin text-white/50 text-[2em]">01</h2>
                        <div className="flex w-full gap-12">
                            <h1 className="w-2/5 text-[2em] text-white">Research</h1>
                            <p className="w-full">Survey Findings highlighted a strong demand for bike customization options, comprehensive support and service solutions, and flexible payment options.</p>
                        </div>
                    </div>
                    <div className="flex flex-col pb-9 border-b border-white/10">
                        <h2 className="font-thin text-white/50 text-[2em]">02</h2>
                        <div className="flex w-full gap-12">
                            <h1 className="w-2/5 text-[2em] text-white pr-12 leading-tight">Competitive Analysis</h1>
                            <p className="w-full">Survey Findings highlighted a strong demand for bike customization options, comprehensive support and service solutions, and flexible payment options.</p>
                        </div>
                    </div><div className="flex flex-col pb-9 border-b border-white/10">
                        <h2 className="font-thin text-white/50 text-[2em]">03</h2>
                        <div className="flex w-full gap-16">
                            <h1 className="w-2/5 text-[2em] text-white">User Personas</h1>
                            <p className="w-full">Survey Findings highlighted a strong demand for bike customization options, comprehensive support and service solutions, and flexible payment options.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-10 col-start-4 flex flex-col gap-10 pt-20 border-t border-white/10">
                <h1 className="font-bold text-[2em]">User Profiles</h1>
                <p>Survey Findings highlighted a strong demand for bike customization options, comprehensive support and service solutions, and flexible payment options.</p>
            </div>
            <PersonaScroll/>
            {/*<div className="col-span-full grid grid-cols-16 gap-y-24">
                <div className="col-span-3 flex gap-5 py-8 justify-center items-start w-full">
                    <button className="p-4 bg-white/10 rounded-full"><img className='rotate-180' src={rtarrow} /></button>
                    <button className="p-4 bg-white/10 rounded-full"><img src={rtarrow} /></button>
                </div>
                <div className="col-span-13 col-start-4 flex w-full gap-9 overflow-x-auto custom-scrollbar">
                    <div className="flex flex-col min-w-3xl w-full gap-5">
                        <div className="flex items-center justify-between p-6 gap-12 w-full bg-black/30 rounded-[15px] border border-white/20">
                            <div className="flex w-full items-center gap-6">
                                <img className="" src={pfp}></img>
                                <div className="flex flex-col w-fit gap-2">
                                    <h1 className="text-3xl font-bold flex text-white">Mako Swann</h1>
                                    <div className="flex flex-col gap-0 text-lg text-[#9D9D9D]">
                                        <p className="flex w-fit  text-nowrap">Aged 27 · Software Engineer</p>
                                        <p> Dubai, UAE</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#9D9D9D]">Competitive, fitness-obsessed, early adopter of technology.</p>
                        </div>
                        <div className="flex flex-col w-full rounded-[15px] border border-white/20">
                            <div className="flex flex-col gap-4 p-10 w-full bg-black/30">
                                <h3 className="text-[#4260C6] text-2xl font-bold">Insights</h3>
                                <ul className="list-disc pl-8 text-[#9D9D9D]">
                                    <li>Trains for triathlons year-round</li>
                                    <li>Rides road, mountain and indoor cycling</li>
                                    <li>Prioritizes technology and lightweight components</li>
                                    <li>Tracks performance data and uses cycling apps</li>
                                </ul>
                            </div>
                            <div className="flex gap-4 p-12 w-full bg-[#4F78FF]/20">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-[#4260C6] text-2xl font-bold">Pain Points</h3>
                                    <ul className="flex flex-col gap-4 list-disc pl-8 text-[#CBCBCB]/80">
                                        <li>Wants the latest and greatest technology to optimize performance</li>
                                        <li>Dislikes traditional bike shops with limited selection and outdated technology</li>
                                        <li>Seeks a curated selection of high-performance cycling components</li>
                                        <li>Needs a store that caters to multi-discipline athletes</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-[#4260C6] text-2xl font-bold">Goals</h3>
                                    <ul className="flex flex-col gap-4 list-disc pl-8 text-[#CBCBCB]/80">
                                        <li>Wants the latest and greatest technology to optimize performance</li>
                                        <li>Dislikes traditional bike shops with limited selection and outdated technology</li>
                                        <li>Seeks a curated selection of high-performance cycling components</li>
                                        <li>Needs a store that caters to multi-discipline athletes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col min-w-3xl w-full gap-5">
                        <div className="flex items-center justify-between p-6 gap-12 w-full bg-black/30 rounded-[15px] border border-white/20">
                            <div className="flex w-full items-center gap-6">
                                <img className="" src={pfp}></img>
                                <div className="flex flex-col w-fit gap-2">
                                    <h1 className="text-3xl font-bold flex text-white">Mako Swann</h1>
                                    <div className="flex flex-col gap-0 text-lg text-[#9D9D9D]">
                                        <p className="flex w-fit  text-nowrap">Aged 27 · Software Engineer</p>
                                        <p> Dubai, UAE</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#9D9D9D]">Competitive, fitness-obsessed, early adopter of technology.</p>
                        </div>
                        <div className="flex flex-col w-full rounded-[15px] border border-white/20">
                            <div className="flex flex-col gap-4 p-10 w-full bg-black/30">
                                <h3 className="text-[#4260C6] text-2xl font-bold">Insights</h3>
                                <ul className="list-disc pl-8 text-[#9D9D9D]">
                                    <li>Trains for triathlons year-round</li>
                                    <li>Rides road, mountain and indoor cycling</li>
                                    <li>Prioritizes technology and lightweight components</li>
                                    <li>Tracks performance data and uses cycling apps</li>
                                </ul>
                            </div>
                            <div className="flex gap-4 p-12 w-full bg-[#4F78FF]/20">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-[#4260C6] text-2xl font-bold">Pain Points</h3>
                                    <ul className="flex flex-col gap-4 list-disc pl-8 text-[#CBCBCB]/80">
                                        <li>Wants the latest and greatest technology to optimize performance</li>
                                        <li>Dislikes traditional bike shops with limited selection and outdated technology</li>
                                        <li>Seeks a curated selection of high-performance cycling components</li>
                                        <li>Needs a store that caters to multi-discipline athletes</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-[#4260C6] text-2xl font-bold">Goals</h3>
                                    <ul className="flex flex-col gap-4 list-disc pl-8 text-[#CBCBCB]/80">
                                        <li>Wants the latest and greatest technology to optimize performance</li>
                                        <li>Dislikes traditional bike shops with limited selection and outdated technology</li>
                                        <li>Seeks a curated selection of high-performance cycling components</li>
                                        <li>Needs a store that caters to multi-discipline athletes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
            <div className="col-span-10 col-start-4 flex flex-col gap-10 pt-20 border-t border-white/10">
                <h1 className="font-bold text-[2em]">Wireframing</h1>
                <p>Survey Findings highlighted a strong demand for bike customization options, comprehensive support and service solutions, and flexible payment options.</p>
            </div>
            <div className="col-span-12 col-start-3 p-24 bg-black/30 rounded-[15px]">
                <img src={COVER_IMAGE}></img>
            </div>
            <div className="col-span-10 col-start-4 flex flex-col gap-10 pt-20 border-t border-white/10">
                <h1 className="font-bold text-[2em]">Styling</h1>
                <p>Survey Findings highlighted a strong demand for bike customization options, comprehensive support and service solutions, and flexible payment options.</p>
            </div>
            <div className="col-span-full flex flex-col gap-20 items-center">
                <svg className="w-full h-auto" viewBox="0 0 1440 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H329.05C360.258 0 383.84 28.2747 378.238 58.976L354.917 186.771C349.714 215.283 324.874 236 295.892 236H0V0Z" fill="#FFFBF2" />
                    <path d="M108.356 112.384C103.364 112.384 99.62 108.704 99.62 103.84C99.62 98.976 103.364 95.296 108.356 95.296C113.316 95.296 117.092 98.976 117.092 103.84C117.092 108.704 113.316 112.384 108.356 112.384ZM108.356 108.928C111.236 108.928 113.38 106.72 113.38 103.84C113.38 100.96 111.236 98.752 108.356 98.752C105.476 98.752 103.3 100.96 103.3 103.84C103.3 106.72 105.476 108.928 108.356 108.928ZM121.373 112V99.136H118.621V95.872H121.373V93.504C121.373 90.528 123.517 88.576 126.749 88.576C130.045 88.576 132.157 90.592 132.157 93.728H128.957C128.957 92.608 128.157 91.872 126.973 91.872C125.757 91.872 124.957 92.64 124.957 93.856V95.872H129.725V99.136H124.957V112H121.373ZM134.654 112V99.136H131.902V95.872H134.654V93.504C134.654 90.528 136.798 88.576 140.03 88.576C143.326 88.576 145.438 90.592 145.438 93.728H142.238C142.238 92.608 141.438 91.872 140.254 91.872C139.038 91.872 138.238 92.64 138.238 93.856V95.872H143.006V99.136H138.238V112H134.654ZM145.483 104.96V101.504H154.699V104.96H145.483ZM161.804 112L155.916 95.68H159.98L163.724 107.52L167.628 95.68H171.308L175.212 107.488L178.988 95.68H182.956L177.068 112H173.356L169.42 99.936L165.516 112H161.804ZM185.52 112V88.96H189.104V97.856C190.416 96.192 192.304 95.296 194.608 95.296C198.48 95.296 201.072 97.856 201.072 101.728V107.04C201.072 107.968 201.616 108.544 202.544 108.544H202.864V112H201.84C198.992 112 197.488 110.56 197.488 107.84V102.912C197.488 100.416 195.888 98.752 193.424 98.752C190.832 98.752 189.104 100.448 189.104 102.976V112H185.52ZM207.187 93.056C205.907 93.056 204.915 92.064 204.915 90.784C204.915 89.472 205.907 88.512 207.187 88.512C208.499 88.512 209.491 89.472 209.491 90.784C209.491 92.064 208.499 93.056 207.187 93.056ZM205.395 112V95.68H208.979V112H205.395ZM220.116 112C217.012 112 214.932 110.112 214.932 107.264V98.944H212.18V95.68H213.844C214.676 95.68 215.124 95.232 215.124 94.4V91.264H218.516V95.68H223.86V98.944H218.516V106.912C218.516 108 219.252 108.704 220.372 108.704C221.492 108.704 222.228 107.936 222.228 106.656H225.428C225.428 109.92 223.38 112 220.116 112ZM235.42 112.384C230.364 112.384 226.62 108.704 226.62 103.84C226.62 98.976 230.364 95.296 235.324 95.296C240.316 95.296 244.06 98.976 244.06 103.872C244.06 104.32 244.028 104.8 243.964 105.216H230.46C231.004 107.584 232.924 109.152 235.484 109.152C237.372 109.152 239.004 108.32 239.836 107.072H243.804C242.492 110.24 239.292 112.384 235.42 112.384ZM235.324 98.528C232.956 98.528 231.068 100 230.492 102.272H240.22C239.676 100.032 237.756 98.528 235.324 98.528Z" fill="#343539" />
                    <path d="M131.652 146L133.068 141.2H130.092V139.976H133.428L134.748 135.464H131.364V134.24H135.108L136.5 129.44H137.82L136.428 134.24H141.852L143.268 129.44H144.588L143.172 134.24H146.148V135.464H142.836L141.492 139.976H144.9V141.2H141.156L139.74 146H138.42L139.836 141.2H134.388L132.996 146H131.652ZM134.748 139.976H140.196L141.516 135.464H136.068L134.748 139.976ZM149.433 146V129.44H159.489V130.832H150.897V137.12H158.457V138.512H150.897V146H149.433ZM162.605 146V129.44H172.661V130.832H164.069V137.12H171.629V138.512H164.069V146H162.605ZM175.777 146V129.44H185.833V130.832H177.241V137.12H184.801V138.512H177.241V146H175.777ZM188.949 146V129.44H196.077C198.453 129.44 200.229 131.192 200.229 133.544C200.229 135.224 199.245 136.64 197.973 137.216C199.965 137.624 201.333 139.376 201.333 141.536C201.333 144.104 199.413 146 196.821 146H188.949ZM195.765 130.784H190.389V136.76H195.765C197.373 136.76 198.717 135.464 198.717 133.76C198.717 132.056 197.445 130.784 195.765 130.784ZM196.533 138.032H190.389V144.656H196.533C198.405 144.656 199.797 143.216 199.797 141.32C199.797 139.448 198.405 138.032 196.533 138.032ZM203.394 146V144.416C203.394 139.184 212.346 139.088 212.346 134.192C212.346 132.056 210.786 130.64 208.722 130.64C206.634 130.64 205.098 132.056 205.098 134.024H203.586C203.586 131.24 205.794 129.152 208.746 129.152C211.65 129.152 213.882 131.192 213.882 134.144C213.882 140.072 204.81 140.216 204.81 144.56V144.608H214.146V146H203.394Z" fill="#343539" />
                    <path d="M383.083 49.2288L361.915 165.229C355.192 202.07 383.49 236 420.94 236H677.01C715.457 236 743.983 200.347 735.549 162.837L709.465 46.8372C703.308 19.4554 678.992 0 650.927 0H442.108C413.126 0 388.286 20.717 383.083 49.2288Z" fill="#F1F1F1" />
                    <path d="M458.404 112V99.136H455.652V95.872H458.404V93.504C458.404 90.528 460.548 88.576 463.78 88.576C467.076 88.576 469.188 90.592 469.188 93.728H465.988C465.988 92.608 465.188 91.872 464.004 91.872C462.788 91.872 461.988 92.64 461.988 93.856V95.872H466.756V99.136H461.988V112H458.404ZM476.324 112C473.092 112 471.364 110.4 471.364 107.456V88.96H474.948V106.656C474.948 107.84 475.652 108.544 476.868 108.544H477.828V112H476.324ZM487.887 112.384C482.895 112.384 479.151 108.704 479.151 103.84C479.151 98.976 482.895 95.296 487.887 95.296C492.847 95.296 496.623 98.976 496.623 103.84C496.623 108.704 492.847 112.384 487.887 112.384ZM487.887 108.928C490.767 108.928 492.911 106.72 492.911 103.84C492.911 100.96 490.767 98.752 487.887 98.752C485.007 98.752 482.831 100.96 482.831 103.84C482.831 106.72 485.007 108.928 487.887 108.928ZM499.862 112V95.68H503.446V98.4C504.726 96.544 506.614 95.424 508.918 95.424H509.494V99.104H508.918C505.462 99.104 503.446 101.056 503.446 104.064V112H499.862ZM518.529 112.384C513.921 112.384 510.497 108.704 510.497 103.84C510.497 98.976 513.921 95.296 518.529 95.296C520.929 95.296 522.913 96.32 524.257 98.016V95.68H527.841V107.04C527.841 107.968 528.385 108.544 529.345 108.544H529.633V112H528.609C526.369 112 524.961 111.104 524.481 109.408C523.105 111.264 521.025 112.384 518.529 112.384ZM519.233 108.928C522.113 108.928 524.257 106.72 524.257 103.84C524.257 100.96 522.113 98.752 519.233 98.752C516.321 98.752 514.177 100.96 514.177 103.84C514.177 106.72 516.321 108.928 519.233 108.928ZM537.604 112C534.34 112 532.612 110.4 532.612 107.456V88.96H536.196V106.656C536.196 107.84 536.932 108.544 538.116 108.544H539.108V112H537.604ZM553.242 112L547.354 95.68H551.418L555.161 107.52L559.066 95.68H562.746L566.65 107.488L570.426 95.68H574.394L568.506 112H564.794L560.858 99.936L556.954 112H553.242ZM576.957 112V88.96H580.541V97.856C581.853 96.192 583.741 95.296 586.045 95.296C589.917 95.296 592.509 97.856 592.509 101.728V107.04C592.509 107.968 593.053 108.544 593.981 108.544H594.301V112H593.277C590.429 112 588.925 110.56 588.925 107.84V102.912C588.925 100.416 587.325 98.752 584.861 98.752C582.269 98.752 580.541 100.448 580.541 102.976V112H576.957ZM598.624 93.056C597.344 93.056 596.352 92.064 596.352 90.784C596.352 89.472 597.344 88.512 598.624 88.512C599.936 88.512 600.928 89.472 600.928 90.784C600.928 92.064 599.936 93.056 598.624 93.056ZM596.832 112V95.68H600.416V112H596.832ZM611.553 112C608.449 112 606.369 110.112 606.369 107.264V98.944H603.617V95.68H605.281C606.113 95.68 606.561 95.232 606.561 94.4V91.264H609.953V95.68H615.297V98.944H609.953V106.912C609.953 108 610.689 108.704 611.809 108.704C612.929 108.704 613.665 107.936 613.665 106.656H616.865C616.865 109.92 614.817 112 611.553 112ZM626.858 112.384C621.802 112.384 618.058 108.704 618.058 103.84C618.058 98.976 621.802 95.296 626.762 95.296C631.754 95.296 635.498 98.976 635.498 103.872C635.498 104.32 635.466 104.8 635.402 105.216H621.898C622.442 107.584 624.362 109.152 626.922 109.152C628.81 109.152 630.442 108.32 631.274 107.072H635.242C633.93 110.24 630.73 112.384 626.858 112.384ZM626.762 98.528C624.394 98.528 622.506 100 621.93 102.272H631.658C631.114 100.032 629.194 98.528 626.762 98.528Z" fill="#343539" />
                    <path d="M506.965 146L508.381 141.2H505.405V139.976H508.741L510.061 135.464H506.677V134.24H510.421L511.813 129.44H513.133L511.741 134.24H517.165L518.581 129.44H519.901L518.485 134.24H521.461V135.464H518.149L516.805 139.976H520.213V141.2H516.469L515.053 146H513.733L515.149 141.2H509.701L508.309 146H506.965ZM510.061 139.976H515.509L516.829 135.464H511.381L510.061 139.976ZM524.745 146V129.44H534.801V130.832H526.209V137.12H533.769V138.512H526.209V146H524.745ZM540.653 146V131.48C539.669 132.512 538.109 133.208 536.717 133.208V131.816C538.301 131.816 540.029 130.88 541.085 129.44H542.117V146H540.653ZM546.542 146V129.44H556.598V130.832H548.006V137.12H555.566V138.512H548.006V146H546.542ZM562.45 146V131.48C561.466 132.512 559.906 133.208 558.514 133.208V131.816C560.098 131.816 561.826 130.88 562.882 129.44H563.914V146H562.45ZM568.339 146V129.44H578.395V130.832H569.803V137.12H577.363V138.512H569.803V146H568.339ZM584.246 146V131.48C583.262 132.512 581.702 133.208 580.31 133.208V131.816C581.894 131.816 583.622 130.88 584.678 129.44H585.71V146H584.246Z" fill="#343539" />
                    <path d="M719.483 72.5706L744.338 188.571C750.265 216.235 774.713 236 803.006 236H997.892C1026.87 236 1051.71 215.283 1056.92 186.771L1078.09 70.7712C1084.81 33.9296 1056.51 0 1019.06 0H778.151C739.953 0 711.48 35.2202 719.483 72.5706Z" fill="#F0B33E" />
                    <path d="M822.672 112L828.752 103.808L822.768 95.68H827.152L831.216 101.376L835.248 95.68H839.568L833.584 103.808L839.664 112H835.28L831.12 106.208L826.992 112H822.672ZM848.372 112.384C843.764 112.384 840.34 108.704 840.34 103.84C840.34 98.976 843.764 95.296 848.372 95.296C850.772 95.296 852.756 96.32 854.1 98.016V95.68H857.684V107.04C857.684 107.968 858.228 108.544 859.188 108.544H859.476V112H858.452C856.212 112 854.804 111.104 854.324 109.408C852.948 111.264 850.868 112.384 848.372 112.384ZM849.076 108.928C851.956 108.928 854.1 106.72 854.1 103.84C854.1 100.96 851.956 98.752 849.076 98.752C846.164 98.752 844.02 100.96 844.02 103.84C844.02 106.72 846.164 108.928 849.076 108.928ZM862.143 112V95.68H865.727V97.76C867.039 96.16 868.927 95.296 871.231 95.296C875.103 95.296 877.695 97.856 877.695 101.728V107.04C877.695 107.968 878.239 108.544 879.167 108.544H879.487V112H878.463C875.615 112 874.111 110.56 874.111 107.84V102.912C874.111 100.416 872.511 98.752 870.047 98.752C867.455 98.752 865.727 100.448 865.727 102.976V112H862.143ZM888.178 112C885.074 112 882.994 110.112 882.994 107.264V98.944H880.242V95.68H881.906C882.738 95.68 883.186 95.232 883.186 94.4V91.264H886.578V95.68H891.922V98.944H886.578V106.912C886.578 108 887.314 108.704 888.434 108.704C889.554 108.704 890.29 107.936 890.29 106.656H893.49C893.49 109.92 891.442 112 888.178 112ZM895.77 112V88.96H899.354V97.856C900.666 96.192 902.554 95.296 904.858 95.296C908.73 95.296 911.322 97.856 911.322 101.728V107.04C911.322 107.968 911.866 108.544 912.794 108.544H913.114V112H912.09C909.242 112 907.738 110.56 907.738 107.84V102.912C907.738 100.416 906.138 98.752 903.674 98.752C901.082 98.752 899.354 100.448 899.354 102.976V112H895.77ZM923.387 112.384C918.395 112.384 914.651 108.704 914.651 103.84C914.651 98.976 918.395 95.296 923.387 95.296C928.347 95.296 932.123 98.976 932.123 103.84C932.123 108.704 928.347 112.384 923.387 112.384ZM923.387 108.928C926.267 108.928 928.411 106.72 928.411 103.84C928.411 100.96 926.267 98.752 923.387 98.752C920.507 98.752 918.331 100.96 918.331 103.84C918.331 106.72 920.507 108.928 923.387 108.928ZM941.378 112.384C937.634 112.384 935.138 109.888 935.138 106.08V95.68H938.722V105.024C938.722 107.36 940.226 108.928 942.53 108.928C944.962 108.928 946.594 107.328 946.594 104.96V95.68H950.178V107.04C950.178 107.968 950.754 108.544 951.682 108.544H952.002V112H950.946C948.802 112 947.426 111.168 946.882 109.632C945.634 111.424 943.746 112.384 941.378 112.384ZM960.116 112.384C956.18 112.384 953.588 110.272 953.588 107.2H957.236C957.236 108.448 958.42 109.28 960.148 109.28C961.748 109.28 962.804 108.544 962.804 107.52C962.804 104.576 953.844 106.208 953.844 100.416C953.844 97.248 956.372 95.296 959.988 95.296C963.7 95.296 966.196 97.312 966.196 100.256H962.548C962.548 99.136 961.492 98.368 959.956 98.368C958.452 98.368 957.46 99.04 957.46 100.032C957.46 102.88 966.452 101.312 966.452 107.136C966.452 110.304 963.924 112.384 960.116 112.384Z" fill="#343539" />
                    <path d="M846.41 146L847.826 141.2H844.85V139.976H848.186L849.506 135.464H846.122V134.24H849.866L851.258 129.44H852.578L851.186 134.24H856.61L858.026 129.44H859.346L857.93 134.24H860.906V135.464H857.594L856.25 139.976H859.658V141.2H855.914L854.498 146H853.178L854.594 141.2H849.146L847.754 146H846.41ZM849.506 139.976H854.954L856.274 135.464H850.826L849.506 139.976ZM864.191 146V129.44H874.247V130.832H865.655V137.12H873.215V138.512H865.655V146H864.191ZM882.557 146.288C878.861 146.288 876.269 142.784 876.269 137.72C876.269 132.656 878.861 129.152 882.557 129.152C886.277 129.152 888.869 132.656 888.869 137.72C888.869 142.784 886.277 146.288 882.557 146.288ZM882.557 144.848C885.365 144.848 887.333 141.92 887.333 137.72C887.333 133.52 885.365 130.592 882.557 130.592C879.773 130.592 877.805 133.52 877.805 137.72C877.805 141.92 879.773 144.848 882.557 144.848ZM892.503 146V129.44H899.631C902.007 129.44 903.783 131.192 903.783 133.544C903.783 135.224 902.799 136.64 901.527 137.216C903.519 137.624 904.887 139.376 904.887 141.536C904.887 144.104 902.967 146 900.375 146H892.503ZM899.319 130.784H893.943V136.76H899.319C900.927 136.76 902.271 135.464 902.271 133.76C902.271 132.056 900.999 130.784 899.319 130.784ZM900.087 138.032H893.943V144.656H900.087C901.959 144.656 903.351 143.216 903.351 141.32C903.351 139.448 901.959 138.032 900.087 138.032ZM912.253 146.288C909.109 146.288 906.709 144.224 906.709 141.512H908.221C908.221 143.432 909.997 144.848 912.253 144.848C914.485 144.848 916.261 143.408 916.261 141.392C916.261 139.496 914.677 138.056 912.493 138.056H910.285V136.832H912.493C914.413 136.832 915.877 135.512 915.877 133.76C915.877 131.912 914.269 130.592 912.253 130.592C910.213 130.592 908.605 131.888 908.605 133.664H907.093C907.093 131.096 909.325 129.152 912.253 129.152C915.133 129.152 917.413 131.072 917.413 133.616C917.413 135.344 916.309 136.784 914.701 137.408C916.597 138.032 917.797 139.664 917.797 141.56C917.797 144.248 915.349 146.288 912.253 146.288ZM925.753 146.288C922.609 146.288 920.209 144.224 920.209 141.512H921.721C921.721 143.432 923.497 144.848 925.753 144.848C927.985 144.848 929.761 143.408 929.761 141.392C929.761 139.496 928.177 138.056 925.993 138.056H923.785V136.832H925.993C927.913 136.832 929.377 135.512 929.377 133.76C929.377 131.912 927.769 130.592 925.753 130.592C923.713 130.592 922.105 131.888 922.105 133.664H920.593C920.593 131.096 922.825 129.152 925.753 129.152C928.633 129.152 930.913 131.072 930.913 133.616C930.913 135.344 929.809 136.784 928.201 137.408C930.097 138.032 931.297 139.664 931.297 141.56C931.297 144.248 928.849 146.288 925.753 146.288ZM934.761 146V129.44H945.177V130.832H936.225V136.976H944.385V138.368H936.225V144.608H945.297V146H934.761Z" fill="#343539" />
                    <path d="M1085.08 49.2288L1061.76 177.024C1056.16 207.725 1079.74 236 1110.95 236H1440L1440 0H1144.11C1115.13 0 1090.29 20.717 1085.08 49.2288Z" fill="#343539" />
                    <path d="M1204.1 93.056C1202.78 93.056 1201.79 92.064 1201.79 90.784C1201.79 89.472 1202.78 88.512 1204.1 88.512C1205.38 88.512 1206.37 89.472 1206.37 90.784C1206.37 92.064 1205.38 93.056 1204.1 93.056ZM1198.72 118.304V114.848H1199.62C1201.34 114.848 1202.3 113.888 1202.3 112.256V95.68H1205.89V112.672C1205.89 116.384 1203.9 118.304 1199.78 118.304H1198.72ZM1217.92 112.384C1212.86 112.384 1209.12 108.704 1209.12 103.84C1209.12 98.976 1212.86 95.296 1217.82 95.296C1222.82 95.296 1226.56 98.976 1226.56 103.872C1226.56 104.32 1226.53 104.8 1226.46 105.216H1212.96C1213.5 107.584 1215.42 109.152 1217.98 109.152C1219.87 109.152 1221.5 108.32 1222.34 107.072H1226.3C1224.99 110.24 1221.79 112.384 1217.92 112.384ZM1217.82 98.528C1215.46 98.528 1213.57 100 1212.99 102.272H1222.72C1222.18 100.032 1220.26 98.528 1217.82 98.528ZM1235.74 112C1232.64 112 1230.56 110.112 1230.56 107.264V98.944H1227.8V95.68H1229.47C1230.3 95.68 1230.75 95.232 1230.75 94.4V91.264H1234.14V95.68H1239.48V98.944H1234.14V106.912C1234.14 108 1234.88 108.704 1236 108.704C1237.12 108.704 1237.85 107.936 1237.85 106.656H1241.05C1241.05 109.92 1239 112 1235.74 112ZM1250.89 112V88.96H1254.48V98.016C1255.85 96.32 1257.84 95.296 1260.24 95.296C1264.81 95.296 1268.27 98.976 1268.27 103.84C1268.27 108.704 1264.81 112.384 1260.24 112.384C1257.84 112.384 1255.85 111.36 1254.48 109.664V112H1250.89ZM1259.53 108.928C1262.41 108.928 1264.56 106.72 1264.56 103.84C1264.56 100.96 1262.41 98.752 1259.53 98.752C1256.65 98.752 1254.48 100.96 1254.48 103.84C1254.48 106.72 1256.65 108.928 1259.53 108.928ZM1276.54 112C1273.28 112 1271.55 110.4 1271.55 107.456V88.96H1275.13V106.656C1275.13 107.84 1275.87 108.544 1277.05 108.544H1278.05V112H1276.54ZM1287.47 112.384C1282.86 112.384 1279.43 108.704 1279.43 103.84C1279.43 98.976 1282.86 95.296 1287.47 95.296C1289.87 95.296 1291.85 96.32 1293.19 98.016V95.68H1296.78V107.04C1296.78 107.968 1297.32 108.544 1298.28 108.544H1298.57V112H1297.55C1295.31 112 1293.9 111.104 1293.42 109.408C1292.04 111.264 1289.96 112.384 1287.47 112.384ZM1288.17 108.928C1291.05 108.928 1293.19 106.72 1293.19 103.84C1293.19 100.96 1291.05 98.752 1288.17 98.752C1285.26 98.752 1283.11 100.96 1283.11 103.84C1283.11 106.72 1285.26 108.928 1288.17 108.928ZM1309.07 112.384C1304.08 112.384 1300.34 108.704 1300.34 103.84C1300.34 98.976 1304.08 95.296 1309.07 95.296C1313.33 95.296 1316.69 97.984 1317.36 101.824H1313.55C1312.98 100 1311.22 98.752 1309.07 98.752C1306.19 98.752 1304.02 100.96 1304.02 103.84C1304.02 106.72 1306.19 108.928 1309.07 108.928C1311.22 108.928 1312.98 107.68 1313.55 105.856H1317.36C1316.69 109.696 1313.33 112.384 1309.07 112.384ZM1320.61 112V88.96H1324.2V103.168L1331.33 95.68H1335.88L1328.87 102.944L1336.13 112H1331.53L1326.37 105.568L1324.2 107.84V112H1320.61Z" fill="#FFFBF2" />
                    <path d="M1220.36 146L1221.77 141.2H1218.8V139.976H1222.13L1223.45 135.464H1220.07V134.24H1223.81L1225.2 129.44H1226.52L1225.13 134.24H1230.56L1231.97 129.44H1233.29L1231.88 134.24H1234.85V135.464H1231.54L1230.2 139.976H1233.6V141.2H1229.86L1228.44 146H1227.12L1228.54 141.2H1223.09L1221.7 146H1220.36ZM1223.45 139.976H1228.9L1230.22 135.464H1224.77L1223.45 139.976ZM1242.79 146.288C1239.65 146.288 1237.25 144.224 1237.25 141.512H1238.76C1238.76 143.432 1240.54 144.848 1242.79 144.848C1245.02 144.848 1246.8 143.408 1246.8 141.392C1246.8 139.496 1245.22 138.056 1243.03 138.056H1240.82V136.832H1243.03C1244.95 136.832 1246.42 135.512 1246.42 133.76C1246.42 131.912 1244.81 130.592 1242.79 130.592C1240.75 130.592 1239.14 131.888 1239.14 133.664H1237.63C1237.63 131.096 1239.86 129.152 1242.79 129.152C1245.67 129.152 1247.95 131.072 1247.95 133.616C1247.95 135.344 1246.85 136.784 1245.24 137.408C1247.14 138.032 1248.34 139.664 1248.34 141.56C1248.34 144.248 1245.89 146.288 1242.79 146.288ZM1250.55 141.944V140.768C1253.74 136.928 1255.57 133.16 1256.02 129.44H1257.56C1257.13 133.088 1255.42 136.784 1252.47 140.552H1259.05V135.128H1260.46V140.552H1262.86V141.944H1260.46V146H1258.98V141.944H1250.55ZM1270.35 146.288C1267.21 146.288 1264.81 144.224 1264.81 141.512H1266.32C1266.32 143.432 1268.1 144.848 1270.35 144.848C1272.59 144.848 1274.36 143.408 1274.36 141.392C1274.36 139.496 1272.78 138.056 1270.59 138.056H1268.39V136.832H1270.59C1272.51 136.832 1273.98 135.512 1273.98 133.76C1273.98 131.912 1272.37 130.592 1270.35 130.592C1268.31 130.592 1266.71 131.888 1266.71 133.664H1265.19C1265.19 131.096 1267.43 129.152 1270.35 129.152C1273.23 129.152 1275.51 131.072 1275.51 133.616C1275.51 135.344 1274.41 136.784 1272.8 137.408C1274.7 138.032 1275.9 139.664 1275.9 141.56C1275.9 144.248 1273.45 146.288 1270.35 146.288ZM1284.45 146.288C1281.48 146.288 1279.17 144.416 1278.79 141.776H1280.32C1280.71 143.576 1282.36 144.848 1284.45 144.848C1286.83 144.848 1288.65 143.168 1288.65 140.96C1288.65 138.728 1286.9 137.048 1284.62 137.048C1283.11 137.048 1281.5 137.792 1280.8 138.824H1279.36L1280.18 129.44H1289.04V130.832H1281.48L1280.88 137.168C1281.69 136.328 1283.25 135.704 1284.76 135.704C1287.79 135.704 1290.19 137.96 1290.19 140.984C1290.19 144.008 1287.69 146.288 1284.45 146.288ZM1298.03 146.288C1294.89 146.288 1292.49 144.224 1292.49 141.512H1294C1294 143.432 1295.78 144.848 1298.03 144.848C1300.27 144.848 1302.04 143.408 1302.04 141.392C1302.04 139.496 1300.46 138.056 1298.27 138.056H1296.07V136.832H1298.27C1300.19 136.832 1301.66 135.512 1301.66 133.76C1301.66 131.912 1300.05 130.592 1298.03 130.592C1295.99 130.592 1294.39 131.888 1294.39 133.664H1292.87C1292.87 131.096 1295.11 129.152 1298.03 129.152C1300.91 129.152 1303.19 131.072 1303.19 133.616C1303.19 135.344 1302.09 136.784 1300.48 137.408C1302.38 138.032 1303.58 139.664 1303.58 141.56C1303.58 144.248 1301.13 146.288 1298.03 146.288ZM1308.41 146.096H1307.45V144.704H1308.41C1312.11 144.704 1315.25 141.752 1315.54 137.384C1314.65 138.8 1312.81 139.736 1310.89 139.736C1307.84 139.736 1305.51 137.504 1305.51 134.528C1305.51 131.456 1308.01 129.152 1311.2 129.152C1314.68 129.152 1317.2 131.864 1317.2 136.352C1317.2 142.112 1313.38 146.096 1308.41 146.096ZM1311.25 138.368C1313.43 138.368 1315.49 136.784 1315.49 135.056C1315.49 133.208 1314.03 130.592 1311.27 130.592C1309.01 130.592 1307.05 132.224 1307.05 134.504C1307.05 136.736 1308.94 138.368 1311.25 138.368Z" fill="#FFFBF2" />
                </svg>
                <div className="flex gap-11 items-center text-6xl">
                    <h1 className="text-[#f0b33e]">typography</h1>
                    <div className="flex items-center gap-9">
                        <p>Red Hat Display</p>
                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                        <p className="font-light">Red Hat Text</p>
                    </div>
                </div>
            </div>
            <div className="relative col-span-full flex gap-24 py-36 pl-24 bg-black/30 border border-white/10 rounded-[30px_30px_0px_0px] custom-scrollbar">
                <div className="flex flex-col gap-3 py-3 max-w-md h-screen top-32 sticky">
                    <h3 className="text-white/40">HiFi Screens</h3>
                    <div className="flex flex-col pt-9 gap-8 border-t border-white/20">
                        <h1 className="font-medium text-[2em]">Product Pages</h1>
                        <p className="">To represent the research I’ve conducted, I created the two following user personas, These user personas highlight the pain points faced by users with other platforms and their desired goals from a competitor.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-24 custom-scrollbar">
                    <img src={COVER_IMAGE}></img>
                    <img src={COVER_IMAGE}></img>
                    <img src={COVER_IMAGE}></img>
                    <img src={COVER_IMAGE}></img>
                </div>
            </div>
        </section>
    )
}

export default Template;