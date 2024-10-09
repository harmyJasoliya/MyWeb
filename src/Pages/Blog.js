import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Headslide from '../headslide/Headslide';
import Featured from '../Component/Featured/Featured';



const Blog = () => {
  return (
    <>
       <div className="Brandhead">
        <div className="w-100">
          <Headslide/>
          <Container flude>
            <Container>
              <div className=" d-flex justify-content-center"><h1>All Blogs</h1></div>
            </Container>
          </Container>
          <Featured/>
        </div>
      </div>
    </>
  );
}
export default Blog;