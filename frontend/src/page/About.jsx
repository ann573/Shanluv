import React,{useEffect} from 'react'
import '../styles/about.css'

import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'
import { Container, Col } from 'reactstrap'

import Aos from 'aos'
import 'aos/dist/aos.css'

import productData from "../assets/data/products";
const About = () => {

    window.scrollTo({ top: 0, behavior: 'smooth' })

    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);
  return (
    <>
        <div className="head d-flex justify-content-center ">
            <h1 data-aos='fade'>Shanluv - đem trà Shan đến mọi nhà</h1>
        </div>

        <Container>
        <p className='param-about' data-aos='fade'>Cửa hàng Shanluv là nơi mang lại những trải nghiệm tuyệt vời về trà cho mọi người. Được đặt tên theo loại trà quý giá được trồng trên những ngọn núi cao của Việt Nam, trà Shan tuyết là biểu tượng của sự tinh khiết và sự tôn trọng với thiên nhiên. Chúng tôi 
        tự hào về quy trình thu hoạch và chế biến trà theo cách truyền thống, kết hợp với công nghệ hiện đại để tạo ra những sản phẩm chất lượng cao.</p>
            <h2 data-aos='fade'>I.Thu hoạch Trà Shan Tuyết</h2>
            <p className='param-about' data-aos='fade-'>Trà Shan Tuyết được thu hoạch từ những cây trà cổ thụ mọc tự nhiên trên các ngọn núi cao. Những lá trà được bao phủ bởi một lớp "tuyết" tự nhiên, tạo nên tên gọi đặc trưng. Mỗi mùa trà, chúng tôi chọn những lá trà tốt nhất, đảm bảo rằng chúng được hái vào thời điểm lý tưởng để giữ nguyên hương vị tinh khiết và độ tươi mát. 
                Quy trình thu hoạch thủ công giúp chúng tôi kiểm soát chất lượng một cách chặt chẽ, từ khâu chọn lọc đến khâu đóng gói.</p>
            <div className='d-flex justify-content-center mb-2' data-aos='fade'>
                <img src={about1} alt="" data-aos='fade'/>
            </div>
            <h2>II. Sự Tận Tâm và Chất Lượng</h2>
            <p className='param-about'>Tại <b>Shanluv</b>, chúng tôi tin rằng chất lượng đến từ sự tận tâm. Mỗi bước trong quy trình sản xuất trà được thực hiện với sự chú ý đặc biệt đến chi tiết và truyền thống. Chúng tôi sử dụng phương pháp chế biến trà thủ công, giữ cho các hợp chất có lợi trong trà không bị phá hủy, tạo ra hương vị đậm đà và thanh mát. 
                Sự tận tâm này còn thể hiện trong việc tạo môi trường làm việc tốt cho nhân viên và hỗ trợ cộng đồng nơi chúng tôi hoạt động.</p>
            <h2>III. Chuyển Đổi Trà Truyền Thống Thành Trà Sữa Phù Hợp Với Giới Trẻ</h2>
            <p className='param-about'>Trong khi giữ nguyên giá trị truyền thống, chúng tôi cũng tìm cách thích nghi với nhu cầu hiện đại. Trà sữa đã trở thành một phần không thể thiếu của văn hóa giới trẻ, và chúng tôi đã tạo ra một loạt sản phẩm trà sữa đậm vị trà, dựa trên nền tảng trà Shan tuyết nguyên chất. 
                Sự kết hợp giữa hương vị trà tinh khiết và sự ngọt ngào của sữa đã tạo ra một trải nghiệm độc đáo, phù hợp với sở thích của nhiều người trẻ.</p>
                <div className="product_img d-flex justify-content-center gap-5 ">
                {productData.slice(0,2).map((product) => (
                        <Col lg="5" className="d-flex" key={product.id}>
                            <img src={product.photo} className="img-fluid"/>
                        </Col>
                    ))}
                </div>
            <p className='param-about mt-3'>Các loại trà sữa của chúng tôi được pha chế với các nguyên liệu tự nhiên và đảm bảo không chứa chất bảo quản. 
                Chúng tôi cũng cung cấp nhiều loại topping để bạn có thể tùy chỉnh theo ý thích, từ trân châu, thạch dừa đến các loại trái cây tươi.</p>
            <p className="param-about">Cửa hàng Shanluv là điểm đến cho những ai yêu thích hương vị trà tự nhiên và muốn khám phá những trải nghiệm mới. Chúng tôi tự hào về nguồn gốc trà, sự tận tâm trong sản xuất, và khả năng thích ứng với thị trường hiện đại. Hãy ghé thăm chúng tôi để 
            tận hưởng những ly trà Shan tuyết tinh khiết hoặc những ly trà sữa đậm đà, và cảm nhận sự khác biệt mà chúng tôi mang lại.</p>        
            <img src={about2} className='w-100' />
        </Container>
        
    </>
  )
}

export default About