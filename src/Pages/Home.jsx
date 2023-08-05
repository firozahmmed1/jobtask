import { Container } from "react-bootstrap";
import Step from "./Home/Step";
import Companies from "./Home/Companies";
import Footer from "../Shared/Footer";

const Home = () => {
    return (
        <div>
            <div style={{ height: '500px' }} className="mb-5">
                <Container>
                    <div className="d-flex align-items-center justify-content-center">
                        <h1 className="text-center mt-5 pt-5 h-50 fw-bold">Find your next top tech job in 1 week.</h1>
                    </div>
                    <p className="text-center fs-4 fw-semibold mt-4"><span className="bg-warning fw-bold">Are you a top 2%</span> Software Engineer, Product Manager or Data Scientist?
                        <br />  Let leading Indian technology <span className="bg-warning fw-bold">companies compete to hire you.</span></p>

                    <div className="d-flex align-items-center justify-content-center">
                        <button type="button" className="btn btn-outline-info fw-bold mt-4">APPLY TO JOIN</button>
                    </div>
                    <small className="text-center d-block mt-2">100% free. It takes only 5 minutes</small>
                </Container>
            </div>
            <Step></Step>
            <Companies></Companies>
            <Footer></Footer>
        </div>
    );
};

export default Home;