export interface ButtonProps {
    text: string
}
 
const Button: React.FC<ButtonProps> = ({text}) => {
    return ( 
        <div className="rounded-2xl bg-gray-300 text-black px-10 py-5 font-bold cursor-pointer hover:bg-gray-400">
            <p>{text}</p>
        </div>
     );
}
 
export default Button;