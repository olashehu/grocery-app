

import Header from "../../util/SectioonHeader/Header";
import {
  BlogBoxContainer,
  BlogBox,
  BlogImage,
  BlogContent,
  BlogText,
  BlogHeader,
  BlogIconContainer,
} from "./Blog";

const Blog = () => {
  return (
    <section class="blogs" id="blogs">
      <Header text="Blogs" subText="Our" />

      <BlogBoxContainer>
        <BlogBox>
          <BlogImage src="assets/blog-1.jpg" alt="" />
          <BlogContent>
            <BlogIconContainer>
              <a href="#">
                <i className="fas fa-user"></i> by user{" "}
              </a>
              <a href="#">
                <i className="fas fa-calendar"></i> 1st may, 2021
              </a>
            </BlogIconContainer>
            <BlogHeader>fresh and organic vegitables and fruits</BlogHeader>
            <BlogText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.
            </BlogText>
            <a href="#" className="btn">
              read more
            </a>
          </BlogContent>
        </BlogBox>

        <BlogBox>
          <BlogImage src="assets/blog-2.jpg" alt="" />
          <BlogContent>
            <BlogIconContainer>
              <a href="#">
                {" "}
                <i className="fas fa-user"></i> by user{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-calendar"></i> 1st may, 2021
              </a>
            </BlogIconContainer>
            <BlogHeader>fresh and organic vegitables and fruits</BlogHeader>
            <BlogText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.
            </BlogText>
            <a href="#" className="btn">
              read more
            </a>
          </BlogContent>
        </BlogBox>

        <BlogBox>
          <BlogImage src="assets/blog-3.jpg" alt="" />
          <BlogContent>
            <BlogIconContainer>
              <a href="#">
                <i className="fas fa-user"></i> by user
              </a>
              <a href="#">
                <i className="fas fa-calendar"></i> 1st may, 2021
              </a>
            </BlogIconContainer>
            <BlogHeader>fresh and organic vegitables and fruits</BlogHeader>
            <BlogText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.
            </BlogText>
            <a href="#" className="btn">
              read more
            </a>
          </BlogContent>
        </BlogBox>
      </BlogBoxContainer>
    </section>
  );
};

export default Blog;
