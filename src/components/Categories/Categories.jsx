import React from 'react'
import Header from '../../util/SectioonHeader/Header';

import {
  CategoriesBoxContainer,
  CategoriesBox,
  CategoriesImageSubText,
  CategoriesImageText,
  CategoriesImage,
} from "./CategoriesStyle";

const Categories = () => {
  return (
    <section id="categories">
      <Header subText="Product" text="Categories" />

      <CategoriesBoxContainer>
        <CategoriesBox>
          <CategoriesImage src="assets/cat-1.png" alt="" />
          <CategoriesImageText>vegitables</CategoriesImageText>
          <CategoriesImageSubText>upto 45% off</CategoriesImageSubText>
          <a href="#" class="btn">
            shop now
          </a>
        </CategoriesBox>

        <CategoriesBox>
          <CategoriesImage src="assets/cat-2.png" alt="" />
          <CategoriesImageText>fresh fruits</CategoriesImageText>
          <CategoriesImageSubText>upto 45% off</CategoriesImageSubText>
          <a href="#" class="btn">
            shop now
          </a>
        </CategoriesBox>

        <CategoriesBox>
          <CategoriesImage src="assets/cat-3.png" alt="" />
          <CategoriesImageText>dairy products</CategoriesImageText>
          <CategoriesImageSubText>upto 45% off</CategoriesImageSubText>
          <a href="#" class="btn">
            shop now
          </a>
        </CategoriesBox>

        <CategoriesBox>
          <CategoriesImage src="assets/cat-4.png" alt="" />
          <CategoriesImageText>fresh meat</CategoriesImageText>
          <CategoriesImageSubText>upto 45% off</CategoriesImageSubText>
          <a href="#" class="btn">
            shop now
          </a>
        </CategoriesBox>
      </CategoriesBoxContainer>
    </section>
  );
}

export default Categories