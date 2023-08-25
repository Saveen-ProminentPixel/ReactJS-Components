import Button from "../components/Button";
import { GoBell, GoDatabase, GoCloud, GoFileDirectoryFill, GoSignIn } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
    
    };

    return <div>
        <div>
            <Button success rounded onClick={handleClick}>
                <GoBell />
                Click Me!!!
                </Button>
        </div>
        <div>
            <Button danger outline onMouseEnter={handleClick}>
            <GoDatabase />
            Buy Now!!
            </Button>
        </div>
        <div>
            <Button warning onMouseLeave={handleClick}>
            <GoCloud />
            Donot Click
            </Button>
        </div>
        <div>
            <Button secondary outline>
            <GoFileDirectoryFill />
            Add to Cart
            </Button>
        </div>
        <div>
            <Button primary rounded>
            <GoSignIn />
            Sign In
            </Button>
        </div>
        <div>
            <Button secondary rounded>
            Sign Up
            </Button>
        </div>
        <div>
            <Button warning outline>
            Back
            </Button>
        </div>
    </div>
}

export default ButtonPage;