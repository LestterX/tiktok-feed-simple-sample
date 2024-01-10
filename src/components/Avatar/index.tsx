import { useState } from "react";

interface AvatarProps {
    nickname: string,
    realname: string
}

function Avatar(props: AvatarProps) {
    const [name, setName] = useState('Follow');
    const [btnBgColor, setBntBgColor] = useState('bg-black');
    return (
        <div className="
        avatar_container
        flex
        flex-row
        items-center
        w-full
        ">
            <div className="avatar_photo mr-20">
                <img
                    className="
                    rounded-full
                    hover:scale-x-110
                    hover:scale-y-110
                    animation-delay: 999s;
                    hover: animate-
                    bg-gradient-to-r
                    p-[6px]
                    from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
                    "
                    src="./src/assets/photo.png" alt="Avatar Photo"
                />
            </div>
            <div className="avatar_texts text-center justify-content">
                <div className="text_title">
                    <h1>{props.nickname}</h1>
                </div>
                <div className="text_name mt-3">
                    <h1>{props.realname}</h1>
                </div>
                <div className="text_follow">
                    <button className={"w-80 mt-5 " + btnBgColor} onClick={() => {
                        setName('Following');
                        setBntBgColor('bg-red-600');
                    }
                    }>{name}</button>
                </div>
            </div>
        </div>
    );
}

export default Avatar;