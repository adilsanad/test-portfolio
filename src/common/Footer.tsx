const Footer = ({ id }: { id: string }) => {
    return (
        <footer id={id} className="relative col-span-full gap-24 md:gap-32 flex flex-col w-full items-end px-12 md:px-20 py-15 md:py-20 bg-[#1A1A1A] text-white font-neulisneue overflow-x-hidden">
            <div className="flex gap-8 items-center">
                <a href="mailto:adilsanad059@gmail.com">
                    <svg className="h-6 md:h-8" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.8421 8.02209L20.223 17.4339L4.60398 8.02209V4.25738L20.223 13.6691L35.8421 4.25738M35.8421 0.492676H4.60398C2.43684 0.492676 0.699219 2.16797 0.699219 4.25738V26.8456C0.699219 27.8441 1.11061 28.8016 1.8429 29.5077C2.57518 30.2137 3.56837 30.6103 4.60398 30.6103H35.8421C36.8777 30.6103 37.8709 30.2137 38.6032 29.5077C39.3354 28.8016 39.7468 27.8441 39.7468 26.8456V4.25738C39.7468 2.16797 37.9897 0.492676 35.8421 0.492676Z" fill="white" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/adilsanad/">
                    <svg className="h-6 md:h-8" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5556 0C28.4691 0 29.3452 0.351189 29.9911 0.976311C30.6371 1.60143 31 2.44928 31 3.33333V26.6667C31 27.5507 30.6371 28.3986 29.9911 29.0237C29.3452 29.6488 28.4691 30 27.5556 30H3.44444C2.53092 30 1.65481 29.6488 1.00885 29.0237C0.362896 28.3986 0 27.5507 0 26.6667V3.33333C0 2.44928 0.362896 1.60143 1.00885 0.976311C1.65481 0.351189 2.53092 0 3.44444 0H27.5556ZM26.6944 25.8333V17C26.6944 15.559 26.1029 14.177 25.05 13.1581C23.9971 12.1391 22.569 11.5667 21.08 11.5667C19.6161 11.5667 17.9111 12.4333 17.0844 13.7333V11.8833H12.2794V25.8333H17.0844V17.6167C17.0844 16.3333 18.1522 15.2833 19.4783 15.2833C20.1178 15.2833 20.7311 15.5292 21.1832 15.9668C21.6354 16.4043 21.8894 16.9978 21.8894 17.6167V25.8333H26.6944ZM6.68222 9.26667C7.44958 9.26667 8.18551 8.97167 8.72812 8.44657C9.27072 7.92146 9.57556 7.20927 9.57556 6.46667C9.57556 4.91667 8.28389 3.65 6.68222 3.65C5.9103 3.65 5.16998 3.94675 4.62415 4.47498C4.07831 5.00321 3.77167 5.71964 3.77167 6.46667C3.77167 8.01667 5.08056 9.26667 6.68222 9.26667ZM9.07611 25.8333V11.8833H4.30556V25.8333H9.07611Z" fill="white" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/adilsanad/">
                    <svg className="h-6 md:h-8" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 26.432V0H11.2128C14.0288 0 16.2048 0.610909 17.7408 1.83273C19.2768 3.05455 20.0448 4.80582 20.0448 7.08655C20.0448 8.49842 19.7504 9.63879 19.1616 10.5076C18.5984 11.3765 17.792 12.0281 16.7424 12.4625C16.0442 12.7335 15.2666 12.9443 14.4098 13.0951C14.9916 13.1598 15.5515 13.2476 16.0896 13.3586C17.0368 13.5486 17.856 13.8609 18.5472 14.2953C19.264 14.7297 19.8272 15.3271 20.2368 16.0873C20.672 16.8475 20.8896 17.8386 20.8896 19.0604C20.8896 20.6624 20.5312 22.0064 19.8144 23.0924C19.0976 24.1513 18.0992 24.9522 16.8192 25.4953C15.5648 26.0384 14.1056 26.3506 12.4416 26.432H0ZM3.6864 22.9295H11.7504C13.44 22.9295 14.7584 22.6036 15.7056 21.952C16.6528 21.3004 17.1264 20.2686 17.1264 18.8567C17.1264 17.7707 16.832 16.9562 16.2432 16.4131C15.6544 15.87 14.8864 15.5171 13.9392 15.3542C13.0176 15.1913 12.0576 15.1098 11.0592 15.1098H3.6864V22.9295ZM3.6864 11.648H10.9056C12.5952 11.648 13.9136 11.295 14.8608 10.5891C15.808 9.856 16.2816 8.79709 16.2816 7.41237C16.2816 6.00049 15.808 4.99588 14.8608 4.39855C13.9136 3.80122 12.7104 3.50255 11.2512 3.50255H3.6864V11.648Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.8246 19.8342H41.319C41.1142 21.1646 40.6278 22.3593 39.8598 23.4182C39.0918 24.4771 38.0806 25.3187 36.8262 25.9433C35.5718 26.5678 34.0998 26.88 32.4102 26.88C30.4134 26.88 28.6342 26.432 27.0726 25.536C25.511 24.64 24.2822 23.4046 23.3862 21.8298C22.4902 20.2551 22.0422 18.4223 22.0422 16.3316C22.0422 14.2138 22.4774 12.3675 23.3478 10.7927C24.2182 9.19078 25.4214 7.94182 26.9574 7.04582C28.4934 6.14982 30.247 5.70182 32.2182 5.70182C34.2918 5.70182 36.0326 6.13624 37.4406 7.00509C38.8486 7.87394 39.8854 9.16364 40.551 10.8742C41.2422 12.5576 41.5238 14.6618 41.3958 17.1869H25.6902C25.8182 18.4087 26.1638 19.4947 26.727 20.4451C27.3158 21.3954 28.0838 22.142 29.031 22.6851C30.0038 23.2282 31.1174 23.4996 32.3718 23.4996C33.7798 23.4996 34.9574 23.1602 35.9046 22.4815C36.8518 21.8027 37.4918 20.9202 37.8246 19.8342ZM32.2566 9.04145C30.5926 9.04145 29.2102 9.5166 28.1094 10.4669C27.0086 11.3901 26.279 12.6255 25.9206 14.1731H37.7094C37.607 12.5169 37.0438 11.2543 36.0198 10.3855C34.9958 9.48945 33.7414 9.04145 32.2566 9.04145Z" fill="white" />
                        <path d="M25.7672 3.24965H37.7672V1.24965H25.7672V3.24965Z" fill="white" />
                    </svg>
                </a>
            </div>
            <svg className="absolute max-md:w-32 max-md:-rotate-30 top-20 right-52 md:top-16 md:right-80" width="168" height="132" viewBox="0 0 168 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M166.579 35.1032C168.268 33.6787 168.482 31.1551 167.057 29.4666L143.843 1.95134C142.418 0.262869 139.895 0.0489212 138.206 1.47348C136.518 2.89803 136.304 5.42164 137.728 7.11011L158.363 31.5681L133.905 52.2032C132.217 53.6277 132.003 56.1513 133.428 57.8398C134.852 59.5283 137.376 59.7422 139.064 58.3177L166.579 35.1032ZM9.11968 58.7129L12.8988 60.0236L9.11968 58.7129ZM12.9968 130.005C8.98457 114.388 4.1611 85.2162 12.8988 60.0236L5.34053 57.4021C-4.19329 84.89 1.13402 115.981 5.24839 131.995L12.9968 130.005ZM12.8988 60.0236C18.0684 45.1187 26.7963 36.0994 37.6249 30.7851C48.6064 25.3958 62.0447 23.6765 76.7271 24.0487C91.3881 24.4203 106.928 26.8617 121.966 29.5098C136.868 32.1339 151.436 34.9952 163.662 36.0317L164.338 28.0603C152.58 27.0634 138.548 24.3067 123.354 21.631C108.295 18.9794 92.2408 16.4394 76.9298 16.0512C61.6401 15.6636 46.7282 17.4061 34.1004 23.6033C21.3198 29.8756 11.1793 40.5677 5.34053 57.4021L12.8988 60.0236Z" fill="#4F78FF" />
            </svg>
            <h1 className="text-right text-white/20 tracking-tighter font-neuliscursive text-8xl md:text-[180px] font-semibold -mr-12 md:-mr-20">reach out!</h1>
            <div className="flex max-md:flex-col gap-1 md:gap-4 md:items-end md:justify-between">
                <p className=" font-neuliscursive font-medium  text-xl text-right tracking-tighter">made with  <span className="text-[rgb(70,57,255)] text-xl px-1 drop-shadow-[0px_0px_24px_rgba(57,43,255,1)]">{`<  >`}</span></p>
                <p className=" max-md:text-right max-md:text-lg text-xl text-white/30 tracking-tighter ">© 2025 adil </p>
            </div>
        </footer>
    );
}

export default Footer;