import DivAnimation from './DivAnimation';
import { HashLink } from 'react-router-hash-link';

interface DesignBriefItem {
    title: string;
    description: string;
    hashLink?: string;
}

interface DesignBriefProps {
    items: DesignBriefItem[];
}

const LinkIcon = () => (
    <svg className="hover:opacity-70 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
            <path d="M15.4422 0H10.4223C10.1142 0 9.86448 0.249717 9.86448 0.557758C9.86448 0.865799 10.1142 1.11552 10.4223 1.11552H14.0957L3.89237 11.3185L4.68118 12.1073L14.8845 1.90431V5.57758C14.8845 5.88562 15.1341 6.13534 15.4422 6.13534C15.7502 6.13534 16 5.88562 16 5.57758V0.557758C16 0.249716 15.7502 0 15.4422 0Z" fill="#4d4541" />
            <path d="M1.11554 5.4026C1.11554 4.47847 1.86471 3.72933 2.78886 3.72933H6.69325V2.61381H2.78886C1.24862 2.61381 0 3.8624 0 5.4026V13.2112C0 14.7514 1.24862 16 2.78886 16H10.5977C12.1379 16 13.3865 14.7514 13.3865 13.2112V9.3069H12.271V13.2112C12.271 14.1353 11.5218 14.8845 10.5977 14.8845H2.78886C1.86471 14.8845 1.11554 14.1353 1.11554 13.2112V5.4026Z" fill="#4d4541" />
        </g>
    </svg>
);

const DesignBrief = ({ items }: DesignBriefProps) => {
    return (
        <DivAnimation className="col-span-full flex flex-col gap-9 bg-primary-200 md:px-25 max-md:pb-0 py-12 max-md:rounded-[15px]">
            <h1 className="px-7 text-[2em] font-bold text-primary-500">design brief</h1>
            <div className="flex max-md:flex-col gap-12 bg-primary-200 rounded-[15px] p-10 md:p-16">
                {items.map((item, index) => (
                    <DivAnimation key={item.title} className="flex flex-col gap-6 w-full pb-9 border-b border-neutral-100">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-neutral-900/50 text-[2em]">{String(index + 1).padStart(2, '0')}</h2>
                            {item.hashLink ? (
                                <HashLink to={item.hashLink} smooth className="flex gap-4 cursor-pointer">
                                    <h1 className="text-[2em] text-neutral-900 hover:text-neutral-900/70 transition-all">{item.title}</h1>
                                    <LinkIcon />
                                </HashLink>
                            ) : (
                                <h1 className="text-[2em] text-neutral-900">{item.title}</h1>
                            )}
                        </div>
                        <p className="w-full">{item.description}</p>
                    </DivAnimation>
                ))}
            </div>
        </DivAnimation>
    );
};

export default DesignBrief;
