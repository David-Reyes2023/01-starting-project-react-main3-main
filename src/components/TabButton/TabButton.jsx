export default function TabButton({children, handleClick}) {

    return (
            <button onClick={handleClick}>{children}</button>
            
       );

}