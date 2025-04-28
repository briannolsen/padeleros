import { Badge } from "react-bootstrap";
import { IoCart } from "react-icons/io5";

const CartWidget = () =>{
    return(
        <div>
            <IoCart fontSize={"1.5rem"}/>
            <Badge bg="danger">8</Badge>

        </div>
    )
}
export default CartWidget