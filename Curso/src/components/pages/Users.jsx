import { useNavigate } from "react-router-dom";
export default function Users(){
    const navigate = useNavigate();

    function handleCLick(){
        navigate('/');
    }

    return(
        <section>
            <h1>Voltar para a <button onClick={handleCLick}>Home</button></h1>
            <h1>Users</h1>
        </section>
    )
}