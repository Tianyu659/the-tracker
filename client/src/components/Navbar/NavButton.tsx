interface PropsInterface {
    title: string;
    customFunc: () => void;
    icon: JSX.Element;
    color: string;
    dotColor: string;
}

const NavButton:React.FC<PropsInterface> = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray" >
            <span style={{ background:dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
            {icon}
        </button>
    )
}

export default NavButton