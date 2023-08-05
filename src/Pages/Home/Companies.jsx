import { Container, Image } from "react-bootstrap";
import bg from '../../assets/backImg/TTF_c3.jpg'

const Companies = () => {
    return (
        <Container>
            <div className="mt-5">
                <h4 className="text-center pt-5">LEADING COMPANIES BUILD TEAMS ON TOPHIRE</h4>
                
                <div className="d-flex justify-content-center align-items-center">
                    <Image className="w-100" src={bg}></Image>
                </div>
            </div>
        </Container>
    );
};

export default Companies;